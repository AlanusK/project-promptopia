import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string, // as string => option1 for solving typescript error
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // ! => option2
    }),
  ],
//   async session({ session }) {
//     return session
//   },
//   async signIn({ profile }) {
    
//   },
});

export { handler as GET, handler as POST };
