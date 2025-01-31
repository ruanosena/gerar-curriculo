"use server";

import { env } from "@/env";
import stripe from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";

export async function createCheckoutSession(priceId: string) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Não autorizado");
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    success_url: `${env.NEXT_PUBLIC_BASE_URL}/cobranca/sucesso`,
    cancel_url: `${env.NEXT_PUBLIC_BASE_URL}/cobranca`,
    customer_email: user.emailAddresses[0].emailAddress,
    subscription_data: {
      metadata: {
        userId: user.id,
      },
    },
    custom_text: {
      terms_of_service_acceptance: {
        message: `Eu li e concordo com os [termos de serviço](${env.NEXT_PUBLIC_BASE_URL}/termos) do Gerar Currículo.`,
      },
    },
    consent_collection: {
      terms_of_service: "required",
    },
  });

  if (!session.url) {
    throw new Error("Falha ao criar sessão de finalização de compra");
  }

  return session.url;
}
