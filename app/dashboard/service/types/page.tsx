'use client'
import Spinner from '@/components/spinner'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useCategories from '@/hook/useCategories'
import useTypesService from '@/hook/useTypesService'
import { Prisma } from '@prisma/client'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiMiniPlusSmall, HiOutlineArrowPath, HiOutlineEllipsisVertical, HiOutlineNoSymbol, HiOutlinePencilSquare } from 'react-icons/hi2'

const Page = () => {


    const { typesService, isLoading, reload } = useTypesService()
    const [idSelect, setIdSelect] = useState<string | null>(null)
    const [operation, setOperation] = useState<'create' | 'update' | 'delete' | 'default'>('default')
    const [updateCategory, setUpdateCategory] = useState<Prisma.ServicioSelect>({
        name: '',
        price: '',
        duration: ''
    })
    const handleCategory = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUpdateCategory(state => ({ ...state, [name]: value }))
    }

    const operationUI = {
        create:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Creat nueva categoria?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de crear una la categoria
                        <br />
                        <div>
                            <div>
                                <label className='block'>Nombre servicio</label>
                                <Input placeholder='...' name='name' value={updateCategory.name} onChange={handleCategory} />
                            </div>
                            <div>
                                <label className='block'>Precio (PEN)</label>
                                <Input placeholder='...' name='price' type='number' value={updateCategory.price} onChange={handleCategory} />
                            </div>
                            <div>
                                <label className='block'>Duracion (min)</label>
                                <Input placeholder='...' name='duration' type='number' value={updateCategory.duration} onChange={handleCategory} />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/service`, { method: 'POST', body: JSON.stringify(updateCategory) }), {
                            loading: 'Cargando...',
                            success: 'Tipo de servicio guardada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setOperation(state => 'default')
                        setUpdateCategory({
                            name: '',
                            price: '',
                            duration: ''
                        })
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
                            <div className='block'>
                                <label>Nombre categoria</label>
                                <Input placeholder='...' name='name' value={updateCategory.name} onChange={handleCategory} />
                            </div>
                            <div>
                                <label className='block'>Precio (PEN)</label>
                                <Input placeholder='...' name='price' type='number' value={updateCategory.price} onChange={handleCategory} />
                            </div>
                            <div>
                                <label className='block'>Duracion (min)</label>
                                <Input placeholder='...' name='duration' type='number' value={updateCategory.duration} onChange={handleCategory} />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/service/${idSelect}`, { method: 'PATCH', body: JSON.stringify(updateCategory) }), {
                            loading: 'Cargando...',
                            success: 'Tipo de servicio actualizada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setOperation(state => 'default')
                        setUpdateCategory({
                            name: '',
                            price: '',
                            duration: ''
                        })
                        reload()
                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        delete:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Eliminar tipo de servicio?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de eliminar el tipo de servicio
                        <b className='w-full'>{' '}{typesService.find(item => item.id == idSelect)?.name} {' '}</b>
                        de manera permanente. ¿Estás seguro de que deseas continuar?
                        <br />
                        <br />
                        <b className='text-red-500 text-xs w-full'>Una vez se elimine el tipo de servicio se eliminara todos los ticket de servicio relacionados con el.</b>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/service/${idSelect}`, { method: 'delete' }), {
                            loading: 'Cargando...',
                            success: 'Tipo de servicio eliminada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        reload()
                        setIdSelect(null)
                    }}>Eliminar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        default: <h1>Default</h1>
    }

    return (
        <div className='dashboard__layout--content--other overflow-y-scroll bg-gray-100'>
            <div className='py-4 px-6 border-b-white mx-8 border-b-2'>asd</div>
            <div className='py-4 px-6'>
                <div className='bg-white p-8 rounded-xl'>

                </div>
            </div>
            <div className='py-4 px-6'>
                <div className='bg-white p-8 rounded-xl'>
                    <div className='flex flex-row flex-nowrap justify-between'>
                        <div></div>
                        <div className='flex flex-row flex-nowrap gap-2'>
                            <Button onClick={reload} className='flex items-center gap-3' variant={'outline'} size={'sm'}>
                                <HiOutlineArrowPath size={16} />
                                Refrescar
                            </Button>
                            <Button asChild className='flex items-center gap-3 cursor-pointer' size={'sm'} onClick={() => {
                                setOperation(state => 'create')
                            }}>
                                <Label htmlFor='operation-category'>
                                    <HiMiniPlusSmall size={25} />
                                    Nueva categoria
                                </Label>
                            </Button>
                        </div>
                    </div>
                    {isLoading
                        ?
                        <Spinner />
                        :
                        <Table className='mt-4'>
                            <TableCaption>Lista de categorias</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Precio</TableHead>
                                    <TableHead>Duracion</TableHead>
                                    <TableHead>Fecha de creacion</TableHead>
                                    <TableHead>Fecha de actualizacion</TableHead>
                                    <TableHead className="text-right">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {typesService.map((item, index) => (
                                    <TableRow key={item.id} className='h-16'>
                                        <TableCell className="font-medium">{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell>{item.duration}</TableCell>
                                        <TableCell>{item.createAt}</TableCell>
                                        <TableCell>{item.updateAt}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant={'outline'} >
                                                        <HiOutlineEllipsisVertical size={20} />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent >
                                                    <DropdownMenuItem asChild>
                                                        <Label className='flex items-center gap-2' htmlFor='operation-category' onClick={() => {
                                                            setIdSelect(item.id)
                                                            setOperation(state => 'update')
                                                            setUpdateCategory({
                                                                name: item.name, price: item.price, duration: item.duration
                                                            })
                                                        }}>
                                                            <HiOutlinePencilSquare size={18} />
                                                            Editar
                                                        </Label>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Label htmlFor='operation-category' className='flex items-center gap-2' onClick={() => {
                                                            setIdSelect(item.id)
                                                            setOperation(state => 'delete')
                                                        }}>
                                                            <HiOutlineNoSymbol size={18} />
                                                            Eliminar
                                                        </Label>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>

                                        </TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>}
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" id='operation-category' className='invisible'>Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        {operationUI[operation]}
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div >
    )
}

export default Page