import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

interface TYPE_SERVICE {
  name: string
  description: string
  price: number
  duration: number
  urlImage: string
}

export async function GET(req: Request) {
  try {
    const many_services = await prisma.servicio.findMany()
    return NextResponse.json({ success: true, data: many_services })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  try {
    const props: TYPE_SERVICE = await req.json()

    if (!props.name) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Falta datos' },
      })
    }

    const new_service = await prisma.servicio.create({ data: props })
    return NextResponse.json({ success: true, data: new_service })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
