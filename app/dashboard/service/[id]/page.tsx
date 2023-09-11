'use client'
import Spinner from '@/components/spinner'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Prisma } from '@prisma/client'
import React, { useEffect, useRef, useState } from 'react'
import { GiTakeMyMoney } from 'react-icons/gi'
import { FaReceipt } from 'react-icons/fa'
import ReactToPrint from 'react-to-print';
import { Button } from '@/components/ui/button'
import useStore from '@/store/useStore'


const Page = ({ params: { id: id_service } }: { params: { id: string } }) => {

    const [ticket, setTicket] = useState<Prisma.TicketServicioSelect>()
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const componentPrint1 = useRef(null)
    const { empresa } = useStore()

    useEffect(() => {
        const getTicket = async () => {
            setIsLoading(true)
            const response = await fetch(`/api/v1/ticket-service/${id_service}`)
            const { data } = await response.json()
            setTicket(data)
            setIsLoading(false)

        }
        getTicket()
    }, [id_service])

    return (

        <div className='dashboard__layout--content  bg-gray-100'>

            <main className=' p-8 service_payment relative'>
                <Tabs defaultValue="detaills" className="w-full h-full">
                    <TabsList className=" flex flex-row flex-nowrap justify-center">
                        <div className='grid grid-cols-2 bg-gray-100 border border-white  p-1 rounded-lg'>
                            <TabsTrigger value="detaills">Detalles</TabsTrigger>
                            <TabsTrigger value="print">Imprimir</TabsTrigger>
                        </div>
                    </TabsList>
                    <TabsContent value="detaills" className='h-full px-4 w-full bg-gray-100'>
                        {isLoading
                            ?
                            <div className='flex justify-center h-full items-center'>
                                <Spinner />
                            </div>
                            :
                            <>
                                <div className='grid grid-cols-3 gap-6 my-4'>
                                    <div className='rounded-xl col-span-2 p-8  bg-white'>
                                        <h2 className='text-xl flex items-center mb-2 gap-4  font-semibold caret_title relative'>Ticket servicio {ticket?.status
                                            ?
                                            <span className='p-1 bg-green-200 text-green-800 rounded-lg text-xs'>Completo</span>
                                            :
                                            <span className='text-xs p-1 bg-red-200 text-red-800 rounded-lg'>Pendiente</span>
                                        }
                                        </h2>
                                        <p className='text-xs text-gray-400'>ID: {ticket?.id}</p>
                                        <p className='text-xs text-gray-400'>CREACION: {ticket?.createAt}</p>
                                        <Separator className='my-4' />

                                        <div className='grid grid-cols-2 gap-8'>
                                            <div className='border border-gray-100 p-4 rounded-lg'>
                                                <h3 className='text-lg'>Datos del cliente</h3>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Nombres</h4>
                                                    <p>{ticket?.clientName}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>DNI</h4>
                                                    <p>{ticket?.clientDni}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Numero telefonico</h4>
                                                    <p>{ticket?.clientPhoneNumber}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Correo</h4>
                                                    <p>{ticket?.clientEmail}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Direccion</h4>
                                                    <p>{ticket?.clientAddress}</p>
                                                </div>
                                            </div>
                                            <div className='border border-gray-100 p-4 rounded-lg'>
                                                <h3 className='text-lg'>Datos del tecnico</h3>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Nombres</h4>
                                                    <p>{ticket?.tecnico.fullName}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>DNI</h4>
                                                    <p>{ticket?.tecnico.dni}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Numero telefonico</h4>
                                                    <p>{ticket?.tecnico.phoneNumer}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Correo</h4>
                                                    <p>{ticket?.tecnico.email}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Direccion</h4>
                                                    <p>{ticket?.tecnico.address}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className='text-lg my-4  font-semibold caret_title relative'>Servicio</h2>
                                        <div className='grid grid-cols-2'>
                                            <div className='border border-gray-100 p-4  rounded-lg'>
                                                <h3 className='text-lg'>Datos del servicio</h3>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>ID</h4>
                                                    <p>{ticket?.DetalleServicio.servicio.id}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Nombre de servicio</h4>
                                                    <p>{ticket?.DetalleServicio.servicio.name}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Duracion</h4>
                                                    <p>{ticket?.DetalleServicio.servicio.duration} <span className="ml-1 text-xs font-normal text-gray-400">MIN</span></p>
                                                </div>
                                            </div>

                                        </div>
                                        <Separator className='my-4' />
                                        <h2 className='text-lg my-4  font-semibold caret_title relative'>Gastos adicionales</h2>
                                        <div className='grid grid-cols-3'>
                                            {ticket?.additionalPayments.map(item =>
                                                <div key={item.id} className='border border-gray-100 flex flex-row p-4 gap-4 rounded-lg'>
                                                    <div className='h-16 w-16 rounded-full flex justify-center items-center bg-primary-50 text-primary '>
                                                        <GiTakeMyMoney size={40} />
                                                    </div>
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p>{item.mount} <span className="ml-1 text-xs font-normal text-gray-400">PEN</span></p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='rounded-xl p-8 bg-white'>
                                            <h2 className='text-xl  font-semibold caret_title relative'>Ficha tecnica</h2>
                                            <Separator className='my-4' />
                                            <div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>ID</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.id}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Marca</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.brand}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Modelo</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.model}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Case</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.case}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Procesador</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.procesador}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Memoria RAM</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.memory}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Almacenamiento</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.almacenamiento}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Grafica</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.grafica}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Memoria grafica</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.memoryGrafica}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Pantalla</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.pantalla}</p>
                                                </div>
                                                <div className='text-sm text-gray-400 flex justify-between'>
                                                    <h4>Sistema operativo</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.sistema}</p>
                                                </div>
                                                <div className='text-sm text-gray-400'>
                                                    <h4>Observaciones:</h4>
                                                    <p>{ticket?.DetalleServicio.ficha.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='rounded-xl p-8 bg-white'>
                                            <h2 className='text-xl  font-semibold caret_title relative'>Linea del tiempo</h2>

                                            <div className='my-4'>
                                                <ol className="relative border-l border-gray-200">
                                                    <li className="mb-10 ml-4">
                                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                                                        <div className='flex gap-4'>
                                                            <div className='flex justify-center items-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-500'>
                                                                <FaReceipt size={35} />
                                                            </div>
                                                            <div>
                                                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{(new Date(ticket?.createAt)).toLocaleDateString("en-US")}</time>
                                                                <h3 className="font-semibold text-gray-900">Dia de recepcion</h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* <li className="ml-4">
                                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
                                                        <h3 className="font-semibold text-gray-900 ">E-Commerce UI code in Tailwind CSS</h3>
                                                    </li> */}
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        }
                    </TabsContent>
                    <TabsContent value="print" className='h-full w-full bg-white p-8 rounded-2xl'>
                        <ReactToPrint trigger={() => <Button>Imprimir</Button>}
                            content={() => componentPrint1.current}
                        />
                        <div ref={componentPrint1}>
                            <div className="max-w-[14rem] p-1  mx-auto border border-gray-100">
                                <div className="flex flex-col shadow-none rounded-none p-2">
                                    <h3 className='text-xl text-center font-semibold'>Servicio</h3>
                                    <div className='text-center'>
                                        <span className="mt-1 text-xs block font-medium text-black">{ticket?.id}</span>

                                        <div className="flex flex-col  font-medium not-italic text-xs  text-black ">
                                            <span>
                                                R.U.C. :{empresa.ruc}
                                            </span>
                                            <span>
                                                {empresa.province}{' - '}{empresa.departament}{' - '}{empresa.country}
                                            </span>
                                            <span>
                                                Tel. :{empresa.phoneNumber}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <h3 className='text-center'>Datos de cliente</h3>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>DNI</h4>
                                            <p className='text-xs font-semibold'>{ticket?.clientDni}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>Nombres:</h4>
                                            <p className='text-xs font-semibold text-right'>{ticket?.clientName}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>Tel.</h4>
                                            <p className='text-xs font-semibold'>{ticket?.clientPhoneNumber}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>Direccion</h4>
                                            <p className='text-xs font-semibold text-right'>{ticket?.clientAddress}</p>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h3 className='text-center'>Datos del Tecnico</h3>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>Nombres</h4>
                                            <p className='text-xs font-semibold text-right'>{ticket?.tecnico.fullName}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>DNI</h4>
                                            <p className='text-xs font-semibold text-right'>{ticket?.tecnico.dni}</p>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h3 className='text-center'>Datos del Servicio</h3>
                                        <div className='flex justify-between'>
                                            <h4 className='text-xs font-medium'>Tipo</h4>
                                            <p className='text-xs font-semibold text-right'>{ticket?.DetalleServicio.servicio.name}</p>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h3 className='text-center'>Datos Ficha</h3>
                                        <div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Marca</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.brand}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Modelo</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.model}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Case</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.case}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Procesador</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.procesador}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Memoria RAM</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.memory}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Almacenamiento</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.almacenamiento}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Grafica</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.grafica}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Memoria grafica</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.memoryGrafica}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Pantalla</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.pantalla}</p>
                                            </div>
                                            <div className='text-xs font-medium flex justify-between'>
                                                <h4>Sistema operativo</h4>
                                                <p className='text-right'>{ticket?.DetalleServicio.ficha.sistema}</p>
                                            </div>
                                            <div className='text-xs '>
                                                <h4>Observaciones:</h4>
                                                <p>{ticket?.DetalleServicio.ficha.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='text-lg mt-6 font-medium italic text-center '>Gracias por su preferencia!</h4>
                                </div>

                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

export default Page