export default function Diagnostico() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-semibold text-slate-900">
            Diagnóstico Estratégico de TI
          </h1>

          <p className="mt-4 text-slate-600">
            O diagnóstico estratégico é o primeiro passo para organizar a tecnologia
            da sua empresa. Avaliamos infraestrutura, segurança, processos e riscos
            operacionais, trazendo um plano claro de evolução.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900">
              O que analisamos:
            </h2>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Infraestrutura e equipamentos</li>
              <li>• Backup e segurança</li>
              <li>• Cloud e acessos</li>
              <li>• Processos manuais e automação</li>
              <li>• Riscos operacionais</li>
            </ul>
          </div>

          <a
            href="https://wa.me/5511914976925"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold"
          >
            Solicitar Diagnóstico via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
