import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Jumbo, HowItWorks, Carousel, Contact, Specifications, Reviews } from '../components/blocks'
import { getCarAvailability } from '../lib/availability'

//const LazyMap = dynamic(() => import('../components/blocks/Map'))
const LazyRental = dynamic(() => import('../components/blocks/RentMe'))

export const getStaticProps = async ({ locale }) => ({
	props: { ...(await serverSideTranslations(locale)), availabilityDates: await getCarAvailability() },
	revalidate: 10, // Next.js will attempt to re-generate the page when a request comes in - and at most once every 10 seconds
})

export default function Home({ availabilityDates }) {
	return (
		<>
			<Header />
			<main>
				<Jumbo />
				<HowItWorks />
				<Specifications />
				<LazyRental availabilityDates={availabilityDates} />
				<Carousel />
				<Contact />
				<Reviews />
				{/* <LazyMap /> */}
			</main>
			<Footer />
		</>
	)
}
