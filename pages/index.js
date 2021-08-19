import Header from '../components/Header'
import Footer from '../components/Footer'

import { Jumbo } from '../components/blocks'

// TODO: add robots.txt
// TODO: metadata (+ favicon)

export default function Home() {
	return (
		<main>
			<Header />
			<Jumbo />
			<Footer />
		</main>
	)
}
