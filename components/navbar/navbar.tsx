'use client'
import useStore from '@/store/useStore'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'

const NavBar = () => {
    const { setTheme: toggleTheme, theme: currentTheme } = useTheme()
    const { user } = useStore()
    const [theme, setTheme] = useState(currentTheme)
    const DEFAULT_ICON = 'https://www.svgrepo.com/download/5125/avatar.svg'
    return (
        <div className='rounded-xl bg-white w-full flex justify-between col-span-2'>
            <div></div>
            <div className='flex flex-row items-center gap-5'>
                <div className='flex flex-row gap-2'>
                    {theme == 'dark' &&
                        <button className='h-10 w-10 rounded-full flex justify-center items-center text-primary hover:bg-gray-100' onClick={() => {
                            toggleTheme('light')
                            setTheme('light')
                        }}>
                            <BsFillMoonStarsFill size={20} />
                        </button>
                    }
                    {theme == 'light' &&
                        <button className='h-10 w-10 rounded-full flex justify-center items-center text-primary hover:bg-gray-100' onClick={() => {
                            toggleTheme('dark')
                            setTheme('dark')
                        }}>
                            <BsSunFill size={20} />
                        </button>
                    }

                    <Link className='h-10 w-10 rounded-full flex justify-center items-center text-primary hover:bg-gray-100' href={'/dashboard/users/account'}>
                        <AiFillSetting size={25} />
                    </Link>
                </div>
                <div className='flex flex-row flex-nowrap gap-3 cursor-pointer'>
                    <Image src={user.urlImage == 'N/A' ? DEFAULT_ICON : user.urlImage} alt='avatar user' width={40} height={40} className='h-10 w-10 rounded-full object-cover' />
                    <div className='flex flex-col flex-nowrap justify-center items-start'>
                        <span className='text-sm font-medium'>{user?.firstName}</span>
                        <span className='text-xs'>{user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar