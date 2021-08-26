import { useState, useEffect } from 'react'

export default function useArrow() {
	const [pack, setPack] = useState({ settings: { DIRECTION: {}, HEAD: {} }, Arrow: () => null })

	useEffect(async () => {
		if (window) {
			const module = await import('react-arrows')
			setPack({ isDefined: true, settings: { DIRECTION: module.DIRECTION, HEAD: module.HEAD }, Arrow: module.default })
		}
	}, [])

	return { settings: pack.settings, Arrow: pack.Arrow }
}
