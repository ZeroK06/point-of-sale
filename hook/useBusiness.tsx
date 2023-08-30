import useStore from '@/store/useStore'
import { Prisma } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const useBusiness = () => {

    const [currentEmpresa, setCurrentEmpresa] = useState<Prisma.EmpresaSelect>({})

    const { setEmpresa } = useStore()

    useEffect(() => {
        const getBusiness = async () => {
            const response = await fetch('/api/v1/business', { method: 'get' })
            const { data } = await response.json()
            setCurrentEmpresa(data)
            setEmpresa(data)
        }
        getBusiness()
    }, [])

    return { currentEmpresa }
}

export default useBusiness