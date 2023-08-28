import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 요청 쿼리
  const query = req.query.query as string;

  // 요청 보낼 API 주소
  const api_url = `https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(
    query
  )}`;

  // 네이버 계정 키 Header에 담기
  const headers = {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_ID!,
    "X-Naver-Client-Secret":
      process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_SECRET!,
  };

  // API 비동기 처리
  try {
    const response = await fetch(api_url, { headers });
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res.status(response.status).end();
      console.log("error = " + response.status);
    }
  } catch (error) {
    res.status(500).end();
    console.error(error);
  }
}
