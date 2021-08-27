import Header from '../components/Header'
import Footer from '../components/Footer'

import { Jumbo, HowItWorks, Carousel, Contact, RentMe, Map, Specifications, Reviews } from '../components/blocks'
import { getCarAvailability } from '../lib/availability'

// TODO: add robots.txt
// TODO: metadata (+ favicon)
// TODO: harmonize border-radius

export const getStaticProps = async () => ({ props: { availabilityDates: await getCarAvailability() } })

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
