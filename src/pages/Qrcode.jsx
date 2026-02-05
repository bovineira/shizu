function Qrcode() {
  return (
    <div className="flex h-screen w-full flex-col bg-deep-black">
      {/* Barra mínima: link para abrir PDF no viewer nativo (melhor em alguns celulares) */}
      <div className="flex flex-shrink-0 items-center justify-end gap-2 border-b border-white/10 bg-black/40 px-4 py-2">
        <a
          href="/qrcode.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold underline underline-offset-2 hover:text-gold/80"
        >
          Abrir PDF em nova aba
        </a>
      </div>

      {/* PDF em tela cheia – iframe responsivo */}
      <iframe
        src="/qrcode.pdf"
        title="PDF QR Code"
        className="min-h-0 flex-1 w-full border-0"
        style={{ minHeight: 'calc(100vh - 48px)' }}
      />
    </div>
  )
}

export default Qrcode
