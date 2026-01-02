import { X, Check, Search, Clock, Frown, Zap, Bell, Heart } from 'lucide-react'
import Card from '../components/Card'

const ProblemSolution = () => {
	const problems = [
		{ text: 'Checking 10+ rental sites manually', icon: Search },
		{ text: 'Discovering homes 18 hours too late', icon: Clock },
		{ text: 'Stress and frustration in daily life', icon: Frown },
	]
	
	const solutions = [
		{ text: 'We scan everything automatically 24/7', icon: Zap },
		{ text: 'Notifications within 30 seconds', icon: Bell },
		{ text: 'Peace of mind and securing your dream home', icon: Heart },
	]
	
	return (
		<section className="section-padding bg-gray-50 overflow-hidden">
			<div className="container-custom">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-gray-900 mb-6">
						Say goodbye to long <span className="text-red-500 line-through decoration-4 decoration-red-200">hours of frustration</span>
					</h2>
					<p className="text-lg text-gray-600">
						Why spend hours searching manually when technology can do it for you in seconds?
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
					{/* The Old Way */}
					<Card className="relative border-red-100 bg-white/50" hover={false}>
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
							Searching manually
						</div>
						<div className="space-y-6 pt-6">
							{problems.map((item, i) => (
								<div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-red-50/50 border border-red-50 transition-all hover:bg-red-50">
									<div className="bg-white p-2 rounded-lg shadow-sm">
										<X className="w-5 h-5 text-red-500" />
									</div>
									<span className="font-medium text-gray-700">{item.text}</span>
								</div>
							))}
						</div>
					</Card>
					
					{/* The New Way */}
					<Card className="relative border-primary-200 bg-white shadow-soft-xl ring-4 ring-primary-50">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary-200">
							Using BoligAlerts
						</div>
						<div className="space-y-6 pt-6">
							{solutions.map((item, i) => (
								<div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100 transition-all hover:scale-[1.02] hover:shadow-sm cursor-default">
									<div className="bg-white p-2 rounded-lg shadow-sm text-primary-600">
										<item.icon className="w-5 h-5" />
									</div>
									<span className="font-bold text-gray-900">{item.text}</span>
									<Check className="w-5 h-5 text-primary-500 ml-auto" />
								</div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default ProblemSolution
