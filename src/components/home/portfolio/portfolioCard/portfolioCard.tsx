'use client'
import { ReactNode, useState } from 'react'

type Props = {
	title: string
	description: string
	className: string
	children: ReactNode
}

const PortfolioCard = ({ title, description, children, className }: Props) => {
	const [hover, setHover] = useState(false)
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`relative w-fit cursor-pointer ${className}`}
		>
			<div>{children}</div>
			<span
				className={`absolute bottom-20 left-10 text-sm font-semibold mb-2 bg-gradient-to-r from-primary1 
				to-primary2 w-fit text-transparent bg-clip-text ${hover ? 'block' : 'hidden'}`}
			>
				{title}
			</span>
			<div
				className={`absolute bottom-7 left-10 text-[#ffd9d9] text-[2.375rem] font-semibold ${
					hover ? 'block' : 'hidden'
				}`}
			>
				{description}
			</div>
		</div>
	)
}

export default PortfolioCard
