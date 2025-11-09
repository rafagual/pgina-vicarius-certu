import { WhatsappLogo } from '@phosphor-icons/react'

export function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/5521966227814?text=Olá.%20Visitei%20o%20site%20da%20Certus%20Cyber%20e%20gostaria%20de%20agendar%20uma%20demonstração%20da%20plataforma%20Vicarius."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Contato via WhatsApp"
        >
            <WhatsappLogo size={32} weight="fill" className="text-white md:w-9 md:h-9" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        </a>
    )
}
