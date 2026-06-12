import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev_secret"
);

async function verify(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard", "/products"];
  const adminRoutes = ["/products/create"];

  const isProtected = protectedRoutes.some(r =>
    pathname.startsWith(r)
  );

  const isAdminRoute = adminRoutes.some(r =>
    pathname.startsWith(r)
  );

  // no token → block
  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // verify JWT
  let payload = null;

  if (token) {
    payload = await verify(token);
  }

  if (isProtected && !payload) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // role-based access
  if (
    isAdminRoute &&
    payload &&
    payload.role !== "admin"
  ) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}