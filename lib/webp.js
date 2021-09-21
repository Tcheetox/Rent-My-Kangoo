let isWebpSupported = false
const supportWebp = () => {
	//https://stackoverflow.com/questions/5573096/detecting-webp-support
	try {
		const elem = document.createElement('canvas')
		if (!!(elem.getContext && elem.getContext('2d')))
			// Cas able or not to get WebP representation
			isWebpSupported = elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
		// Very old browser like IE 8, canvas not supported
		else isWebpSupported = false
		return isWebpSupported
	} catch {
		return false
	}
}
export default supportWebp
