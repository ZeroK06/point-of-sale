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
import { Prisma } from '@prisma/client'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiMiniPlusSmall, HiOutlineArrowPath, HiOutlineEllipsisVertical, HiOutlineNoSymbol, HiOutlinePencilSquare } from 'react-icons/hi2'

const Page = () => {


    const { categories, isLoading, reload } = useCategories()
    const [idSelect, setIdSelect] = useState<string | null>(null)
    const [operation, setOperation] = useState<'create' | 'update' | 'delete' | 'default'>('default')
    const [updateCategory, setUpdateCategory] = useState<Prisma.CategoriaSelect>({
        name: ''
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
                                <label className='block'>Nombre categoria</label>
                                <Input placeholder='...' name='name' value={updateCategory.name} onChange={handleCategory} />
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/category`, { method: 'POST', body: JSON.stringify(updateCategory) }), {
                            loading: 'Cargando...',
                            success: 'Categoria guardada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setOperation(state => 'default')
                        setUpdateCategory({
                            name: ''
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
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/category/${idSelect}`, { method: 'PATCH', body: JSON.stringify(updateCategory) }), {
                            loading: 'Cargando...',
                            success: 'Categoria actualizada!',
                            error: 'Error innesperado, intente otra vez'
                        })
                        setIdSelect(null)
                        setOperation(state => 'default')
                        setUpdateCategory({
                            name: ''
                        })
                        reload()
                    }}>Guardar</AlertDialogAction>
                </AlertDialogFooter>
            </>
        ,
        delete:
            <>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Eliminar categoria?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Estás a punto de eliminar la categoria
                        <b className='w-full'>{' '}{categories.find(item => item.id == idSelect)?.name} {' '}</b>
                        de manera permanente. ¿Estás seguro de que deseas continuar?
                        <br />
                        <br />
                        <b className='text-red-500 text-xs w-full'>Una vez se elimine esta categoria se eliminara todos los productos relacionados con el.</b>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => { setIdSelect('') }}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await toast.promise(fetch(`/api/v1/category/${idSelect}`, { method: 'delete' }), {
                            loading: 'Cargando...',
                            success: 'Categoria eliminada!',
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
                                <TableHead>Fecha de creacion</TableHead>
                                <TableHead>Fecha de actualizacion</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((item, index) => (
                                <TableRow key={item.id} className='h-16'>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
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
                                                            name: item.name
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
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" id='operation-category' className='invisible'>Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        {operationUI[operation]}
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className='bg-white p-8 rounded-xl'>
                asd
            </div>
        </div >
    )
}

export default Page