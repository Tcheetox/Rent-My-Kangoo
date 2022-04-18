import React from 'react'

import { Grid, Tooltip } from '@mui/material'
import useArrow from '../../hooks/useArrow'
import styles from './HowItWorks.module.scss'
import cx from 'classnames'
import useWindowWidth from '../../hooks/useWindowWidth'
import { useTranslation, Trans } from 'next-i18next'
import Documents from './Documents'

import ConnectIcon from '@mui/icons-material/HowToReg'
import LockIcon from '@mui/icons-material/EnhancedEncryption'
import CarIcon from '@mui/icons-material/DriveEta'
import KeyIcon from '@mui/icons-material/VpnKey'
import CalendarIcon from '@mui/icons-material/EventAvailable'
import PayIcon from '@mui/icons-material/Payment'
import ApproveIcon from '@mui/icons-material/ThumbUpAlt'
import VanIcon from '@mui/icons-material/AirportShuttle'

export default function Process() {
    const { t } = useTranslation()
    const { smaller } = useWindowWidth(1118)

    const {
        Arrow,
        settings: { DIRECTION },
    } = useArrow()

    return (
        <div className={styles.process}>
            <Grid className={styles.row}>
                <div className={styles.step1}>
                    <div id="STEP1" className={styles.icon}>
                        <ConnectIcon className={styles.connectIcon} />
                    </div>
                    <p>
                        <Trans i18nKey="process.step1.p">
                            Prior to booking the car, we suggest you to check the <a href="#availability">availability</a>
                            <CalendarIcon className={styles.miniIcon} />, or to go directly on
                            <a href="https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428" target="_blank" rel="noreferrer">
                                2EM platform
                            </a>
                            . Then, you can connect to your 2EM account or create one, if necessary.
                        </Trans>
                    </p>
                </div>
            </Grid>
            <Arrow
                className="arrow"
                from={{
                    direction: smaller ? DIRECTION.BOTTOM : DIRECTION.LEFT,
                    node: () => document.getElementById('STEP1'),
                    translation: smaller ? [0, 0.8] : [-3, 0.5],
                }}
                to={{
                    direction: smaller ? DIRECTION.TOP : DIRECTION.RIGHT,
                    node: () => document.getElementById('STEP2'),
                    translation: smaller ? [0, -0.8] : [2, -0.6],
                }}
            />
            <Grid className={styles.row}>
                <div className={styles.step2}>
                    <p>
                        <Trans i18nKey="process.step2.p">
                            Once you proceed to the reservation through <strong>2EM system</strong>, we will get notified and promptly
                            approve <ApproveIcon className={styles.miniIcon} /> your request. No need for cash, the payment
                            <PayIcon className={styles.miniIcon} /> of your rental is done directly on the platform.
                        </Trans>
                    </p>
                    <div id="STEP2" className={styles.icon}>
                        <LockIcon className={styles.lockIcon} />
                    </div>
                </div>
            </Grid>
            <Arrow
                className="arrow"
                from={{
                    direction: smaller ? DIRECTION.BOTTOM : DIRECTION.RIGHT,
                    node: () => document.getElementById('STEP2'),
                    translation: smaller ? [0, 0.8] : [0, 0],
                }}
                to={{
                    direction: smaller ? DIRECTION.TOP : DIRECTION.LEFT,
                    node: () => document.getElementById('STEP3'),
                    translation: smaller ? [0, -0.8] : [-1, -0.3],
                }}
            />
            <Grid className={styles.row}>
                <div className={styles.step3}>
                    <div id="STEP3" className={styles.icon}>
                        <CarIcon className={styles.carIcon} />
                    </div>
                    <p>
                        {t('process.step3.p-ready')}! <VanIcon className={styles.miniIcon} /> {t('process.step3.p-prepare')}
                        <Tooltip title={<Documents />} placement="top" arrow>
                            <strong className={styles.hoverable}>{t('process.step3.p-documents')}</strong>
                        </Tooltip>{' '}
                        {t('process.step3.p-meet')}
                        <a href={process.env.NEXT_PUBLIC_LOCATION} target="_blank" rel="noreferrer">
                            Quai des Arénières, 1205 {t('geneva')}
                        </a>{' '}
                        {t('process.step3.p-time')} <KeyIcon className={cx(styles.miniIcon, styles.key)} /> {t('process.step3.p-kangoo')}.
                        <strong>{t('process.step3.p-enjoy')}!</strong>
                    </p>
                </div>
            </Grid>
        </div>
    )
}
