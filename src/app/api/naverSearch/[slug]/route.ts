import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(
    `https://openapi.naver.com/v1/search/blog.json?query=${slug}`,
    {
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_ID!,
        "X-Naver-Client-Secret":
          process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_SECRET!,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
