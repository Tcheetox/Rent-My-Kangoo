import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Jumbo, HowItWorks, Carousel, Contact, Map, RentMe, Specifications, Reviews } from '../components/blocks'
import { getCarAvailability } from '../lib/availability'

// TODO: lazy loading of: calendar (react-date-calendar + date-fns), google map

// TODO: clear !important flags in scss...
// TODO: limit API key map $$$
// TODO: try in production the change of languages if its being remembered
// TODO: README

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
