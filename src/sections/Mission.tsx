import { Hourglass, BellRing, Calendar } from 'lucide-react'

const Mission = () => {
	return (
		<section className="section-padding bg-white relative overflow-hidden">
			<div className="container-custom">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Left Side - Text & Challenges */}
					<div className="order-2 lg:order-1">
						<h2 className="text-gray-900 mb-8 leading-tight">
							Our mission is to help people find <span className="text-primary-500">home</span>
						</h2>

						<div className="prose prose-lg text-gray-600 mb-10">
							<p className="mb-6">
								In January 2023, Nilas and Jacob, each with over seven years of experience in the rental property industry, envisioned creating the ultimate search tool for home seekers.
							</p>
							<p>
								They recognized significant opportunities for improvement in the rental market and were driven to make a meaningful difference.
							</p>
						</div>

						<h3 className="text-xl font-bold text-gray-900 mb-6">Challenges we aim to solve:</h3>
						
						<div className="space-y-6">
							<div className="flex items-start gap-4 p-5 bg-primary-50/40 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors">
								<div className="bg-white p-3 rounded-xl shadow-sm text-primary-500 shrink-0">
									<Hourglass className="w-6 h-6" />
								</div>
								<p className="text-gray-700 font-medium pt-1">Hours spent each day scrolling through countless housing sites.</p>
							</div>

							<div className="flex items-start gap-4 p-5 bg-primary-50/40 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors">
								<div className="bg-white p-3 rounded-xl shadow-sm text-error-500 shrink-0">
									<BellRing className="w-6 h-6" />
								</div>
								<p className="text-gray-700 font-medium pt-1">Property owners frequently failing to respond to applications.</p>
							</div>

							<div className="flex items-start gap-4 p-5 bg-primary-50/40 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors">
								<div className="bg-white p-3 rounded-xl shadow-sm text-primary-600 shrink-0">
									<Calendar className="w-6 h-6" />
								</div>
								<p className="text-gray-700 font-medium pt-1">Home seekers enduring weeks or even months of waiting for a single viewing.</p>
							</div>
						</div>
					</div>

					{/* Right Side - Image & Stats Text */}
					<div className="order-1 lg:order-2 space-y-12">
						<div className="relative mx-auto w-full max-w-md lg:max-w-full">
							 {/* Creative Image Composition */}
							 <div className="relative z-10">
									<img 
										src="/mission-img.png" 
										alt="Founders of BoligAlerts" 
										className="w-full h-auto rounded-[2.5rem] shadow-soft-xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700"
									/>
									
									{/* Decorative Blob Elements */}
									<div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
									<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
									
									{/* Hand drawn style elements could be SVGs if we had them, using CSS shapes for now */}
									<div className="absolute top-1/2 -right-8 lg:-right-12 bg-white p-4 rounded-2xl shadow-lg transform rotate-6 border border-gray-100 hidden sm:block">
										<span className="text-2xl">🇩🇰</span>
									</div>
							 </div>
						</div>

						<div className="prose prose-lg text-gray-600">
							<p className="mb-6">
								To tackle these challenges, we developed over 10,000 bots, making BoligAlerts one of the largest rental search engines on the internet. These bots now assist thousands of people in their home search every day across 15 markets.
							</p>
							<p>
								We are constantly working to make BoligAlerts the best in its class. If you have any ideas or feedback to improve our product, please <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 underline decoration-2 underline-offset-4">submit a request here</a>, and our product team will review it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mission
