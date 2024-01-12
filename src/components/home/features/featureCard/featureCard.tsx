import Image from 'next/image'
import React from 'react'

type Props = {
	image: string
	title: string
	description: string
	className?: string
}

const FeatureCard = ({ image, title, description, className }: Props) => {
	return (
		<div className='flex flex-col items-start lg:w-[270px] md:w-[200px] sm:w-full max-sm:w-full'>
			<Image
				src={image}
				alt={image + ' feature image'}
				width='270'
				height='120'
				className={`rounded-tl-none rounded-tr-[10px] rounded-br-none
			rounded-bl-[10px] h-[120px] max-sm:w-full max-sm:h-[144px] object-cover mb-2 ${className}`}
			/>
			<h3 className='lg:text-2xl md:text-lg max-sm:text-2xl font-semibold mb-3'>
				{title}
			</h3>
			<p className='lg:text-base md:text-xs max-sm:text-base text-[#aaa] font-medium sm:text-balance'>
				{description}
			</p>
		</div>
	)
}

export default FeatureCard
