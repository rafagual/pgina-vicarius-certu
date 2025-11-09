import { Separator } from '@/components/ui/separator'

export function Footer() {
    return (
        <footer className="bg-foreground text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Certus Cyber</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Parceiro oficial Vicarius no Brasil, oferecendo soluções avançadas de gerenciamento e remediação de vulnerabilidades.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Sobre Vicarius</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Plataforma vRx</li>
                            <li>Recursos e Benefícios</li>
                            <li>Cases de Sucesso</li>
                            <li>Documentação Técnica</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>contato@certuscyber.com.br</li>
                            <li>+55 11 0000-0000</li>
                            <li>São Paulo, Brasil</li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© 2024 Certus Cyber. Todos os direitos reservados.</p>
                    <p>Vicarius® é uma marca registrada da Vicarius Inc.</p>
                </div>
            </div>
        </footer>
    )
}
