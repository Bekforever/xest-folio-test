import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type TProps = {
	image: string
	title: string
	date: string
	description: string
}

const BlogCard = (props: TProps) => {
	const { image, title, date, description } = props
	return (
		<div className='relative mb-60'>
			<div>
				<Image
					src={image}
					alt={title + image}
					width='611'
					height='392'
					className='w-[611px] h-[392px] grayscale'
				/>
			</div>
			<div className='bg-[#181818] absolute p-5 translate-x-[10%]  translate-y-[-30%]'>
				<h5 className='text-[#888] text-sm font-medium mb-2'>{date}</h5>
				<h3 className='text-white text-[30px] font-semibold mb-6'>{title}</h3>
				<p className='text-[#aaa] text-base font-medium mb-6'>{description}</p>
				<Link
					href='#'
					className='text-white text-base font-bold tracking-[2.88px] flex items-center gap-2'
				>
					READ MORE{' '}
					<Image src='/arrow.svg' alt='arrow svg' width='12' height='12' />
				</Link>
			</div>
		</div>
	)
}

export default BlogCard
