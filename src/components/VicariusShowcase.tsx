import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MagnifyingGlass, Target, FirstAid } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const showcaseItems = [
    {
        title: 'Descoberta Completa',
        description: 'Visibilidade total de toda sua infraestrutura: aplicações, sistemas operacionais, endpoints e servidores.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/687609f29a70e36f73f69096_discovery.avif',
        icon: MagnifyingGlass,
        link: 'https://www.vicarius.io/solution/vulnerability-management'
    },
    {
        title: 'Priorização Inteligente',
        description: 'Score de risco baseado em exploitabilidade real, impacto e contexto do negócio para focar no que realmente importa.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/686d3dbe73fd46746246c0c9_prioritization.avif',
        icon: Target,
        link: 'https://www.vicarius.io/solution/vulnerability-management'
    },
    {
        title: 'Remediação Automatizada',
        description: 'Aplicação automática de patches para aplicações de terceiros e sistemas operacionais, reduzindo tempo de resposta.',
        image: 'https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/687609f1e50faf0a46703972_remediation.avif',
        icon: FirstAid,
        link: 'https://www.vicarius.io/solution/vulnerability-remediation'
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
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <div>
                                            <Button
                                                variant="outline"
                                                onClick={() => window.open(item.link, '_blank')}
                                                className="group"
                                            >
                                                Saiba Mais
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16"
                >
                    <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="relative overflow-hidden bg-secondary/30 min-h-[300px] lg:min-h-[400px]">
                                <img
                                    src="https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/67d971fc7eb3789f19b2c0dc_30f03a7a522425a7b68ec6364d068b5f_solution_2_hero.avif"
                                    alt="Plataforma Vicarius vRx"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    Plataforma Completa de Segurança
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                                    O Vicarius vRx oferece uma solução unificada que combina descoberta, análise, priorização e remediação automatizada de vulnerabilidades em um único console intuitivo.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        onClick={() => window.open('https://www.vicarius.io/solution/vulnerability-remediation', '_blank')}
                                        className="bg-primary hover:bg-primary/90"
                                    >
                                        Ver Solução Completa
                                        <ArrowRight className="ml-2" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => window.open('https://www.vicarius.io/case-studies', '_blank')}
                                    >
                                        Cases de Sucesso
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12"
                >
                    <Card className="p-8 md:p-12 bg-white border-border">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    Catálogo com Mais de 40.000 Patches
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                                    Acesso ao maior catálogo de patches do mercado, cobrindo aplicações de terceiros e sistemas operacionais. Atualizações constantes garantem proteção contra as ameaças mais recentes.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => window.open('https://www.vicarius.io/apps-os-patch-catalog', '_blank')}
                                    className="group"
                                >
                                    Explorar Catálogo de Patches
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="relative overflow-hidden rounded-lg bg-secondary/30 w-full lg:w-[400px] h-[300px]">
                                    <img
                                        src="https://cdn.prod.website-files.com/66f277960b716d6f5a4f06a2/673f36a837cc2645ab331326_solution_bottom.avif"
                                        alt="Catálogo de Patches"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
