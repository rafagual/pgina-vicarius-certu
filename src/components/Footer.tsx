import { Separator } from '@/components/ui/separator'

export function Footer() {
    return (
        <footer className="bg-foreground text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Vicarius</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            A plataforma vRx oferece gerenciamento e remediação de vulnerabilidades automatizado de última geração, protegendo sua infraestrutura com tecnologia líder de mercado.
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Com catálogo de mais de 40.000 patches, priorização inteligente e automação completa, o Vicarius transforma a forma como sua organização gerencia segurança cibernética.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Sobre Vicarius</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Plataforma vRx</li>
                            <li>Vulnerability Management</li>
                            <li>Vulnerability Remediation</li>
                            <li>Catálogo de 40K+ Patches</li>
                            <li>Priorização Inteligente</li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© 2024 Vicarius. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span>Vicarius® é uma marca registrada da Vicarius Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

