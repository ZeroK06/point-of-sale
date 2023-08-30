'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useUsers from '@/hook/useUsers'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsFillPhoneFill, BsWhatsapp } from 'react-icons/bs'
import { MdAirplanemodeActive, MdAirplanemodeInactive, MdDelete, MdEdit } from 'react-icons/md'

interface UserProps {
    dni?: string
    email?: string
    username?: string
    phoneNumer?: string
    gender?: string
    role?: string
    password?: string
    urlImage?: string
    address?: string
}

const Page = () => {

    const { users, isLoading, reload } = useUsers()
    const [action, setAction] = useState<'update' | 'delete' | 'create' | 'default'>('default')
    const [idSelect, setIdSelect] = useState<string | null>('')
    const [updateUser, setUpdateUser] = useState<UserProps>({
        dni: '',
        email: '',
        username: '',
        role: '',
        phoneNumer: '',
        gender: '',
        password: '',
        urlImage: '',
        address: '',
    })
    const handleUser = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUpdateUser(state => ({ ...state, [name]: value }))
    }
    const actions = {
        create:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Creat nueva categoria?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de crear una la categoria
                        <br />
                        <div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>DNI</label>
                                    <Input placeholder='...' name='dni' value={updateUser.dni} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Numero telefonico</label>
                                    <Input placeholder='...' name='phoneNumer' value={updateUser.phoneNumer} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Direccion</label>
                                    <Input placeholder='...' name='address' value={updateUser.address} onChange={handleUser} />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Correo</label>
                                <Input placeholder='...' name='email' value={updateUser.email} onChange={handleUser} />
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>username</label>
                                    <Input placeholder='...' name='username' value={updateUser.username} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Contrasena</label>
                                    <Input placeholder='...' name='password' value={updateUser.password} onChange={handleUser} />
                                </div>
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div className='w-full'>
                                    <label className='block'>Tipo de usuario</label>
                                    <select placeholder='...' onChange={handleUser} autoComplete='off' value={updateUser.role} name='role' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                        <option selected hidden>Selecione una opcion</option>
                                        <option value={'ADMIN'} >Administrador</option>
                                        <option value={'CAJERO'} >Cajero</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='block'>Genero</label>
                                    <select placeholder='...' onChange={handleUser} autoComplete='off' value={updateUser.gender} name='gender' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                        <option selected hidden>Selecione una opcion</option>
                                        <option value={'M'} >Masculino</option>
                                        <option value={'F'} >Femenino</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className='block'>Image</label>
                                <Input placeholder='...' name='urlImage' value={updateUser.urlImage} onChange={handleUser} />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setIdSelect('')
                        setUpdateUser({})
                    }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/user`, { method: 'POST', body: JSON.stringify(updateUser) }), {
                            loading: 'Cargando...',
                            success: 'Usuario guardada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setAction(state => 'default')
                        setUpdateUser({})
                        reload()
                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        update:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Actualizar categoria</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de modificar la categoria
                        <br />
                        <div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>DNI</label>
                                    <Input placeholder='...' name='dni' value={updateUser.dni} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Numero telefonico</label>
                                    <Input placeholder='...' name='phoneNumer' value={updateUser.phoneNumer} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Direccion</label>
                                    <Input placeholder='...' name='address' value={updateUser.address} onChange={handleUser} />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Correo</label>
                                <Input placeholder='...' name='email' value={updateUser.email} onChange={handleUser} />
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>username</label>
                                    <Input placeholder='...' name='username' value={updateUser.username} onChange={handleUser} />
                                </div>
                                <div>
                                    <label className='block'>Contrasena</label>
                                    <Input placeholder='...' name='password' value={updateUser.password} onChange={handleUser} />
                                </div>
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div className='w-full'>
                                    <label className='block'>Tipo de usuario</label>
                                    <select placeholder='...' onChange={handleUser} autoComplete='off' value={updateUser.role} name='role' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                        <option selected hidden>Selecione una opcion</option>
                                        <option value={'ADMIN'} >Administrador</option>
                                        <option value={'CAJERO'} >Cajero</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='block'>Genero</label>
                                    <select placeholder='...' onChange={handleUser} autoComplete='off' value={updateUser.gender} name='gender' className='flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
                                        <option selected hidden>Selecione una opcion</option>
                                        <option value={'M'} >Masculino</option>
                                        <option value={'F'} >Femenino</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className='block'>Image</label>
                                <Input placeholder='...' name='urlImage' value={updateUser.urlImage} onChange={handleUser} />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setIdSelect('')
                        setUpdateUser({})
                    }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/user/${idSelect}`, { method: 'PATCH', body: JSON.stringify(updateUser) }), {
                            loading: 'Cargando...',
                            success: 'Usuario actualizado!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setAction(state => 'default')
                        setUpdateUser({})
                        reload()
                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        delete:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Deshabilitar esta cuenta?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de deshabilitar la categoria
                        <b className='w-full'>{' '}{users.find(item => item.id == idSelect)?.name} {' '}</b>
                        de manera temporal. ¿Estás seguro de que deseas continuar?
                        <br />
                        <br />
                        <b className='text-red-500 text-xs w-full'>Este proceso se realiza con el fin de evitar errores en los tickets.</b>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/user/${idSelect}`, { method: 'delete' }), {
                            loading: 'Cargando...',
                            success: 'Categoria eliminada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        reload()
                        setIdSelect(null)
                    }}>Deshabilitar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        default: <h1>Default</h1>
    }

    return (
        <div className='dashboard__layout--content  overflow-y-scroll bg-gray-100'>
            <header className='py-4 px-6 border-b-gray-100 mx-8 border-b-2'>
                asdasd
            </header>
            <main className=' p-8 service_payment relative'>
                <h1 className='text-3xl  font-semibold'>Usuarios</h1>
                <div className='w-full bg-white p-6 rounded-lg my-4 flex justify-between'>
                    <div></div>
                    <div className='flex gap-2'>
                        <Button className='' variant={'outline'} size={'sm'}>
                            Refrescar
                        </Button>
                        <Button size={'sm'} asChild>
                            <Label htmlFor='action' className='cursor-pointer' onClick={() => setAction(state => 'create')}>
                                Nuevo usuario
                            </Label>
                        </Button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        users.map(user =>
                            <div className={`rounded-2xl bg-white p-4 flex justify-between gap-3 ${!user.isVigent && 'grayscale'}`}>
                                <div className='flex items-center gap-4'>
                                    <div className='h-16 w-16 bg-gray-200 rounded-full flex justify-center items-center'>JD</div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <h2 className='text-sm font-semibold'>{user.firstName}</h2>
                                        <p className='text-xs'>{user.email}</p>
                                        <p className='text-xs py-1 px-2 bg-primary-50 rounded-lg flex justify-center items-center text-primary font-semibold'>{user.role}</p>
                                        <p className='hover:underline text-xs text-primary cursor-pointer'>Mas detalles</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <a href={`https://wa.me/51${user.phoneNumer}`} target='_blank' className='h-7 w-7 justify-center items-center flex bg-green-600 rounded-full'>
                                        <BsWhatsapp size={16} color='#fff' />
                                    </a>
                                    <label htmlFor='action' onClick={() => {
                                        setAction('update')
                                        setIdSelect(user.id)
                                        setUpdateUser(
                                            {
                                                dni: user.dni,
                                                email: user.email,
                                                username: user.username,
                                                phoneNumer: user.phoneNumer,
                                                gender: user.gender,
                                                role: user.role,
                                                address: user.address,
                                            }
                                        )
                                    }} className='h-7 w-7 justify-center items-center flex bg-blue-500 rounded-full'>
                                        <MdEdit size={16} color='#fff' />
                                    </label>
                                    {user.isVigent ? <label htmlFor='action' onClick={() => {
                                        setIdSelect(user.id)

                                        setAction('delete')
                                        setUpdateUser(
                                            {
                                                dni: user.dni,
                                                email: user.email,
                                                username: user.username,
                                                phoneNumer: user.phoneNumer,
                                                gender: user.gender,
                                                role: user.role,
                                                address: user.address,
                                            }
                                        )
                                    }} className='h-7 w-7 justify-center items-center flex bg-red-500 rounded-full'>
                                        <MdAirplanemodeInactive size={16} color='#fff' />
                                    </label>
                                        :
                                        <label onClick={async () => {
                                            await toast.promise(fetch(`/api/v1/user/${user.id}`, { method: 'PATCH', body: JSON.stringify({ isVigent: true }) }), {
                                                loading: 'Cargando...',
                                                success: 'Usuario habilitado!',
                                                error: 'Error innesperado, intente otra vez'
                                            })
                                            reload()

                                        }} className='h-7 w-7 justify-center items-center flex bg-red-500 rounded-full'>
                                            <MdAirplanemodeActive size={16} color='#fff' />
                                        </label>}
                                </div>
                            </div>
                        )
                    }
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button id='action'></button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>

                        {actions[action]}

                    </AlertDialogContent>
                </AlertDialog>
            </main >
        </div >
    )
}

export default Page