import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent pt-20 pb-32 md:pt-32 md:pb-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            
            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                            Parceiro Oficial Vicarius
                        </Badge>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Gerenciamento e Remediação de<br className="hidden md:block" /> Vulnerabilidades Automatizado
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Proteja sua infraestrutura com a plataforma vRx da Vicarius. Detecte, priorize e corrija vulnerabilidades em tempo real com automação inteligente.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button 
                            size="lg" 
                            onClick={scrollToContact}
                            className="bg-white text-primary hover:bg-white/90 text-base font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                        >
                            Solicitar Demonstração
                            <ArrowRight className="ml-2" weight="bold" />
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline"
                            onClick={scrollToContact}
                            className="border-2 border-white text-white hover:bg-white/10 text-base font-semibold px-8 py-6"
                        >
                            Fale com Especialista
                        </Button>
                    </div>
                </motion.div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
