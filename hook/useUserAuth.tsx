'use client'
import useStore from '@/store/useStore'
import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { verify } from 'jsonwebtoken'
const useUserAuth = () => {

    const [currentUser, setCurrentUser] = useState<Prisma.UsuarioSelect>({})
    const token = document.cookie.slice(document.cookie.search('=') + 1)
    const { setUser } = useStore()

    useEffect(() => {
        const getBusiness = async () => {
            console.log(token);

            const payload = await verify(token, process.env.NEXT_PUBLIC_JWT_KEY)
            const response = await fetch(`/api/v1/user/${payload.id_user}`, { method: 'get' })
            const { data } = await response.json()
            setCurrentUser(data)
            setUser(data)
        }
        getBusiness()
    }, [])

    return { currentUser }
}

export default useUserAuth