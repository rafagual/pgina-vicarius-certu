import { Separator } from '@/components/ui/separator'
import { LinkedinLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react'

export function Footer() {
    return (
        <footer className="bg-foreground text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Certus Cyber</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Parceiro oficial Vicarius no Brasil, a Certus Cyber oferece soluções avançadas de gerenciamento e remediação de vulnerabilidades com suporte técnico especializado.
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Nossa expertise em cibersegurança combinada com a tecnologia líder de mercado da Vicarius garante proteção máxima para sua infraestrutura.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <a 
                                href="https://www.linkedin.com/company/certus-cyber" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <LinkedinLogo className="text-white" size={20} weight="bold" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Sobre Vicarius</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <a href="https://www.vicarius.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Plataforma vRx
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vicarius.io/solution/vulnerability-management" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Vulnerability Management
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vicarius.io/solution/vulnerability-remediation" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Vulnerability Remediation
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vicarius.io/case-studies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Cases de Sucesso
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vicarius.io/apps-os-patch-catalog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Catálogo de Patches
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Contato</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-start gap-2">
                                <EnvelopeSimple className="text-white/60 mt-0.5" size={16} weight="bold" />
                                <span>contato@certuscyber.com.br</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="text-white/60 mt-0.5" size={16} weight="bold" />
                                <span>São Paulo, Brasil</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-xs text-white/60 mb-2">Powered by</p>
                            <a 
                                href="https://www.vicarius.io/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block text-white font-bold text-lg hover:text-white/80 transition-colors"
                            >
                                Vicarius
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© 2024 Certus Cyber. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span>Vicarius® é uma marca registrada da Vicarius Inc.</span>
                        <span className="hidden md:inline">•</span>
                        <a href="https://rafagual.github.io/certus-cyber-vicarius/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Certus Cyber - Vicarius
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

