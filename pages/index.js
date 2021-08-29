import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Jumbo, HowItWorks, Carousel, Contact, RentMe, Map, Specifications, Reviews } from '../components/blocks'
import { getCarAvailability } from '../lib/availability'

// Sitemap generator: https://www.npmjs.com/package/next-sitemap

// TODO: metadata (+ favicon)
// TODO: harmonize border-radius
// TODO: limit API key map $$$

export const getStaticProps = async ({ locale }) => ({
	props: { ...(await serverSideTranslations(locale)), availabilityDates: await getCarAvailability() },
})

export default function Home({ availabilityDates }) {
	return (
		<>
			<Header />
			<main>
				<Jumbo />
				<HowItWorks />
				<Specifications />
				<RentMe availabilityDates={availabilityDates} />
				<Carousel />
				<Contact />
				<Reviews />
				<Map />
			</main>
			<Footer />
		</>
	)
}
