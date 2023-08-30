import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface TYPE_FICHA {
  brand?: string
  model?: string
  case?: string
  procesador?: string
  memory?: string
  almacenamiento?: string
  grafica?: string
  memoryGrafica?: string
  pantalla?: string
  sistema?: string
  description?: string
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
    additionalPayments?: Array<TYPE_ADDITIONALS>
    description: string
    medioPago: string
  }
  ficha: TYPE_FICHA
  serviceId: string
}

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const all_services = await prisma.ticketServicio.findMany({
      include: {
        additionalPayments: true,
        tecnico: true,
        DetalleServicio: true,
      },
    })
    return NextResponse.json({ success: true, data: all_services })
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

    const props: TYPE_TICKET_SERVICE = await req.json()

    if (!(typeof props.ficha == 'object')) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Falta enviar ficha' },
      })
    }
    let sumAdditionals = 0
    if (props.ticket?.additionalPayments.length > 0) {
      sumAdditionals = props.ticket.additionalPayments.reduce(
        (acumulador, actual) => acumulador + actual.mount,
        0
      )
    }
    /* Pagos adicional (SUMA) */

    /* Creacion de la ficha */

    const create_ficha = await prisma.ficha.create({
      data: props.ficha,
    })
    const one_service = await prisma.servicio.findUnique({
      where: { id: props.serviceId },
    })

    /* Creacion del ticket */
    const ticket = await prisma.ticketServicio.create({
      data: {
        ...props.cliente,
        usuarioId: id_user,
        description: props.ticket.description,
        medioPago: props.ticket.medioPago,
        amount: Number(sumAdditionals + Number(one_service?.price)),
      },
    })
    console.log(1)
    /* Guardar pagos adicionales */
    if (props.ticket?.additionalPayments.length > 0) {
      await prisma.additionalPayments.createMany({
        data: props.ticket.additionalPayments.map(item => ({
          ...item,
          mount: Number(item.mount),
          ticketServicioId: ticket.id,
        })),
      })
    }
    console.log(props, id_user)

    await prisma.detalleServicio.createMany({
      data: {
        fichaId: create_ficha.id,
        servicioId: props.serviceId,
        ticketServicioId: ticket.id,
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        id: ticket.id,
      },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
