import { TYPE_PRODUCT } from '@/types/product'
import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useProducts = () => {

    const [products, setProducts] = useState<Prisma.ProductoSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/product')
            const { data } = await response.json()
            setProducts(data)
            setIsLoading(false)
        }
        getProducts()
    }, [load])



    return { products, isLoading, reload }
}

export default useProducts