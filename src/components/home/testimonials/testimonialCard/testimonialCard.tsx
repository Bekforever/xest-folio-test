import Image from 'next/image'
import React from 'react'

type Props = {
	desc: string
	name: string
	image: string
	rate: number
}

const TestimonialCard = (props: Props) => {
	const { desc, name, image, rate } = props
	return (
		<div className='swiper-slide h-[256px] mx-[15px] shadow-xl flex flex-col gap-y-6 p-6'>
			<span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
				>
					<path
						d='M13.483 19.3831H5.66634C5.79967 11.5998 7.33301 10.3165 12.1163 7.48312C12.6663 7.14979 12.8497 6.44979 12.5163 5.88312C12.1997 5.33312 11.483 5.14979 10.933 5.48312C5.29967 8.81646 3.33301 10.8498 3.33301 20.5331V29.5165C3.33301 32.3665 5.64967 34.6665 8.48301 34.6665H13.483C16.4163 34.6665 18.633 32.4498 18.633 29.5165V24.5165C18.633 21.5998 16.4163 19.3831 13.483 19.3831Z'
						fill='url(#paint0_linear_201_386)'
					/>
					<path
						d='M31.5163 19.3831H23.6996C23.8329 11.5998 25.3663 10.3165 30.1496 7.48312C30.6996 7.14979 30.8829 6.44979 30.5496 5.88312C30.2163 5.33312 29.5163 5.14979 28.9496 5.48312C23.3163 8.81646 21.3496 10.8498 21.3496 20.5498V29.5331C21.3496 32.3831 23.6663 34.6831 26.4996 34.6831H31.4996C34.4329 34.6831 36.6496 32.4665 36.6496 29.5331V24.5331C36.6663 21.5998 34.4496 19.3831 31.5163 19.3831Z'
						fill='url(#paint1_linear_201_386)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_201_386'
							x1='20.9558'
							y1='218.376'
							x2='-18.5335'
							y2='216.745'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#6C38D0' />
							<stop offset='1' stop-color='#CF3886' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_201_386'
							x1='38.9725'
							y1='218.497'
							x2='-0.517108'
							y2='216.867'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#6C38D0' />
							<stop offset='1' stop-color='#CF3886' />
						</linearGradient>
					</defs>
				</svg>
			</span>
			<blockquote className='text-lg text-[#090d23] my-5'>{desc}</blockquote>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-x-3'>
					<Image
						src={image}
						alt='avatar'
						width='50'
						height='50'
						className='w-[50px] h-[50px]'
					/>
					<h4>{name}</h4>
				</div>
				<div className='flex items-center gap-x-3'>
					<Image src='/rate.svg' alt='rate svg' width='24' height='24' />
					<h4>{rate}</h4>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
