import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperieceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "Informações gerais",
    component: GeneralInfoForm,
    key: "informacoes-gerais",
  },
  {
    title: "Informações pessoais",
    component: PersonalInfoForm,
    key: "informacoes-pessoais",
  },
  {
    title: "Experiência profissional",
    component: WorkExperienceForm,
    key: "experiencia-profissional",
  },
  {
    title: "Formação",
    component: EducationForm,
    key: "formacao",
  },
  {
    title: "Competências",
    component: SkillsForm,
    key: "competencia",
  },
  {
    title: "Resumo",
    component: SummaryForm,
    key: "resumo",
  },
];
