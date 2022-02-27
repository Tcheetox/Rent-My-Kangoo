import { useState, useEffect } from 'react'

export default function useObserver(ref, className = null, keepAlive = true) {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries
            setIsVisible(prevVisibility => (!keepAlive ? entry.isIntersecting : prevVisibility || entry.isIntersecting))
        })
        if (ref && ref.current) observer.observe(ref.current)
        return () => {
            if (ref && ref.current) observer.unobserve(ref.current)
        }
    }, [ref])

    return { isVisible: isVisible, lazyClassName: isVisible ? className : null }
}
