'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import useCategories from '@/hook/useCategories'
import validForm from '@/lib/validForm'
import { TYPE_PRODUCT } from '@/types/product'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiCheckCircle } from 'react-icons/hi2'
import Stepper from 'awesome-react-stepper'
import { useRouter } from 'next/navigation'
const page = () => {

    const router = useRouter()

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [isValidForm, setIsValidForm] = useState(false)
    const { categories } = useCategories()

    const [product, setProduct] = useState<TYPE_PRODUCT>({
        name: '',
        shortName: '',
        model: '',
        brand: '',
        price: 0,
        stock: 1,
        description: '',
        categoriaId: '',
        urlImage: ''
    })
    const handleForm = ({ target: { name, value } }: { target: { name: string, value: string | number } }) => {
        setProduct(state => ({ ...state, [name]: value }))
    }

    const handleFormSubmit = async () => {
        if (validForm({ props: product, compare: '&&' })) {
            toast.success('Datos completos')
            setIsValidForm(true)
        } else {
            toast.error('Verifica que todos los datos esten completos')
        }
    }
    const handleSaveProduct = async () => {

        await toast.promise(fetch('/api/v1/product', { method: 'post', body: JSON.stringify(product) }), {
            loading: 'Cargando...',
            success: 'Producto guardado!',
            error: 'Error innesperado, intente de nuevo'
        })
        router.push('/dashboard/product')
    }


    /* useEffect(() => {
        console.log(product);

    }, [product]) */

    return (
        <div className='dashboard__layout--content bg-gray-100 overflow-y-scroll'>

            <div className='py-4 px-6 border-b-gray-100 mx-8 border-b-2'>
                asdasd
            </div>
            <div className='p-10 flex justify-center  items-center '>
                <div className='bg-white p-4 rounded-xl'>

                    <Stepper
                        allowClickControl={false}
                        continueBtn={<Button>Siguiente</Button>}
                        backBtn={<Button variant={'outline'}>Atras</Button>}
                        onContinue={handleFormSubmit}
                        onSubmit={handleSaveProduct}
                        submitBtn={<Button disabled={!isValidForm} >Guardar</Button>}
                    >
                        <div className=' flex flex-col items-center px-5 py-10 gap-10'>

                            <h2 className='text-3xl'>Agregar nuevo producto</h2>
                            <form className='w-3/6 min-w-[400px] flex flex-col gap-2' onSubmit={handleFormSubmit}>
                                <Input type='text' placeholder='Nombre de producto' name='name' value={product.name} onChange={handleForm} />
                                <Input type='text' placeholder='Nombre corto' name='shortName' value={product.shortName} onChange={handleForm} />
                                <div className='flex gap-2'>
                                    <Input type='text' placeholder='Modelo' name='model' value={product.model} onChange={handleForm} />
                                    <Input type='text' placeholder='Marca' name='brand' value={product.brand} onChange={handleForm} />
                                </div>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between"
                                        >
                                            {value
                                                ? value
                                                : "Seleciona una categoria..."}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command >
                                            <CommandInput placeholder="Search framework..." />
                                            <CommandEmpty>Categoria no encontrada.</CommandEmpty>
                                            <CommandGroup>
                                                {categories.map((item) => (
                                                    <CommandItem
                                                        key={item.id}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                            setProduct(state => ({ ...state, categoriaId: item.id }))
                                                        }}
                                                    >
                                                        <HiCheckCircle size={18} className={`text-primary mr-2 ${value == item.name.toLowerCase() ? 'opacity-100' : 'opacity-0'}`} />
                                                        {item.name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <div className='flex gap-2'>
                                    <Input type='number' name='price' placeholder='Precio' value={product.price} min={0} onChange={handleForm} />
                                    <Input type='number' name='stock' placeholder='Stock' value={product.stock} min={0} onChange={handleForm} />
                                </div>
                                <Textarea name='description' placeholder='Descripcion' value={product.description} onChange={handleForm} />
                            </form>
                        </div>
                        <div className='px-5 py-10'>
                            <div className='min-w-[400px]'>
                                {isValidForm ? 'Listo para Guardar' : 'Falta datos'}
                            </div>
                        </div>
                    </Stepper>
                </div>
            </div>
        </div >
    )
}

export default page