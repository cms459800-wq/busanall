import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Service and guide detail pages still contain placeholder image sections.
// Keep them crawlable for internal navigation, but out of search results until
// their visual/content review is complete and they are restored to the sitemap.
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, follow");
  return response;
}

export const config = {
  matcher: ["/service/:slug", "/guide/:slug"],
};
