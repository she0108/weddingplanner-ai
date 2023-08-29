import NextAuth, { NextAuthOptions } from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import type { Adapter } from "next-auth/adapters";
import clientPromise from "@/app/mongodb/clientPromise";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  callbacks: {
    async session(params) {
      const { session, token, user, newSession, trigger } = params;
      return session;
    },

    async redirect({ url }) {
      return "/plan";
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
