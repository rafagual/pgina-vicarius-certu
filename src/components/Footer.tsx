import { Separator } from '@/components/ui/separator'

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span>👍</span>
                        <span>Rodapé Final: Vicarius e Certus Cyber (Amplo Alcance)</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Coluna Esquerda</h3>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Sobre Vicarius</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                A plataforma vRx oferece gerenciamento e remediação de vulnerabilidades automatizado de última geração, protegendo sua infraestrutura com tecnologia líder de mercado.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Com catálogo de mais de 40.000 patches, priorização inteligente e automação completa, o Vicarius transforma a forma como sua <span className="font-semibold text-foreground">organização</span> gerencia segurança cibernética.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Certus Cyber: Sua Parceira Estratégica</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                Somos revendedores oficiais da Vicarius. Integramos esta tecnologia com nossa consultoria especializada para garantir a gestão completa e a resiliência da sua infraestrutura.
                            </p>
                            <p className="text-sm text-foreground font-medium">
                                Garanta uma gestão de vulnerabilidades eficaz para sua organização.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Coluna Direita</h3>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Funcionalidades Chave</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Plataforma vRx</li>
                                <li>Vulnerability Management</li>
                                <li>Vulnerability Remediation</li>
                                <li>Catálogo de 40K+ Patches</li>
                                <li>Priorização Inteligente</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Fale Conosco</h4>
                            <p className="text-sm text-muted-foreground mb-1">E-mail:</p>
                            <p className="text-sm text-foreground font-medium">contato@certuscyber.com.br</p>
                        </div>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Linha de Assinatura (Fim do Rodapé):</p>
                    <p>© 2025 Certus Cyber. Todos os Direitos Reservados.</p>
                    <p>
                        Vicarius® é uma marca registrada da Vicarius Inc. Certus Cyber é um revendedor autorizado e consultor de cibersegurança.
                    </p>
                </div>
            </div>
        </footer>
    )
}

