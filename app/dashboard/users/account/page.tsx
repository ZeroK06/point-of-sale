'use client'
import { Input } from '@/components/ui/input'
import useStore from '@/store/useStore'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

    const { user } = useStore()
    const [updateUser, setUpdateUser] = useState({})

    const DEFAULT_IMG = 'https://res.cloudinary.com/dbgmvvxa2/image/upload/v1690763314/no-profile-picture-6-520x520_exyq4n.jpg'

    return (
        <div className='dashboard__layout--content  bg-gray-100'>
            <div className='flex justify-center items-center'>
                <div className=' bg-white p-4 min-w-[400px] rounded-xl'>
                    <div className='flex justify-center'>
                        <Image height={100} width={100} src={user?.urlImage || DEFAULT_IMG} className='h-[100px] w-[100px] rounded-full object-cover' alt='profile img' />
                    </div>
                    <form className='flex flex-col gap-2 mt-4'>
                        <div className='flex flex-col opacity-60'>
                            <label htmlFor="">Nombre completo</label>
                            <Input type='text' placeholder='...' name='clientName' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page