import { useState } from 'react'
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react'

interface FAQItem {
	question: string
	answer: string
	category: string
}

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0)
	
	const faqs: FAQItem[] = [
		{
			category: 'Start',
			question: 'Is it really free to start?',
			answer: 'Yes, 100%. You can create a profile and receive your first alerts completely without paying. We do not require a credit card to get started.',
		},
		{
			category: 'Speed',
			question: 'How fast do I get notified?',
			answer: 'Our system scans the web every minute. Typically, it takes less than 30 seconds from a property being posted until you have an email in your inbox.',
		},
		{
			category: 'Coverage',
			question: 'Do you cover the whole country?',
			answer: 'Yes, we scan rental sites from all over the country. However, we have the most properties in major cities (Copenhagen, Aarhus, Odense, Aalborg), as this is where the supply is largest.',
		},
		{
			category: 'Subscription',
			question: 'How do I unsubscribe?',
			answer: 'You can unsubscribe at any time via the link at the bottom of our emails, or inside your profile. There is no commitment.',
		},
		{
			category: 'Technology',
			question: 'What does your AI do exactly?',
			answer: 'Our AI analyzes the text in property ads to understand details such as "pets allowed", "share-friendly" or "balcony", which are often not marked in the filters on the original sites.',
		},
	]
	
	return (
		<section id="faq" className="section-padding bg-gray-50 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

			<div className="container-custom relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-600 text-sm font-semibold mb-4">
						<HelpCircle className="w-4 h-4" />
						<span>FAQ</span>
					</div>
					<h2 className="text-gray-900 mb-6">
						Frequently Asked <span className="text-primary-500">Questions</span>
					</h2>
					<p className="text-lg text-gray-600">
						We have gathered answers to the most common questions here.
					</p>
				</div>
				
				<div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
					{/* Left Column: Support Card */}
					<div className="lg:col-span-4 order-2 lg:order-1">
						<div className="bg-primary-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl sticky top-24">
							<div className="relative z-10">
								<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
									<MessageSquare className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-white mb-4">Need help?</h3>
								<p className="text-primary-100 mb-8 leading-relaxed">
									Couldn't find the answer you were looking for? Our support team is ready to help you further.
								</p>
								<button className="w-full bg-white text-primary-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
									Contact support
								</button>
							</div>
							
							{/* Decoration */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-900 opacity-20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
						</div>
					</div>
					
					{/* Right Column: FAQ Accordion */}
					<div className="lg:col-span-8 order-1 lg:order-2">
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div 
									key={index} 
									className={`group bg-white rounded-2xl border transition-all duration-300 ${
										openIndex === index 
											? 'border-primary-200 shadow-soft-lg ring-4 ring-primary-50/50' 
											: 'border-transparent hover:border-gray-200 hover:shadow-soft-sm'
									}`}
								>
									<button
										onClick={() => setOpenIndex(openIndex === index ? null : index)}
										className="w-full px-6 py-5 flex items-start justify-between text-left"
									>
										<div className="flex-1 pr-6">
											<span className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-1 block">
												{faq.category}
											</span>
											<span className={`text-lg font-bold transition-colors ${
												openIndex === index ? 'text-primary-700' : 'text-gray-900 group-hover:text-primary-600'
											}`}>
												{faq.question}
											</span>
										</div>
										<div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
											openIndex === index 
												? 'bg-primary-500 text-white rotate-180' 
												: 'bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600'
										}`}>
											{openIndex === index ? (
												<Minus className="w-5 h-5" />
											) : (
												<Plus className="w-5 h-5" />
											)}
										</div>
									</button>
									<div 
										className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
											openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
										}`}
									>
										<p className="text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
											{faq.answer}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQ
