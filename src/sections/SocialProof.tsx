import Card from '../components/Card'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
	name: string
	location: string
	rating: number
	text: string
	imageColor: string
}

const SocialProof = () => {
	const testimonials: Testimonial[] = [
		{
			name: 'David',
			location: 'Copenhagen N',
			rating: 5,
			text: 'Found my apartment in Nørrebro after just 4 days. Alerts come seriously fast - often before the property is visible on major portals.',
			imageColor: 'bg-blue-200',
		},
		{
			name: 'Sofie',
			location: 'Aarhus C',
			rating: 5,
			text: 'Love that I don\'t have to check 10 different sites. Bolig Alerts gathers everything, and the app is super easy to use.',
			imageColor: 'bg-green-200',
		},
		{
			name: 'Marcus',
			location: 'Odense',
			rating: 5,
			text: 'Was skeptical at first, but it actually works. Got offered 3 viewings the first week. Definitely worth the money.',
			imageColor: 'bg-yellow-200',
		},
	]
	
	return (
		<section className="section-padding bg-white overflow-hidden" id="stories">
			<div className="container-custom">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-flex items-center gap-2 mb-4">
						<div className="flex text-yellow-400">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="w-5 h-5 fill-current" />
							))}
						</div>
						<span className="font-bold text-gray-900">4.8/5</span>
					</div>
					<h2 className="text-gray-900 mb-6">
						Wall of <span className="text-primary-500">love</span>
					</h2>
					<p className="text-lg text-gray-600">
						We have helped over 500 people find their next home.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card key={index} className="flex flex-col h-full bg-gray-50 border-transparent hover:bg-white hover:border-gray-100">
							<div className="mb-6 text-primary-200">
								<Quote className="w-10 h-10 fill-current opacity-50" />
							</div>
							
							<p className="text-gray-700 mb-8 flex-1 leading-relaxed text-lg">
								"{testimonial.text}"
							</p>
							
							<div className="flex items-center gap-4 pt-6 border-t border-gray-200/50">
								<div className={`w-12 h-12 rounded-full ${testimonial.imageColor} flex items-center justify-center text-gray-700 font-bold text-lg`}>
									{testimonial.name[0]}
								</div>
								<div>
									<div className="font-bold text-gray-900">{testimonial.name}</div>
									<div className="text-sm text-gray-500">{testimonial.location}</div>
								</div>
								<div className="ml-auto flex gap-0.5">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
									))}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default SocialProof
