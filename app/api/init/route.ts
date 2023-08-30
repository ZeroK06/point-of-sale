import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export async function GET(req: Request) {
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

    if (!secret_key) {
      return NextResponse.json({
        success: false,
        error: { code: 0, message: 'Error interno de servidor, JWT' },
      })
    }
    const token = await sign({ init: true }, secret_key, { expiresIn: '6h' })
    cookies().set('token-auth', token)

    return NextResponse.json({ success: true, token })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function POST(req: Request) {
  try {
    const props = await req.json()

    if (Array.isArray(props.categories)) {
      const categories = await prisma.categoria.createMany({
        data: props.categories,
      })
    }
    if (Array.isArray(props.services)) {
      const services = await prisma.servicio.createMany({
        data: props.services.map(item => ({
          ...item,
          price: Number(item.price),
          duration: Number(item.duration),
        })),
      })
      const tokenDni = process.env.NEXT_PUBLIC_TOKEN_API_DNI
      const URI_DNI = `https://dniruc.apisperu.com/api/v1/dni/${props.user.dni}?token=${tokenDni}`

      const response_api_dni = await fetch(URI_DNI)
      const { nombres, apellidoPaterno, apellidoMaterno } =
        await response_api_dni.json()
      props.user.firstName = nombres
      props.user.lastName = apellidoPaterno + ' ' + apellidoMaterno
      props.user.fullName =
        nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno

      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      const hash_password = await bcrypt.hash(props.user.password, salt)

      const new_user = await prisma.usuario.create({
        data: { ...props.user, password: hash_password },
      })
    }
    await prisma.empresa.create({
      data: props.business,
    })
    console.log(props)
    cookies().delete('token-auth')
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
