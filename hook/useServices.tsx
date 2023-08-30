import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useServices = () => {

    const [services, setServices] = useState<Prisma.TicketServicioSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getServices = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/ticket-service')
            const { data } = await response.json()
            setServices(data)
            setIsLoading(false)
        }
        getServices()
    }, [load])



    return { services, isLoading, reload }
}

export default useServices