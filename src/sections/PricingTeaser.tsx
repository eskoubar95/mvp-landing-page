import Button from '../components/Button'
import Card from '../components/Card'
import { Check, Star } from 'lucide-react'

const PricingTeaser = () => {
	const features: string[] = [
		'We scan 6,537+ sites every hour',
		'Hundreds of new matches every day',
		'Get your matches instantly',
		'Get invited to more viewings',
		'Access to all property details',
	]
	
	return (
		<section className="section-padding bg-white relative overflow-hidden" id="pricing">
			{/* Background Decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50/50 pointer-events-none"></div>
			
			<div className="container-custom relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					{/* Text Content */}
					<div className="flex-1 text-center lg:text-left">
						<h2 className="text-gray-900 mb-6">
							Simple and <span className="text-primary-500">transparent</span> pricing
						</h2>
						<p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
							No hidden fees. We've made it easy and cheap to get started, so you can find your next home faster.
						</p>
						
						{/* Trust Indicators */}
						<div className="flex flex-col gap-4 items-center lg:items-start">
							<div className="flex -space-x-2">
								{[...Array(4)].map((_, i) => (
									<div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
										<div className={`w-full h-full bg-gray-300`}></div>
									</div>
								))}
								<div className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-600">
									+2k
								</div>
							</div>
							<div className="flex items-center gap-2">
								<div className="flex text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-4 h-4 fill-current" />
									))}
								</div>
								<p className="text-sm text-gray-600 font-medium">4.8/5 from happy house hunters</p>
							</div>
						</div>
					</div>
					
					{/* Pricing Card */}
					<div className="flex-1 w-full max-w-md">
						<Card className="relative border-2 border-primary-100 shadow-soft-xl" hover={false}>
							{/* Popular Badge */}
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
								Most popular
							</div>
							
							<div className="text-center pt-4 mb-8">
								<p className="text-gray-500 font-medium mb-2">Get started for just</p>
								<div className="flex items-center justify-center gap-1">
									<span className="text-5xl font-extrabold text-gray-900">1€</span>
									<span className="text-gray-400 font-medium self-end mb-2">/ 14 days</span>
								</div>
								<p className="text-sm text-gray-400 mt-2">Then 21.99€ / 14 days</p>
							</div>
							
							<div className="bg-gray-50 rounded-xl p-6 mb-8">
								<ul className="space-y-4">
									{features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
												<Check className="w-3 h-3 text-green-600 font-bold" strokeWidth={3} />
											</div>
											<span className="text-gray-700 text-sm font-medium">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							
							<Button size="large" fullWidth className="shadow-glow mb-4">
								Start your trial now
							</Button>
							
							<p className="text-xs text-center text-gray-400">
								No commitment. Cancel anytime with one click.
							</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingTeaser
