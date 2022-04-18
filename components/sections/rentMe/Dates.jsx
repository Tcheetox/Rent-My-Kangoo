import React from 'react'

import { useTranslation } from 'next-i18next'
import { enGB, frCH, de } from 'date-fns/locale'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

export default function Dates({ dateRange }) {
    const { locale } = useRouter()
    const { t } = useTranslation()

    const formattedDate = date => {
        const getLocale = () => {
            switch (locale) {
                case 'fr':
                    return frCH
                case 'de':
                    return de
                case 'en':
                default:
                    return enGB
            }
        }
        return format(date, 'd MMMM', { locale: getLocale() })
    }

    const range =
        dateRange.startDate.toString() === dateRange.endDate.toString() ? (
            <span>
                {t('on')} <strong>{formattedDate(dateRange.startDate)}</strong>
            </span>
        ) : (
            <span>
                {t('from')} <strong>{formattedDate(dateRange.startDate)}</strong> {t('to')}{' '}
                <strong>{formattedDate(dateRange.endDate)}</strong>
            </span>
        )

    return <h3>Kangoo {range}</h3>
}
