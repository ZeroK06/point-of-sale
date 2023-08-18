import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

interface TYPE_FICHA {
  brand: string
  model: string
  procesador: string
  memory: number
  almacenamiento: string
  grafica: string
  memoryGrafica: string
  pantalla: string
  sistema: string
  description: string
}

interface TYPE_ADDITIONALS {
  name: string
  mount: number
  ticketServicioId?: string
}

interface TYPE_TICKET_SERVICE {
  cliente: {
    clientName: string
    clientDni: string
    clientPhoneNumber: string
    clientAddress: string
    clientEmail: string
  }
  ticket: {
    additionalPayments: Array<TYPE_ADDITIONALS>
    description: string
  }
  ficha: TYPE_FICHA
  serviceId: string
}

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const props: TYPE_TICKET_SERVICE = await req.json()

    if (!(typeof props.ficha == 'object')) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Falta enviar ficha' },
      })
    }

    const create_ficha = await prisma.ficha.create({
      data: props.ficha,
    })
    const ticket = await prisma.ticketServicio.create({
      data: {
        ...props.cliente,
        usuarioId: req.userId,
        description: props.ticket.description,
      },
    })
    if (!(props.ticket.additionalPayments.length == 0)) {
      await prisma.additionalPayments.createMany({
        data: props.ticket.additionalPayments.map(item => ({
          ...item,
          ticketServicioId: ticket.id,
        })),
      })
    }
    const sumAdditionals = props.ticket.additionalPayments.reduce(
      (acumulador, actual) => acumulador + actual.mount,
      0
    )

    const unique_service = await prisma.servicio.findUnique({
      where: { id: props.serviceId },
    })

    const detall_service = await prisma.detalleServicio.create({
      data: {
        fichaId: create_ficha.id,
        servicioId: props.serviceId,
        ticketServicioId: ticket.id,
        amount: Number(unique_service?.price) + sumAdditionals,
      },
    })
    return NextResponse.json({
      success: true,
      data: {
        ticket: ticket,
        detallService: detall_service,
        ficha: create_ficha,
      },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
