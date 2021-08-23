import Header from '../components/Header'
import Footer from '../components/Footer'

import { Jumbo, Carousel, Contact, Map } from '../components/blocks'
import { Availability } from '../components/iframes/'

// TODO: add robots.txt
// TODO: metadata (+ favicon)

export default function Home() {
	return (
		<main>
			<Header />
			<Jumbo />
			{/* <Availability /> */}
			<Carousel />
			<Contact />
			<Map />
			<Footer />
		</main>
	)
}
