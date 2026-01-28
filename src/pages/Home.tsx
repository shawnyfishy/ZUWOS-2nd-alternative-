import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import ValueProposition from '../components/sections/ValueProposition'
import BentoGrid from '../components/sections/BentoGrid'
import TheReveal from '../components/sections/TheReveal'
import AntiBigTech from '../components/sections/AntiBigTech'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <PageTransition>
            <Navbar />
            <main>
                <Hero />
                <div id="solutions">
                    <ValueProposition />
                </div>
                <div id="features">
                    <BentoGrid />
                </div>
                <div id="vision">
                    <TheReveal />
                </div>
                <div id="manifesto">
                    <AntiBigTech />
                </div>
            </main>
            <Footer />
        </PageTransition>
    )
}
