import React from 'react'

import Dialog from '../atoms/dialog/Dialog'
import Sms from '../atoms/sms/Sms'
import HowItworks from './howItWorks/HowItWorks'
import RentMe from './rentMe/RentMe'
import Specifications from './specifications/Specifications'
import Carousel from './carousel/Carousel'
import Contact from './contact/Contact'
import Reviews from './reviews/Reviews'
import Map from './map/Map'

export default function BottomSections({ availabilityDates }) {
    return (
        <>
            <Dialog />
            <Sms />
            <HowItworks />
            <Specifications />
            <RentMe availabilityDates={availabilityDates} />
            <Carousel />
            <Contact />
            <Reviews />
            <Map />
        </>
    )
}
