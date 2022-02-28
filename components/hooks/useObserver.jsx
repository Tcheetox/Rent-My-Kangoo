import { useState, useEffect } from 'react'

export default function useObserver(ref, className = null, keepAlive = true) {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        let refCopy = ref['current']
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries
            setIsVisible(prevVisibility => (!keepAlive ? entry.isIntersecting : prevVisibility || entry.isIntersecting))
        })
        if (refCopy) observer.observe(refCopy)
        return () => {
            if (refCopy) observer.unobserve(refCopy)
        }
    }, [ref, keepAlive])

    return { isVisible: isVisible, lazyClassName: isVisible ? className : null }
}
