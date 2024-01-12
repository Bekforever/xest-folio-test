import UiButton from '@/components/ui/button/UiButton'
import React from 'react'
import PortfolioCard from './portfolioCard/portfolioCard'
import Image from 'next/image'

interface PortfolioItem {
	title: string
	description: string
	imageSrc: string
	width: number
	grayscale?: boolean
}

const portfolioItems: PortfolioItem[] = [
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p1.jpg',
		width: 450,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p2.jpg',
		grayscale: true,
		width: 365,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy',
		imageSrc: '/p3.jpg',
		grayscale: true,
		width: 270,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy',
		imageSrc: '/p3.jpg',
		grayscale: true,
		width: 270,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p2.jpg',
		grayscale: true,
		width: 365,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p1.jpg',
		width: 450,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p1.jpg',
		width: 450,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy Website',
		imageSrc: '/p2.jpg',
		grayscale: true,
		width: 365,
	},
	{
		title: 'UI DESIGN',
		description: 'Greenfy',
		imageSrc: '/p3.jpg',
		grayscale: true,
		width: 270,
	},
]

const Portfolio = () => {
	return (
		<div className='flex flex-col gap-[60px] lg:px-[150px] md:px-[5%]  max-sm:px-[5%]'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold mb-2 bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text'>
						PORTFOLIO
					</span>
					<h3 className='text-[40px] font-semibold text-[#131313]'>
						Some Of Our Best Works
					</h3>
				</div>
				<UiButton>Load More</UiButton>
			</div>
			<div className='flex flex-wrap justify-center items-center w-full gap-6'>
				{portfolioItems.map((item, index) => (
					<PortfolioCard
						key={index}
						title={item.title}
						description={item.description}
						className={`w-[${item.width}px}]`}
					>
						<Image
							src={item.imageSrc}
							alt='portfolio image'
							width={item.width}
							height='290'
							className={`${item.grayscale ? 'grayscale' : ''} w-[${
								item.width
							}px] h-[290px]`}
						/>
					</PortfolioCard>
				))}
			</div>
		</div>
	)
}

export default Portfolio
