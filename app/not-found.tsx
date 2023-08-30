'use client'
import React, { createRef, useEffect } from 'react'
import lottie from 'lottie-web'
const NotFoundPage = () => {
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
        <div className='flex justify-center items-center h-screen'>
            <div ref={animationContainer}></div>
        </div>
    )
}

export default NotFoundPage