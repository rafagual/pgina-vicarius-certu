import { Card } from '@/components/ui/card'
import { Check, X } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const comparisonData = [
    {
        feature: 'Detecção de Vulnerabilidades',
        vicarius: true,
        traditional: true
    },
    {
        feature: 'Remediação Automatizada',
        vicarius: true,
        traditional: false
    },
    {
        feature: 'Patches de Aplicações de Terceiros',
        vicarius: true,
        traditional: false
    },
    {
        feature: 'Patches de Sistemas Operacionais',
        vicarius: true,
        traditional: 'limited',
        traditionalNote: 'Limitado'
    },
    {
        feature: 'Priorização Baseada em Risco',
        vicarius: true,
        traditional: 'limited',
        traditionalNote: 'Básica'
    },
    {
        feature: 'Console Unificado',
        vicarius: true,
        traditional: false
    },
    {
        feature: 'Catálogo de 40K+ Patches',
        vicarius: true,
        traditional: false
    },
    {
        feature: 'Agentless & Agent-Based',
        vicarius: true,
        traditional: 'limited',
        traditionalNote: 'Apenas Agentless'
    },
    {
        feature: 'Deployment em Dias',
        vicarius: true,
        traditional: false
    },
    {
        feature: 'Redução de 85% no Tempo',
        vicarius: true,
        traditional: false
    }
]

export function VicariusVsTraditional() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Vicarius vs. Scanners Tradicionais
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Veja por que o Vicarius vRx supera as soluções convencionais de detecção de vulnerabilidades
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="overflow-hidden bg-white">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-primary to-accent">
                                    <tr>
                                        <th className="text-left p-6 text-white font-semibold text-lg">
                                            Funcionalidade
                                        </th>
                                        <th className="text-center p-6 text-white font-semibold text-lg">
                                            Vicarius vRx
                                        </th>
                                        <th className="text-center p-6 text-white font-semibold text-lg">
                                            Scanners Tradicionais
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((item, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                            className="border-b border-border hover:bg-secondary/10 transition-colors"
                                        >
                                            <td className="p-6 font-medium text-foreground">
                                                {item.feature}
                                            </td>
                                            <td className="p-6 text-center">
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                                        <Check className="text-accent" size={20} weight="bold" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 text-center">
                                                <div className="flex justify-center items-center gap-2">
                                                    {item.traditional === true ? (
                                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                                            <Check className="text-accent" size={20} weight="bold" />
                                                        </div>
                                                    ) : item.traditional === 'limited' ? (
                                                        <div className="flex flex-col items-center gap-1">
                                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                                                <span className="text-muted-foreground text-xs font-bold">~</span>
                                                            </div>
                                                            <span className="text-xs text-muted-foreground">
                                                                {item.traditionalNote}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                                                            <X className="text-destructive" size={20} weight="bold" />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 grid md:grid-cols-3 gap-6"
                >
                    <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Scanners Tradicionais
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Apenas identificam vulnerabilidades. Equipes de TI precisam manualmente pesquisar, testar e aplicar patches, levando semanas ou meses.
                        </p>
                    </Card>
                    
                    <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Vicarius vRx
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Detecta, prioriza E corrige automaticamente. Reduz o ciclo de remediação de semanas para minutos com catálogo de 40K+ patches.
                        </p>
                    </Card>

                    <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Resultado
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            85% de redução no tempo de remediação e custos operacionais significativamente menores com uma única plataforma unificada.
                        </p>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
