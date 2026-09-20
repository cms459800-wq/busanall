import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isIndexableService } from "@/data/serviceIndexing";
import { isIndexableGuide } from "@/data/guideIndexing";

const OLD_HOSTS = new Set(["parcelout.kr", "www.parcelout.kr"]);
const NEW_HOST = "www.lastwar.co.kr";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";

  // Preserve every path and query string while permanently moving the old
  // production domain to the new canonical host.
  if (OLD_HOSTS.has(hostname)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = NEW_HOST;
    return NextResponse.redirect(redirectUrl, 301);
  }

  const response = NextResponse.next();

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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
