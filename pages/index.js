import Header from '../components/Header'
import Footer from '../components/Footer'

import { Jumbo, Information, Carousel, Contact, Calendar, Map } from '../components/blocks'
import { getCarAvailability } from '../lib/availability'

// TODO: add robots.txt
// TODO: metadata (+ favicon)

export const getStaticProps = async () => ({ props: { availabilityDates: await getCarAvailability() } })

export default function Home({ availabilityDates }) {
	return (
		<main>
			<Header />
			<Jumbo />
			<Information />
			<Calendar availabilityDates={availabilityDates} />
			<Carousel />
			<Contact />
			<Map />
			<Footer />
		</main>
	)
}
