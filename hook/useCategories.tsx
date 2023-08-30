import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useCategories = () => {

    const [categories, setCategories] = useState<Prisma.CategoriaSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/category', { method: 'get' })
            const { data } = await response.json()
            setCategories(data)
            setIsLoading(false)
        }
        getProducts()
    }, [load])



    return { categories, isLoading, reload }
}

export default useCategories