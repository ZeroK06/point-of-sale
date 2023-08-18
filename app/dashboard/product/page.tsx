'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <>
            <Button onClick={() => { alert('asdas') }}>
                asdasd
            </Button>
            <div>page</div>
        </>
    )
}

export default page