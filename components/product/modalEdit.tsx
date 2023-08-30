'use client'
import React, { useId, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TYPE_PRODUCT } from '@/types/product'
import { Textarea } from '../ui/textarea'
import useCategories from '@/hook/useCategories'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command'
import { CheckIcon } from '@radix-ui/react-icons'

const ModalEdit = ({ id }: { id: string }) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const { categories } = useCategories()



    const key = useId()

    const [product, setProduct] = useState<TYPE_PRODUCT>({
        name: '',
        shortName: '',
        model: '',
        brand: '',
        urlImage: '',
        price: 0,
        stock: 0,
        description: '',
        categoriaId: '',
    })

    const handleForm = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setProduct(state => ({ ...state, [name]: value }))
    }

    return (
        <Dialog key={key}  >
            <DialogTrigger asChild>
                <Button variant="outline" id='modalitem' hidden className='invisible'>Add Table</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Add a Table</DialogTitle>
                    <DialogDescription>
                        Add a table name and a read-only API key from AirTable
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center gap-4">
                        <Input type='text' />
                        <Input type='text' />
                        <div className='flex gap-2'>
                            <Input type='text' />
                            <Input type='text' />
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-[200px] justify-between"
                                    >
                                        {value
                                            ? categories.find((item) => item.name === value)?.name
                                            : "Select category..."}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[300px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search framework..." />
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {categories.map((item) => (
                                                <CommandItem
                                                    key={item.id}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={`mr-2 h-4 w-4 ${value === item.name ? "opacity-100" : "opacity-0"}`}
                                                    />
                                                    {item.name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className='flex gap-2'>
                            <Input type='number' />
                            <Input type='number' />
                        </div>
                        <Textarea />
                        <Input type='text' />

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ModalEdit