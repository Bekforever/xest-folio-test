import Link from 'next/link'
import React from 'react'
import UiButton from '../ui/button/UiButton'
import Image from 'next/image'

const Header = () => {
	return (
		<header className='flex items-center lg:px-[150px] sm:px-[5%] max-sm:px-[5%] justify-between h-[100px]'>
			<Image
				src='/logo.svg'
				alt='xest folio logo image'
				width='72'
				height='52'
			/>
			<div className='flex items-center gap-14 max-sm:hidden'>
				<nav className='flex items-center gap-x-9'>
					<Link className='text-lg font-medium text-[#04091E]' href='#'>
						About
					</Link>
					<Link className='text-lg font-medium text-[#04091E]' href='#'>
						Service
					</Link>
					<Link className='text-lg font-medium text-[#04091E]' href='#'>
						Blogs
					</Link>
					<Link className='text-lg font-medium text-[#04091E]' href='#'>
						FAQ
					</Link>
				</nav>
				<UiButton>Contact ME</UiButton>
			</div>
			<button className='sm:hidden max-sm:block'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
				>
					<rect
						x='0.5'
						y='0.5'
						width='31'
						height='31'
						rx='3.5'
						stroke='url(#paint0_linear_201_393)'
					/>
					<path
						d='M7.70501 24C7.41118 24 7.16506 23.872 6.96664 23.616C6.76752 23.3609 6.66797 23.0444 6.66797 22.6667C6.66797 22.2889 6.76752 21.9724 6.96664 21.7173C7.16506 21.4613 7.41118 21.3333 7.70501 21.3333H24.2976C24.5914 21.3333 24.8375 21.4613 25.036 21.7173C25.2351 21.9724 25.3346 22.2889 25.3346 22.6667C25.3346 23.0444 25.2351 23.3609 25.036 23.616C24.8375 23.872 24.5914 24 24.2976 24H7.70501ZM7.70501 17.3333C7.41118 17.3333 7.16506 17.2053 6.96664 16.9493C6.76752 16.6942 6.66797 16.3778 6.66797 16C6.66797 15.6222 6.76752 15.3053 6.96664 15.0493C7.16506 14.7942 7.41118 14.6667 7.70501 14.6667H24.2976C24.5914 14.6667 24.8375 14.7942 25.036 15.0493C25.2351 15.3053 25.3346 15.6222 25.3346 16C25.3346 16.3778 25.2351 16.6942 25.036 16.9493C24.8375 17.2053 24.5914 17.3333 24.2976 17.3333H7.70501ZM7.70501 10.6667C7.41118 10.6667 7.16506 10.5391 6.96664 10.284C6.76752 10.028 6.66797 9.71111 6.66797 9.33333C6.66797 8.95556 6.76752 8.63867 6.96664 8.38267C7.16506 8.12756 7.41118 8 7.70501 8H24.2976C24.5914 8 24.8375 8.12756 25.036 8.38267C25.2351 8.63867 25.3346 8.95556 25.3346 9.33333C25.3346 9.71111 25.2351 10.028 25.036 10.284C24.8375 10.5391 24.5914 10.6667 24.2976 10.6667H7.70501Z'
						fill='url(#paint1_linear_201_393)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_201_393'
							x1='16'
							y1='0'
							x2='16'
							y2='32'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#4C34E3' />
							<stop offset='1' stop-color='#EE346C' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_201_393'
							x1='16.0013'
							y1='8'
							x2='16.0013'
							y2='24'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#4C34E3' />
							<stop offset='1' stop-color='#EE346C' />
						</linearGradient>
					</defs>
				</svg>
			</button>
		</header>
	)
}

export default Header
