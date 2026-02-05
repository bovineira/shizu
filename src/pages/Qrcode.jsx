import { useEffect } from 'react'

function Qrcode() {
  useEffect(() => {
    window.open('/qrcode.pdf', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-deep-black px-4">
      <p className="mb-4 text-center text-gray-400">
        O PDF deve ter aberto em uma nova guia.
      </p>
      <a
        href="/qrcode.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold underline underline-offset-2 hover:text-gold/80"
      >
        Abrir PDF em nova guia
      </a>
    </div>
  )
}

export default Qrcode
