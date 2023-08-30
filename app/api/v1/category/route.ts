import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const rows = searchParams.get('rows')
    const page = searchParams.get('page')
    if (!rows || !page) {
      const all_categories = await prisma.categoria.findMany()
      return NextResponse.json({ data: all_categories, success: true })
    } else {
      const count = await prisma.categoria.count()
      const pages = Math.ceil(count / rows)
      if (Number(page) > pages) {
        return NextResponse.json({
          success: false,
          error: {
            code: 0,
            message: 'Pagina no existente.',
          },
        })
      }
      const all_categories = await prisma.categoria.findMany({
        skip: Number(rows) * (Number(page) - 1),
        take: Number(rows),
      })
      return NextResponse.json({ data: all_categories, success: true, pages })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  try {
    const props = await req.json()
    if (Array.isArray(props)) {
      const categories = await prisma.categoria.createMany({
        data: props,
      })
      return NextResponse.json({ success: true, data: categories })
    } else if (typeof props == 'object') {
      const new_category = await prisma.categoria.create({
        data: props,
      })
      return NextResponse.json({ success: true, data: new_category })
    } else {
      return NextResponse.json({
        success: false,
        error: 'Falta datos',
      })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
