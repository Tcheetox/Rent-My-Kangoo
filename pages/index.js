import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Jumbo, Dialog, HowItWorks, Specifications, Sms } from '../components/'
import { getCarAvailability } from '../lib/availability'

const LazyMap = dynamic(() => import('../components/map/Map'))
const LazyRental = dynamic(() => import('../components/rentMe/RentMe'))
// ExtraInfo component is a wrapper around Carousel, Contact and Reviews
const LazyExtraInfo = dynamic(() => import('../components/ExtraInfo'))

export const getStaticProps = async ({ locale }) => ({
	props: { ...(await serverSideTranslations(locale)), availabilityDates: await getCarAvailability() }, //, nonce: await getNonce()
	revalidate: 10, // Next.js will attempt to re-generate the page when a request comes in - and at most once every 10 seconds
})

export default function Home({ availabilityDates }) {
	return (
		<>
			<Header />
			<main>
				<Dialog />
				<Jumbo />
				<Sms />
				<HowItWorks />
				<Specifications />
				<LazyRental availabilityDates={availabilityDates} />
				<LazyExtraInfo />
				<LazyMap />
			</main>
			<Footer />
		</>
	)
}
