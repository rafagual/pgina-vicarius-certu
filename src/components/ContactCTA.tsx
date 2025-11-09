import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { EnvelopeSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        employeeCount: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.employeeCount) {
            toast.error('Por favor, selecione o número de colaboradores.')
            return
        }
        toast.success('Mensagem enviada! Entraremos em contato em breve.')
        setFormData({ name: '', email: '', company: '', phone: '', employeeCount: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Solicite uma Demonstração
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Descubra como o Vicarius pode transformar a gestão de vulnerabilidades da sua organização
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    <Card className="p-8 bg-white">
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Entre em Contato
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Nome completo *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-background"
                                />
                            </div>
                            <div>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="E-mail corporativo *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-background"
                                />
                            </div>
                            <div>
                                <Input
                                    id="company"
                                    name="company"
                                    placeholder="Empresa *"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="bg-background"
                                />
                            </div>
                            <div>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-background"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="employee-count" className="text-foreground">
                                    Número de Colaboradores *
                                </Label>
                                <Select
                                    value={formData.employeeCount}
                                    onValueChange={(value) => setFormData(prev => ({ ...prev, employeeCount: value }))}
                                    required
                                >
                                    <SelectTrigger id="employee-count" className="bg-background">
                                        <SelectValue placeholder="Selecione o tamanho da empresa" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-50">Até 50</SelectItem>
                                        <SelectItem value="51-100">51-100</SelectItem>
                                        <SelectItem value="101-200">101-200</SelectItem>
                                        <SelectItem value="201-500">201-500</SelectItem>
                                        <SelectItem value="501-1000">501-1000</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Conte-nos sobre suas necessidades..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="bg-background resize-none"
                                />
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
                                size="lg"
                            >
                                Enviar Solicitação
                            </Button>
                        </form>
                    </Card>

                    <div className="space-y-6">
                        <Card className="p-6 bg-white/95 backdrop-blur">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-accent/10">
                                    <EnvelopeSimple className="text-accent" size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                                    <p className="text-muted-foreground">contato@vicarius.com</p>
                                </div>
                            </div>
                        </Card>

                        <div className="p-6 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                            <h4 className="font-semibold text-white mb-3">Sobre o Vicarius</h4>
                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                                O Vicarius oferece a plataforma vRx, solução líder em gerenciamento e remediação automatizada de vulnerabilidades.
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Nossa equipe de especialistas em cibersegurança está pronta para ajudar sua organização a alcançar níveis superiores de proteção contra vulnerabilidades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
