import { UserPlus, Settings, Bell, LucideIcon, ArrowRight } from 'lucide-react'

interface Step {
	icon: LucideIcon
	title: string
	description: string
	step: string
}

const HowItWorks = () => {
	const steps: Step[] = [
		{
			icon: UserPlus,
			title: 'Create profile',
			description: 'It takes only 30 seconds. No credit card, no commitment.',
			step: '01',
		},
		{
			icon: Settings,
			title: 'Set criteria',
			description: 'Tell us what you are looking for: Area, price, size, and number of rooms.',
			step: '02',
		},
		{
			icon: Bell,
			title: 'Get alerts',
			description: 'Sit back. We will send a message as soon as we find a match.',
			step: '03',
		},
	]
	
	return (
		<section className="section-padding bg-white" id="how-it-works">
			<div className="container-custom">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-600 text-sm font-semibold mb-4">
						Simple process
					</div>
					<h2 className="text-gray-900 mb-4">
						From house hunting to <span className="text-primary-500">homeowner</span>
					</h2>
					<p className="text-lg text-gray-600">
						We have removed all the hassle. You only need to do three things.
					</p>
				</div>

				<div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
					{/* Connecting Line (Desktop) */}
					<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0">
						<div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-primary-200 to-gray-100"></div>
					</div>

					{steps.map((step, index) => {
						const Icon = step.icon
						return (
							<div key={index} className="relative z-10 flex flex-col items-center text-center group">
								<div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-soft-lg flex items-center justify-center mb-8 relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-soft-xl">
									<div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center">
										<Icon className="w-8 h-8 text-primary-600" />
									</div>
									<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold shadow-md border-2 border-white">
										{step.step}
									</div>
								</div>
								
								<h3 className="text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
									{step.title}
								</h3>
								<p className="text-gray-600 leading-relaxed px-4">
									{step.description}
								</p>
								
								{/* Mobile Arrow */}
								{index < steps.length - 1 && (
									<div className="md:hidden mt-8 mb-4">
										<ArrowRight className="w-6 h-6 text-gray-300 mx-auto rotate-90" />
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
