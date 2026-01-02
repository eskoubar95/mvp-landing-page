import { useState, useEffect } from 'react'
import Button from './Button'
import { Menu, X, Home, Star, MessageCircle, HelpCircle, LogIn } from 'lucide-react'

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [menuOpen])

	return (
		<>
			<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft-sm py-3' : 'bg-transparent py-5'
			}`}>
				<div className="container-custom flex items-center justify-between">
					{/* Logo Only */}
					<a href="/" className="flex items-center gap-2 group relative z-50">
						<img src="/logo.svg" alt="Bolig Alerts" className="h-10 w-auto transition-transform group-hover:scale-105" />
					</a>

					{/* Right Side: CTA + Hamburger */}
					<div className="flex items-center gap-4">
						{/* Desktop CTA */}
						<div className="hidden md:flex items-center gap-4">
							<a href="/login" className="text-gray-900 font-semibold hover:text-primary-600 transition-colors">Login</a>
							<Button size="small" className="shadow-lg shadow-primary-500/20">
								Create free account
							</Button>
						</div>

						{/* Hamburger Toggle */}
						<button 
							className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative z-50"
							onClick={() => setMenuOpen(true)}
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</nav>

			{/* Sidebar Overlay (Backdrop) */}
			{menuOpen && (
				<div 
					className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity"
					onClick={() => setMenuOpen(false)}
				></div>
			)}

			{/* Sidebar Drawer */}
			<div className={`fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-primary-600 z-[60] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col text-white ${
				menuOpen ? 'translate-x-0' : 'translate-x-full'
			}`}>
				{/* Header */}
				<div className="p-6 flex items-center justify-between border-b border-white/10">
					<div className="flex items-center gap-2">
						<div className="bg-white rounded-full p-1">
							<img src="/logo.svg" alt="Bolig Alerts" className="h-6 w-auto" />
						</div>
						<span className="font-bold text-xl tracking-tight">BoligAlerts</span>
					</div>
					<button 
						onClick={() => setMenuOpen(false)}
						className="p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<X className="w-6 h-6 text-white" />
					</button>
				</div>

				{/* Scrollable Content */}
				<div className="flex-1 overflow-y-auto p-8 space-y-10">
					{/* Tenant Section */}
					<div>
						<h3 className="text-2xl font-bold mb-4">Tenant</h3>
						<ul className="space-y-3">
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Search homes</a></li>
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Create SearchAgent</a></li>
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Create Renter Resume</a></li>
						</ul>
					</div>

					{/* Rent out Section */}
					<div>
						<h3 className="text-2xl font-bold mb-4">Rent out</h3>
						<ul className="space-y-3">
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Find a tenant</a></li>
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">For agencies</a></li>
						</ul>
					</div>

					{/* General Section */}
					<div>
						<h3 className="text-2xl font-bold mb-4">General</h3>
						<ul className="space-y-3">
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Support</a></li>
							<li><a href="#pricing" className="text-primary-100 hover:text-white transition-colors text-lg" onClick={() => setMenuOpen(false)}>Pricing and how it works</a></li>
							<li><a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">Blog</a></li>
							<li><a href="/login" className="text-primary-100 hover:text-white transition-colors text-lg">Login</a></li>
						</ul>
					</div>
				</div>

				{/* Footer CTA */}
				<div className="p-6 border-t border-white/10 bg-primary-700/50">
					<button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
						Create Account
					</button>
				</div>
			</div>
		</>
	)
}

export default Navbar
