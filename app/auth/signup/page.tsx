'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'react-hot-toast'
import useStore from '@/store/useStore'

const page = () => {

    const router = useRouter()
    const { setUser } = useStore()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const handleCredential = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setLogin(state => ({ ...state, [name]: value }))
    }


    const handleForm = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(login) })
        const { success, data, error } = await response.json()
        if (success) {
            setUser(data)
            console.log(data);
            toast.success('Seccion confirmada', {
                style: {
                    borderRadius: '20px'
                }
            })
            setTimeout(() => {
                router.push('/dashboard')
            }, 1000)

        } else {
            toast.error(error.message, {
                style: {
                    borderRadius: '20px'
                }
            })
            setLogin({
                username: '',
                password: ''
            })

        }

    }

    return (
        <div className='md:grid md:grid-cols-2 h-screen w-full'>
            <Toaster />

            <div className='overflow-hidden relative hidden md:block'>
                <div className='h-full w-full p-6 text-white flex flex-col justify-between'>
                    <header></header>
                    <main></main>
                    <footer>
                        <h4>Desarrollador por: ZeroK</h4>
                    </footer>
                </div>
                <video className='h-full w-full object-cover absolute top-0 left-0 -z-10' src="/magic-background.mp4" autoPlay loop controls={false} ></video>
            </div>
            <div className='p-6 flex flex-col justify-between'>
                <header>
                    <h1>Sistema de ventas</h1>
                </header>
                <main className='flex justify-center'>
                    <section className='flex flex-col p-4 justify-center w-full md:w-5/6 lg:w-3/6'>

                        <h1 className='text-7xl font-extrabold text-center'>Bienvenido de nuevo</h1>
                        <p className='text-center'>Por favor, inicia sesión para seguir impulsando tus ventas.</p>
                        <div className='p-2 mt-3'>
                            <form className='flex flex-col gap-4' onSubmit={handleForm}>
                                <label htmlFor="">
                                    <Input placeholder='Nombre de usuario' type='text' name='username' value={login.username} onChange={handleCredential} />
                                    <span className='text-sm text-red-500 my-1'>asdas</span>
                                </label>
                                <label htmlFor="">
                                    <Input placeholder='Contrasena' type='password' name='password' value={login.password} onChange={handleCredential} />
                                </label>
                                <Button size={'lg'}>Iniciar seccion</Button>
                            </form>
                        </div>
                    </section>
                </main>
                <footer> </footer>

            </div>
        </div >
    )
}

export default page