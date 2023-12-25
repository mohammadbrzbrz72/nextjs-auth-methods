import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // with pages property we can ignore built-in form and set custom signin/signout form
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
