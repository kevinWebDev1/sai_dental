import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = (request.headers.get("host") || "").toLowerCase();

  // If request does not already specify ?c=, resolve clinic from custom Vercel domain hostname
  if (!url.searchParams.has("c")) {
    if (host.includes("family")) {
      url.searchParams.set("c", "family");
      return NextResponse.rewrite(url);
    }
    if (host.includes("pearl")) {
      url.searchParams.set("c", "pearl");
      return NextResponse.rewrite(url);
    }
    if (host.includes("dentsquare")) {
      url.searchParams.set("c", "dentsquare");
      return NextResponse.rewrite(url);
    }
    if (host.includes("dixit")) {
      url.searchParams.set("c", "dixit");
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static, _next/image
     * - static files (.svg, .png, .jpg, .ico, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
