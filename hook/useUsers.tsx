import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useUsers = () => {

    const [users, setUsers] = useState<Prisma.UsuarioSelect[]>([])
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [load, setLoad] = useState(false)

    const reload = () => {
        setLoad(state => !state)
    }

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch('/api/v1/user')
            const { data } = await response.json()
            setUsers(data)
            setIsLoading(false)
        }
        getProducts()
    }, [load])



    return { users, isLoading, reload }
}

export default useUsers