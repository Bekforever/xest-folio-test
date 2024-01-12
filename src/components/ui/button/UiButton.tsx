'use client'
import React, { useState } from 'react'

type Props = {
	children: string
	className?: string
}

const UiButton: React.FC<Props> = ({ children, className }) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<div className={`relative w-fit ${className}`}>
			<button
				className='relative text-white z-50 text-lg font-medium py-5 px-[30px] bg-black hover:bg-slate-900 transition duration-500 ease-in-out'
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{children}
			</button>
			<div
				className='absolute h-full z-10 w-full py-5 px-[30px] bg-gradient-to-r from-primary1 to-primary2 transition duration-500 ease-in-out'
				style={{
					transform: isHover ? 'translate(0, -100%)' : 'translate(10%, -80%)',
				}}
			></div>
		</div>
	)
}

export default UiButton
