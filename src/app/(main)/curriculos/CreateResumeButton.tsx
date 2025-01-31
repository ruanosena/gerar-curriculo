"use client";

import usePremiumModal from "@/hooks/usePremiumModal";
import Link from "next/link";
import { PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreateResumeButtonProps {
  canCreate: boolean;
}

export default function CreateResumeButton({
  canCreate,
}: CreateResumeButtonProps) {
  const premiumModal = usePremiumModal();

  if (canCreate) {
    return (
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusSquare />
          Novo currículo
        </Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={() => premiumModal.setOpen(true)}
      className="mx-auto flex w-fit gap-2"
    >
      <PlusSquare />
      Novo currículo
    </Button>
  );
}
