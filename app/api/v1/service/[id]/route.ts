import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

interface TYPE_SERVICE {
  name?: string
  description?: string
  price?: number
  duration?: number
  urlImage?: string
}
export async function GET(
  req: Request,
  { params: { id: id_service } }: { params: { id: string } }
) {
  try {
    const unique_service = await prisma.servicio.findUnique({
      where: { id: id_service },
    })

    return NextResponse.json({ success: true, data: unique_service })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function PATCH(
  req: Request,
  { params: { id: id_service } }: { params: { id: string } }
) {
  try {
    const props: TYPE_SERVICE = await req.json()
    const update_service = await prisma.servicio.update({
      where: { id: id_service },
      data: props,
    })

    return NextResponse.json({ success: true, data: update_service })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function DELETE(
  req: Request,
  { params: { id: id_service } }: { params: { id: string } }
) {
  try {
    const delete_service = await prisma.servicio.delete({
      where: { id: id_service },
    })

    return NextResponse.json({ success: true, data: delete_service })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
