import { Card } from '@/components/ui/card'
import { MagnifyingGlass, Target, FirstAid } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const showcaseItems = [
    {
        title: 'Descoberta Completa',
        description: 'Visibilidade total de toda sua infraestrutura: aplicações, sistemas operacionais, endpoints e servidores.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/687609f29a70e36f73f69096_discovery.avif',
        icon: MagnifyingGlass
    },
    {
        title: 'Priorização Inteligente',
        description: 'Score de risco baseado em exploitabilidade real, impacto e contexto do negócio para focar no que realmente importa.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/686d3dbe73fd46746246c0c9_prioritization.avif',
        icon: Target
    },
    {
        title: 'Remediação Automatizada',
        description: 'Aplicação automática de patches para aplicações de terceiros e sistemas operacionais, reduzindo tempo de resposta.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/687609f1e50faf0a46703972_remediation.avif',
        icon: FirstAid
    }
]

export function VicariusShowcase() {
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
                        Conheça a Plataforma vRx em Ação
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Veja como o Vicarius simplifica o ciclo completo de gerenciamento de vulnerabilidades
                    </p>
                </motion.div>

                <div className="space-y-12 md:space-y-16">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className={`overflow-hidden bg-card border-border hover:shadow-xl transition-all ${
                                index % 2 === 0 ? '' : ''
                            }`}>
                                <div className={`grid lg:grid-cols-2 gap-0 ${
                                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                }`}>
                                    <div className={`p-8 md:p-12 flex flex-col justify-center ${
                                        index % 2 === 0 ? '' : 'lg:col-start-2'
                                    }`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-3 rounded-lg bg-accent/10">
                                                <item.icon className="text-accent" size={32} weight="duotone" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className={`relative overflow-hidden bg-secondary/30 ${
                                        index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                                    }`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
