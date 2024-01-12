import UiButtonReverse from '@/components/ui/button/UiButtonReverse'
import React from 'react'
import BlogCard from './blogCard/blogCard'

const Blog = () => {
	return (
		<div className='bg-[#181818] lg:px-[150px] sm:px-[5%] max-sm:px-[5%] py-20 flex flex-col gap-y-20'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold mb-2 bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text'>
						LATEST BLOG
					</span>
					<h3 className='text-[40px] font-semibold text-white text-balance max-w-[450px]'>
						Check Some of Latest News & Articles
					</h3>
				</div>
				<UiButtonReverse>Load More</UiButtonReverse>
			</div>
			<div className='flex items-center justify-center gap-x-12 max-sm:flex-col'>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog1.jpg'
				/>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog2.jpg'
				/>
			</div>
			<div className='flex items-center justify-center gap-x-12 max-sm:flex-col'>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog1.jpg'
				/>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog2.jpg'
				/>
			</div>
			<div className='flex items-center justify-center gap-x-12 max-sm:flex-col'>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog1.jpg'
				/>
				<BlogCard
					title='What is UI Design in Front End Design?'
					date='UI Design  |   22 May  2023'
					description={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system`}
					image='/blog2.jpg'
				/>
			</div>
		</div>
	)
}

export default Blog
