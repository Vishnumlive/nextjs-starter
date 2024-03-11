import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getSession } from "next-auth/react"

export async function middleware(request: NextRequest) {
    const session = await getSession({ req: request });
    console.log("Middleware section working");
    if(session){
        return NextResponse.redirect('/signin')
    }
}