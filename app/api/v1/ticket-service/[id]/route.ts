import { ERRORS } from '@/errors/handle_errors'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(
  req: Request,
  { params: { id: id_ticket } }: { params: { id: string } }
) {
  try {
    const ticket_service = await prisma.ticketServicio.findUnique({
      where: { id: id_ticket },
      include: {
        additionalPayments: true,
        tecnico: true,
        DetalleServicio: {
          include: {
            ficha: true,
            servicio: true,
          },
        },
      },
    })
    if (!ticket_service) {
      return NextResponse.json({
        success: false,
        error: ERRORS.ServicioNoEncontrado,
      })
    }
    return NextResponse.json({
      success: true,
      data: ticket_service,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function DELETE(
  req: Request,
  { params: { id: id_ticket } }: { params: { id: string } }
) {
  try {
    const delete_ticket = await prisma.ticketServicio.delete({
      where: { id: id_ticket },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
