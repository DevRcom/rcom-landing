import type { Metadata } from "next";
import "./globals.css";

const siteName = "Rcom Consulting";
const siteUrl = "https://rcom-landing.vercel.app"; // TROQUE quando tiver domínio
const siteDescription =
  "Consultoria estratégica em tecnologia para pequenas e médias empresas na Grande São Paulo (Zona Oeste, Barueri e Osasco). Infraestrutura, cloud, segurança, automação e transformação digital com execução prática.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Consultoria Estratégica em Tecnologia`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  // ✅ Keywords estratégicas (do jeito certo: poucas, objetivas, sem stuffing)
  keywords: [

  "consultoria em TI",
  "infraestrutura empresarial",
  "suporte TI PME",
  "transformação digital empresas",
  "cloud e segurança",
  "consultoria tecnologia São Paulo",
  "consultoria TI Barueri",
  "consultoria TI Osasco",
  "suporte TI Zona Oeste SP",
  ],

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

  // ✅ Open Graph (WhatsApp/LinkedIn)
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Consultoria Estratégica em Tecnologia`,
    description: siteDescription,
    siteName,
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Consultoria Estratégica em Tecnologia`,
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Consultoria Estratégica em Tecnologia`,
    description: siteDescription,
    images: ["/og.png"],
  },

  // ✅ Acabamento
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Ajuda SEO local/credibilidade para alguns crawlers
  applicationName: siteName,
  category: "technology",

],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
