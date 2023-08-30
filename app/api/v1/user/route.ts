import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { TYPEUSER } from '@/types/user'
import { ERRORS } from '@/errors/handle_errors'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const rows = searchParams.get('rows')
    const page = searchParams.get('page')
    if (!rows || !page) {
      const all_users = await prisma.usuario.findMany()
      return NextResponse.json({ data: all_users, success: true })
    } else {
      const count = await prisma.usuario.count()
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
      const all_users = await prisma.usuario.findMany({
        skip: Number(rows) * (Number(page) - 1),
        take: Number(rows),
      })
      return NextResponse.json({ data: all_users, success: true, pages })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

export async function POST(req: Request) {
  const props: TYPEUSER = await req.json()
  if (
    !props.dni ||
    !props.email ||
    !props.phoneNumer ||
    !props.gender ||
    !props.role ||
    !props.password ||
    !props.address ||
    !props.username
  ) {
    return NextResponse.json({
      success: false,
      error: ERRORS.DatosDeUsuarioInvalidos,
    })
  }

  const tokenDni = process.env.NEXT_PUBLIC_TOKEN_API_DNI
  const URI_DNI = `https://dniruc.apisperu.com/api/v1/dni/${props.dni}?token=${tokenDni}`

  const response_api_dni = await fetch(URI_DNI)
  const { nombres, apellidoPaterno, apellidoMaterno } =
    await response_api_dni.json()
  props.firstName = nombres
  props.lastName = apellidoPaterno + ' ' + apellidoMaterno
  props.fullName = nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hash_password = await bcrypt.hash(props.password, salt)

  try {
    const new_user = await prisma.usuario.create({
      data: { ...props, password: hash_password },
    })

    return NextResponse.json({ success: true, data: new_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
