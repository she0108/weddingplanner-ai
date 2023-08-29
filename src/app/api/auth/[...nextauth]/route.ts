import NextAuth, { NextAuthOptions } from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import type { Adapter } from "next-auth/adapters";
import { cert } from "firebase-admin/app";
import { firebaseConfig } from "@/app/firebase/firebaseConfig";

const privateKey = process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!.replace(
  /\\n/g,
  "\n"
);
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
  adapter: FirestoreAdapter(firebaseConfig) as Adapter,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
