'use client'
import Image from 'next/image'
import React from 'react'

const items = [
	{
		key: '1',
		label: 'How can we help your business?',
		children: <p>lorem ipsum dolor sit amet</p>,
	},
	{
		key: '2',
		label: 'What are the advantages of Bisnext',
		children: <p>lorem ipsum dolor sit amet</p>,
	},
	{
		key: '3',
		label: 'Let’s find an office near you?',
		children: <p>lorem ipsum dolor sit amet</p>,
	},
	{
		key: '4',
		label: 'How IT consultancy experts work?',
		children: <p>lorem ipsum dolor sit amet</p>,
	},
]

const Faq = () => {
	const [activeItem, setActiveItem] = React.useState<string | null>('0')

	const onClick = (key: string) => {
		setActiveItem((prevActiveItem: string | null) =>
			prevActiveItem === key ? null : key.toString()
		)
	}

	return (
		<div className='bg-[#181818] flex items-start justify-center lg:flex-row md:flex-col-reverse sm:flex-col-reverse gap-[100px] lg:px-[150px] sm:px-[5%] max-sm:px-[5%] py-32 max-sm:flex-col-reverse'>
			<div className='flex flex-col gap-y-5 sm:w-[570px] max-sm:w-[300px]'>
				{items.map(item => (
					<div
						key={item.key}
						className='text-white bg-[#222] flex flex-col p-5'
						onClick={() => onClick(item.key)}
					>
						<div className={'flex items-center justify-between cursor-pointer'}>
							{item.label}
							<span>
								{activeItem === item.key ? (
									<Image
										src='/chevron.svg'
										alt='chevron'
										width='10'
										height='5'
									/>
								) : (
									<Image
										src='/chevron.svg'
										alt='chevron'
										width='10'
										height='5'
									/>
								)}
							</span>
						</div>
						<div
							className={`${
								activeItem === item.key
									? 'block mt-[30px] pt-4 border-t-[1px]'
									: 'hidden'
							}`}
						>
							{item.children}
						</div>
					</div>
				))}
			</div>
			<div>
				<span className='bg-gradient-to-r from-primary1 to-primary2 w-fit text-transparent bg-clip-text'>
					FAQS
				</span>
				<h3 className='text-white text-[40px] font-semibold'>
					Be Kind to Your Mind Question & Answer
				</h3>
				<p className='text-base text-[#aaa] font-medium'>
					All Your Qustions are in A document, in question and answer format,
					that introduces newcomers to a topic or answers common questions.
				</p>
			</div>
		</div>
	)
}

export default Faq
