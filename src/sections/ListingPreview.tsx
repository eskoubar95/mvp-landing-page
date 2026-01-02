import { useState, useRef, useEffect } from 'react'
import Card from '../components/Card'
import { Heart, MapPin, BedDouble, Maximize, ChevronDown, ChevronLeft, ChevronRight, Check } from 'lucide-react'

// Cities list from reference
const CITIES = [
	'Copenhagen', 'London', 'Melbourne', 'Warsaw', 'Barcelona', 
	'Brussels', 'Lisbon', 'Berlin', 'Ottawa', 'Paris', 
	'Vienna', 'Amsterdam', 'Dublin', 'Stockholm', 'Wellington', 
	'Zurich', 'Rome'
]

// Mock images for gallery
const PROPERTY_IMAGES = [
	[
		'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'
	],
	[
		'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80'
	],
	[
		'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80'
	]
]

interface Listing {
	id: number
	location: string
	title: string
	type: string
	rooms: string
	area: string
	price: string
	images: string[]
	isNew?: boolean
}

// Sub-component for individual property card with carousel
const PropertyCard = ({ listing }: { listing: Listing }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [isHovered, setIsHovered] = useState(false)

	const nextImage = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
	}

	const prevImage = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
	}

	return (
		<Card noPadding className="overflow-hidden group h-full flex flex-col min-w-[300px] md:min-w-[340px]" hover>
			<div 
				className="relative h-64 overflow-hidden bg-gray-200"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Image Carousel */}
				<div className="w-full h-full relative">
					{listing.images.map((img, index) => (
						<div 
							key={index}
							className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
								index === currentImageIndex ? 'opacity-100' : 'opacity-0'
							}`}
						>
							<img 
								src={img} 
								alt={`${listing.title} - view ${index + 1}`}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
					))}
				</div>
				
				{/* Navigation Arrows - Visible on Hover */}
				<div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
					<button 
						onClick={prevImage}
						className="p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white text-gray-800 transition-colors transform hover:scale-105 cursor-pointer z-30"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button 
						onClick={nextImage}
						className="p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white text-gray-800 transition-colors transform hover:scale-105 cursor-pointer z-30"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>

				{/* Dots Indicator */}
				<div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
					{listing.images.map((_, idx) => (
						<div 
							key={idx} 
							className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${
								idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
							}`}
						/>
					))}
				</div>

				{/* Badges */}
				<div className="absolute top-4 left-4 flex gap-2 z-10">
					{listing.isNew && (
						<span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
							New
						</span>
					)}
					<span className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
						{listing.type}
					</span>
				</div>
				
				{/* Like Button */}
				<button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:bg-white hover:text-red-500 transition-colors z-20 cursor-pointer">
					<Heart className="w-5 h-5" />
				</button>
			</div>
			
			<div className="p-5 flex flex-col flex-1">
				<div className="flex items-center text-gray-500 text-sm mb-2 font-medium">
					<MapPin className="w-4 h-4 mr-1 text-primary-500" />
					{listing.location}
				</div>
				
				<h3 className="text-gray-900 font-bold mb-3 line-clamp-1 group-hover:text-primary-600 transition-colors text-lg">
					{listing.title}
				</h3>

				<div className="mt-auto space-y-4">
					<div className="flex items-center justify-between text-gray-600 text-sm border-b border-gray-100 pb-4">
						<div className="flex items-center gap-1.5">
							<BedDouble className="w-4 h-4 text-gray-400" />
							<span>{listing.rooms} rooms</span>
						</div>
						<div className="flex items-center gap-1.5">
							<span className="w-1 h-1 rounded-full bg-gray-300"></span>
							<span>{listing.type}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<Maximize className="w-4 h-4 text-gray-400" />
							<span>{listing.area}</span>
						</div>
					</div>
					
					<div className="flex items-center justify-between pt-1">
						<span className="text-xl font-bold text-gray-900">
							{listing.price}
						</span>
						<span className="text-primary-600 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
							View more
						</span>
					</div>
				</div>
			</div>
		</Card>
	)
}

const ListingPreview = () => {
	const [selectedCity, setSelectedCity] = useState('Copenhagen')
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [propertyCount, setPropertyCount] = useState(1261)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Update property count when city changes (simulated)
	const handleCityChange = (city: string) => {
		setSelectedCity(city)
		setIsDropdownOpen(false)
		// Simulate random count for realism
		setPropertyCount(Math.floor(Math.random() * (2000 - 40 + 1)) + 40)
	}

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const { current } = scrollContainerRef
			const scrollAmount = direction === 'left' ? -400 : 400
			current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
		}
	}

	const listings: Listing[] = [
		{
			id: 1,
			location: `${selectedCity} N`,
			title: 'Modern 2-room apartment with balcony',
			type: 'Apartment',
			rooms: '2',
			area: '65 m²',
			price: '€1,650',
			images: PROPERTY_IMAGES[0],
			isNew: true
		},
		{
			id: 2,
			location: `${selectedCity} K`,
			title: 'Bright city apartment close to everything',
			type: 'Apartment',
			rooms: '1',
			area: '42 m²',
			price: '€1,250',
			images: PROPERTY_IMAGES[1],
			isNew: true
		},
		{
			id: 3,
			location: `${selectedCity} S`,
			title: 'Newly built 3-room with view',
			type: 'Apartment',
			rooms: '3',
			area: '95 m²',
			price: '€2,400',
			images: PROPERTY_IMAGES[2],
			isNew: false
		},
		{
			id: 4,
			location: `${selectedCity} V`,
			title: 'Classic Apartment near Central Station',
			type: 'Apartment',
			rooms: '4',
			area: '115 m²',
			price: '€2,850',
			images: PROPERTY_IMAGES[0],
			isNew: false
		},
		{
			id: 5,
			location: `${selectedCity} Ø`,
			title: 'Cozy studio in quiet neighborhood',
			type: 'Studio',
			rooms: '1',
			area: '35 m²',
			price: '€950',
			images: PROPERTY_IMAGES[1],
			isNew: true
		},
		{
			id: 6,
			location: `${selectedCity} C`,
			title: 'Luxury Penthouse with Harbour View',
			type: 'Penthouse',
			rooms: '5',
			area: '180 m²',
			price: '€4,500',
			images: PROPERTY_IMAGES[2],
			isNew: true
		}
	]
	
	return (
		<section className="section-padding bg-gray-50">
			<div className="container-custom">
				<div className="text-center max-w-4xl mx-auto mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight flex flex-col md:block items-center justify-center gap-2">
						<span>In the last 24 hours, we found</span>
						<span className="inline-flex items-center mx-2 gap-2 text-primary-600">
							<span>{propertyCount} rental properties</span>
						</span>
						<span>in</span>
						
						{/* City Dropdown */}
						<div className="relative inline-block ml-3 align-bottom" ref={dropdownRef}>
							<button 
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className="inline-flex items-center gap-1 bg-blue-50 text-primary-600 px-4 py-1 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer font-bold"
							>
								{selectedCity}
								<ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
							</button>

							{/* Dropdown Menu */}
							{isDropdownOpen && (
								<div className="absolute top-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 mt-4 w-72 max-h-96 overflow-y-auto bg-white rounded-2xl shadow-soft-xl border border-gray-100 z-50 text-left py-2 scrollbar-hide animate-fade-in-up origin-top">
									<div className="px-4 py-2 border-b border-gray-50 mb-2">
										<p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Location</p>
									</div>
									{CITIES.map((city) => (
										<button
											key={city}
											onClick={() => handleCityChange(city)}
											className={`w-full px-5 py-3 text-left flex items-center justify-between group transition-all duration-200 ${
												selectedCity === city 
													? 'bg-blue-50/50 text-primary-600 border-l-4 border-primary-500' 
													: 'hover:bg-gray-50 text-gray-700 border-l-4 border-transparent hover:border-gray-200'
											}`}
										>
											<span className={`font-medium text-lg`}>
												{city}
											</span>
											{selectedCity === city && (
												<Check className="w-5 h-5 text-primary-600" />
											)}
										</button>
									))}
								</div>
							)}
						</div>
					</h2>
					<p className="text-xl text-gray-500 max-w-2xl mx-auto">
						Here is a small selection of the newest homes in {selectedCity}. Create a search agent to see all properties.
					</p>
				</div>
				
				{/* Properties Carousel */}
				<div className="relative group/carousel">
					<div 
						ref={scrollContainerRef}
						className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
						style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
					>
						{listings.map((listing) => (
							<div key={listing.id} className="snap-center">
								<PropertyCard listing={listing} />
							</div>
						))}
					</div>

					{/* Navigation Buttons */}
					<button 
						onClick={() => scroll('left')}
						className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-8 bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:scale-110 z-10 hidden md:block"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button 
						onClick={() => scroll('right')}
						className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:scale-110 z-10 hidden md:block"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	)
}

export default ListingPreview
