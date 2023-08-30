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
    const props = await req.json()
    if (Array.isArray(props)) {
      const services = await prisma.servicio.createMany({
        data: props.map(item => ({
          ...item,
          price: Number(item.price),
          duration: Number(item.duration),
        })),
      })
      return NextResponse.json({ success: true, data: services })
    } else if (typeof props == 'object') {
      const service = await prisma.servicio.create({
        data: props,
      })
      return NextResponse.json({ success: true, data: service })
    } else {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Falta datos' },
      })
    }

    return NextResponse.json({ success: true, data: new_service })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
