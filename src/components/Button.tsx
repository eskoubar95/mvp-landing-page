import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
	size?: 'small' | 'medium' | 'large'
	className?: string
	fullWidth?: boolean
}

const Button = ({ 
	children, 
	variant = 'primary', 
	size = 'medium', 
	className = '', 
	fullWidth = false,
	...props 
}: ButtonProps) => {
	const baseClasses = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center cursor-pointer active:scale-95'
	
	const variants = {
		primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-glow hover:-translate-y-0.5 border border-transparent',
		secondary: 'bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 border border-transparent',
		outline: 'bg-transparent text-gray-700 border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 bg-white/50 backdrop-blur-sm',
		ghost: 'bg-transparent text-gray-600 hover:text-primary-600 hover:bg-gray-50',
	}
	
	const sizes = {
		small: 'px-5 py-2.5 text-sm',
		medium: 'px-7 py-3.5 text-base',
		large: 'px-9 py-4 text-lg',
	}
	
	const widthClass = fullWidth ? 'w-full' : ''
	
	return (
		<button 
			className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
