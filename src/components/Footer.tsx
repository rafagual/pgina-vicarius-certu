import { LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground mb-2">
                            © 2025 Certus Cyber. Todos os Direitos Reservados.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Vicarius® é uma marca registrada da Vicarius Inc. Certus Cyber é um revendedor autorizado e consultor de cibersegurança.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacidade</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Termos</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cookies</a>
                        </div>
                        
                        <a 
                            href="https://www.linkedin.com/company/certus-cyber" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                        >
                            <LinkedinLogo size={24} weight="fill" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

