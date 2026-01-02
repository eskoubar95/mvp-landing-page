import { TrendingUp, Home, Users, Globe } from 'lucide-react'

interface Metric {
	value: string
	label: string
	icon: typeof TrendingUp
}

const TrustMetrics = () => {
	const metrics: Metric[] = [
		{ value: '6,537+', label: 'Websites scanned daily', icon: Globe },
		{ value: '24,818+', label: 'New homes daily', icon: Home },
		{ value: '500+', label: 'Happy tenants', icon: Users },
	]
	
	return (
		<section className="py-12 bg-white border-b border-gray-100">
			<div className="container-custom">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
					{metrics.map((metric, index) => {
						const Icon = metric.icon
						return (
							<div key={index} className="px-4 py-4 md:py-0 group cursor-default">
								<div className="flex items-center justify-center gap-3 mb-2">
									<div className="bg-primary-50 p-2 rounded-lg group-hover:bg-primary-100 transition-colors">
										<Icon className="w-5 h-5 text-primary-600" />
									</div>
									<div className="text-3xl font-extrabold text-gray-900 tracking-tight">
										{metric.value}
									</div>
								</div>
								<div className="text-gray-500 font-medium text-sm uppercase tracking-wide">
									{metric.label}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default TrustMetrics
