'use client'
import CategoryIMG from '@/components/ilustrations/category'
import Cpu from '@/components/ilustrations/cpu'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import validForm from '@/lib/validForm'
import Stepper from 'awesome-react-stepper'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { AiFillInfoCircle } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi2'
interface UserProps {
    firstName: string
    lastName: string
    fullName: string
    dni: string
    email: string
    username: string
    password: string
    phoneNumer: string
    gender: string
    role: string
    urlImage?: string
    address: string

}

interface BusinessProps {
    razon: string
    address: string
    ruc: string
    province: string
    phoneNumber: string
    departament: string
    country: string
    email: string
    description: string
    urlImage?: string
}


interface CategoryProps {
    name: string
}
interface ServiceProps {
    name: string
    description: string
    price: string
    duration: string
    urlImage?: string
}
const Page = () => {
    const router = useRouter()
    const [user, setUser] = useState<UserProps>(
        {
            firstName: '',
            lastName: '',
            fullName: '',
            dni: '',
            email: '',
            username: '',
            password: '',
            phoneNumer: '',
            gender: '',
            address: '',
            role: 'ADMIN',
        }
    )
    const [categories, setCategories] = useState<CategoryProps[]>([])
    const [category, setCategory] = useState<CategoryProps>({
        name: ''
    })
    const [services, setServices] = useState<ServiceProps[]>([])
    const [service, setService] = useState<ServiceProps>({
        name: '',
        description: '',
        price: '',
        duration: '',
    })
    const handleUniqueService = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setService(state => ({ ...state, [name]: value }))
    }
    const [business, setBusiness] = useState<BusinessProps>({
        razon: '',
        address: '',
        ruc: '',
        province: '',
        departament: '',
        country: '',
        email: '',
        description: '',
    })

    const handleBusinessData = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setBusiness(state => ({ ...state, [name]: value }))
    }

    const [loadingDni, setLoadingDni] = useState(false)
    const handleUniqueAdditional = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setCategory(state => ({ ...state, [name]: value }))
    }
    const handleUserData = async ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUser(state => ({ ...state, [name]: value }))
        if (name == 'dni' && value.length == 8) {
            setLoadingDni(true)
            const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${value}?token=${process.env.NEXT_PUBLIC_TOKEN_API_DNI}`)
            const { success, nombres, apellidoPaterno, apellidoMaterno } = await response.json()
            if (success) {
                setUser(state => ({ ...state, fullName: nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno, firstName: nombres, lastName: apellidoPaterno + ' ' + apellidoMaterno }))
            } else {
                toast.error('Dni invalido')
            }
            setLoadingDni(false)
        }
    }




    return (
        <div className='w-full min-h-screen bg-gray-200 flex justify-center items-center'>
            <Toaster position='top-center' />
            <div className='bg-white rounded-lg p-8'>
                <h2 className='mb-4 text-2xl text-center '>Inicializacion de sistema</h2>
                <Stepper contentBoxClassName='min-w-[90%] md:min-w-[700px] p-4'
                    backBtn={
                        <button className='inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs'>
                            Atras
                        </button>
                    }
                    continueBtn={
                        <button className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs cursor-pointer'>
                            Siguiente
                        </button>
                    }
                    submitBtn={
                        <button className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs cursor-pointer'>
                            Guardar
                        </button>
                    }
                    onSubmit={async () => {
                        if (validForm({ props: user, compare: '&&' }) && validForm({ props: business, compare: '&&' }) && services.length > 0 && categories.length > 0) {
                            const response = await toast.promise(fetch('/api/init', { method: 'POST', body: JSON.stringify({ business, user, categories, services }) }), {
                                loading: 'Cargando...',
                                success: 'guardado!',
                                error: 'Error inesperado, contante con el desarrollador.'
                            })

                            const data = await response.json()

                            if (data.success) {
                                alert('Se configuro correctamente')
                                setTimeout(() => router.push('/auth/signup'), 1000)
                            } else {
                                alert('Comuniquese con el desarrollador!')
                            }


                        } else {
                            alert('Faltan datos')

                        }
                        console.log(user, business);

                    }}


                >
                    <div className='flex flex-col gap-2'>
                        <h2 className=' text-lg  text-center'>Creacion de usuario</h2>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>DNI <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input placeholder='...' onChange={handleUserData} maxLength={8} autoComplete='off' value={user.dni} name='dni' />
                                {loadingDni && <div className='animate-spin h-5 w-5 rounded-full spinner-color absolute top-3 right-3'></div>}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Nombres <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input placeholder='...' onChange={handleUserData} autoComplete='off' disabled value={user.firstName} readOnly />
                                </div>
                            </div>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Apellidos <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input placeholder='...' onChange={handleUserData} autoComplete='off' value={user.lastName} disabled readOnly />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Correo <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input placeholder='...' onChange={handleUserData} autoComplete='off' value={user.email} name='email' />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>username
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaInfoCircle size={14} color='#cfcece' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Nesesario para iniciar seccion</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <span className='text-xs text-red-400'>obligatorio</span>
                                </label>
                                <div className='relative'>
                                    <Input placeholder='...' onChange={handleUserData} autoComplete='off' name='username' value={user.username} />
                                </div>
                            </div>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Contrasena <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input placeholder='...' onChange={handleUserData} autoComplete='off' name='password' value={user.password} />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='flex items-center gap-2 text-sm'>Genero <span className='text-xs text-red-400'>obligatorio</span></label>
                                <select placeholder='...' onChange={handleUserData} value={user.gender} name='gender' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                    <option selected hidden >Selecione una opcion</option>
                                    <option value={'M'} >Masculino</option>
                                    <option value={'F'} >Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Numero telefonico <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input placeholder='...' onChange={handleUserData} autoComplete='off' maxLength={9} name='phoneNumer' value={user.phoneNumer} />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Direccion <span className='text-xs text-red-400'>obligatorio</span></label>
                            <Input placeholder='...' name='address' value={user.address} onChange={handleUserData} />
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Image URI <span className='text-xs text-primary'>opcional</span></label>
                            <Input placeholder='...' name='urlImage' value={user.urlImage} onChange={handleUserData} />
                        </div>

                    </div>
                    <div>
                        <h2 className=' text-lg  text-center'>Creacion de datos de la empresa</h2>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Razon social <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='razon' value={business.razon} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>RUC <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='ruc' max={11} value={business.ruc} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Numero telefonico <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='phoneNumber' max={9} value={business.phoneNumber} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Provincia <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input onChange={handleBusinessData} name='province' value={business.province} autoComplete='off' placeholder='...' />
                                </div>
                            </div>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Departamento <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input onChange={handleBusinessData} name='departament' value={business.departament} autoComplete='off' placeholder='...' />
                                </div>
                            </div>
                            <div>
                                <label className='flex items-center gap-2 text-sm'>Pais <span className='text-xs text-red-400'>obligatorio</span></label>
                                <div className='relative'>
                                    <Input onChange={handleBusinessData} name='country' value={business.country} autoComplete='off' placeholder='...' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Correo <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='email' value={business.email} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Direccion <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='address' value={business.address} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Descripcion <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='description' value={business.description} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                        <div>
                            <label className='flex items-center gap-2 text-sm'>Image URI <span className='text-xs text-red-400'>obligatorio</span></label>
                            <div className='relative'>
                                <Input onChange={handleBusinessData} name='urlImage' value={business.urlImage} autoComplete='off' placeholder='...' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center '>
                        <h2 className='text-lg text-center '>Agregar categorias de producto</h2>
                        <CategoryIMG />
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-1 justify-items-center  gap-2 '>
                                {categories.map(item =>
                                    <div className='border border-gray-100 px-2 py-1 rounded-lg'>
                                        {item.name}
                                        <div></div>
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
                                            <AlertDialogTitle>Agregar categoria</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Procura escribir categorias legibles y significativas.
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Nombre de categoria <span className='text-xs text-red-400'>obligatorio</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueAdditional} autoComplete='off' value={category.name} name='name' />
                                                </div>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel onClick={() => {
                                                setCategory({
                                                    name: ''
                                                })
                                            }}>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => {
                                                setCategories(state => ([...state, category]))
                                                setCategory({
                                                    name: '',
                                                })
                                            }}>Agregar</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center '>
                        <h2 className='text-lg text-center '>Agregar Servicios</h2>

                        <Cpu />
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-1 justify-items-center  gap-2 '>
                                {services.map(item =>
                                    <div className='border border-gray-100 px-2 py-1 rounded-lg'>
                                        {item.name}
                                        <div></div>
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
                                            <AlertDialogTitle>Agregar Servicio</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Procura escribir los servicios legibles y significativas.
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Nombre de servicio <span className='text-xs text-red-400'>obligatorio</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueService} autoComplete='off' value={service.name} name='name' />
                                                </div>
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Duracion (min)<span className='text-xs text-red-400'>obligatorio</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueService} autoComplete='off' value={service.duration} name='duration' />
                                                </div>
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Precio<span className='text-xs text-red-400'>obligatorio</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueService} autoComplete='off' value={service.price} name='price' />
                                                </div>
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Descripcion <span className='text-xs text-red-400'>obligatorio</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueService} autoComplete='off' value={service.description} name='description' />
                                                </div>
                                                <div>
                                                    <label className='flex items-center gap-2 text-sm'>Imagen URI <span className='text-xs text-primary'>opcional</span></label>
                                                    <Input placeholder='...' onChange={handleUniqueService} autoComplete='off' value={service.urlImage} name='urlImage' />
                                                </div>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel onClick={() => {
                                                setService({
                                                    name: '',
                                                    description: '',
                                                    price: '',
                                                    duration: '',
                                                })
                                            }}>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => {
                                                setServices(state => ([...state, service]))
                                                setService({
                                                    name: '',
                                                    description: '',
                                                    price: '',
                                                    duration: '',
                                                })
                                            }}>Agregar</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                </Stepper>
            </div>
        </div>
    )
}

export default Page