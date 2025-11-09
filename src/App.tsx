import { Hero } from '@/components/Hero'
import { PlatformOverview } from '@/components/PlatformOverview'
import { Features } from '@/components/Features'
import { Benefits } from '@/components/Benefits'
import { CompetitiveAdvantages } from '@/components/CompetitiveAdvantages'
import { UseCases } from '@/components/UseCases'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <PlatformOverview />
            <Features />
            <Benefits />
            <CompetitiveAdvantages />
            <UseCases />
            <ContactCTA />
            <Footer />
            <Toaster />
        </div>
    )
}

export default App