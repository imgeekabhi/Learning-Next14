import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    // const response = NextResponse.next();

    // const themePrefrence = request.cookies.get("theme");
    // if (!themePrefrence) {
    //   response.cookies.set("theme", "dark");
    // }
    // response.headers.set("custom-header", "custom-value");
    // return response;
    return NextResponse.redirect(new URL("/blog", request.url));
    // return NextResponse.redirect(new URL("/blog", request.url)); // redirect to the blog page but route will be same.
  }
  //   return NextResponse.redirect(new URL("/", request.url)); //to redirect in defferent page
}

export const config = {
  matcher: "/profile",
};
