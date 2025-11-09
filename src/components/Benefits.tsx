import { CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
    {
        title: 'Redução de Riscos Cibernéticos',
        description: 'Minimize a superfície de ataque com remediação automatizada e priorização baseada em risco real.'
    },
    {
        title: 'Economia de Tempo e Recursos',
        description: 'Automatize processos manuais e libere sua equipe para focar em iniciativas estratégicas.'
    },
    {
        title: 'Visibilidade Completa',
        description: 'Tenha uma visão consolidada de todas as vulnerabilidades em aplicações, endpoints e servidores.'
    },
    {
        title: 'Conformidade Facilitada',
        description: 'Atenda requisitos de frameworks como ISO 27001, PCI-DSS, LGPD e outras regulamentações.'
    },
    {
        title: 'Redução de Custos Operacionais',
        description: 'Diminua custos com múltiplas ferramentas ao consolidar gerenciamento de vulnerabilidades e patches.'
    },
    {
        title: 'Resposta Rápida a Ameaças',
        description: 'Reaja imediatamente a novas vulnerabilidades críticas com patches automatizados.'
    }
]

export function Benefits() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Benefícios para seu Negócio
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Transforme a gestão de vulnerabilidades de um desafio em uma vantagem competitiva
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-4"
                        >
                            <div className="flex-shrink-0">
                                <CheckCircle 
                                    className="text-accent" 
                                    size={28} 
                                    weight="fill"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
