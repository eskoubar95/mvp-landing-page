import { useRef, useEffect } from 'react'

const NewestTenants = () => {
	const scrollRef = useRef<HTMLDivElement>(null)

	// Auto-scroll animation
	useEffect(() => {
		const el = scrollRef.current
		if (!el) return

		let scrollAmount = 0
		const speed = 0.5
		let animationId: number

		const animate = () => {
			scrollAmount += speed
			if (scrollAmount >= el.scrollWidth / 2) {
				scrollAmount = 0
			}
			el.scrollLeft = scrollAmount
			animationId = requestAnimationFrame(animate)
		}

		animationId = requestAnimationFrame(animate)

		return () => cancelAnimationFrame(animationId)
	}, [])

	const tenants = [
		{ name: 'Sarah', location: 'Copenhagen', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
		{ name: 'Mikkel', location: 'Aarhus', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
		{ name: 'Emma', location: 'Odense', img: 'https://randomuser.me/api/portraits/women/3.jpg' },
		{ name: 'Lars', location: 'Aalborg', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
		{ name: 'Sofie', location: 'Copenhagen', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
		{ name: 'Jonas', location: 'Roskilde', img: 'https://randomuser.me/api/portraits/men/6.jpg' },
		{ name: 'Maja', location: 'Esbjerg', img: 'https://randomuser.me/api/portraits/women/7.jpg' },
		{ name: 'Anders', location: 'Vejle', img: 'https://randomuser.me/api/portraits/men/8.jpg' },
	]

	// Double the list for infinite scroll effect
	const displayTenants = [...tenants, ...tenants]

	return (
		<section className="py-16 bg-white overflow-hidden border-t border-gray-50">
			<div className="container-custom text-center mb-10">
				<h2 className="text-3xl font-bold text-gray-900 mb-2">
					Newest <span className="text-primary-500 border-b-2 border-primary-500">Tenants</span>
				</h2>
				<p className="text-gray-500">
					Join the happy tenants who found their home today
				</p>
			</div>

			<div 
				ref={scrollRef}
				className="flex gap-8 overflow-x-hidden py-4 w-full"
				style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
			>
				{displayTenants.map((tenant, index) => (
					<div key={index} className="flex flex-col items-center flex-shrink-0 w-24 group cursor-default">
						<div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3 transition-transform group-hover:scale-110 group-hover:border-primary-100">
							<img src={tenant.img} alt={tenant.name} className="w-full h-full object-cover" />
						</div>
						<div className="text-center">
							<p className="font-bold text-gray-900 text-sm">{tenant.name}</p>
							<p className="text-xs text-gray-500">{tenant.location}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default NewestTenants

