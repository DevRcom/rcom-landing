import { Logo } from "@/components/Logo";
import { Section } from "@/components/Section";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const WHATSAPP_PHONE_E164 = "5511914976925"; // <-- TROQUE para seu número (DDI+DDD+numero)

function Nav() {
  const items = [
    { href: "#servicos", label: "Serviços" },
	{ href: "#segmentos", label: "Segmentos" }, // ← NOVO
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#contato", label: "Contato" },
	{ href: "/diagnostico", label: "Diagnóstico" },
  ];
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rcom Consulting",
    url: "https://rcom-landing.vercel.app",
    areaServed: "BR",
    description:
      "Consultoria estratégica em tecnologia para pequenas e médias empresas: infraestrutura, cloud, segurança, automação e transformação digital.",
    sameAs: [],
    telephone: "+55 11 91497-6925",
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <a href="#" className="hover:opacity-90">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-slate-900">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Solicitar diagnóstico
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE_E164.replace(/\D/g, "")}?text=${encodeURIComponent(
              "Olá! Quero falar com um especialista da Rcom Consulting."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}


export default function Page() {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rcom Consulting",
  url: "https://rcom-landing.vercel.app",
  telephone: "+55 11 91497-6925",
  areaServed: [
    "Barueri",
    "Osasco",
    "Zona Oeste São Paulo",
    "Grande São Paulo"
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -23.5329,
      longitude: -46.7917
    },
    geoRadius: 25000
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Consultoria em TI"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Infraestrutura Empresarial"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud e Segurança"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Transformação Digital"
      }
    }
  ],
  description:
    "Consultoria estratégica em tecnologia para pequenas e médias empresas na Grande São Paulo (Zona Oeste, Barueri e Osasco)."
};


  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <WhatsAppFloat phoneE164={WHATSAPP_PHONE_E164} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700">
                Consultoria estratégica acessível para PMEs
              </div>

				<h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
					Consultoria em TI para PMEs: tecnologia estratégica para crescer com segurança
				</h1>

				<p className="mt-5 text-slate-700 leading-relaxed">
					 A Rcom Consulting apoia pequenas e médias empresas com consultoria em TI, organizando infraestrutura empresarial,
					segurança e cloud para reduzir riscos operacionais e preparar o ambiente para o crescimento sustentável.
					Atendemos a Grande São Paulo com foco na Zona Oeste, Barueri e Osasco, além de suporte remoto conforme a necessidade.
			   </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Levamos para o universo PME uma abordagem estruturada, prática e orientada a resultados — com suporte de especialistas parceiros
                quando necessário para garantir qualidade e escala nas entregas.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contato"
                  className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Solicitar Diagnóstico Estratégico
                </a>
                <a
                  href="#servicos"
                  className="inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-semibold text-slate-900">Diagnóstico claro</div>
                  <div className="mt-1">prioridades e plano de ação</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-semibold text-slate-900">Evolução contínua</div>
                  <div className="mt-1">previsibilidade e segurança</div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">O que você ganha com TI estratégica</div>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Menos paradas e emergências</li>
                <li>• Segurança e continuidade operacional</li>
                <li>• Custos previsíveis e controle do ambiente</li>
                <li>• Infraestrutura preparada para crescimento</li>
                <li>• Processos mais rápidos e organizados</li>
              </ul>

              <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                <div className="text-sm font-semibold text-blue-900">Comece com um diagnóstico</div>
                <p className="mt-1 text-sm text-blue-900/80">
                  Em poucos passos você entende onde está, quais são os riscos e qual o melhor caminho para evoluir.
                </p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex w-full justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Quero meu diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
	  
	  
	
	        {/* BANNER PREMIUM */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                  Posicionamento consultivo • Execução prática • Escala com parceiros
                </div>
                <h2 className="mt-3 text-xl md:text-2xl font-semibold text-slate-900">
                  Visão de consultoria, entrega de operação.
                </h2>
                <p className="mt-2 text-slate-600">
                  A Rcom Consulting leva práticas e padrões de ambientes corporativos para PMEs, com um modelo consultivo que
                  organiza a tecnologia e sustenta o crescimento. Quando necessário, acionamos especialistas parceiros para ampliar
                  a capacidade de entrega mantendo qualidade e agilidade.
                </p>
              </div>
			    <div className="mt-4 text-sm text-slate-600">
				<span className="font-semibold text-slate-900">Área de atendimento:</span>{" "}
				Grande São Paulo (Zona Oeste • Barueri • Osasco) e remoto.
				</div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contato"
                  className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href="#diferenciais"
                  className="inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Ver diferenciais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SERVIÇOS */}
      <Section
        id="servicos"
        title="Como podemos apoiar sua empresa"
        subtitle="Serviços com linguagem simples, visão estratégica e execução prática — sob medida para a realidade das PMEs."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="Planejamento e Consultoria Estratégica em TI"
            text="Analisamos o cenário atual e definimos um plano tecnológico alinhado aos objetivos do negócio, com prioridades claras, riscos mapeados e recomendações práticas."
          />
          <Card
            title="Infraestrutura, Cloud e Segurança"
            text="Projetamos e estruturamos servidores, redes, backup, firewall e soluções em nuvem para garantir estabilidade, proteção de dados e continuidade operacional."
          />
          <Card
            title="Transformação Digital e Automação"
            text="Apoiamos a digitalização de processos, organização documental e automações que reduzem retrabalho e aumentam eficiência operacional."
          />
          <Card
            title="Gestão Tecnológica Contínua"
            text="Acompanhamento consultivo para manter o ambiente atualizado, reduzir riscos, melhorar performance e garantir previsibilidade nos custos de TI."
          />
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section
        title="Benefícios diretos para o seu negócio"
        subtitle="O foco é transformar a tecnologia em um ativo estratégico — e não apenas em suporte reativo."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Redução de paradas e incidentes críticos",
            "Tecnologia organizada e escalável",
            "Mais segurança para dados e operações",
            "Custos tecnológicos mais previsíveis",
            "Processos internos mais rápidos e eficientes",
            "Decisões baseadas em diagnóstico e prioridade",
          ].map((b) => (
            <div key={b} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-medium text-slate-900">{b}</div>
            </div>
          ))}
        </div>
      </Section>
	        {/* SEGMENTOS ATENDIDOS */}
      <Section
         id="segmentos"
		title="Segmentos atendidos"
        subtitle="Atuamos com empresas de pequeno e médio porte que precisam de estrutura, segurança e evolução tecnológica — com foco no que gera resultado."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Indústrias e operações",
              d: "Ambientes que exigem estabilidade, continuidade operacional e controle de infraestrutura.",
            },
            {
              t: "Logística e transporte",
              d: "Tecnologia para suportar operação 24/7, conectividade, disponibilidade e segurança.",
            },
            {
              t: "Escritórios e serviços",
              d: "Padronização, segurança, backup e organização de TI para produtividade e previsibilidade.",
            },
            {
              t: "Saúde e clínicas",
              d: "Boas práticas de segurança, acesso, backups e continuidade para rotinas críticas.",
            },
            {
              t: "Construção e campo",
              d: "Infra e suporte para operação distribuída, conectividade e rotinas fora do escritório.",
            },
            {
              t: "Empresas com alto volume documental",
              d: "Organização digital, processos e automação para reduzir retrabalho e ganho de eficiência.",
            },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{s.t}</div>
              <p className="mt-2 text-slate-600">{s.d}</p>
              <div className="mt-4 text-sm">
                <a href="#contato" className="font-semibold text-blue-700 hover:text-blue-800">
                  Solicitar diagnóstico →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="font-semibold text-slate-900">Não viu seu segmento aqui?</div>
          <p className="mt-2 text-slate-600">
            Sem problema. O diagnóstico avalia o cenário atual e define um plano de evolução adequado ao seu tipo de operação,
            tamanho e prioridades.
          </p>
        </div>
      </Section>


      {/* DIFERENCIAIS */}
      <Section
        id="diferenciais"
        title="Nosso diferencial"
        subtitle="Experiência corporativa aplicada ao mundo PME, com execução prática e escala por meio de parcerias técnicas."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Visão estratégica + execução prática</h3>
            <p className="mt-2 text-slate-600">
              Atuamos com um modelo consultivo que organiza o ambiente e sustenta a evolução. Você entende o “porquê”, o “como” e o “quando”.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Escalabilidade com parceiros</h3>
            <p className="mt-2 text-slate-600">
              Quando necessário, acionamos especialistas terceirizados para ampliar capacidade, acelerar entregas e manter o padrão de qualidade.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Segurança e continuidade como prioridade</h3>
            <p className="mt-2 text-slate-600">
              Reduzimos riscos operacionais com boas práticas de infraestrutura, backup, rede e controle de acesso.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Transformação digital sem complicação</h3>
            <p className="mt-2 text-slate-600">
              Digitalização e automação com foco em eficiência e resultado, respeitando o ritmo e o orçamento da PME.
            </p>
          </div>
        </div>
      </Section>

      {/* METODOLOGIA */}
      <Section
        id="metodologia"
        title="Nossa metodologia"
        subtitle="Um processo claro do diagnóstico à evolução contínua, com governança e previsibilidade."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "Diagnóstico Estratégico", d: "Entendimento do cenário, desafios e oportunidades tecnológicas." },
            { n: "2", t: "Planejamento", d: "Definição de prioridades e desenho da arquitetura tecnológica." },
            { n: "3", t: "Implantação", d: "Execução estruturada, com especialistas parceiros quando necessário." },
            { n: "4", t: "Evolução Contínua", d: "Acompanhamento consultivo para manter eficiência, segurança e escala." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center font-semibold">
                  {s.n}
                </div>
                <div className="font-semibold text-slate-900">{s.t}</div>
              </div>
              <p className="mt-3 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PARA QUEM */}
      <Section
        title="Para quem é a Rcom Consulting"
        subtitle="Empresas de pequeno e médio porte que precisam de organização tecnológica para crescer com segurança."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">A Rcom é ideal se sua empresa:</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Está crescendo e precisa de estrutura</li>
              <li>• Quer reduzir riscos e paradas</li>
              <li>• Precisa modernizar equipamentos/infra</li>
              <li>• Quer previsibilidade de custos em TI</li>
              <li>• Busca evolução digital com praticidade</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Resultado esperado</h3>
            <p className="mt-2 text-slate-600">
              Um ambiente tecnológico confiável, seguro e preparado para o futuro — com decisões orientadas por diagnóstico e um plano de evolução contínua.
            </p>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Dica: comece pelo diagnóstico e priorize o que traz mais impacto com menor risco.
            </div>
          </div>
        </div>
      </Section>
	        {/* FAQ (SEO PRO) */}
      <Section
        title="Perguntas frequentes"
        subtitle="Respostas rápidas para dúvidas comuns de pequenas e médias empresas."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "A Rcom Consulting faz suporte de TI para PME?",
              a: "Sim. Atuamos com um modelo consultivo, combinando suporte e gestão tecnológica contínua. A ideia é reduzir emergências, organizar o ambiente e evoluir a tecnologia com previsibilidade.",
            },
            {
              q: "Vocês atuam com infraestrutura empresarial e troca de equipamentos?",
              a: "Sim. Avaliamos o cenário atual, definimos prioridades e executamos upgrades de infraestrutura, redes, servidores, backup e segurança, conforme a necessidade da operação.",
            },
            {
              q: "A consultoria inclui cloud e segurança?",
              a: "Sim. Projetamos e estruturamos soluções em nuvem, backup e políticas de segurança para aumentar continuidade operacional e reduzir riscos.",
            },
            {
              q: "Vocês fazem transformação digital para pequenas empresas?",
              a: "Sim. Trabalhamos com digitalização de processos, automação e organização documental para aumentar eficiência e reduzir retrabalho.",
            },
            {
              q: "Atendem São Paulo?",
              a: "Sim. Atendemos São Paulo e região, além de suporte remoto para empresas que precisam de acompanhamento contínuo.",
            },
            {
              q: "Como funciona o diagnóstico estratégico?",
              a: "Mapeamos o ambiente, identificamos riscos e oportunidades e entregamos um plano com prioridades, recomendações e próximos passos para evolução da TI.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{item.q}</div>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>


      {/* CONTATO */}
      <Section
        id="contato"
        title="Solicite um diagnóstico estratégico"
        subtitle="Preencha abaixo e vamos entender seu cenário. Se preferir, fale direto no WhatsApp."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Contato rápido</h3>
            <p className="mt-2 text-slate-600">
              Responda algumas informações e retornaremos com o próximo passo.
            </p>

            {/* Opção A: mailto (zero custo, sem backend) */}
            <form
              className="mt-5 space-y-3"
              action="mailto:rcom.consultoria@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                name="Nome"
                placeholder="Seu nome"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                name="Empresa"
                placeholder="Empresa"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                name="Email"
                type="email"
                placeholder="E-mail"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                name="Telefone"
                placeholder="Telefone/WhatsApp"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
              />
              <textarea
                name="Mensagem"
                placeholder="Conte rapidamente sua necessidade (ex: infra, troca de equipamentos, backup, sistemas...)"
                className="h-28 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Enviar solicitação
              </button>

              <p className="text-xs text-slate-500">
                *No modo “sem custo”, o envio abre seu cliente de e-mail. Quando quiser, trocamos para Formspree/Netlify Forms e vira envio direto.
              </p>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Falar agora</h3>
            <p className="mt-2 text-slate-600">
              Se quiser agilizar, fale direto no WhatsApp e já iniciamos o diagnóstico.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE_E164.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Olá! Quero solicitar um diagnóstico estratégico de TI para minha empresa."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Conversar no WhatsApp
            </a>

            <div className="mt-6 rounded-2xl bg-blue-50 p-4">
              <div className="text-sm font-semibold text-blue-900">O que vamos te perguntar</div>
              <ul className="mt-2 space-y-1 text-sm text-blue-900/80">
                <li>• Quantas máquinas/usuários?</li>
                <li>• Tem servidor ou usa nuvem?</li>
                <li>• Como está o backup hoje?</li>
                <li>• Principais dores: lentidão, quedas, segurança, processos?</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Logo />
            <div className="text-sm text-slate-600">
              Infraestrutura • Cloud • Segurança • Automação • Transformação Digital
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Rcom Consulting — Consultoria Estratégica em Tecnologia
          </div>
        </div>
      </footer>
    </main>
  );
}
