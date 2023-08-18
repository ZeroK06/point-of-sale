import { PrismaClient } from '@prisma/client'
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

export async function POST(req: Request) {
  try {
    const props: TYPE_TICKET_SALE = await req.json()
    console.log(true)

    if (props.products.length == 0) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'No selecciono productos' },
      })
    }

    let sumProducts = 0
    for (const product of props.products) {
      const currentPrice = await prisma.producto.findUnique({
        where: { id: product.productoId },
      })
      sumProducts += Number(currentPrice?.price) * product.units
    }

    const ticket = await prisma.ticketVenta.create({
      data: {
        ...props.cliente,
        usuarioId: req.userId,
        amount: sumProducts,
        ...props.ticket,
      },
    })

    await prisma.detalleVenta.createMany({
      data: props.products.map(item => ({
        usuarioId: req.userId,
        ticketVentaId: ticket.id,
        ...item,
      })),
    })
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
