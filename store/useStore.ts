import { Prisma } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  empresa: Prisma.EmpresaSelect
  user: Prisma.UsuarioSelect
  news: boolean
  toggleNews: () => void
  setEmpresa: (empresa: Prisma.EmpresaSelect) => void
  setUser: (user: Prisma.UsuarioSelect) => void
}

const useStore = create<Store>()(
  persist(
    set => ({
      news: true,
      empresa: {},
      user: {},
      toggleNews: () => set(state => ({ ...state, news: !state.news })),
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
