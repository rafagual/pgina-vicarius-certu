import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PlatformOverview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        A Plataforma vRx da Vicarius
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        O Vicarius vRx é uma plataforma unificada de gerenciamento de vulnerabilidades que combina descoberta, avaliação de riscos, priorização e remediação automatizada em uma única solução.
                    </p>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        Diferente das soluções tradicionais que apenas detectam vulnerabilidades, o vRx vai além: automatiza o processo de correção, aplica patches em aplicações e sistemas operacionais, e reduz drasticamente o tempo entre a descoberta e a remediação.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">40K+</div>
                            <div className="text-sm md:text-base text-muted-foreground">Aplicações e patches de SO suportados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">85%</div>
                            <div className="text-sm md:text-base text-muted-foreground">Redução no tempo de remediação</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
                            <div className="text-sm md:text-base text-muted-foreground">Visibilidade da infraestrutura</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
