import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

interface PRODUCT_UPDATE_PROPS {
  name?: string
  shortName?: string
  description?: string
  price?: number
  stock?: number
  model?: string
  brand?: string
  urlImage?: string
  categoriaId?: string
}

const prisma = new PrismaClient()
export async function GET(
  req: Request,
  { params: { id: id_product } }: { params: { id: string } }
) {
  try {
    const find_product = await prisma.producto.findUnique({
      where: { id: id_product },
    })
    return NextResponse.json({ success: true, find_product })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function DELETE(
  req: Request,
  { params: { id: id_product } }: { params: { id: string } }
) {
  try {
    const delete_product = await prisma.producto.delete({
      where: { id: id_product },
    })
    return NextResponse.json({ success: true, delete_product })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function PATCH(
  req: Request,
  { params: { id: id_product } }: { params: { id: string } }
) {
  try {
    const props: PRODUCT_UPDATE_PROPS = await req.json()
    const update_product = await prisma.producto.update({
      where: { id: id_product },
      data: { ...props },
    })
    return NextResponse.json({ success: true, update_product })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
