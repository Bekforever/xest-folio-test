import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='flex items-center justify-between text-[#acacac] text-lg font-medium h-[100px] lg:px-[150px] md:px-[5%]  max-sm:px-[5%] max-sm:flex-col max-sm:my-10'>
			<span>© 2023 Ideapeel Inc. All Rights Reserved</span>
			<div className='flex items-center gap-x-3'>
				<Link href='#'>Privacy Policy</Link>|
				<Link href='#'>Terms and Conditions</Link>
			</div>
		</footer>
	)
}

export default Footer
