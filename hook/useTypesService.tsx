import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useTypesService = () => {

    const [typesService, setTypesService] = useState<Prisma.ServicioSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/service', { method: 'get' })
            const { data } = await response.json()
            setTypesService(data)
            setIsLoading(false)
        }
        getProducts()
    }, [load])



    return { typesService, isLoading, reload }
}

export default useTypesService