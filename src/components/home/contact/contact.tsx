import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
	return (
		<div className='flex items-center justify-center flex-col text-center lg:gap-y-[100px] md:gap-y-10 lg:py-20 md:py-10 max-sm:gap-y-5 max-sm:py-5'>
			<span className='bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text text-base font-semibold tracking-[2.4px]'>
				HAVE YOU PROJECT IN YOUR MIND?
			</span>
			<h2 className='text-[#131313] lg:text-[60px] md:text-[46px] sm:text-9 font-semibold max-w-[666px]'>
				Let’s Make Something Great Together!
			</h2>
			<Link href='#' className='relative'>
				<Image
					src='/contact.svg'
					alt='contact'
					width='250'
					height='250'
					className='z-0'
				/>
				<span className='flex flex-col z-50 text-center'>
					<span className='absolute top-[45%] left-[10%] text-white text-base font-bold tracking-[2.88px]'>
						CONTACT WITH US
					</span>
					<span className='absolute top-[65%] left-[45%]'>
						<Image src='/arrow.svg' alt='contact' width='25' height='25' />
					</span>
				</span>
			</Link>
			<Link href='/'>
				<Image src='/logo.svg' alt='logo' width='72' height='52' />
			</Link>
			<div className='flex items-center lg:gap-x-36 md:gap-x-20 max-sm:gap-x-10 max-sm:mt-5'>
				<Link href='#'>
					<Image src='/f.svg' alt='facebook' width='18' height='36' />
				</Link>
				<Link href='#'>
					<Image src='/linkedin.svg' alt='linkedin' width='38' height='36' />
				</Link>
				<Link href='#'>
					<Image src='/insta.svg' alt='instagram' width='36' height='36' />
				</Link>
				<Link href='#'>
					<Image src='/be.svg' alt='be' width='57' height='36' />
				</Link>
				<Link href='#'>
					<Image src='/ball.svg' alt='ball' width='36' height='36' />
				</Link>
			</div>
		</div>
	)
}

export default Contact
