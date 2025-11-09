import { Card } from '@/components/ui/card'
import { Calendar } from '@phosphor-icons/react'

export function DemoScheduling() {
    return (
        <section id="schedule-demo" className="py-16 md:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
                        <Calendar className="text-accent" size={32} weight="duotone" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Agende uma Demo do vRx
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Reserve um horário conveniente para conhecer a plataforma Vicarius vRx e descobrir como ela pode proteger sua infraestrutura
                    </p>
                </div>

                <Card className="p-2 max-w-5xl mx-auto bg-white shadow-lg">
                    <div className="rounded-md overflow-hidden">
                        <iframe 
                            width='100%' 
                            height='750px' 
                            src='https://rafaelgualberto-certuscyb.zohobookings.com/portal-embed#/4776725000000049004' 
                            frameBorder='0' 
                            allowFullScreen
                            title="Agendamento de Demo Vicarius vRx"
                            className="border-0"
                        />
                    </div>
                </Card>
            </div>
        </section>
    )
}
