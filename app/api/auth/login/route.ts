import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { ERRORS } from '@/errors/handle_errors'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
const prisma = new PrismaClient()
export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const find_user = await prisma.usuario.findUnique({
      where: { username: username },
    })

    if (!find_user) {
      return NextResponse.json({
        success: false,
        error: ERRORS.UsuarioNoEncontrado,
      })
    }

    const isValidPass = await bcrypt.compare(password, find_user.password)
    if (!isValidPass) {
      return NextResponse.json({
        success: false,
        error: ERRORS.DatosDeUsuarioInvalidos,
      })
    }
    const secret_key = process.env.NEXT_PUBLIC_JWT_KEY

    if (!secret_key) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Error interno de servidor, JWT' },
      })
    }

    const token = await jwt.sign({ id_user: find_user.id }, secret_key, {
      expiresIn: '6h',
    })

    cookies().set('token-auth', token)
    return NextResponse.json({ success: true, token })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }

  return NextResponse.json('Hello')
}
