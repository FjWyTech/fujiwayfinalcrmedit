import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  // If there's no session and the request is for a protected route, redirect to sign in
  if (!session && isProtectedRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // If there's a session and the request is for an auth route, redirect to home
  if (session && isAuthRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

// Protected routes that require authentication
function isProtectedRoute(pathname: string): boolean {
  const protectedRoutes = [
    '/',
    '/dashboards',
    '/applications',
    '/analytics',
    '/projects',
    '/chat',
    '/contact-list',
    '/calendar',
    '/invoice',
    '/profile',
    '/notifications'
  ]

  return protectedRoutes.some(route => 
    pathname === route || 
    (route.endsWith('/*') && pathname.startsWith(route.slice(0, -2)))
  )
}

// Auth routes that should redirect to home if already authenticated
function isAuthRoute(pathname: string): boolean {
  return ['/auth/signin', '/auth/signup', '/auth/reset-password'].includes(pathname)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
} 