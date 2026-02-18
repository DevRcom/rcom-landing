export function WhatsAppFloat({ phoneE164 }: { phoneE164: string }) {
  const link = `https://wa.me/${phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Olá! Quero solicitar um diagnóstico estratégico de TI para minha empresa."
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      aria-label="Falar no WhatsApp"
    >
      <span className="text-sm font-semibold">WhatsApp</span>
      <span className="text-xs opacity-90">Falar agora</span>
    </a>
  );
}
