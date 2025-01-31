"use client";

import usePremiumModal from "@/hooks/usePremiumModal";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const premiumFeatures = ["Currículos infinitos", "Personalizações de design"];

export default function PremiumModal() {
  const { open, setOpen } = usePremiumModal();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Gerar Currículos Premium</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p>Obtenha uma assinatura premium para desbloquear mais recursos.</p>

          <div className="flex flex-col space-y-5">
            <h3 className="text-center text-lg font-bold">Premium</h3>
            <ul className="list-inside space-y-2">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="premium">Obtenha Premium</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
