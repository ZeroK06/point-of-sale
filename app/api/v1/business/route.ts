import { ERRORS } from '@/errors/handle_errors'
import { TYPE_BUSINESS } from '@/types/business'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const business = await prisma.empresa.findFirst({
      where: { type: 'empresa' },
    })

    return NextResponse.json({ success: true, data: business })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  try {
    const count = await prisma.empresa.count()
    if (count != 0) {
      return NextResponse.json({ success: false })
    }
    const props: TYPE_BUSINESS = await req.json()
    if (
      !props.name ||
      !props.province ||
      !props.departament ||
      !props.country ||
      !props.address ||
      !props.description ||
      !props.email
    ) {
      return NextResponse.json({
        success: false,
        error: {
          code: 0,
          message: 'Faltan datos',
        },
      })
    }

    const new_product = await prisma.empresa.create({
      data: { ...props },
    })

    return NextResponse.json({ success: true, data: new_product })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
