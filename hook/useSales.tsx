import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useSales = () => {

    const [sales, setSales] = useState<Prisma.TicketServicioSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/ticket-sale')
            const { data } = await response.json()
            setSales(data)
            setIsLoading(false)
        }
        getProducts()
    }, [load])



    return { sales, isLoading, reload }
}

export default useSales