const { NextResponse } = require('next/server');
const { NextRequest } = require('next/server');
const MobileDetect = require('mobile-detect');

export function middleware(request) {
  const url = request.nextUrl.clone();
  const userAgent = request.headers.get('user-agent') || '';
  const mobileDetect = new MobileDetect(userAgent);

  // Log the current pathname and any search parameters
  console.log('Request Path:', url.pathname);
  console.log('Current Query Parameters:', url.searchParams.toString());

  // Define the paths for which the redirection applies
  const mobilePaths = ['/Willkommen-MPA-mobile', '/Willkommen-Arzt-mobile'];

  if (mobilePaths.includes(url.pathname) && !mobileDetect.mobile()) {
    console.log('Non-mobile user detected. Redirecting to /');
    return NextResponse.redirect(new URL('/', request.url));
  }


  if (url.pathname === '/' && !url.searchParams.has('modal')) {
    console.log('Adding modal=true to the URL');
    url.searchParams.set('modal', 'true');
    return NextResponse.redirect(url);
  }

  console.log('No redirection needed');
  return NextResponse.next();
}
