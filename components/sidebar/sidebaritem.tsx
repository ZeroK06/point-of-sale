'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useRef } from 'react'

interface SideBarItemSubProps {
    name: string
    href: string
}

interface SideBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
    href?: string
    isMenu?: boolean
    children: string
    menuContent?: Array<SideBarItemSubProps>
}
const SideBarItem: React.FC<SideBarItemProps> = ({ href = '', isMenu, children, startContent, endContent, menuContent }) => {

    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const handleMenuClick = () => {
        const height = menuContent?.length * 28
        console.log(height);

        menuRef.current.style.maxHeight = isOpen ? '0' : height + 'px'
        menuRef.current.style.marginTop = isOpen ? '0' : '8px'
        menuRef.current.style.marginBottom = isOpen ? '0' : '8px'
        menuRef.current.style.opacity = isOpen ? '0' : '1'

        setIsOpen(!isOpen)

    }


    return (
        <div>
            {isMenu ?
                <>
                    <button onClick={handleMenuClick} className={`flex flex-row flex-nowrap justify-between items-center w-full gap-2 py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg   text-gray-700`}>
                        <div className='flex justify-start items-center gap-4'>
                            {startContent}{children}
                        </div>
                        {endContent}
                    </button>
                    <div className='flex ml-8 flex-col flex-nowrap gap-1 max-h-0 overflow-hidden transition-menu ' ref={menuRef}>
                        {menuContent?.map(item => (
                            <Link className={`py-1 px-4 text-sm rounded-lg ${pathname.includes(item.href) && item.href != '' && 'bg-match-link'} `} href={item.href}>{item.name}</Link>
                        ))}
                    </div>
                </>
                :
                <Link className={`flex flex-row flex-nowrap justify-between items-center w-full gap-2 py-2 px-4 text-gray-700  transition-colors rounded-lg     ${pathname.includes(href) && href != '' && 'bg-match-link'} transition-colors duration-500`} href={href}>
                    <div className='flex justify-start items-center gap-4'>
                        {startContent}{children}
                    </div>
                    {endContent}
                </Link>
            }
        </div >
    )
}

export default SideBarItem