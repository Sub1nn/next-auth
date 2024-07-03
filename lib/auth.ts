import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "Subin Khatiwada",
          userId: "asd",
          email: "sk@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // next-auth by default does not send the id, so we can use callbacks to get our desired keys

  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};
