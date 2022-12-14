import { useState, useEffect } from 'react'

export const useNearScreen = ({elementRef})=>{
    const [isNearScreen, setShow] = useState(false)

    useEffect(()=>{
        let observer

        const onChange = (entries, observer)=>{
            const element = entries[0]
            if(element.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ?
                IntersectionObserver :
                import('intersection-observer')
        ).then(()=>{
            observer = new IntersectionObserver(onChange, {
                rootMargin: '10px'
            })
            observer.observe(elementRef.current)
        })
        return ()=> observer && observer.disconnect()
    },[])
    return isNearScreen
}