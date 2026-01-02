import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustMetrics from './sections/TrustMetrics'
import ProblemSolution from './sections/ProblemSolution'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import SocialProof from './sections/SocialProof'
import ListingPreview from './sections/ListingPreview'
import PricingTeaser from './sections/PricingTeaser'
import FAQ from './sections/FAQ'
import Mission from './sections/Mission'
import NewestTenants from './sections/NewestTenants'
import FinalCTA from './sections/FinalCTA'
import Footer from './components/Footer'

function App() {
	return (
		<div className="min-h-screen bg-gray-50 font-sans text-gray-900">
			<Navbar />
			<main>
				<Hero />
				<TrustMetrics />
				<ProblemSolution />
				<HowItWorks />
				<Features />
				<SocialProof />
				<ListingPreview />
				<PricingTeaser />
				<FAQ />
				<Mission />
				<NewestTenants />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	)
}

export default App
