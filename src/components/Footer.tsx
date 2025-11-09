import { LinkedinLogo, TwitterLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react'

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Produto</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Plataforma</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Recursos</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Integrações</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Preços</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Demo</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Soluções</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Gerenciamento de Vulnerabilidades</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Remediação Automatizada</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Patch Management</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Compliance</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Segurança em Nuvem</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Carreiras</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Parceiros</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Documentação</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Central de Ajuda</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Webinars</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Case Studies</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Comunidade</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-muted-foreground text-sm">
                            © 2024 Vicarius. Todos os direitos reservados.
                        </div>
                        
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <LinkedinLogo size={24} weight="fill" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <TwitterLogo size={24} weight="fill" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <FacebookLogo size={24} weight="fill" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <YoutubeLogo size={24} weight="fill" />
                            </a>
                        </div>

                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacidade</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Termos</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

