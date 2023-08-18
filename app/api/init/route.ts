import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import { cookies } from 'next/headers'
const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const count_user = await prisma.usuario.count()
    const count_empresa = await prisma.empresa.count()

    if (count_empresa != 0 && count_user != 0) {
      return NextResponse.json({
        success: false,
        error: {
          message: 'Sistema ya inicializado',
        },
      })
    }
    const secret_key = process.env.NEXT_PUBLIC_JWT_KEY
    const token = sign({ init: true }, secret_key)
    cookies().set('token-auth', token)

    return NextResponse.json({ success: true, token })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
