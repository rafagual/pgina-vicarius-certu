import { Card } from '@/components/ui/card'
import { Bank, ShoppingCart, Heart, Globe, Factory } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const useCases = [
    {
        icon: Bank,
        title: 'Serviços Financeiros',
        description: 'Atenda regulamentações rigorosas e proteja dados sensíveis com remediação contínua e relatórios de conformidade.',
        benefits: ['Compliance PCI-DSS', 'Auditoria facilitada', 'Proteção de dados financeiros']
    },
    {
        icon: Heart,
        title: 'Saúde',
        description: 'Proteja informações de pacientes e sistemas críticos com patches automatizados que não comprometem a disponibilidade.',
        benefits: ['Conformidade HIPAA/LGPD', 'Alta disponibilidade', 'Segurança de dados médicos']
    },
    {
        icon: ShoppingCart,
        title: 'Varejo e E-commerce',
        description: 'Mantenha sistemas de vendas seguros e disponíveis, protegendo dados de clientes e transações.',
        benefits: ['Proteção de dados de cartão', 'Disponibilidade 24/7', 'Confiança do consumidor']
    },
    {
        icon: Factory,
        title: 'Manufatura',
        description: 'Proteja sistemas OT e IT convergentes sem impactar operações de produção.',
        benefits: ['Segurança OT/IT', 'Zero downtime', 'Proteção de propriedade intelectual']
    },
    {
        icon: Globe,
        title: 'Tecnologia e SaaS',
        description: 'Escale a segurança conforme sua infraestrutura cresce, mantendo compliance e confiança dos clientes.',
        benefits: ['Escalabilidade', 'Multi-tenant security', 'Certificações de segurança']
    }
]

export function UseCases() {
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
                        Setores Atendidos
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Soluções adaptadas para os desafios específicos de cada indústria
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.slice(0, 3).map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full bg-card hover:shadow-lg transition-all border-border hover:border-primary/30 group">
                                <useCase.icon 
                                    className="text-primary mb-4 group-hover:scale-110 transition-transform" 
                                    size={48} 
                                    weight="duotone"
                                />
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                                    {useCase.description}
                                </p>
                                <ul className="space-y-2">
                                    {useCase.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                    {useCases.slice(3).map((useCase, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                        >
                            <Card className="p-6 h-full bg-card hover:shadow-lg transition-all border-border hover:border-primary/30 group">
                                <useCase.icon 
                                    className="text-primary mb-4 group-hover:scale-110 transition-transform" 
                                    size={48} 
                                    weight="duotone"
                                />
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                                    {useCase.description}
                                </p>
                                <ul className="space-y-2">
                                    {useCase.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
