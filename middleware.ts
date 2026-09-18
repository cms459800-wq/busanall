import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isIndexableService } from "@/data/serviceIndexing";

// Guide details remain noindex. Service details are noindex unless they have
// passed the individual content-quality review in data/serviceIndexing.ts.
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/guide/")) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
    return response;
  }

  if (pathname.startsWith("/service/")) {
    const slug = pathname.split("/")[2] ?? "";
    if (!isIndexableService(slug)) {
      response.headers.set("X-Robots-Tag", "noindex, follow");
    }
  }

  return response;
}

export const config = {
  matcher: ["/service/:slug", "/guide/:slug"],
};
