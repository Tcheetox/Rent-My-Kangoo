import React, { useState, useEffect } from 'react'

import cx from 'classnames'

export default function LazyLoader({ children, onBefore, onAfter, propsLoader, className = '' }) {
    const [childrenProps, setChildrenProps] = useState({})

    useEffect(() => {
        ;(async () => {
            if (onBefore && typeof onBefore === 'function') onBefore()
            if (propsLoader && typeof propsLoader === 'function') {
                const importedProps = await propsLoader()
                if (typeof importedProps !== 'object') throw new Error('!! propsLoader() must return a object')
                setChildrenProps(importedProps)
            }
            if (onAfter && typeof onAfter === 'function') onAfter()
        })()
    }, [onBefore, onAfter, propsLoader])

    return (
        <>
            {Object.keys(childrenProps).length === 0 ? (
                <div className={cx(className, 'loading')}>LOADING</div>
            ) : (
                React.cloneElement(children, { ...childrenProps, className: cx(className, 'loaded') })
            )}
        </>
    )
}
