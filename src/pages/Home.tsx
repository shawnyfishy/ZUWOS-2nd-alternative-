import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import BentoGrid from '../components/sections/BentoGrid'
import TheReveal from '../components/sections/TheReveal'
import StakeholderTabs from '../components/sections/StakeholderTabs'
import AntiBigTech from '../components/sections/AntiBigTech'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <BentoGrid />
                <TheReveal />
                <StakeholderTabs />
                <AntiBigTech />
            </main>
            <Footer />
        </>
    )
}
