import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

interface USER_UPDATE_TYPE {
  firstName?: string
  lastName?: string
  dni?: string
  fullName?: string
  email?: string
  phoneNumer?: string
  username?: string
  gender?: string
  role?: string
  urlImage?: string
  address?: string
  isVigent?: boolean
  password?: string
}

const prisma = new PrismaClient()
export async function GET(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const find_user = await prisma.usuario.findUnique({
      where: { id: id_user },
    })
    return NextResponse.json({ success: true, find_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function DELETE(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const delete_user = await prisma.usuario.update({
      where: { id: id_user },
      data: { isVigent: false },
    })
    return NextResponse.json({ success: true, delete_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function PATCH(
  req: Request,
  { params: { id: id_user } }: { params: { id: string } }
) {
  try {
    const props: USER_UPDATE_TYPE = await req.json()

    if (props.dni != '' && typeof props.dni != 'undefined') {
      const tokenDni = process.env.NEXT_PUBLIC_TOKEN_API_DNI
      const URI_DNI = `https://dniruc.apisperu.com/api/v1/dni/${props.dni}?token=${tokenDni}`

      const response_api_dni = await fetch(URI_DNI)
      const { nombres, apellidoPaterno, apellidoMaterno, success } =
        await response_api_dni.json()
      if (success) {
        props.firstName = nombres
        props.lastName = apellidoPaterno + ' ' + apellidoMaterno
        props.fullName = nombres + ' ' + apellidoPaterno + ' ' + apellidoMaterno
      }
    }
    if (props.password != '' && typeof props.password != 'undefined') {
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      const hash_password = await bcrypt.hash(props.password, salt)
      props.password = hash_password
    }
    console.log(props)

    const update_user = await prisma.usuario.update({
      where: { id: id_user },
      data: props,
    })
    return NextResponse.json({ success: true, update_user })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
