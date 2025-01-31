import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-prose space-y-6 p-3 py-6">
      <h1 className="text-center text-2xl font-bold">Termos de Serviço</h1>
      <p className="text-center text-sm text-muted-foreground">
        Data de vigência: 31 de janeiro de 2024
      </p>
      <p>
        Bem-vindo ao Gerar Currículo. Estes Termos de Serviço
        (&quot;Termos&quot;) regem o uso do nosso site e serviços, incluindo
        quaisquer planos de assinatura pagos. Ao acessar ou usar o Gerar
        Currículo (&quot;o Serviço&quot;), você concorda em ficar vinculado a
        estes Termos. Se você não concordar com estes Termos, não use o Serviço.
      </p>
      <h2 className="text-xl font-semibold">1. Visão geral</h2>
      <p>
        Gerar Currículo é uma plataforma SaaS que fornece ferramentas de
        construção de currículos. Oferecemos um plano de assinatura gratuito e
        pago (&quot;Plano Pago&quot;). Os pagamentos do Plano Pago são
        processados ​​pelo Stripe, nosso provedor de pagamento terceirizado.
      </p>
      <h2 className="text-xl font-semibold">2. Elegibilidade</h2>
      <p>
        Você deve ter pelo menos 18 anos e ser capaz de entrar em contratos
        legalmente vinculativos para usar este Serviço. Ao acessar o Serviço,
        você confirma que atende a este requisito de elegibilidade.
      </p>
      <h2 className="text-xl font-semibold">3. Registro de conta</h2>
      <p>
        Para acessar alguns recursos do Serviço, incluindo o Plano Pago, você
        deve criar uma conta. Ao se registrar, você concorda em fornecer
        informações precisas e atuais. Você é responsável por manter a segurança
        de sua conta e senha. Não somos responsáveis ​​por nenhuma perda ou dano
        resultante de acesso não autorizado à sua conta.
      </p>
      <h2 className="text-xl font-semibold">4. Nível gratuito</h2>
      <p>
        Oferecemos um nível gratuito do Serviço que inclui acesso limitado a
        certos recursos. Enquanto estiver no nível gratuito, você pode criar
        currículos com funcionalidade básica. Alguns recursos e modelos
        avançados podem estar disponíveis apenas para assinantes do Plano Pago.
      </p>
      <h2 className="text-xl font-semibold">5. Plano de assinatura paga</h2>
      <p>
        Se você escolher fazer upgrade para um Plano Pago, será necessário
        fornecer detalhes de pagamento via Stripe. Todos os pagamentos são
        processados ​​com segurança pelo Stripe de acordo com seus termos e
        política de privacidade. Ao assinar, você concorda com os seguintes
        termos:
      </p>
      <ul className="list-inside list-disc">
        <li>
          <strong>Taxas de assinatura:</strong> as taxas para planos pagos são
          cobradas em uma base recorrente (mensal ou anual) dependendo do plano
          de assinatura que você selecionar. Os preços podem variar dependendo
          da sua localização e estão sujeitos a alterações com aviso prévio.
        </li>
        <li>
          <strong>Método de pagamento:</strong> Você deve fornecer um método de
          pagamento válido (cartão de crédito, cartão de débito, etc.) para
          assinar um Plano Pago. Sua assinatura será renovada automaticamente, a
          menos que você cancele antes da data de renovação.
        </li>
        <li>
          <strong>Política de Reembolso:</strong> Gerar Currículo não oferece
          reembolsos para quaisquer pagamentos já processados. No entanto, você
          pode cancelar sua assinatura a qualquer momento, e você continuará a
          ter acesso aos recursos do Plano Pago até o final do seu período de
          cobrança atual.
        </li>
      </ul>
      <h2 className="text-xl font-semibold">6. Cancelamento da Assinatura</h2>
      <p>
        Você pode cancelar sua assinatura a qualquer momento acessando sua conta
        e seguindo o processo de cancelamento. O cancelamento entrará em vigor
        no final do ciclo de cobrança atual, e você não será cobrado mais.
      </p>
      <h2 className="text-xl font-semibold">
        7. Alterações nos serviços e preços
      </h2>
      <p>
        Reservamo-nos o direito de modificar ou descontinuar o Serviço (ou
        qualquer parte dele) a qualquer momento, com ou sem aviso prévio. Também
        podemos ajustar os preços para o Plano Pago; no entanto, quaisquer
        alterações de preço não afetarão seu período de assinatura atual e serão
        comunicadas antes de entrarem em vigor nas renovações.
      </p>
      <h2 className="text-xl font-semibold">8. Licença para usar o serviço</h2>
      <p>
        Gerar Currículo concede a você uma licença limitada, não exclusiva, não
        transferível e revogável para usar o Serviço para uso pessoal ou
        profissional de acordo com estes Termos. Você não pode:
      </p>
      <ul className="list-inside list-disc">
        <li>Copiar, modificar ou distribuir qualquer parte do Serviço;</li>
        <li>Usar o Serviço para construir um produto concorrente;</li>
        <li>
          Acessar ou tentar acessar o Serviço por qualquer meio que não seja
          através das interfaces fornecidas.
        </li>
      </ul>
      <h2 className="text-xl font-semibold">9. Propriedade Intelectual</h2>
      <p>
        Todo o conteúdo, marcas registradas, logotipos e propriedade intelectual
        relacionados ao Gerar Currículo são de propriedade do Gerar Currículo ou
        de seus licenciadores. Você concorda em não infringir esses direitos.
      </p>
      <h2 className="text-xl font-semibold">10. Conteúdo do Usuário</h2>
      <p>
        Ao usar o Serviço, você concede ao Gerar Currículo uma licença não
        exclusiva, mundial e livre de royalties para usar, modificar e exibir
        qualquer conteúdo que você criar usando a plataforma (como currículos)
        exclusivamente para o propósito de fornecer o Serviço. Você retém toda a
        propriedade do seu conteúdo.
      </p>
      <h2 className="text-xl font-semibold">11. Política de Privacidade</h2>
      <p>
        Sua privacidade é importante para nós. Revise nossa Política de
        Privacidade [link] para entender como coletamos, usamos e protegemos
        suas informações pessoais.
      </p>
      <h2 className="text-xl font-semibold">12. Serviços de Terceiros</h2>
      <p>
        O Serviço pode conter links ou integrações para sites ou serviços de
        terceiros (por exemplo, Stripe para pagamentos). A Gerar Currículo não é
        responsável pelo conteúdo ou práticas de quaisquer sites ou serviços de
        terceiros.
      </p>
      <h2 className="text-xl font-semibold">13. Isenção de Garantias</h2>
      <p>
        O Serviço é fornecido &quot;como está&quot; e &quot;conforme
        disponível&quot;. A Gerar Currículo não oferece garantias, expressas ou
        implícitas, em relação ao Serviço, incluindo, mas não se limitando à
        precisão dos resultados do currículo, à adequação dos currículos para
        candidaturas a empregos ou à disponibilidade ininterrupta do Serviço.
      </p>
      <h2 className="text-xl font-semibold">
        14. Limitação de Responsabilidade
      </h2>
      <p>
        Na extensão máxima permitida por lei, a Gerar Currículo não será
        responsável por quaisquer danos indiretos, incidentais, consequenciais
        ou punitivos, incluindo perda de lucros, dados ou oportunidades de
        negócios, decorrentes de ou relacionados ao seu uso do Serviço.
      </p>
      <h2 className="text-xl font-semibold">15. Lei Aplicável</h2>
      <p>
        Estes Termos são regidos e interpretados de acordo com as leis de
        [Inserir Jurisdição], sem levar em conta suas disposições de conflito de
        leis. Quaisquer disputas decorrentes destes Termos estarão sujeitas à
        jurisdição exclusiva dos tribunais localizados em [Inserir Local].
      </p>
      <h2 className="text-xl font-semibold">16. Alterações nos Termos</h2>
      <p>
        Podemos atualizar estes Termos de tempos em tempos. Quaisquer alterações
        serão publicadas nesta página, e a &quot;Data Efetiva&quot; será
        atualizado de acordo. Seu uso contínuo do Serviço após as alterações
        entrarem em vigor constituirá sua aceitação dos novos Termos.
      </p>
      <h2 className="text-xl font-semibold">17. Entre em contato conosco</h2>
      <p>
        Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco
        no e-mail: ruosena@hotmail.com.
      </p>
      <p>
        Ao usar o Gerar Currículo, você reconhece que leu, entendeu e concorda
        com estes Termos de Serviço.
      </p>
    </main>
  );
}
