import { Search, Bell, Mail } from 'lucide-react'

const Features = () => {
	const features = [
		{
			icon: Search,
			title: 'Automate your search',
			description: 'We found 11,790 new rentals in the last 24 hours',
		},
		{
			icon: Bell,
			title: 'Receive real-time alerts',
			description: 'Receive new matches within seconds',
		},
		{
			icon: Mail,
			title: 'We\'ll do all the hard work for you',
			description: 'Save hours of browsing. We do all the work for you',
		},
	]
	
	return (
		<section className="section-padding bg-white overflow-hidden" id="features">
			<div className="container-custom">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
					
					{/* Image Side */}
					<div className="flex-1 w-full relative">
						{/* Blue doodles/decorations similar to reference */}
						<div className="absolute -top-12 -left-12 text-primary-500 w-24 h-24 rotate-[-15deg] opacity-80">
							<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 20 Q 50 10 80 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
								<path d="M30 40 Q 50 30 70 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
							</svg>
						</div>
						
						<img 
							src="/img_section.png" 
							alt="Rentumo App Interface" 
							className="w-full max-w-lg mx-auto relative z-10 drop-shadow-2xl"
						/>
					</div>

					{/* Text Side */}
					<div className="flex-1">
						<h2 className="text-gray-900 mb-6 leading-tight">
							<span className="text-primary-600 font-extrabold">Tired</span> of being too late?
						</h2>
						
						<p className="text-lg text-gray-600 mb-12 max-w-xl">
							Be the first to <strong className="text-gray-900">book viewings</strong>, when <strong className="text-gray-900">new rentals</strong> are listed on any websites.
						</p>

						<div className="space-y-10">
							{features.map((feature, index) => {
								const Icon = feature.icon
								return (
									<div key={index} className="flex gap-6">
										<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary-600">
											<Icon className="w-6 h-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												{feature.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">
												{feature.description}
											</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
