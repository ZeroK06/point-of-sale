import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  req: Request,
  { params: { id: id_category } }: { params: { id: string } }
) {
  try {
    const find_category = await prisma.categoria.findUnique({
      where: { id: id_category },
    })
    return NextResponse.json({ success: true, find_category })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function DELETE(
  req: Request,
  { params: { id: id_category } }: { params: { id: string } }
) {
  try {
    const delete_category = await prisma.categoria.delete({
      where: { id: id_category },
    })
    return NextResponse.json({ success: true, delete_category })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function PATCH(
  req: Request,
  { params: { id: id_category } }: { params: { id: string } }
) {
  try {
    const { name }: { name: string } = await req.json()
    const update_category = await prisma.categoria.update({
      where: { id: id_category },
      data: { name },
    })
    return NextResponse.json({ success: true, update_category })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
