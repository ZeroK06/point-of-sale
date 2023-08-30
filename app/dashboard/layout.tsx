import { SideBar } from '@/components/sidebar'
import React from 'react'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
    children: React.ReactNode
}
const layout: React.FC<LayoutProps> = ({ children }) => {



    return (
        <div className='dashboard__layout'>
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

            <div className='bg-white border-r-[2px] border-gray-100 p-4 '>
                <SideBar />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default layout