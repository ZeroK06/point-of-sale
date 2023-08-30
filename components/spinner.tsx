import React from 'react'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='h-8 w-8 animate-spin ease-in-out spinner-color rounded-full'></div>
        </div>
    )
}

export default Spinner