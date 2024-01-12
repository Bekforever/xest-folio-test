import Link from 'next/link'
import React from 'react'

const NotFound = () => {
	return (
		<div className='flex items-center justify-center flex-col gap-y-5'>
			<h2 className='text-3xl font-bold'>Not Found</h2>
			<p className='text-[#acacac] '>
				Sorry, the page you are looking for does not exist
			</p>
			<Link href='/' className='text-blue-300'>
				Return home
			</Link>
		</div>
	)
}

export default NotFound
