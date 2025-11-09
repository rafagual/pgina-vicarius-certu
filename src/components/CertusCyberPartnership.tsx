import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Headset, ChartLineUp, Certificate, ArrowRight } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partnerBenefits = [
    {
        icon: Certificate,
        title: 'Parceiro Oficial',
        description: 'Certificação oficial da Vicarius para distribuição e implementação da plataforma vRx no mercado brasileiro.'
    },
    {
        icon: Headset,
        title: 'Suporte Especializado',
        description: 'Equipe técnica treinada e certificada para oferecer suporte em português com expertise em cibersegurança.'
    },
    {
        icon: ChartLineUp,
        title: 'Implementação Completa',
        description: 'Acompanhamento desde o planejamento até a operação plena, garantindo máximo ROI da plataforma.'
    },
    {
        icon: Shield,
        title: 'Expertise Local',
        description: 'Conhecimento profundo do mercado brasileiro e suas necessidades específicas de conformidade e segurança.'
    }
]

export function CertusCyberPartnership() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
            
            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Certus Cyber: Seu Parceiro Vicarius no Brasil
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Somos o parceiro oficial da Vicarius no Brasil, combinando tecnologia de ponta com expertise local para entregar soluções de segurança de classe mundial.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {partnerBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full bg-white/95 backdrop-blur hover:bg-white transition-all border-white/20 group">
                                <benefit.icon 
                                    className="text-accent mb-4 group-hover:scale-110 transition-transform" 
                                    size={40} 
                                    weight="duotone"
                                />
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card className="p-8 md:p-12 bg-white/95 backdrop-blur">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    Por que escolher a Certus Cyber?
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                                    Nossa parceria com a Vicarius garante que você tenha acesso não apenas à tecnologia mais avançada em gerenciamento de vulnerabilidades, mas também ao suporte e conhecimento necessários para maximizar seus resultados.
                                </p>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                                    Estamos comprometidos em ajudar organizações brasileiras a alcançar níveis superiores de segurança cibernética com soluções personalizadas e suporte contínuo.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        onClick={() => window.open('https://rafagual.github.io/certus-cyber-vicarius/', '_blank')}
                                        className="bg-primary hover:bg-primary/90 text-white"
                                        size="lg"
                                    >
                                        Conheça a Certus Cyber
                                        <ArrowRight className="ml-2" weight="bold" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        size="lg"
                                    >
                                        Fale Conosco
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-shrink-0 text-center">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/20">
                                    <div className="text-5xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">
                                        Comprometimento<br />com seu sucesso
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
