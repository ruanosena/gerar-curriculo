import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s - IA Criador de Currículos",
		absolute: "IA Criador de Currículos",
	},
	description:
		"Crie currículos perfeitos em minutos com IA-Currículo. Nosso gerador de currículos utiliza inteligência artificial para criar documentos personalizados e otimizados para cada vaga. Economize tempo e destaque-se na sua busca por emprego.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
