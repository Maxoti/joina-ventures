import { NextResponse, type NextRequest } from "next/server";

const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Temporarily unavailable</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;color:#183848;text-align:center;padding:24px}</style>
</head><body><main><h1>Temporarily unavailable</h1><p>We will be back soon.</p></main></body></html>`;

export function proxy(request: NextRequest) {
  void request;
  if (process.env.MAINTENANCE_MODE !== "false") return NextResponse.next();

  return new NextResponse(page, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};