import UiButton from '@/components/ui/button/UiButton'
import React from 'react'
import FeatureCard from './featureCard/featureCard'

const Features = () => {
	return (
		<div className='flex items-center lg:px-[150px] sm:px-[5%] max-sm:px-[5%] gap-x-5 max-sm:flex-col'>
			<div className='flex flex-col'>
				<h4 className='text-sm font-semibold mb-2 bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text'>
					FEATURES
				</h4>
				<h2 className='lg:text-[40px] md:text-8 font-semibold mb-8 text-[#131313] text-balance'>
					Giving Your Business Some Great Ideas
				</h2>
				<p className='text-[#aaa] text-base mb-11 font-medium text-balance'>
					Every designer needs the right tools to do the perfect job.
					Thankfully, we can do that. I design products that are more than
					pretty. I make them shippable and usable.
				</p>
				<UiButton>Contact US</UiButton>
			</div>
			<div className='flex items-start gap-x-7 max-sm:flex-col  max-sm:gap-y-[100px] max-sm:w-full'>
				<div className='flex flex-col gap-y-12 translate-y-20 max-sm:w-full'>
					<FeatureCard
						className='grayscale'
						image='/f1.png'
						title='UX Experience'
						description='I design products that are more than pretty. I make them  usable.'
					/>
					<FeatureCard
						className='grayscale'
						image='/f2.png'
						title='Product Analysis'
						description='I design products that are more than pretty. I make them  usable.'
					/>
				</div>
				<div className='flex flex-col gap-y-12 max-sm:w-full'>
					<FeatureCard
						image='/f3.png'
						title='UI Design'
						description='I design products that are more than pretty. I make them  usable.'
					/>
					<FeatureCard
						className='grayscale'
						image='/f4.png'
						title='Product Design'
						description='I design products that are more than pretty. I make them  usable.'
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
