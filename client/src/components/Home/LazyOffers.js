import React, {useRef, Suspense} from 'react'
import { useNearScreen } from "../../hooks/useNearScreen.js";
import { JellyTriangle } from "@uiball/loaders";

const LazyOffers = () => {
    
  const elementRef = useRef();
  const isNearScreen = useNearScreen({elementRef});

    const Offers = React.lazy(
        ()=> import('./Offers')
    )

  return (
    <div ref={elementRef}>
        <Suspense fallback={
          <div className='lazy'>
            <JellyTriangle 
            size={50}
            speed={1.75} 
            color="white" 
           />
          </div>
        }>
            {isNearScreen ? <Offers /> : <div className='lazy'><JellyTriangle size={50} speed={1.75} color="white" /></div>}
        </Suspense>
    </div>
  )
}

export default LazyOffers