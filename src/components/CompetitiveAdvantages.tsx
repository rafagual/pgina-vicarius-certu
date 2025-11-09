import { Card } from '@/components/ui/card'
import { TrendUp } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const advantages = [
    {
        competitor: 'Tenable',
        advantage: 'Remediação Automatizada Incluída',
        description: 'Enquanto Tenable apenas detecta vulnerabilidades, o Vicarius também as corrige automaticamente com 40K+ patches.'
    },
    {
        competitor: 'Qualys',
        advantage: 'Console Unificado Completo',
        description: 'Diferente do Qualys, oferecemos descoberta, priorização e remediação em uma única plataforma intuitiva.'
    },
    {
        competitor: 'ManageEngine',
        advantage: 'Catálogo Expandido de Patches',
        description: 'Mais de 40.000 patches vs. catálogo limitado do ManageEngine. Suporte para apps de terceiros e SO.'
    },
    {
        competitor: 'Microsoft Intune',
        advantage: 'Suporte Multi-Plataforma',
        description: 'Gerencia Windows, macOS e Linux. Intune é limitado ao ecossistema Microsoft.'
    },
    {
        competitor: 'Microsoft Defender',
        advantage: 'Foco em Vulnerabilidades',
        description: 'Plataforma dedicada a gestão de vulnerabilidades, não apenas antivírus e proteção de endpoint.'
    },
    {
        competitor: 'Concorrentes',
        advantage: 'Tempo de Implantação',
        description: 'Deploy rápido em dias, não meses. Interface intuitiva que reduz curva de aprendizado.'
    }
]

export function CompetitiveAdvantages() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Por que Escolher Vicarius?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Vantagens competitivas que fazem a diferença na proteção da sua infraestrutura
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full bg-white hover:shadow-xl transition-all border-border hover:border-accent/50 group">
                                <div className="flex items-center gap-2 mb-4">
                                    <TrendUp 
                                        className="text-accent group-hover:scale-110 transition-transform" 
                                        size={24} 
                                        weight="bold"
                                    />
                                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                        vs. {item.competitor}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    {item.advantage}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
