import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export const authoptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         console.log("credentials", credentials);
//         const res = await fetch("http://localhost:5000/users/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         });
//         const data = await res.json();
//         if (res.ok) {
//           return data;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },

//   secret: "vikas@123",

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },

//     async session({ session, token }) {
//       session.user = token;
//       return session;
//     },

//     async redirect({ url, baseUrl }) {
//       return baseUrl;
//     },
//   },
// };

// export default NextAuth(authOptions);
