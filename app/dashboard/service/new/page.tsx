'use client'

import memoryData from '../../../../lib/JSON/memoryRam.json'
import memoryGrafica from '../../../../lib/JSON/memoryGrafica.json'
import pantallaPulgadas from '../../../../lib/JSON/pantallaPulgadas.json'
import sistemasOperativos from '../../../../lib/JSON/sistemasOperativos.json'
import arrMetodoPago from '../../../../lib/JSON/metodoPago.json'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'react-hot-toast'
import useTypesService from '@/hook/useTypesService'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi2'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { GiTakeMyMoney } from 'react-icons/gi'
import { Separator } from '@/components/ui/separator'
import validForm from '@/lib/validForm'
import { useRouter } from 'next/navigation'

interface FichaProps {
    brand?: string
    model?: string
    case?: string
    procesador?: string
    memory?: string
    almacenamiento?: string
    grafica?: string
    memoryGrafica?: string
    pantalla?: string
    sistema?: string
    description: string
}
interface AdditionalPayments {
    name: string
    mount: number
}
interface clientProps {
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail?: string
}

const Page = () => {
    const router = useRouter()
    const { typesService } = useTypesService()
    const [loadingDni, setLoadingDni] = useState(false)
    const [serviceId, setServiceId] = useState('')
    const [ticket, setTicket] = useState({
        medioPago: '',
        description: ''
    })
    const [clientData, setClientData] = useState({
        clientName: '',
        clientDni: '',
        clientPhoneNumber: '',
        clientAddress: '',
    })

    const [additionalPayments, setAdditionalPayments] = useState<AdditionalPayments[]>([])

    const [uniqueAdditional, setUniqueAdditional] = useState({
        name: '',
        mount: 0
    })

    const [fichaData, setFichaData] = useState<FichaProps>({
        description: ''
    })

    const handleUniqueAdditional = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUniqueAdditional(state => ({ ...state, [name]: value }))
    }


    const handleTicketData = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setTicket(state => ({ ...state, [name]: value }))
    }
    const handleServiceId = ({ target: { value } }: { target: { value: string } }) => {
        setServiceId(value)
    }
    const handleClientData = async ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setClientData(state => ({ ...state, [name]: value }))
        if (name == 'clientDni' && value.length == 8) {
            setLoadingDni(true)
            const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${value}?token=${process.env.NEXT_PUBLIC_TOKEN_API_DNI}`)
            const { success, nombres, apellidoPaterno, apellidoMaterno } = await response.json()
            if (success) {
                setClientData(state => ({ ...state, clientName: nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno }))
            } else {
                toast.error('Dni invalido')
            }
            setLoadingDni(false)
        }
    }

    const handleFichaData = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setFichaData(state => ({ ...state, [name]: value }))
    }




    return (
        <div className='new__service__layout bg-gray-100'>
            <div className='rounded-xl p-8 bg-white flex flex-col gap-4'>
                <h1 className='text-3xl  font-semibold'>Nuevo servicio</h1>
                <form className='border border-gray-100 p-4 rounded-lg flex flex-col gap-2'>
                    <h2 className='text-xl my-4 caret_title'>Datos de cliente</h2>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>DNI <span className='text-xs text-red-400'>obligatorio</span></label>
                        <div className='relative'>
                            <Input placeholder='...' onChange={handleClientData} maxLength={8} autoComplete='off' value={clientData.clientDni} name='clientDni' />
                            {loadingDni && <div className='animate-spin h-5 w-5 rounded-full spinner-color absolute top-3 right-3'></div>}
                        </div>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Nombre completo <span className='text-xs text-red-400'>obligatorio</span></label>
                        <Input className='opacity-50' placeholder='...' autoComplete='off' value={clientData.clientName} readOnly disabled />
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Numero telefonico <span className='text-xs text-red-400'>obligatorio</span></label>
                        <Input placeholder='...' onChange={handleClientData} max={9} autoComplete='off' value={clientData.clientPhoneNumber} name='clientPhoneNumber' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Correo<span className='text-xs  text-primary'>opcional</span></label>
                            <Input placeholder='...' onChange={handleClientData} autoComplete='off' value={clientData.clientEmail} name='clientEmail' />
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Direccion <span className='text-xs text-red-400'>obligatorio</span></label>
                            <Input placeholder='...' onChange={handleClientData} autoComplete='off' value={clientData.clientAddress} name='clientAddress' />
                        </div>
                    </div>
                </form>
                <form className='border border-gray-100 p-4 rounded-lg flex flex-col gap-2'>
                    <h2 className='text-xl my-4 caret_title relative'>Ficha tecnica</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Marca <span className='text-xs text-primary'>opcional</span></label>
                            <Input placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.brand} name='brand' />
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Modelo <span className='text-xs text-primary'>opcional</span></label>
                            <Input placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.model} name='model' />
                        </div>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Case <span className='text-xs text-primary'>opcional</span></label>
                        <Input placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.case} name='case' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Procesador <span className='text-xs text-primary'>opcional</span></label>
                            <Input placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.procesador} name='procesador' />
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Memoria RAM <span className='text-xs text-primary'>opcional</span></label>
                            <select onChange={handleFichaData} value={fichaData?.memory} autoComplete='off' name='memory' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                <option selected hidden>Selecione una opcion</option>
                                {memoryData.map(item => item.capacidades.map(memo => <option key={item.tipo} value={item.tipo + ' ' + memo}>{item.tipo + ' ' + memo}</option>))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Tarjeta grafica <span className='text-xs text-primary'>opcional</span></label>
                        <Input placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.grafica} name='grafica' />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Memoria grafica <span className='text-xs text-primary'>opcional</span></label>
                            <select placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.memoryGrafica} name='memoryGrafica' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                <option selected hidden>Selecione una opcion</option>
                                {memoryGrafica.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Pantalla <span className='text-xs text-primary'>opcional</span></label>
                            <select placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.pantalla} name='pantalla' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                <option selected hidden>Selecione una opcion</option>
                                {pantallaPulgadas.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Sistema operativo<span className='text-xs text-primary'>opcional</span></label>
                            <select placeholder='...' onChange={handleFichaData} autoComplete='off' value={fichaData?.sistema} name='sistema' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                <option selected hidden>Selecione una opcion</option>
                                {sistemasOperativos.map(item => item.versiones.map(so => <option key={item.nombre + so} value={item.nombre + ' ' + so}>{item.nombre + ' ' + so}</option>))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Observaciones <span className='text-xs text-red-400'>obligatorio</span></label>
                        <Textarea placeholder='...' onChange={handleFichaData} value={fichaData?.description} name='description' />
                    </div>
                </form>

                <form className='border border-gray-100 p-4 rounded-lg flex flex-col gap-2'>
                    <h2 className='text-xl my-4 caret_title relative'>Detalles de servicio</h2>

                    <div>
                        <label className='flex items-center gap-2 text-sm'>Tipo de servicio <span className='text-xs text-red-400'>obligatorio</span></label>
                        <select placeholder='...' onChange={handleServiceId} autoComplete='off' value={serviceId} className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                            <option selected hidden>Selecione una opcion</option>
                            {typesService.map(item => <option key={item} value={item.id}>{item.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Pagos Adicionales <span className='text-xs text-primary'>opcional</span></label>

                        <div className='grid grid-cols-4 gap-3 items-center'>
                            {additionalPayments.map(item =>
                                <div key={item.name} className='border border-gray-100 flex flex-row px-4 py-2 gap-4 rounded-lg'>
                                    <div className='h-16 w-16 rounded-full flex justify-center items-center bg-primary-50 text-primary '>
                                        <GiTakeMyMoney size={40} />
                                    </div>
                                    <div>
                                        <p className='text-sm'>{item.name}</p>
                                        <p>{item.mount} <span className="ml-1 text-xs font-normal text-gray-400">PEN</span></p>
                                    </div>
                                </div>
                            )}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button className='bg-primary h-10 w-10 rounded-full flex justify-center items-center'>
                                        <HiPlus size={20} color='#fff' />
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Agregar pago adicional</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Dichos pagos son adicionales a servicio.
                                            <div>
                                                <label className='flex items-center gap-2 text-sm'>Nombre del adicional <span className='text-xs text-red-400'>obligatorio</span></label>
                                                <Input placeholder='...' onChange={handleUniqueAdditional} autoComplete='off' value={uniqueAdditional.name} name='name' />
                                            </div>
                                            <div>
                                                <label className='flex items-center gap-2 text-sm'>Monto del adicional <span className='text-xs text-red-400'>obligatorio</span></label>
                                                <Input placeholder='...' onChange={handleUniqueAdditional} type='number' autoComplete='off' value={uniqueAdditional.mount} name='mount' />
                                            </div>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel onClick={() => {
                                            setUniqueAdditional({
                                                name: '',
                                                mount: 0
                                            })
                                        }}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => {
                                            setAdditionalPayments(state => ([...state, uniqueAdditional]))
                                            setUniqueAdditional({
                                                name: '',
                                                mount: 0
                                            })
                                        }}>Agregar</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </form>

            </div>
            <div className='rounded-xl p-8 bg-white sticky top-10'>
                <h2 className='text-xl my-4 caret_title relative'>Resumen se servicio</h2>
                {/* ... */}

                <div className='flex justify-between text-primary my-2'>
                    <p className='font-semibold'>SubTotal</p>
                    <p>
                        {serviceId != '' ? typesService.find(item => item.id == serviceId)?.price : 0}
                        <span className="ml-1 text-xs font-normal text-gray-400">PEN</span></p>
                </div>
                <Separator />
                {additionalPayments.map(item =>
                    <div key={item.name} className='flex justify-between text-primary my-2'>
                        <p className='font-semibold'>{item.name}</p>
                        <p>{item.mount}<span className="ml-1 text-xs font-normal text-gray-400">PEN</span></p>
                    </div>

                )}
                <Separator />
                <div className='flex justify-between text-primary my-4'>
                    <p className='font-semibold'>Total</p>
                    <p>

                        {serviceId != '' ? Number(typesService.find(item => item.id == serviceId)?.price) + Number(additionalPayments.reduce((acumulador, actual) => { return acumulador + actual.mount }, 0)) : 0}
                        <span className="ml-1 text-xs font-normal text-gray-400">PEN</span></p>
                </div>

                <div className='flex flex-col gap-2'>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Metodo de pago<span className='text-xs text-red-400'>obligatorio</span></label>
                        <select placeholder='...' onChange={handleTicketData} name='medioPago' value={ticket.medioPago} className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                            <option selected hidden>Selecione una opcion</option>
                            {arrMetodoPago.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className='flex items-center gap-2 text-sm'>Descripcion <span className='text-xs text-red-400'>obligatorio</span></label>
                        <Textarea placeholder='...' onChange={handleTicketData} name='description' value={ticket.description} />
                    </div>
                    <Button onClick={async () => {
                        const response = await toast.promise(fetch('/api/v1/ticket-service', {
                            method: 'POST', body: JSON.stringify({
                                cliente: clientData,
                                ticket: {
                                    ...ticket,
                                    additionalPayments
                                },
                                ficha: fichaData,
                                serviceId
                            })
                        }), {
                            loading: 'Cargando...',
                            success: 'Servicio guardado!',
                            error: 'Error innesperado, intente de nuevo'
                        })

                        const { success, data } = await response.json()
                        if (!success) {
                            toast.error('API en conflicto')
                        } else {
                            router.push(`/dashboard/service/${data.id}`)
                        }

                    }} disabled={!validForm({ props: { a: clientData.clientAddress, b: clientData.clientDni, c: clientData.clientName, d: clientData.clientPhoneNumber, serviceId, d: fichaData?.description, ...ticket }, compare: '&&' })}>Generar servicio</Button>
                </div>
            </div>
        </div >
    )
}

export default Page