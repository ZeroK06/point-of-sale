import { ERRORS } from '@/errors/handle_errors'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(
  req: Request,
  { params: { id: id_ticket } }: { params: { id: string } }
) {
  try {
    const ticket_sale = await prisma.ticketVenta.findUnique({
      where: { id: id_ticket },
    })
    if (!ticket_sale) {
      return NextResponse.json({
        success: false,
        error: ERRORS.VentaNoEncontrada,
      })
    }
    const detall_sale = await prisma.detalleVenta.findMany({
      where: { ticketVentaId: id_ticket },
      include: {
        producto: true,
      },
    })
    return NextResponse.json({
      success: true,
      data: { ticket: ticket_sale, detall_sales: detall_sale },
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
    const delete_ticket = await prisma.ticketVenta.delete({
      where: { id: id_ticket },
    })
    const delete_many_detall = await prisma.detalleVenta.deleteMany({
      where: { ticketVentaId: delete_ticket.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
