import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/database/firebase'; 

export async function middleware(req: NextRequest) {
  const user = auth.currentUser; 

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if not authenticated
  }

  const token = await user.getIdTokenResult(); 

  if (req.nextUrl.pathname.startsWith('/dashboard') && token.claims.role !== 'admin') {
    return NextResponse.redirect(new URL('/user-dashboard', req.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/user-dashboard/:path*'], // Apply middleware to protected routes
};
