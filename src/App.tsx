import { Hero } from '@/components/Hero'
import { PlatformOverview } from '@/components/PlatformOverview'
import { VicariusShowcase } from '@/components/VicariusShowcase'
import { Features } from '@/components/Features'
import { Benefits } from '@/components/Benefits'
import { VicariusVsTraditional } from '@/components/VicariusVsTraditional'
import { CompetitiveAdvantages } from '@/components/CompetitiveAdvantages'
import { UseCases } from '@/components/UseCases'
import { DemoScheduling } from '@/components/DemoScheduling'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Toaster } from '@/components/ui/sonner'

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <PlatformOverview />
            <VicariusShowcase />
            <Features />
            <Benefits />
            <VicariusVsTraditional />
            <CompetitiveAdvantages />
            <UseCases />
            <DemoScheduling />
            <ContactCTA />
            <Footer />
            <WhatsAppFloat />
            <Toaster />
        </div>
    )
}

export default App