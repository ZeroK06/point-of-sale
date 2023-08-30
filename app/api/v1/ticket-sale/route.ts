import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface TYPE_PRODUCT {
  productoId: string
  units: number
}

interface TYPE_TICKET_SALE {
  cliente: {
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail: string
  }
  ticket: {
    medioPago: string
    status: boolean
  }
  products: Array<TYPE_PRODUCT>
}

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const allSales = await prisma.ticketVenta.findMany({
      include: { vendedor: true },
    })
    return NextResponse.json({ success: true, data: allSales })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  try {
    /* Obtener token */
    const token = cookies().get('token-auth')?.value
    const secret_key = process.env.NEXT_PUBLIC_JWT_KEY

    const { id_user } = await verify(token, secret_key)

    const props: TYPE_TICKET_SALE = await req.json()

    if (props.products.length == 0) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'No selecciono productos' },
      })
    }

    /* Sumatorio de precios */
    let sumProducts = 0
    for (const product of props.products) {
      const currentPrice = await prisma.producto.findUnique({
        where: { id: product.productoId },
      })
      sumProducts += Number(currentPrice?.price) * product.units
    }

    /* Creacion de ticket */
    const ticket = await prisma.ticketVenta.create({
      data: {
        ...props.cliente,
        usuarioId: id_user,
        amount: sumProducts,
        ...props.ticket,
      },
    })

    /* Creacion de los detalles de compra */
    await prisma.detalleVenta.createMany({
      data: props.products.map(item => ({
        usuarioId: id_user,
        ticketVentaId: ticket.id,
        ...item,
      })),
    })

    /* Obtencion de todos los detalles con los productos */
    const find_detall = await prisma.detalleVenta.findMany({
      where: { ticketVentaId: ticket.id },
      include: { producto: true },
    })

    return NextResponse.json({
      success: true,
      data: { detall: find_detall, ticket: ticket },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
