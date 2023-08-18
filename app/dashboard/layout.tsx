import { SideBar } from '@/components/sidebar'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}
const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='dashboard__layout'>
            <div className='bg-white border-r-[2px] border-gray-100 p-4 '>
                <SideBar />
            </div>
            <div className=''>{children}</div>
        </div>
    )
}

export default layout