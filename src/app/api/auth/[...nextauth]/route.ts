import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
