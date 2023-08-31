import NavBar from '@/components/navbar/navbar'
import { SideBar } from '@/components/sidebar'
import React from 'react'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {



    return (
        <div className='dashboard__layout relative'>
            <Toaster position='top-center' toastOptions={{
                className: '',
                style: {
                    padding: '10px',
                    borderRadius: '20px'
                },
                success: {
                    duration: 3500
                }
            }} />

            <div className=' bg-white fixed top-0 left-0'>
                <SideBar />
            </div>
            <div className='row-span-2'></div>
            <div className='flex items-center px-8'>
                <NavBar />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Layout