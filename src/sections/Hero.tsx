import Button from '../components/Button'
import { Zap, ChevronRight, CheckCircle2, Star } from 'lucide-react'

const Hero = () => {
	return (
		<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
			{/* Abstract Background Elements */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
				<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
				<div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
			</div>

			<div className="container-custom relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					{/* Text Content */}
					<div className="flex-1 text-center lg:text-left pt-8">
						{/* Trust Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-soft-sm mb-8 animate-fade-in-up hover:shadow-soft-md transition-shadow cursor-default">
							<div className="flex -space-x-2">
								{[...Array(3)].map((_, i) => (
									<div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
										<img src={`https://randomuser.me/api/portraits/thumb/women/${i + 20}.jpg`} alt="" className="w-full h-full object-cover" />
									</div>
								))}
							</div>
							<div className="flex items-center gap-1">
								<div className="flex text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-3 h-3 fill-current" />
									))}
								</div>
								<span className="text-xs font-bold text-gray-700">Trusted by +500 tenants</span>
							</div>
						</div>
						
						<h1 className="text-gray-900 mb-6 relative">
							Rental search on <br className="hidden md:block" />
							<span className="relative inline-block text-primary-600">
								autopilot
								{/* Hand-drawn underline */}
								<svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.8087 3.5117 71.6033 -0.675626 198 2.00004" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
							</span>
						</h1>
						
						<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
							Automated bots scan <strong className="text-gray-900 font-semibold bg-primary-50 px-1 rounded">6,537+ websites</strong> and find <strong className="text-gray-900 font-semibold">+24,818 new homes daily</strong>.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center relative">
							{/* Hand-drawn arrow pointing to CTA */}
							<div className="hidden lg:block absolute -left-28 top-2 opacity-50 rotate-[-15deg]">
								<span className="font-handwriting text-gray-500 text-sm transform -rotate-12 block mb-1 ml-4">Start for free!</span>
								<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5 25C20 25 40 10 70 5M70 5L60 0M70 5L65 15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
								</svg>
							</div>

							<Button size="large" className="w-full sm:w-auto shadow-glow group relative overflow-hidden">
								<span className="relative z-10 flex items-center">
									<Zap className="mr-2 w-5 h-5 fill-current" />
									Sign up and get matches
								</span>
								{/* Shine effect */}
								<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
							</Button>
							<Button variant="outline" size="large" className="w-full sm:w-auto group border-gray-200">
								See 661,156 properties
								<ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
						
						<div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 text-green-500" />
								<span>No commitment</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 text-green-500" />
								<span>Free to start</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 text-green-500" />
								<span>Cancel anytime</span>
							</div>
						</div>
					</div>

					{/* Visual Content - App Mockup Image */}
					<div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
						<div className="relative z-10 transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
							{/* Main Hero Image from Public Folder */}
							<img 
								src="/img_hero.png" 
								alt="Bolig Alerts App Interface" 
								className="w-full h-auto rounded-3xl animate-fade-in-up"
								style={{ animationDelay: '0.2s' }}
							/>
							
							{/* Floating Elements (if image doesn't have them) */}
							<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-soft-xl border border-gray-100 animate-bounce-slow hidden md:flex items-center gap-4 max-w-xs">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<Zap className="w-6 h-6 text-green-600 fill-current" />
								</div>
								<div>
									<p className="text-xs text-gray-500 font-bold uppercase">Just now</p>
									<p className="text-sm font-bold text-gray-900">We found 3 new homes matching your criteria! 🔥</p>
								</div>
							</div>
						</div>
						
						{/* Background Decorative Blob behind Image */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-100/50 to-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
