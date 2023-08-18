import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()
interface BUSINESS_UPDATE_PROPS {
  name: string
  address: string
  province: string
  departament: string
  country: string
  email: string
  description: string
  urlImage: string
}

export async function PATCH(
  req: Request,
  { params: { id: id_business } }: { params: { id: string } }
) {
  try {
    const props: BUSINESS_UPDATE_PROPS = await req.json()
    const update_business = await prisma.empresa.update({
      where: { id: id_business },
      data: { ...props },
    })
    return NextResponse.json({ success: true, update_business })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
