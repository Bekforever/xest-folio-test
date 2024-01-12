import Blog from '@/components/home/blog/blog'
import Brands from '@/components/home/brands/brands'
import Contact from '@/components/home/contact/contact'
import Faq from '@/components/home/faq/faq'
import Features from '@/components/home/features/features'
import Hero from '@/components/home/hero/hero'
import Portfolio from '@/components/home/portfolio/portfolio'
import Statistics from '@/components/home/statistics/statistics'
import Testimonials from '@/components/home/testimonials/testimonials'

export default function Home() {
	return (
		<main className='flex flex-col gap-y-40'>
			<Hero />
			<Brands />
			<Features />
			<Statistics />
			<Portfolio />
			<Blog />
			<Testimonials />
			<Faq />
			<Contact />
		</main>
	)
}
