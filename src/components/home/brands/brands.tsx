import Image from 'next/image'
import React from 'react'

const Brands = () => {
	return (
		<div className='flex flex-col items-center lg:px-[150px] sm:px-[5%] max-sm:px-[5%]'>
			<h3 className='font-medium text-lg text-[rgb(18,20,29,0.80)]'>
				Trusted By
			</h3>
			<div className='flex items-center lg:gap-x-20 sm:gap-x-[60px] max-sm:flex-wrap'>
				<Image
					src='/b1.svg'
					alt='brand image'
					width='170'
					height='100'
					className='lg:w-[170px] lg:h-[100px] md:w-[90px] md:h-[70px] sm:w-[85px] sm:h-[50px]'
				/>
				<Image
					src='/b2.svg'
					alt='brand image'
					width='170'
					height='100'
					className='lg:w-[170px] lg:h-[100px] md:w-[90px] md:h-[70px] sm:w-[85px] sm:h-[50px]'
				/>
				<Image
					src='/b3.svg'
					alt='brand image'
					width='170'
					height='100'
					className='lg:w-[170px] lg:h-[100px] md:w-[90px] md:h-[70px] sm:w-[85px] sm:h-[50px]'
				/>
				<Image
					src='/b4.svg'
					alt='brand image'
					width='170'
					height='100'
					className='lg:w-[170px] lg:h-[100px] md:w-[90px] md:h-[70px] sm:w-[85px] sm:h-[50px]'
				/>
				<Image
					src='/b5.svg'
					alt='brand image'
					width='170'
					height='100'
					className='lg:w-[170px] lg:h-[100px] md:w-[90px] md:h-[70px] sm:w-[85px] sm:h-[50px]'
				/>
			</div>
		</div>
	)
}

export default Brands
