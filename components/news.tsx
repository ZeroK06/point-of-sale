import lottie from 'lottie-web'
import React, { createRef, useEffect } from 'react'

const News = () => {
    const animationContainer = createRef()

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/lotties/404.json'
        })

        return () => anim.destroy()
    }, [])



    return (
        <div className='bg-news h-60 w-full rounded-lg'>
            <div ref={animationContainer}></div>
        </div>
    )
}

export default News