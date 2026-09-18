import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isIndexableService } from "@/data/serviceIndexing";
import { isIndexableGuide } from "@/data/guideIndexing";

// Service and guide detail pages are indexable only after their slugs pass the
// centralized content-quality review lists. Unreviewed detail pages stay crawlable
// but receive X-Robots-Tag: noindex, follow.
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/guide/")) {
    const slug = pathname.split("/")[2] ?? "";
    if (!isIndexableGuide(slug)) {
      response.headers.set("X-Robots-Tag", "noindex, follow");
    }
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
