import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'
export async function middleware(req: NextRequest) {
  /*   try {
    const token = req.cookies.get('token-auth')?.value
    const secret_key = process.env.NEXT_PUBLIC_JWT_KEY

    const isValidToken = await jwtVerify(
      token,
      new TextEncoder().encode(secret_key)
    )
    console.log('Entro')
    req.userId = isValidToken.id_user
    return NextResponse.next()
  } catch (error) {
    console.log('salio', error)

    return NextResponse.redirect(new URL('/auth/signup', req.url))
  } */
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/v1/:path*'],
}
