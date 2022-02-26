import { useEffect, useState } from 'react'

export default function useWindowWidth(treshold = null) {
    const [isSmaller, setIsSmaller] = useState(false)

    useEffect(() => {
        const onWindowResize = () => {
            if (window && window.document && window.document.body) {
                setIsSmaller(window.document.body.offsetWidth < treshold)
            }
        }
        onWindowResize()
        if (window) window.addEventListener('resize', onWindowResize)
        return () => window && window.removeEventListener('resize', onWindowResize)
    }, [treshold])

    return { smaller: isSmaller }
}
