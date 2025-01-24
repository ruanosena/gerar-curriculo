import ResumePreview from "@/components/ResumePreview";
import { ResumeValues } from "@/lib/validation";
import ColorPicker from "./ColorPicker";
import BorderStyleButton from "./BorderStyleButton";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ResumePreviewSectionProps extends HTMLAttributes<HTMLDivElement> {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

export default function ResumePreviewSection({
  resumeData,
  setResumeData,
  className,
  ...props
}: ResumePreviewSectionProps) {
  return (
    <div
      className={cn("group relative hidden w-1/2 md:flex", className)}
      {...props}
    >
      <div className="absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 xl:opacity-100">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({
              ...resumeData,
              colorHex: color.hex,
            })
          }
        />
        <BorderStyleButton
          borderStyle={resumeData.borderStyle}
          onChange={(borderStyle) =>
            setResumeData({
              ...resumeData,
              borderStyle,
            })
          }
        />
      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <ResumePreview
          resumeData={resumeData}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
}
