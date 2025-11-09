import { Card } from '@/components/ui/card'
import { Shield, Lightning, Crosshair, Gear, Clock, CheckCircle, ChartLine, Users } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
    {
        icon: Shield,
        title: 'Detecção Automatizada',
        description: 'Escaneamento contínuo de vulnerabilidades em toda a infraestrutura com detecção em tempo real.'
    },
    {
        icon: Lightning,
        title: 'Remediação Automatizada',
        description: 'Aplicação automática de patches para aplicações de terceiros e sistemas operacionais.'
    },
    {
        icon: Crosshair,
        title: 'Priorização Inteligente',
        description: 'Score de risco baseado em exploitabilidade real, impacto e contexto do negócio.'
    },
    {
        icon: Gear,
        title: 'Gestão de Patches Unificada',
        description: 'Mais de 40.000 patches de aplicações e sistemas operacionais em um único console.'
    },
    {
        icon: Clock,
        title: 'Redução de Tempo',
        description: 'Diminua de semanas para minutos o tempo entre descoberta e correção de vulnerabilidades.'
    },
    {
        icon: CheckCircle,
        title: 'Conformidade Simplificada',
        description: 'Relatórios automáticos para atender requisitos de compliance e auditorias.'
    },
    {
        icon: ChartLine,
        title: 'Análise Preditiva',
        description: 'Identifique tendências e previna problemas antes que se tornem críticos.'
    },
    {
        icon: Users,
        title: 'Colaboração entre Times',
        description: 'Integração com ferramentas de TI e segurança para workflows unificados.'
    }
]

export function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Recursos Principais
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Tudo que você precisa para gerenciar e remediar vulnerabilidades de forma eficaz
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white border-border group hover:border-accent/50">
                                <feature.icon 
                                    className="text-accent mb-4 group-hover:scale-110 transition-transform" 
                                    size={40} 
                                    weight="duotone"
                                />
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
