import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import { Header, Footer } from '../components/partials/'
import { getCarAvailability } from '../lib/availability'

import Jumbo from '../components/sections/jumbo/Jumbo'
const LazySections = dynamic(() => import('../components/sections/Sections'))

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
                <LazySections availabilityDates={availabilityDates} />
            </main>
            <Footer />
        </>
    )
}
