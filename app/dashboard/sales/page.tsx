'use client'
import Spinner from '@/components/spinner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useSales from '@/hook/useSales'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { BsWhatsapp } from 'react-icons/bs'
import { HiMiniPlusSmall, HiOutlineArrowPath, HiOutlineEllipsisVertical } from 'react-icons/hi2'


const Page = () => {

    const { sales, isLoading, reload } = useSales()

    return (
        <div className='dashboard__layout--content--other  overflow-y-scroll bg-gray-100'>
            <div className='bg-white p-8 rounded-xl'>
                <div className='flex flex-row flex-nowrap justify-between'>
                    <div></div>
                    <div className='flex flex-row flex-nowrap gap-2'>
                        <Button variant={'outline'} className='flex flex-row flex-nowrap gap-2' size={'sm'} onClick={reload}>
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
                                <TableHead>Vendedor</TableHead>
                                <TableHead>Medio de pago</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Monto</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sales.map((item, index) => (
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
                                                <div className="rounded-2xl py-3">
                                                    <div className="photo-wrapper p-2">
                                                        <div className='h-24 w-24 rounded-full mx-auto flex justify-center items-center text-white bg-gray-300'>
                                                            {item?.clientName[0] + item?.clientName[1]}
                                                        </div>
                                                    </div>
                                                    <div className="p-2">
                                                        <h3 className="text-center text-lg text-gray-900 font-medium leading-8">{item?.clientName.toUpperCase()}</h3>
                                                        <div className="text-center text-gray-400 text-xs font-semibold">
                                                            <p>{item.clientDni}</p>
                                                        </div>
                                                        <table className="text-xs my-3">
                                                            <tbody><tr>
                                                                <td className="px-2 py-2 text-gray-500 font-semibold">Direccion</td>
                                                                <td className="px-2 py-2">{item.clientAddress}</td>
                                                            </tr>
                                                                <tr>
                                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Telefono</td>
                                                                    <td className="px-2 py-2">{'+51 '}{item.clientPhoneNumber}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Correo</td>
                                                                    <td className="px-2 py-2">{item.clientEmail}</td>
                                                                </tr>
                                                            </tbody></table>

                                                        <div className="text-center my-3">
                                                            <a href={`http://wa.me/51${item.clientPhoneNumber}`} target="_blank" rel="noopener noreferrer" className=' flex gap-3 flex-row flex-nowrap py-2 px-4 justify-center items-center rounded-xl  w-full text-white bg-green-500'>
                                                                <BsWhatsapp size={20} />
                                                                Whatsapp
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </TableCell>
                                    <TableCell>
                                        <HoverCard>
                                            <HoverCardTrigger asChild>
                                                <div className='flex flex-row flex-nowrap gap-3 cursor-pointer'>
                                                    <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center text-white font-semibold'>
                                                        {item?.vendedor.firstName[0] + item?.vendedor.firstName[1]}
                                                    </div>
                                                    <div className='flex flex-col flex-nowrap justify-center items-start'>
                                                        <span className='text-sm hover:underline font-medium'>{item?.vendedor.firstName}</span>
                                                        <span className='text-xs'>{item?.vendedor.dni}</span>
                                                    </div>
                                                </div>
                                            </HoverCardTrigger>
                                            <HoverCardContent asChild>
                                                <div className="rounded-2xl py-3">
                                                    <div className="photo-wrapper p-2">
                                                        <div className='h-24 w-24 rounded-full mx-auto flex justify-center items-center text-white bg-gray-300'>
                                                            {item?.vendedor.firstName[0] + item?.vendedor.firstName[1]}
                                                        </div>
                                                    </div>
                                                    <div className="p-2">
                                                        <h3 className="text-center text-lg text-gray-900 font-medium leading-8">{item?.vendedor.firstName}</h3>
                                                        <div className="text-center text-gray-400 text-xs font-semibold">
                                                            <p>{item?.vendedor.dni}</p>
                                                        </div>
                                                        <table className="text-xs my-3">
                                                            <tbody><tr>
                                                                <td className="px-2 py-2 text-gray-500 font-semibold">Direccion</td>
                                                                <td className="px-2 py-2">{item?.vendedor.address}</td>
                                                            </tr>
                                                                <tr>
                                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Telefono</td>
                                                                    <td className="px-2 py-2">{'+51 '}{item?.vendedor.phoneNumer}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Correo</td>
                                                                    <td className="px-2 py-2">{item?.vendedor.email}</td>
                                                                </tr>
                                                            </tbody></table>

                                                        <div className="text-center my-3">
                                                            <a href={`http://wa.me/51${item?.vendedor.phoneNumer}`} target="_blank" rel="noopener noreferrer" className=' flex gap-3 flex-row flex-nowrap py-2 px-4 justify-center items-center rounded-xl  w-full text-white bg-green-500'>
                                                                <BsWhatsapp size={20} />
                                                                Whatsapp
                                                            </a>
                                                        </div>
                                                    </div>
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
                                                        const response = await toast.promise(fetch(`/api/v1/ticket-sale/${item.id}`, { method: 'DELETE' }), {
                                                            loading: 'Cargando...',
                                                            success: 'Venta eliminada!',
                                                            error: 'Error innesperado, intente de nuevo.'
                                                        })
                                                        const data = await response.json()
                                                        if (data.success) {
                                                            reload()
                                                        }

                                                    }}>Eliminar</Label>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/sales/${item.id}`}>
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
            <div className='bg-white p-8 rounded-xl'>
                asd
            </div>
        </div>
    )
}

export default Page