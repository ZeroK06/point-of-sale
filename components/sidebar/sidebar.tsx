'use client'

import React, { useEffect, useState } from 'react'
import { SideBarItem } from '.'
import { MdHomeRepairService, MdOutlinePointOfSale } from 'react-icons/md'
import { HiOutlineArchiveBox, HiOutlineArrowLeftOnRectangle, HiOutlineChevronDown, HiOutlineComputerDesktop, HiOutlineUserCircle, HiOutlineUsers } from 'react-icons/hi2'
import News from '../news'
import useBusiness from '@/hook/useBusiness'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { FaUsersCog } from 'react-icons/fa'
import useStore from '@/store/useStore'
import Image from 'next/image'

const SideBar = () => {


    const { currentEmpresa } = useBusiness()

    const { user } = useStore()

    return (
        <div className='h-full w-full flex flex-col justify-between break-words'>
            <div>
                <div className='pt-5 pb-6 flex justify-center'>
                    <Image src={currentEmpresa.urlImage} className='max-h-14' alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    {user.role == 'ADMIN' ?
                        <SideBarItem
                            startContent={<BsFillBoxSeamFill size={20} className='text-primary' />}
                            endContent={<HiOutlineChevronDown />}
                            isMenu
                            menuContent={[
                                {
                                    name: 'Ver productos',
                                    href: '/dashboard/product'
                                },
                                {
                                    name: 'Categorias',
                                    href: '/dashboard/product/categories'
                                }
                            ]}
                        >
                            Productos
                        </SideBarItem>
                        :
                        <SideBarItem
                            startContent={<BsFillBoxSeamFill size={20} className='text-primary' />}
                            endContent={<HiOutlineChevronDown />}
                            isMenu
                            menuContent={[
                                {
                                    name: 'Ver productos',
                                    href: '/dashboard/product'
                                }
                            ]}
                        >
                            Productos
                        </SideBarItem>
                    }

                    <SideBarItem
                        startContent={<MdOutlinePointOfSale size={20} className='text-primary' />}
                        endContent={<HiOutlineChevronDown />}
                        isMenu
                        menuContent={[
                            {
                                name: 'Nueva venta',
                                href: '/dashboard/sales/new'
                            },
                            {
                                name: 'Ver ventas',
                                href: '/dashboard/sales'
                            },
                        ]}
                    >
                        Ventas
                    </SideBarItem>
                    {user.role == 'ADMIN' ?
                        <SideBarItem
                            startContent={<MdHomeRepairService size={20} className='text-primary' />}
                            endContent={<HiOutlineChevronDown />}
                            isMenu
                            menuContent={[
                                {
                                    name: 'Nuevo servicio',
                                    href: '/dashboard/service/new'
                                },
                                {
                                    name: 'Ver servicios',
                                    href: '/dashboard/service'
                                },
                                {
                                    name: 'Tipos de servicio',
                                    href: '/dashboard/service/types'
                                },
                            ]}
                        >

                            Servicios
                        </SideBarItem>
                        :
                        <SideBarItem
                            startContent={<MdHomeRepairService size={20} className='text-primary' />}
                            endContent={<HiOutlineChevronDown />}
                            isMenu
                            menuContent={[
                                {
                                    name: 'Nuevo servicio',
                                    href: '/dashboard/service/new'
                                },
                                {
                                    name: 'Ver servicios',
                                    href: '/dashboard/service'
                                }
                            ]}
                        >

                            Servicios
                        </SideBarItem>
                    }
                    {user.role == 'ADMIN' &&

                        <SideBarItem
                            startContent={<FaUsersCog size={20} className='text-primary' />}
                            href='/dashboard/users'
                        >
                            Usuarios
                        </SideBarItem>
                    }
                </div>
            </div>
            <div>
                <div>
                    <News />
                </div>
                <div>
                    <SideBarItem startContent={<HiOutlineUserCircle />} href='/dashboard/account'>Cuenta</SideBarItem>
                    <SideBarItem startContent={<HiOutlineArrowLeftOnRectangle />} href='/auth/signup'>Cerrar seccion</SideBarItem>
                </div>
            </div>
        </div>
    )
}

export default SideBar