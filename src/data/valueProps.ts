import { Layers, Zap, Unlock } from 'lucide-react'

export const features = [
    {
        id: "integrated-ecosystem",
        icon: Layers,
        title: "Integrated Ecosystem",
        description: "16+ modules working in perfect harmony. No more siloed data or broken workflows.",
        detail: "ZUWOS unifies your entire workplace into a single operating system. From employee engagement to facility management, every module communicates in real-time.",
        longContent: `
            <h3 class="text-2xl font-bold mb-4 text-graphite">The Power of One OS</h3>
            <p class="mb-6 leading-relaxed text-graphite/80">Most enterprises struggle with dozens of disconnected tools. HR uses one system, Facilities another, and Finance a third. Data is siloed, workflows are broken, and the employee experience is fragmented.</p>
            <p class="mb-6 leading-relaxed text-graphite/80">ZUWOS solves this by integrating <strong>16+ critical modules</strong> into a single, cohesive operating system.</p>
            <ul class="list-disc pl-6 space-y-4 marker:text-primary mb-8">
                <li class="pl-2"><strong class="text-graphite">Unified Data Model:</strong> <span class="text-graphite/80">A single source of truth for all workplace data.</span></li>
                <li class="pl-2"><strong class="text-graphite">Seamless Workflows:</strong> <span class="text-graphite/80">Actions in one module trigger responses in another automatically.</span></li>
                <li class="pl-2"><strong class="text-graphite">Consistent Experience:</strong> <span class="text-graphite/80">A single, beautiful interface for every employee interaction.</span></li>
            </ul>
        `
    },
    {
        id: "real-time-gratification",
        icon: Zap,
        title: "Real-time Gratification",
        description: "Instant feedback loops that ignite productivity. See your impact the moment it happens.",
        detail: "In the age of instant everything, work software shouldn't lag behind. ZUWOS delivers immediate, visceral feedback for every action, turning mundane tasks into micro-moments of satisfaction.",
        longContent: `
            <h3 class="text-2xl font-bold mb-4 text-graphite">The Psychology of Speed</h3>
            <p class="mb-6 leading-relaxed text-graphite/80">Waiting for a loading spinner isn't just a waste of time; it's a productivity killer. It breaks flow and erodes engagement.</p>
            <p class="mb-6 leading-relaxed text-graphite/80">ZUWOS is engineered for <strong>Real-time Gratification</strong>—a system so fast it feels like an extension of your own thought process.</p>
            <ul class="list-disc pl-6 space-y-4 marker:text-primary mb-8">
                <li class="pl-2"><strong class="text-graphite">Instant Feedback:</strong> <span class="text-graphite/80">Every tap, click, and swipe triggers an immediate, satisfying response.</span></li>
                <li class="pl-2"><strong class="text-graphite">Live Collaboration:</strong> <span class="text-graphite/80">See colleagues move, type, and act in true real-time. No refresh buttons needed.</span></li>
                <li class="pl-2"><strong class="text-graphite">Dopamine Loops:</strong> <span class="text-graphite/80">Fast, fluid interactions create a positive reinforcement loop that makes work feel less like work.</span></li>
            </ul>
        `
    },
    {
        id: "sovereign-infrastructure",
        icon: Unlock,
        title: "Sovereign Infrastructure",
        description: "Built in India for Indian realities. Own your data, control your costs, and secure your future.",
        detail: "We believe in data sovereignty. ZUWOS can be deployed on your private cloud or on-premise, ensuring your sensitive workplace data never leaves your control.",
        longContent: `
            <h3 class="text-2xl font-bold mb-4 text-graphite">Your Data, Your Rules</h3>
            <p class="mb-6 leading-relaxed text-graphite/80">Data sovereignty is no longer a luxury—it's a necessity. ZUWOS gives you complete control over your infrastructure.</p>
            <ul class="list-disc pl-6 space-y-4 marker:text-primary mb-8">
                <li class="pl-2"><strong class="text-graphite">On-Premise or Private Cloud:</strong> <span class="text-graphite/80">You choose where your data lives.</span></li>
                <li class="pl-2"><strong class="text-graphite">Compliance Ready:</strong> <span class="text-graphite/80">Built to meet strict Indian data privacy regulations (DPDP Act).</span></li>
                <li class="pl-2"><strong class="text-graphite">No Vendor Lock-in:</strong> <span class="text-graphite/80">Open standards and exportable data ensure you're never held hostage.</span></li>
            </ul>
        `
    }
]
