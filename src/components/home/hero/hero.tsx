import UiButton from '@/components/ui/button/UiButton'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
	return (
		<section className='flex items-start justify-center mt-14 lg:px-[150px] sm:px-[5%] max-sm:px-[5%] max-sm:flex-col-reverse'>
			<div>
				<h1 className='text-clampHeroTitle font-extrabold flex flex-col gap-y-[-100px] max-sm:text-center'>
					<span className='sm:bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text max-sm:text-white max-sm:-translate-y-[100px] max-sm:text-center max-sm:translate-x-[50%]'>
						MIAMI
					</span>
					<span className='relative -translate-y-20 max-sm:-translate-y-[100px]'>
						WALKE<span className='sm:text-white max-sm:text-black absolute z-10'>R</span>
					</span>
				</h1>
				<p className='mb-14 font-medium text-[#666] text-xl text-balance -translate-y-20 max-w-[580px] max-sm:text-center'>
					Award Wining product designer based in Georgia. We create
					user-friendly interfaces for fast-growing startups.
				</p>
				<UiButton className='-translate-y-20 max-sm:translate-x-[70%]'>
					Book A Call
				</UiButton>
			</div>
			<div className='lg:w-[560px] lg:h-[700px] md:w-[430px] md:h-[540px] max-sm:w-full max-sm:h-[400px] relative -z-10'>
				<Image
					src='/hero.jpg'
					alt='girl image'
					fill
					className='rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px]'
				/>
			</div>
		</section>
	)
}

export default Hero
