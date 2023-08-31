'use client'

import Spinner from '@/components/spinner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useServices from '@/hook/useServices'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { BsCreditCard2Front, BsFillHouseFill, BsHouse, BsMailbox, BsPhone, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineArrowPath, HiOutlineEllipsisVertical } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'
import { BiUserCheck } from 'react-icons/bi'
import NavBar from '@/components/navbar/navbar'

const Page = () => {

    const { services, isLoading, reload } = useServices()

    return (
        <div className='dashboard__layout--content--other gap-6 p-6 bg-gray-100'>
            <div className=''>
                <div className='bg-white p-8 rounded-xl'>
                    <div className='flex flex-row flex-nowrap justify-between'>
                        <div></div>
                        <div className='flex flex-row flex-nowrap gap-2'>
                            <Button variant={'outline'} className='flex flex-row flex-nowrap gap-2' onClick={reload} size={'sm'}>
                                <HiOutlineArrowPath size={16} />
                                Refrescar
                            </Button>
                        </div>
                    </div>
                    {isLoading
                        ?
                        <Spinner />
                        :
                        <Table className='mt-4'>
                            <TableCaption>Lista de productos</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead>tecnico</TableHead>
                                    <TableHead>Medio de pago</TableHead>
                                    <TableHead>Estado</TableHead>
                                    <TableHead>Monto</TableHead>
                                    <TableHead className="text-right">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {services.map((item, index) => (
                                    <TableRow key={item.id} className='h-16'>
                                        <TableCell className="font-medium ">{index}</TableCell>
                                        <TableCell>
                                            <HoverCard>
                                                <HoverCardTrigger asChild>
                                                    <div className='flex flex-row flex-nowrap gap-3 cursor-pointer'>
                                                        <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center text-white font-semibold'>
                                                            {item?.clientName[0] + item?.clientName[1]}
                                                        </div>
                                                        <div className='flex flex-col flex-nowrap justify-center items-start'>
                                                            <span className='text-sm  hover:underline font-medium'>{item.clientName.toUpperCase().split(' ')[0]}</span>
                                                            <span className='text-xs'>{item.clientDni}</span>
                                                        </div>
                                                    </div>
                                                </HoverCardTrigger>
                                                <HoverCardContent asChild>
                                                    <div className='rounded-xl w-[300px]'>
                                                        <header className="flex justify-between w-full">
                                                            <div className='flex gap-3'>
                                                                <div className='h-12 w-12 bg-gray-400 text-white uppercase flex justify-center items-center rounded-full'>
                                                                    {item?.clientName[0] + item?.clientName[1]}
                                                                </div>
                                                                <div>
                                                                    <h4>{item?.clientName}</h4>
                                                                    <p className='text-xs text-gray-400'>cliente</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <a className='text-white  bg-green-600 h-8 w-8 rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center' style={{ backgroundColor: '4dc247' }} target='_blank' href={`https://wa.me/51${item?.clientPhoneNumber}`}>
                                                                    <BsWhatsapp size={16} color='#fff' />
                                                                </a>
                                                            </div>
                                                        </header>
                                                        <main className='py-4 px-2 flex flex-col gap-2'>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsHouse size={18} className='text-gray-500' /> {item?.clientAddress}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <HiOutlineMail size={18} className='text-gray-500' /> {item?.clientEmail}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsCreditCard2Front size={18} className='text-gray-500' /> {item?.clientDni}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsPhone size={18} className='text-gray-500' /> {item?.clientPhoneNumber}
                                                            </div>
                                                        </main>
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </TableCell>
                                        <TableCell>
                                            <HoverCard>
                                                <HoverCardTrigger asChild>
                                                    <div className='flex flex-row flex-nowrap gap-3 cursor-pointer'>
                                                        <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center text-white font-semibold'>
                                                            {item?.tecnico.firstName[0] + item?.tecnico.firstName[1]}
                                                        </div>
                                                        <div className='flex flex-col flex-nowrap justify-center items-start'>
                                                            <span className='text-sm hover:underline font-medium'>{item?.tecnico.firstName}</span>
                                                            <span className='text-xs'>{item?.tecnico.dni}</span>
                                                        </div>
                                                    </div>
                                                </HoverCardTrigger>
                                                <HoverCardContent asChild>
                                                    <div className='rounded-xl w-[300px]'>
                                                        <header className="flex justify-between w-full">
                                                            <div className='flex gap-3'>
                                                                <div className='h-12 w-12 bg-gray-400 text-white uppercase flex justify-center items-center rounded-full'>
                                                                    {item?.tecnico.firstName[0] + item?.tecnico.firstName[1]}
                                                                </div>
                                                                <div>
                                                                    <h4>{item?.clientName}</h4>
                                                                    <p className='text-xs text-gray-400'>tecnico</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <a className='text-white  bg-green-600 h-8 w-8 rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center' style={{ backgroundColor: '4dc247' }} target='_blank' href={`https://wa.me/51${item?.clientPhoneNumber}`}>
                                                                    <BsWhatsapp size={16} color='#fff' />
                                                                </a>
                                                            </div>
                                                        </header>
                                                        <main className='py-4 px-2 flex flex-col gap-2'>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsHouse size={18} className='text-gray-500' /> {item?.tecnico.address}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <HiOutlineMail size={18} className='text-gray-500' /> {item?.tecnico.email}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsCreditCard2Front size={18} className='text-gray-500' /> {item?.tecnico.dni}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <BsPhone size={18} className='text-gray-500' /> {item?.tecnico.phoneNumer}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <BiUserCheck size={18} className='text-gray-500' /> {item?.tecnico.role}
                                                            </div>

                                                        </main>
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </TableCell>
                                        <TableCell>
                                            <Badge>
                                                {item.medioPago}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {item.status
                                                ?
                                                <Badge>
                                                    {'Completo'}
                                                </Badge>
                                                :
                                                <Badge variant={'destructive'}>
                                                    {'Pendiente'}
                                                </Badge>
                                            }</TableCell>
                                        <TableCell>{'s/.'}{item.amount}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant={'outline'} >
                                                        <HiOutlineEllipsisVertical size={20} />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent >
                                                    <DropdownMenuItem asChild>
                                                        <Label htmlFor='alert-product' onClick={async () => {
                                                            const response = await toast.promise(fetch(`/api/v1/ticket-service/${item.id}`, { method: 'DELETE' }), {
                                                                loading: 'Cargando...',
                                                                success: 'Servico eliminada!',
                                                                error: 'Error innesperado, intente de nuevo.'
                                                            })
                                                            const data = await response.json()
                                                            if (data.success) {
                                                                reload()
                                                            }

                                                        }}>Eliminar</Label>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/dashboard/service/${item.id}`}>
                                                            Ver
                                                        </Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>}
                </div>
            </div>
            <div className=''>
                <div className='bg-white p-8 rounded-xl'>
                    asd
                </div>
            </div>
        </div >
    )
}

export default Page