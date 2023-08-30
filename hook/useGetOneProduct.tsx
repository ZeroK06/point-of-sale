import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useGetOneProduct = (id: string) => {

    const [product, setProduct] = useState<Prisma.ProductoSelect>()
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)
            const response = await fetch(`/api/v1/product/${id}`)
            const { data } = await response.json()
            setProduct(data)
            setIsLoading(false)
        }
        getProduct()
    }, [load])



    return { product, isLoading, reload }
}

export default useGetOneProduct