'use client'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { HiCheckCircle, HiMiniPlusSmall, HiOutlineArrowPath, HiOutlineEllipsisVertical } from 'react-icons/hi2'
import { Badge } from "@/components/ui/badge"
import Spinner from '@/components/spinner'
import useProducts from '@/hook/useProducts'
import { toast } from 'react-hot-toast'
import { Prisma } from '@prisma/client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import validForm from '@/lib/validForm'
import useCategories from '@/hook/useCategories'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'


const page = () => {
    const pathname = usePathname()
    const [operation, setOperation] = useState<'delete' | 'edit' | 'default' | 'create'>('default')
    const [idSelect, setIdSelect] = useState('')
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const { categories } = useCategories()

    const [updateProduct, setUpdateProduct] = useState<Prisma.ProductoSelect>({
        name: '',
        shortName: '',
        model: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
        categoriaId: ''
    })
    const { products, isLoading, reload } = useProducts()


    const handleUpdateProduct = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUpdateProduct(state => ({ ...state, [name]: value }))
    }

    const generateUI = {
        delete:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Eliminar Producto?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de eliminar el producto
                        <b>{' '}{products.find(item => item.id == idSelect)?.shortName} {' '}</b>
                        de manera permanente. ¿Estás seguro de que deseas continuar?
                        <br />
                        <br />
                        <b className='text-xs'>(Por seguridad el producto pasara a un estado 'no-visible')</b>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setIdSelect('')
                        setUpdateProduct({
                            name: '',
                            shortName: '',
                            model: '',
                            brand: '',
                            price: '',
                            stock: '',
                            description: '',
                            categoriaId: ''
                        })
                    }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/product/${idSelect}`, { method: 'delete' }), {
                            loading: 'Cargando...',
                            success: 'Producto eliminado!',
                            error: 'Error innesperado, intente de nuevo'
                        })
                        reload()
                        setIdSelect('')
                    }}>Eliminar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        edit:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Editar producto</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <label className='block'>Nombre completo<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                <Input value={updateProduct?.name} onChange={handleUpdateProduct} name='name' />
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>

                                    <label className='block'>Nombre corto<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.shortName} onChange={handleUpdateProduct} name='shortName' />
                                </div>
                                <div>
                                    <label className='block'>Modelo<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.model} onChange={handleUpdateProduct} name='model' />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Categoria<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
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
                                            <CommandInput placeholder="Busca categoria..." />
                                            <CommandEmpty>Categoria no encontrada 🤔.</CommandEmpty>
                                            <CommandGroup>
                                                {categories.map((item) => (
                                                    <CommandItem
                                                        key={item.id}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                            setUpdateProduct(state => ({ ...state, categoriaId: item.id }))
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
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>Marca<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.brand} onChange={handleUpdateProduct} name='brand' />
                                </div>
                                <div>
                                    <label className='block'>Precio<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.price} onChange={handleUpdateProduct} type='number' name='price' />
                                </div>
                                <div>
                                    <label className='block'>Stock<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.stock} onChange={handleUpdateProduct} type='number' name='stock' />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Imagen URI<span className='text-xs ml-2 text-primary'>opcional</span></label>
                                <Input value={updateProduct?.urlImage} placeholder='...' onChange={handleUpdateProduct} type='text' name='urlImage' />
                            </div>
                            <div>
                                <label className='block'>Descripcion<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                <Textarea value={updateProduct?.description} onChange={handleUpdateProduct} name='description' />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setIdSelect('')
                        setUpdateProduct({
                            name: '',
                            shortName: '',
                            model: '',
                            brand: '',
                            price: '',
                            stock: '',
                            description: '',
                            categoriaId: ''
                        })
                    }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/product/${idSelect}`, { method: 'PATCH', body: JSON.stringify(updateProduct) }), {
                            loading: 'Cargando...',
                            success: 'Producto actualizado!',
                            error: 'Error innesperado, intente de nuevo'
                        })
                        reload()
                        setUpdateProduct({
                            name: '',
                            shortName: '',
                            model: '',
                            brand: '',
                            price: '',
                            stock: '',
                            description: '',
                            categoriaId: ''
                        })
                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>

        ,
        create:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Nuevo producto</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <label className='block'>Nombre completo<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                <Input value={updateProduct?.name} placeholder='...' onChange={handleUpdateProduct} name='name' />
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>Nombre corto<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.shortName} placeholder='...' onChange={handleUpdateProduct} name='shortName' />
                                </div>
                                <div>
                                    <label className='block'>Modelo<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.model} placeholder='...' onChange={handleUpdateProduct} name='model' />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Categoria<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
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
                                            <CommandInput placeholder="Busca categoria..." />
                                            <CommandEmpty>Categoria no encontrada 🤔.</CommandEmpty>
                                            <CommandGroup>
                                                {categories.map((item) => (
                                                    <CommandItem
                                                        key={item.id}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                            setUpdateProduct(state => ({ ...state, categoriaId: item.id }))
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
                            </div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <div>
                                    <label className='block'>Marca <span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.brand} placeholder='...' onChange={handleUpdateProduct} name='brand' />
                                </div>
                                <div>
                                    <label className='block'>Precio<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.price} placeholder='...' onChange={handleUpdateProduct} type='number' name='price' />
                                </div>
                                <div>
                                    <label className='block'>Stock<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                    <Input value={updateProduct?.stock} placeholder='...' onChange={handleUpdateProduct} type='number' name='stock' />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Imagen URI<span className='text-xs ml-2 text-primary'>opcional</span></label>
                                <Input value={updateProduct?.urlImage} placeholder='...' onChange={handleUpdateProduct} type='text' name='urlImage' />
                            </div>
                            <div>
                                <label className='block'>Descripcion<span className='text-xs ml-2 text-red-400'>obligatorio</span></label>
                                <Textarea value={updateProduct?.description} placeholder='...' onChange={handleUpdateProduct} name='description' />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => {
                        setIdSelect('')
                        setUpdateProduct({
                            name: '',
                            shortName: '',
                            model: '',
                            brand: '',
                            price: '',
                            stock: '',
                            description: '',
                            categoriaId: ''
                        })
                        setValue('')
                    }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        if (validForm({ props: updateProduct, compare: '&&' })) {
                            await toast.promise(fetch(`/api/v1/product/${idSelect}`, { method: 'post', body: JSON.stringify(updateProduct) }), {
                                loading: 'Cargando...',
                                success: 'Producto guardado!',
                                error: (error) => `${error.error.message}`
                            })
                            reload()
                            setUpdateProduct({
                                name: '',
                                shortName: '',
                                model: '',
                                brand: '',
                                price: '',
                                stock: '',
                                description: '',
                                categoriaId: ''
                            })
                            setValue('')
                        } else {
                            toast.error('Ingrese todos los campos')
                        }

                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>,
        default: <h1>Default</h1>


    }
    return (
        <>
            <div className='dashboard__layout--content--other  overflow-y-scroll bg-gray-100'>
                <div className='py-4 px-6 border-b-gray-100 mx-8 border-b-2'>
                    {pathname}
                </div>
                <div className='py-4 px-6'>
                    <div className='bg-white p-8 rounded-xl'>
                        asd
                    </div>
                </div>
                <div className=' py-4 px-6'>

                    <div className='bg-white p-8 rounded-xl'>
                        <div className='flex flex-row flex-nowrap justify-between'>
                            <div></div>
                            <div className='flex flex-row flex-nowrap gap-2'>
                                <Button variant={'outline'} className='flex flex-row flex-nowrap gap-2' size={'sm'} onClick={reload}>
                                    <HiOutlineArrowPath size={16} />
                                    Refrescar
                                </Button>
                                <Button size={'sm'} asChild onClick={() => setOperation(state => 'create')}>
                                    <Label htmlFor='alert-product'>
                                        <HiMiniPlusSmall size={25} />
                                        Nuevo producto
                                    </Label>
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
                                        <TableHead>Imagen</TableHead>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Marca</TableHead>
                                        <TableHead>Modelo</TableHead>
                                        <TableHead>Categoria</TableHead>
                                        <TableHead>Precio</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead className="text-right">Acciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((item, index) => (
                                        <TableRow key={item.id} className='h-16'>
                                            <TableCell className="font-medium ">{index}</TableCell>
                                            <TableCell>
                                                {item.urlImage == 'N/A' ? item.urlImage :
                                                    <img src={item.urlImage} className='h-10 w-10 object-cover rounded-lg' />
                                                }
                                            </TableCell>
                                            <TableCell>{item.shortName}</TableCell>
                                            <TableCell>{item.brand}</TableCell>
                                            <TableCell>{item.model}</TableCell>
                                            <TableCell>
                                                <Badge>
                                                    {item.categoria?.name}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{'s/.'}{item.price}</TableCell>
                                            <TableCell>{item.stock}</TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant={'outline'} >
                                                            <HiOutlineEllipsisVertical size={20} />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent >
                                                        <DropdownMenuItem asChild>
                                                            <Label htmlFor='alert-product' onClick={() => {
                                                                setIdSelect(item.id)
                                                                setOperation(state => 'delete')
                                                            }}>Eliminar</Label>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem asChild>
                                                            <Label htmlFor='alert-product' onClick={() => {
                                                                setIdSelect(item.id)
                                                                setOperation(state => 'edit')
                                                                setUpdateProduct({
                                                                    name: item.name,
                                                                    shortName: item.shortName,
                                                                    model: item.model,
                                                                    brand: item.brand,
                                                                    price: item.price,
                                                                    stock: item.stock,
                                                                    description: item.description,
                                                                    categoriaId: item.categoriaId
                                                                })
                                                            }}>Editar</Label>
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
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" id='alert-product' className='invisible'>Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        {generateUI[operation]}

                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    )
}

export default page