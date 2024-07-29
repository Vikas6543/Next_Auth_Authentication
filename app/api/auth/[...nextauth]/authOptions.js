import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            "http://localhost:5000/users/login",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (response.status === 200) {
            return response.data;
          }
        } catch (error) {
          throw new Error(error.response.data.message);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: "vikas@123",

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.accessToken = user.token;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        session.token = token.accessToken;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
};
