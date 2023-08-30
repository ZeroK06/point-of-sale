'use client'
import Spinner from '@/components/spinner'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Prisma } from '@prisma/client'
import { useRouter } from 'next/navigation'
import ReactToPrint from 'react-to-print';
import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import useStore from '@/store/useStore'
import { HiOutlineDeviceMobile } from 'react-icons/hi'

const Page = ({ params: { id } }: { params: { id: string } }) => {

    const [sale, setSale] = useState<Prisma.TicketVentaSelect>()
    const componentPrint1 = useRef(null)
    const componentPrint3 = useRef(null)
    const [error, setError] = useState<boolean>()
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const router = useRouter()
    useEffect(() => {
        if (id.length == 24) {
            const getSale = async () => {
                setIsLoading(true)
                const response = await fetch(`/api/v1/ticket-sale/${id}`)
                const data = await response.json()
                if (data.success) {
                    setError(data.success)
                }
                setSale(data.data)
                setIsLoading(false)
            }
            getSale()
        } else {
            router.push('/dashboard')
        }
    }, [])

    const { empresa } = useStore()

    return (
        <div className='dashboard__layout--content  overflow-y-scroll bg-gray-100'>
            <header className='py-4 px-6 border-b-gray-100 mx-8 border-b-2'>
                asdasd
            </header>
            <main className=' p-8 bill_payment relative'>
                <div className='bg-white p-8 rounded-xl'>
                    <Tabs defaultValue="detaills" className="w-full h-full">
                        <TabsList className="w-full flex flex-row flex-nowrap bg-white justify-center">
                            <div className='grid grid-cols-2 bg-gray-100 p-1 rounded-lg'>
                                <TabsTrigger value="detaills">Detalles</TabsTrigger>
                                <TabsTrigger value="print">Imprimir</TabsTrigger>
                            </div>
                        </TabsList>
                        <TabsContent value="detaills" className='h-full px-4 w-full'>
                            {isLoading
                                ?
                                <div className='flex justify-center h-full items-center'>
                                    <Spinner />
                                </div>
                                :
                                <>
                                    <h1 className='text-2xl font-semibold'>Ticket de venta</h1>
                                    <span className='text-xs'>{sale?.id}</span>
                                    <br />
                                    <span className='text-xs'>{sale?.createAt}</span>
                                    <Separator className='my-4' />
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <h2 className='text-lg font-semibold'>Datos de cliente:</h2>
                                            <span className='text-xs'>Nombres: {sale?.clientName}</span>
                                            <br />
                                            <span className='text-xs'>Dni: {sale?.clientDni}</span>
                                            <br />
                                            <span className='text-xs'>Telefono: {sale?.clientPhoneNumber}</span>
                                            <br />
                                            <span className='text-xs'>Correo: {sale?.clientEmail}</span>
                                            <br />
                                            <span className='text-xs'>Direccion: {sale?.clientAddress}</span>
                                        </div>
                                        <div>
                                            <h2 className='text-lg font-semibold'>Datos de vendedor:</h2>
                                            <span className='text-xs'>Nombres: {sale?.vendedor.firstName}</span>
                                            <br />
                                            <span className='text-xs'>Dni: {sale?.vendedor.dni}</span>
                                            <br />
                                            <span className='text-xs'>Telefono: {sale?.vendedor.phoneNumer}</span>
                                            <br />
                                            <span className='text-xs'>Correo: {sale?.vendedor.email}</span>
                                            <br />
                                            <span className='text-xs'>Direccion: {sale?.vendedor.address}</span>
                                        </div>
                                    </div>
                                    <Separator className='my-4' />
                                    <h2 className='text-lg font-semibold'>Lista de productos:</h2>
                                    <Table className='mt-4'>
                                        <TableCaption>Lista de productos</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[50px]">ID</TableHead>
                                                <TableHead>Imagen</TableHead>
                                                <TableHead>Nombre</TableHead>
                                                <TableHead>Marca</TableHead>
                                                <TableHead>Modelo</TableHead>
                                                <TableHead>Categoria</TableHead>
                                                <TableHead>Precio c/u.</TableHead>
                                                <TableHead>Unidades</TableHead>
                                                <TableHead className="text-right">Precio total</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {sale?.DetalleVenta.map((item, index) => (
                                                <TableRow key={item.id} className='h-16'>
                                                    <TableCell className="font-medium ">{index}</TableCell>
                                                    <TableCell>
                                                        {item.producto.urlImage == 'N/A' ? item.producto.urlImage :
                                                            <img src={item.producto.urlImage} className='h-10 w-10 object-cover rounded-lg' />
                                                        }
                                                    </TableCell>
                                                    <TableCell>{item.producto.shortName}</TableCell>
                                                    <TableCell>{item.producto.brand}</TableCell>
                                                    <TableCell>{item.producto.model}</TableCell>
                                                    <TableCell>
                                                        <Badge>
                                                            {item.producto.categoria?.name}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{'s/.'}{item.producto.price}</TableCell>
                                                    <TableCell>{item.units}</TableCell>
                                                    <TableCell className="text-right font-semibold">{'s/.'}{item.producto.price * item.units}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </>
                            }
                        </TabsContent>
                        <TabsContent value="print" className='h-full w-full'>
                            <Tabs defaultValue="sm" className="w-full h-full mt-3">
                                <TabsList className='w-full flex flex-row flex-nowrap bg-white justify-center'>
                                    <div className='grid grid-cols-2 bg-gray-100 p-1 rounded-lg'>
                                        <TabsTrigger value="sm" asChild>
                                            <div className='flex flex-col items-center'>
                                                <HiOutlineDeviceMobile />
                                                sm
                                            </div>
                                        </TabsTrigger>

                                        <TabsTrigger value="lg" asChild>
                                            <div className='flex flex-col items-center'>
                                                <HiOutlineDeviceMobile />
                                                lg
                                            </div>
                                        </TabsTrigger>
                                    </div>
                                </TabsList>
                                <TabsContent value="sm">
                                    <ReactToPrint trigger={() => <Button>Print</Button>}
                                        content={() => componentPrint1.current}
                                    />
                                    <div ref={componentPrint1}>

                                        <div className="max-w-[20rem] p-0  mx-auto border border-gray-100">
                                            <div className="flex flex-col shadow-none rounded-none p-2">
                                                <div className="flex flex-col justify-between">
                                                    <div className='flex flex-col items-center'>
                                                        <img src={empresa?.urlImage} alt="" className='w-20' />

                                                        <h1 className="mt-1 text-base font-semibold text-primary ">{empresa.razon}</h1>
                                                    </div>

                                                    <div className="text-center">
                                                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Boleta #</h2>
                                                        <span className="mt-1 block text-gray-500">{sale?.id}</span>

                                                        <address className="mt-2 text-sm not-italic text-gray-800 dark:text-gray-200">
                                                            {empresa.ruc}<br />
                                                            {empresa.province}<br />
                                                            {empresa.departament}<br />
                                                            {empresa.country}<br />
                                                            {empresa.address}<br />
                                                        </address>
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex flex-col gap-3">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Cliente:</h3>
                                                        <div className='flex text-xs justify-between'>
                                                            <h3>Nombres</h3>
                                                            <p>{sale?.clientName}</p>
                                                        </div>
                                                        <div className='flex text-xs justify-between'>
                                                            <h3>DNI</h3>
                                                            <p>{sale?.clientDni}</p>
                                                        </div>
                                                        <div className='flex text-xs justify-between'>
                                                            <h3>Telefono</h3>
                                                            <p>{sale?.clientPhoneNumber}</p>
                                                        </div>
                                                        <div className='flex text-xs justify-between'>
                                                            <h3>Correo</h3>
                                                            <p>{sale?.clientEmail}</p>
                                                        </div>
                                                        <div className='flex text-xs justify-between'>
                                                            <h3>Direccion</h3>
                                                            <p>{sale?.clientAddress}</p>
                                                        </div>
                                                    </div>

                                                    <div className=" space-y-2">
                                                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                            <dl className="flex flex-row flex-nowrap justify-between">
                                                                <dt className=" font-semibold tesxt-gray-800 dark:text-gray-200">Fecha boleta:</dt>
                                                                <dd className=" text-gray-500">{(new Date(sale?.createAt)).toLocaleDateString("en-US")}</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                                        <div className="hidden sm:grid sm:grid-cols-5">
                                                            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                                                            <div className="text-left text-xs font-medium text-gray-500 uppercase">Cant.</div>
                                                            <div className="text-left text-xs font-medium text-gray-500 uppercase">Precio</div>
                                                            <div className="text-right text-xs font-medium text-gray-500 uppercase">Total</div>
                                                        </div>

                                                        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
                                                        {sale?.DetalleVenta.map(item =>
                                                            <>
                                                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                                    <div className="col-span-full sm:col-span-2">
                                                                        <p className="text-xs break-words font-medium text-gray-800 dark:text-gray-200">{item.producto.shortName}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-800 dark:text-gray-200">{item.units}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-800 dark:text-gray-200">{item.producto.price}
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-right text-gray-800 dark:text-gray-200">{item.producto.price * item.units}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>
                                                            </>
                                                        )}



                                                    </div>
                                                </div>

                                                <div className="mt-8 flex sm:justify-end">
                                                    <div className="w-full max-w-2xl sm:text-right space-y-2">
                                                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                                                                <dd className="col-span-2 text-gray-500">{sale?.amount}
                                                                    <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                                                                </dd>
                                                            </dl>

                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                                                                <dd className="col-span-2 text-gray-500">{sale?.amount}
                                                                    <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                                                                </dd>
                                                            </dl>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 sm:mt-12">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">¡Gracias!</h4>
                                                    <p className="text-gray-500">Si tiene alguna pregunta sobre esta factura, utilice la siguiente información de contacto:</p>
                                                    <div className="mt-2">
                                                        <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">{empresa.email}</p>
                                                        <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">{empresa.phoneNumber}</p>
                                                    </div>
                                                </div>

                                                <p className="mt-5 text-sm text-gray-500">© 2022 Preline.</p>
                                            </div>


                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="lg">

                                    <ReactToPrint trigger={() => <Button>Print</Button>}
                                        content={() => componentPrint3.current}
                                    />
                                    <div ref={componentPrint3}>

                                        <div className="max-w-[85rem] p-0 md:px-6 lg:px-8 mx-auto my-4 md:my-10">
                                            <div className="flex flex-col p-0 shadow-none rounded-none md:p-10 bg-white md:shadow-md md:rounded-xl dark:bg-gray-800">
                                                <div className="flex justify-between">
                                                    <div>
                                                        {/* <svg className="w-10 h-10" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12" className="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                                        <path d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12" className="stroke-blue-600 dark:stroke-white" stroke="currentColor" stroke-width="2" />
                                                        <circle cx="13" cy="13.0214" r="5" fill="currentColor" className="fill-blue-600 dark:fill-white" />
                                                    </svg> */}
                                                        <img src={empresa?.urlImage} alt="" className='w-20' />

                                                        <h1 className="mt-2 text-lg md:text-xl font-semibold text-primary dark:text-white">{empresa.razon}</h1>
                                                    </div>

                                                    <div className="text-right">
                                                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice #</h2>
                                                        <span className="mt-1 block text-gray-500">{sale?.id}</span>

                                                        <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                                                            45 Roker Terrace<br />
                                                            Latheronwheel<br />
                                                            KW5 8NW, London<br />
                                                            United Kingdom<br />
                                                        </address>
                                                    </div>
                                                </div>

                                                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Comprador:</h3>
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{sale?.clientName}</h3>
                                                        <address className="mt-2 not-italic text-gray-500">
                                                            {sale?.clientDni}<br />
                                                            {sale?.clientPhoneNumber}<br />
                                                            {sale?.clientEmail}<br />
                                                            {sale?.clientAddress}<br />
                                                        </address>
                                                    </div>

                                                    <div className="sm:text-right space-y-2">
                                                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Fecha boleta:</dt>
                                                                <dd className="col-span-2 text-gray-500">{(new Date(sale?.createAt)).toLocaleDateString("en-US")}</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                                        <div className="hidden sm:grid sm:grid-cols-5">
                                                            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                                                            <div className="text-left text-xs font-medium text-gray-500 uppercase">Cant.</div>
                                                            <div className="text-left text-xs font-medium text-gray-500 uppercase">Rate</div>
                                                            <div className="text-right text-xs font-medium text-gray-500 uppercase">Precio</div>
                                                        </div>

                                                        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                            <div className="col-span-full sm:col-span-2">
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                                                                <p className="font-medium text-gray-800 dark:text-gray-200">Design UX and UI</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">1</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">5</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                                                <p className="sm:text-right text-gray-800 dark:text-gray-200">$500</p>
                                                            </div>
                                                        </div>

                                                        <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

                                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                            <div className="col-span-full sm:col-span-2">
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                                                                <p className="font-medium text-gray-800 dark:text-gray-200">Web project</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">1</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">24</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                                                <p className="sm:text-right text-gray-800 dark:text-gray-200">$1250</p>
                                                            </div>
                                                        </div>

                                                        <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

                                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                            <div className="col-span-full sm:col-span-2">
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                                                                <p className="font-medium text-gray-800 dark:text-gray-200">SEO</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">1</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                                                                <p className="text-gray-800 dark:text-gray-200">6</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                                                                <p className="sm:text-right text-gray-800 dark:text-gray-200">$2000</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 flex sm:justify-end">
                                                    <div className="w-full max-w-2xl sm:text-right space-y-2">
                                                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                                                                <dd className="col-span-2 text-gray-500">$2750.00</dd>
                                                            </dl>

                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                                                                <dd className="col-span-2 text-gray-500">$2750.00</dd>
                                                            </dl>

                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Tax:</dt>
                                                                <dd className="col-span-2 text-gray-500">$39.00</dd>
                                                            </dl>

                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Amount paid:</dt>
                                                                <dd className="col-span-2 text-gray-500">$2789.00</dd>
                                                            </dl>

                                                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                                                <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due balance:</dt>
                                                                <dd className="col-span-2 text-gray-500">$0.00</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 sm:mt-12">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
                                                    <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                                                    <div className="mt-2">
                                                        <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">example@site.com</p>
                                                        <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">+1 (062) 109-9222</p>
                                                    </div>
                                                </div>

                                                <p className="mt-5 text-sm text-gray-500">© 2022 Preline.</p>
                                            </div>


                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>

                        </TabsContent>
                    </Tabs>
                </div>
                <div className='bg-white p-8  rounded-xl sticky top-10 left-0 h-[400px] min-h-[400px]'>
                    {isLoading
                        ?
                        <div className='flex justify-center h-full items-center'>
                            <Spinner />
                        </div>
                        :
                        <>
                            <h1 className='text-2xl font-semibold'>Resumen de venta</h1>
                            <br />
                            <span className='flex flex-row flex-nowrap justify-between mb-2'>Medio de pago:
                                <Badge>
                                    {sale?.medioPago}
                                </Badge>
                            </span>
                            <span className='flex flex-row flex-nowrap justify-between'>Estado de compra:{' '}
                                {sale?.status
                                    ?
                                    <Badge>{'Completado'}</Badge>
                                    :
                                    <Badge variant={'destructive'}>{'Pendiente'}</Badge>
                                }
                            </span>
                            <Separator className='my-4' />
                            <span className='flex flex-row flex-nowrap justify-between mb-2 text-primary text-xl'>PAGO TOTAL:
                                <label className='font-semibold'>
                                    {'s/. '}{sale?.amount}
                                </label>
                            </span>
                        </>
                    }
                </div>
            </main>
        </div>
    )
}

export default Page