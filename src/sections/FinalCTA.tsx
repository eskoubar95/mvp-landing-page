import Button from '../components/Button'
import { Zap, Shield, Clock } from 'lucide-react'

const FinalCTA = () => {
	return (
		<section className="pt-24 pb-0 relative overflow-hidden bg-white">
			<div className="container-custom relative z-10 pb-32">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Rentumo is your <br/>
						<span className="text-primary-500">simple solution</span>
					</h2>
					<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
						Sign up now and get access to the market's fastest rental alerts. 
						The first 14 days cost only 1€.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
						<Button 
							size="large"
							className="shadow-glow"
						>
							<Zap className="mr-2 w-5 h-5 fill-current" />
							Start for free now
						</Button>
						<Button 
							variant="outline"
							size="large"
						>
							See more pricing
						</Button>
					</div>
				</div>
			</div>

			{/* Skyline City Silhouette */}
			<div className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-48 bg-repeat-x opacity-10 pointer-events-none" 
				 style={{ 
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233b82f6' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
					backgroundSize: '1440px auto',
					backgroundPosition: 'bottom'
				 }}
			></div>
			
			{/* Second Layer Skyline */}
			<div className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32 bg-repeat-x opacity-20 pointer-events-none" 
				 style={{ 
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233b82f6' fill-opacity='1' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
					backgroundSize: '1200px auto',
					backgroundPosition: 'bottom left'
				 }}
			></div>
		</section>
	)
}

export default FinalCTA
