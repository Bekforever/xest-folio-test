'use client'
import React, { useRef, useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css'
import TestimonialCard from './testimonialCard/testimonialCard'

const Testimonials: React.FC = () => {
	const swiperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const swiperWidth = window.matchMedia('(max-width: 640px)').matches
			? 300
			: 545
		const swiper = new Swiper(swiperRef.current!, {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 30,
			width: swiperWidth,
		})

		return () => {
			swiper.destroy()
		}
	}, [])

	return (
		<div ref={swiperRef} className='swiper-container overflow-x-hidden'>
			<div className='swiper-wrapper'>
				{[...Array(10)].map((_, i) => (
					<TestimonialCard
						key={i}
						desc='“Now, i can track my business activity with easier and have a great understandable to operate the products'
						image='/ava.svg'
						name='Janne Cooper'
						rate={4.3}
					/>
				))}
			</div>
		</div>
	)
}

export default Testimonials
