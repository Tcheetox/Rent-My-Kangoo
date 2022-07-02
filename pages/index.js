import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header, Footer } from '../components/partials/'
import { getCarAvailability } from '../lib/availability'

import Dialog from '../components/atoms/dialog/Dialog'
import Sms from '../components/atoms/sms/Sms'

import Jumbo from '../components/sections/jumbo/Jumbo'
import RentMeLoader from '../components/sections/rentMe/RentMeLoader'
import HowItworks from '../components/sections/howItWorks/HowItWorks'
import Specifications from '../components/sections/specifications/Specifications'
import CarouselLoader from '../components/sections/carousel/CarouselLoader'
import Contact from '../components/sections/contact/Contact'
import Reviews from '../components/sections/reviews/Reviews'
import MapLoader from '../components/sections/map/MapLoader'

export const getStaticProps = async ({ locale }) => ({
    props: { ...(await serverSideTranslations(locale)), availabilityDates: await getCarAvailability() }, //, nonce: await getNonce()
    revalidate: 10, // Next.js will attempt to re-generate the page when a request comes in - and at most once every 10 seconds
})

export default function Home({ availabilityDates }) {
    return (
        <>
            <Header />
            <main>
                <Jumbo />
                <Dialog />
                <Sms />
                <HowItworks />
                <Specifications />
                <RentMeLoader availabilityDates={availabilityDates} />
                <CarouselLoader />
                <Contact />
                <Reviews />
                <MapLoader />
            </main>
            <Footer />
        </>
    )
}
