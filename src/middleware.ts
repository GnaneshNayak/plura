import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { url } from 'inspector';

const isPublicRoute = createRouteMatcher([
  '/site',
  'api/uploadthing',
  '/agency/sign-in(.)',
  '/agency/sign-up(.)',
]);

export default clerkMiddleware(async (auth, request) => {
  const url = request.nextUrl;
  console.log(url);

  if (url.pathname === '/') {
    url.pathname = '/site';
    return NextResponse.redirect(url);
  }

  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!...|_next).*)', '/', '/api/trpc'],
};
