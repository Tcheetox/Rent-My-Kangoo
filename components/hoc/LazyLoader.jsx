import React, { useState, useEffect, useMemo } from 'react'

import dynamic from 'next/dynamic'
import cx from 'classnames'

export default function LazyLoader({ childLoader, childProps = {}, className = '', placeholder = null, childLoadCondition = null }) {
    const [LazyComponent, setLazyComponent] = useState(null)

    const Loader = useMemo(() => {
        const csx = cx(className, 'placeholder')
        return placeholder ? () => placeholder({ className: csx }) : () => <div className={csx} />
    }, [className, placeholder])

    useEffect(() => {
        if (!childLoader || typeof childLoader !== 'function') return
        setLazyComponent(
            dynamic(childLoader(), {
                loading: Loader,
            })
        )
    }, [childLoader, Loader])

    if (childLoadCondition === false) return <Loader />
    if (LazyComponent) return <LazyComponent className={className} {...childProps} />
    return null
}
