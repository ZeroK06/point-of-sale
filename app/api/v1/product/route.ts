import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { ERRORS } from '@/errors/handle_errors'
import { TYPE_PRODUCT } from '@/types/product'
const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const rows = searchParams.get('rows')
    const page = searchParams.get('page')
    if (!rows || !page) {
      const all_products = await prisma.producto.findMany()
      return NextResponse.json({ data: all_products, success: true })
    } else {
      const count = await prisma.producto.count()
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
      const all_products = await prisma.producto.findMany({
        skip: Number(rows) * (Number(page) - 1),
        take: Number(rows),
      })
      return NextResponse.json({ data: all_products, success: true, pages })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  const props: TYPE_PRODUCT = await req.json()
  if (
    !props.name ||
    !props.shortName ||
    !props.brand ||
    !props.description ||
    !props.model ||
    !props.price ||
    !props.stock ||
    !props.categoriaId ||
    !props.urlImage
  ) {
    return NextResponse.json({
      success: false,
      error: ERRORS.DatosDeProductoInvalidos,
    })
  }

  try {
    const new_product = await prisma.producto.create({
      data: { ...props },
    })

    return NextResponse.json({ success: true, data: new_product })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
