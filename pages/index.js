import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import { Header, Footer } from '../components/partials/'
import { Jumbo, Dialog, HowItWorks, Specifications, Sms } from '../components/'
import { getCarAvailability } from '../lib/availability'

const LazyMap = dynamic(() => import('../components/sections/map/Map'))
const LazyRental = dynamic(() => import('../components/sections/rentMe/RentMe'))
const LazyCCRGroup = dynamic(() => import('../components/sections/CCRGroup')) // i.e. Carousel, Contact and Reviews

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
                <LazyCCRGroup />
                <LazyMap />
            </main>
            <Footer />
        </>
    )
}
