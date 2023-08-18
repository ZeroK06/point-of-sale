'use client'

import React from 'react'
import { SideBarItem } from '.'
import { HiOutlineArchiveBox } from 'react-icons/hi2'

const SideBar = () => {
    return (
        <div className='h-full w-full flex flex-col justify-between break-words'>
            <div>
                <div className='py-10'>

                </div>
                <div className='flex flex-col gap-2'>
                    <SideBarItem
                        startContent={<HiOutlineArchiveBox />}
                        endContent={<HiOutlineArchiveBox />}
                        isMenu
                        menuContent={[
                            {
                                name: 'Crear venta',
                                href: '/dashboard/sale/new-sale'
                            },
                            {
                                name: 'Ver ventas',
                                href: '/dashboard/sale/all'
                            },
                            {
                                name: 'Ver ventas',
                                href: '/dashboard/sale/all'
                            }
                        ]}
                    >
                        Ventas
                    </SideBarItem>
                    <SideBarItem startContent={<HiOutlineArchiveBox />} endContent={<HiOutlineArchiveBox />} href='/dashboard/service'>Servicios</SideBarItem>
                    <SideBarItem startContent={<HiOutlineArchiveBox />} endContent={<HiOutlineArchiveBox />} href='/dashboard/product'>Productos</SideBarItem>
                </div>
            </div>
            <div>
                <div>NOTICIAS</div>
                <div>OTHERS</div>
            </div>
        </div>
    )
}

export default SideBar