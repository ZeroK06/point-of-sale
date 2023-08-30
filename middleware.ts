import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
export async function middleware(req: NextRequest) {
  try {
    const token = req.cookies.get('token-auth')?.value
    const secret_key = process.env.NEXT_PUBLIC_JWT_KEY

    /* const prisma = new PrismaClient()
    if (!token) {
      const count_user = await prisma.usuario.count()
      const count_empresa = await prisma.empresa.count()

      if (count_empresa != 0 && count_user != 0) {
        return NextResponse.redirect('/api/init')
      }
    } */
    const isValidToken = await jwtVerify(
      token,
      new TextEncoder().encode(secret_key)
    )

    console.log(isValidToken.payload.init)
    if (req.nextUrl.pathname.startsWith('/init')) {
      if (isValidToken.payload.init) {
        return NextResponse.next()
      } else {
        return NextResponse.redirect(new URL('/auth/signup', req.url))
      }
    }

    console.log('Middleware')
    if (!isValidToken.payload.id_user) {
      return NextResponse.redirect(new URL('/init', req.url))
    }
    return NextResponse.next()
  } catch (error) {
    console.log('salio', error)
    return NextResponse.redirect(new URL('/auth/signup', req.url))
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/v1/:path*',
    '/account/:path*',
    '/init/:path*',
    '/',
  ],
}
