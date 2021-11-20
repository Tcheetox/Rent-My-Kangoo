import React, { useState, useEffect } from 'react'

import { Paper, Button } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { useCookies } from 'react-cookie'
import styles from './Dialog.module.scss'

export default function Dialog() {
	const { t } = useTranslation()

	const cookieName = 'dismissDialog'
	const [cookies, setCookie] = useCookies()
	const [hideDialog, setHideDialog] = useState(true)
	useEffect(() => setHideDialog(cookies && cookies[cookieName] == 'true' ? true : false), [])

	if (hideDialog) return null
	else
		return (
			<Paper className={styles.dialog}>
				<h1>{t('dialog.h1')}</h1>
				<p>
					{t('dialog.p-1')} <strong>25</strong> CHF <br /> {t('dialog.p-2')}{' '}
					<a href='https://www.2em.ch/c/kevin-30450' target='_blank' rel='noreferrer'>
						{t('dialog.referral-link')}
					</a>
					?
				</p>
				<hr />
				<div className={styles.cookie}>{t('dialog.cookie')}...</div>
				<div className={styles.button}>
					<Button
						size='small'
						variant='contained'
						color='secondary'
						onClick={() => {
							setHideDialog(true)
							const date = new Date()
							setCookie(cookieName, true, {
								path: '/',
								httpOnly: false,
								sameSite: 'none',
								expires: new Date(date.setMonth(date.getMonth() + 1)),
							})
						}}
						style={{ maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px' }}>
						OK
					</Button>
				</div>
			</Paper>
		)
}
