import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";

// interface UserCredentials extends CredentialInput {
//   id: string;
// }

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "sk@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);

        return {
          id: "user1",
          name: "User 1",
          email: "sk@gmail.com",
        };
      },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
