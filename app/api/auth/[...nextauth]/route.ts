import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/Database";
import User from "@models/user";
import { Error } from "mongoose";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string, // as string => option1 for solving typescript error
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // ! => option2
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session?.user?.email });
      return {
        ...session,
        user: { ...session.user, id: sessionUser._id.toString() },
      };
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        console.log(
          "Error checking if user exists: ",
          (error as Error).message
        );
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
