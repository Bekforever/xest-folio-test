import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'XEST FOLIO',
	description:
		'Award Wining product designer based in Georgia. We create user-friendly interfaces for fast-growing startups.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={jakarta.className}>
				<div className='flex flex-col sjustify-between min-h-screen'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
