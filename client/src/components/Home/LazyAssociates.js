import React, { Suspense, useRef } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { JellyTriangle } from "@uiball/loaders";

const LazyAssociates = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({elementRef})
    const Associates = React.lazy(
        ()=> import('./Associates')
    )
  return (
    <div ref={elementRef}>
        <Suspense fallback={<div className='lazy'>
            <JellyTriangle 
            size={50}
            speed={1.75} 
            color="white" 
           />
        </div>}>
            {isNearScreen ? <Associates /> : <div className='lazy'><JellyTriangle size={50} speed={1.75} color="white" /></div>}
        </Suspense>
    </div>
  )
}

export default LazyAssociates