import type { Metadata } from "next";
import "./globals.css";

const siteName = "Rcom Consulting";
const siteDescription =
  "Consultoria estratégica em tecnologia para pequenas e médias empresas. Infraestrutura, cloud, segurança, automação e transformação digital com execução prática.";
const siteUrl = "https://rcom-landing.vercel.app"; // <-- troque quando tiver domínio

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Consultoria Estratégica em Tecnologia`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Consultoria Estratégica em Tecnologia`,
    description: siteDescription,
    siteName,
    locale: "pt_BR",
    images: [
      {
        url: "/og.png", // vamos criar no passo 4
        width: 1200,
        height: 630,
        alt: `${siteName} - Consultoria Estratégica em Tecnologia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Consultoria Estratégica em Tecnologia`,
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
