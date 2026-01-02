const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="container-custom">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<img src="/logo.svg" alt="Bolig Alerts" className="h-8 w-auto brightness-0 invert" />
							<span className="font-bold text-xl text-white tracking-tight">BoligAlerts</span>
						</div>
						<p className="text-gray-400 max-w-sm">
							BoligAlerts is your simple solution for finding a rental home. We scan the entire market so you don't have to.
						</p>
					</div>
					
					<div>
						<h4 className="text-white font-bold mb-4">Product</h4>
						<ul className="space-y-2">
							<li><a href="#" className="hover:text-white transition-colors">Features</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Success stories</a></li>
							<li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
						</ul>
					</div>
					
					<div>
						<h4 className="text-white font-bold mb-4">Company</h4>
						<ul className="space-y-2">
							<li><a href="#" className="hover:text-white transition-colors">About us</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
						</ul>
					</div>
				</div>
				
				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-500">
						© 2025 Bolig Alerts MVP - Test/Application
					</p>
					<p className="text-xs text-gray-600">
						This page must not be indexed (noindex, nofollow)
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
