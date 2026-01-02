import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
	hover?: boolean
	noPadding?: boolean
}

const Card = ({ children, className = '', hover = true, noPadding = false }: CardProps) => {
	const paddingClass = noPadding ? '' : 'p-6 md:p-8'
	
	return (
		<div className={`app-card ${paddingClass} ${!hover ? '!transform-none !shadow-soft-md' : ''} ${className}`}>
			{children}
		</div>
	)
}

export default Card
