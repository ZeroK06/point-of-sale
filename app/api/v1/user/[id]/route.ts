import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

interface USER_UPDATE_TYPE {
  firstName?: string
  lastName?: string
  dni?: string
  fullName?: string
  email?: string
  phoneNumer?: string
  gender?: string
  role?: string
  urlImage?: string
  address?: string
  password?: string
}

const prisma = new PrismaClient()
export async function GET(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const find_user = await prisma.usuario.findUnique({
      where: { id: id_user },
    })
    return NextResponse.json({ success: true, find_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function DELETE(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const delete_user = await prisma.usuario.delete({ where: { id: id_user } })
    return NextResponse.json({ success: true, delete_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function PATCH(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const props: USER_UPDATE_TYPE = await req.json()
    const update_user = await prisma.usuario.update({
      where: { id: id_user },
      data: { ...props },
    })
    return NextResponse.json({ success: true, update_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
