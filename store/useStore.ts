import { Prisma } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  empresa: Prisma.EmpresaSelect
  user: Prisma.UsuarioSelect
  setEmpresa: (empresa: Prisma.EmpresaSelect) => void
  setUser: (user: Prisma.UsuarioSelect) => void
}

const useStore = create<Store>()(
  persist(
    set => ({
      empresa: {},
      user: {},
      setEmpresa: newEmpresa =>
        set(state => ({ ...state, empresa: newEmpresa })),
      setUser: newUser => set(state => ({ ...state, user: newUser })),
    }),
    {
      name: 'cms-store',
    }
  )
)

export default useStore
