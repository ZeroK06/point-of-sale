'use client'

import Spinner from '@/components/spinner'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useProducts from '@/hook/useProducts'
import { getDataDni } from '@/lib/getDataDni'
import validForm from '@/lib/validForm'
import { Prisma } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import arrMetodoPago from '../../../../lib/JSON/metodoPago.json'

interface CartItemProps {
    id: string
    name: string
    price: string
    count: number
    image: string
}

const Page = () => {

    const router = useRouter()
    const { products, isLoading } = useProducts()
    const [cart, setCart] = useState<CartItemProps[]>([])
    const [search, setSearch] = useState('')
    const [send, setSend] = useState(0)
    const [descuento, setDescuento] = useState(0)
    const [clienteData, setClienteData] = useState({
        clientName: "",
        clientDni: "",
        clientPhoneNumber: "",
        clientAddress: "",
        clientEmail: ""
    })
    const [metodoPago, setMetodoPago] = useState('')


    const generateBill = async () => {
        if (validForm({ props: clienteData, compare: '&&' })) {
            const response = await toast.promise(fetch('/api/v1/ticket-sale', {
                method: "POST", body: JSON.stringify({
                    cliente: clienteData,
                    ticket: {
                        medioPago: metodoPago,
                        status: true
                    },
                    products: cart.map(item => ({ productoId: item.id, units: item.count }))
                })
            }), {
                loading: 'Cargando...',
                success: 'Venta generada!',
                error: 'Error inesperado, intente de nuevo.'
            })
            const { data } = await response.json()
            console.log(data);
            router.push(`/dashboard/sales/${data.ticket.id}`)
        } else {
            toast.error('Falta rellenar campos.')
        }

    }

    const handleMetodoPago = ({ target: { value } }: { target: { value: string } }) => {
        setMetodoPago(value)
    }


    const handleClientData = async ({ target: { name, value } }: { target: { name: string, value: string } }) => {

        setClienteData(state => ({ ...state, [name]: value }))
        if (name == 'clientDni' && value.length == 8) {
            const fullName = await getDataDni(value)
            setClienteData(state => ({ ...state, clientName: fullName }))
        }


    }

    const deleteItemCart = (id: string) => {
        setCart(state => state.filter(item => item.id != id))
    }
    const addItemCart = (product: Prisma.ProductoSelect) => {
        const exist = cart.some(item => item.id == product.id)
        if (exist) {
            setCart(state => state.map(item => {
                if (item.id == product.id) {
                    item.count++
                    return item
                }
                return item
            }))
            return
        }
        setCart(state => [...state, { id: product.id, name: product.shortName, price: product.price, count: 1, image: product.urlImage }])
    }
    const handleSearch = ({ target: { value } }: { target: { value: string } }) => {
        setSearch(value)
    }

    return (
        <div className='dashboard__layout--content relative  overflow-y-scroll bg-gray-100'>
            <header className='py-4 px-6 border-b-white mx-8 border-b-2'>
                asdasd
            </header>
            <main className=' p-8 cart__sale  relative'>
                <div className='bg-white p-8 rounded-xl'>
                    <h2 className='text-2xl font-semibold my-4 caret_title relative'>Lista de productos</h2>
                    <div className='mb-4'>
                        <Input type='text' value={search} onChange={handleSearch} placeholder='Buscar productos...' />
                    </div>

                    {isLoading
                        ?
                        <Spinner />
                        :
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2'>
                            {products
                                .filter(item => item.name.includes(search) || item.shortName.includes(search))
                                .map(item =>
                                    <div key={item.id} className='h-32 group border rounded-xl relative p-2 border-gray-100 flex gap-4'>
                                        <img src={item.urlImage} className='h-full w-[120px] object-cover rounded-xl' />
                                        <div className='pr-4 pt-4 flex flex-col items-start justify-between'>

                                            <h4 className='text-sm'>{item.shortName}</h4>
                                            <Badge variant={'secondary'} className='rounded-2xl'>
                                                {item.categoria.name}
                                            </Badge>
                                            <h4 className='text-lg font-semibold'>{item.price}
                                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                                            </h4>

                                        </div>
                                        <button onClick={() => addItemCart(item)} className='  bg-primary absolute top-2 right-2 rounded-full active:bg-gray-200 p-1 border border-gray-100'>
                                            <HiOutlineShoppingCart size={18} color='#fff' />
                                        </button>
                                    </div>
                                )
                            }
                        </section>
                    }
                </div>
                <div className='bg-white p-8 rounded-xl min-h-[400px] sticky top-10'>

                    <h2 className='text-2xl font-semibold mb-6 caret_title relative'>Detalles de compra</h2>



                    <div className="flow-root">
                        <ul className="-my-8">
                            {cart?.map(item =>
                                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                    <div className="shrink-0">
                                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.image} alt="image" />
                                    </div>

                                    <div className="relative flex flex-1 flex-col justify-between">
                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                            <div className="pr-4 sm:pr-3">
                                                <p className="text-base font-semibold text-gray-900">{item.name}</p>
                                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                                                <div className="mx-auto flex h-6 items-stretch text-gray-600">
                                                    <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-2 transition hover:bg-primary hover:text-white">-</button>
                                                    <div className="flex w-full items-center justify-center bg-gray-100 px-2 text-xs uppercase transition">{item.count}</div>
                                                    <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-2 transition hover:bg-primary hover:text-white">+</button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:ml-8 sm:text-right">{item.price}
                                                    <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                            <button onClick={() => deleteItemCart(item.id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M6 18L18 6M6 6l12 12" className=""></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>

                            )}
                        </ul>
                    </div>

                    <div className="mt-6 border-t flex flex-col gap-2 border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">SubTotal</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cart.reduce(
                                    (acumulador, actual) => acumulador + (actual.price * actual.count),
                                    0
                                ))}
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Envio</p>
                            <p className="text-lg font-semibold text-gray-900 flex">
                                <Input className='shadow-none w-20  h-6 ' value={send} onChange={({ target: { value } }: { target: { value: number } }) => setSend(value)} type='text' />
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Descuento</p>
                            <p className="text-lg font-semibold text-gray-900 flex">
                                <Input className='shadow-none w-20 h-6 bg-red-300' value={descuento} onChange={({ target: { value } }: { target: { value: number } }) => setDescuento(value)} type='text' />
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">PEN</span>
                            {Number(cart.reduce(
                                (acumulador, actual) => acumulador + (actual.price * actual.count),
                                0
                            ) + Number(send) - Number(descuento))}
                        </p>
                    </div>

                    <div className="mt-6 text-center">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button className='w-full group' size={'lg'} disabled={cart.length == 0}>
                                    Checkout
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Datos de comprador</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">DNI <span className='text-red-500 text-xs'>*</span></label>
                                            <Input value={clienteData.clientDni} onChange={handleClientData} type='text' placeholder='...' name='clientDni' maxLength={8} />
                                        </div>
                                        <div className='flex flex-col opacity-60'>
                                            <label htmlFor="">Nombre completo</label>
                                            <Input value={clienteData.clientName} onChange={handleClientData} type='text' placeholder='...' readOnly disabled name='clientName' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Direccion <span className='text-red-500 text-xs'>*</span></label>
                                            <Input value={clienteData.clientAddress} onChange={handleClientData} type='text' placeholder='...' name='clientAddress' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Numero telefonico <span className='text-red-500 text-xs'>*</span></label>
                                            <Input value={clienteData.clientPhoneNumber} onChange={handleClientData} type='text' placeholder='...' name='clientPhoneNumber' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Correo <span className='text-gray-500 text-xs'>(opcional)</span></label>
                                            <Input value={clienteData.clientEmail} onChange={handleClientData} type='text' placeholder='...' name='clientEmail' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Metodo de pago<span className='text-red-500 text-xs'>*</span></label>
                                            <select value={metodoPago} onChange={handleMetodoPago} autoComplete='off' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                                <option selected hidden>Selecione una opcion</option>
                                                {arrMetodoPago.map(item => <option value={item}>{item}</option>)}
                                            </select>
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel
                                        onClick={() => {

                                            setClienteData({
                                                clientName: "",
                                                clientDni: "",
                                                clientPhoneNumber: "",
                                                clientAddress: "",
                                                clientEmail: ""
                                            })
                                            setMetodoPago('')

                                        }}
                                    >Cancelar</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => generateBill()}
                                    >Generar venta</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>




                </div>
            </main>
        </div>
    )
}

export default Page