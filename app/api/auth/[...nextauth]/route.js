import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import usersmodel from "../../../../models/usersmodel";
import dbConnect from "../../../../lib/connectdb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          await dbConnect()
          const { email, password } = credentials
          const finduser = await usersmodel.findOne({ email: email })
          if (finduser) {
            const validate = await bcrypt.compare(password, finduser.password)
            if (!validate) {
              throw new Error("Invalid password")
            }
            return finduser
          } else {
            throw new Error("User not found")
          }
        } catch (e) {
          console.log(e.message)
          throw new Error(e.message)
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id;
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/"
  }
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }