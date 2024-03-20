import { signInWithEmailAndPassword } from 'firebase/auth';
import * as admin from 'firebase-admin';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { auth } from '@/firebase/firebase';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

export const authOptions = {
  // Configure one or more authentication providers
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || '',
          (credentials as any).password || '',
        ).then((userCredential) => {
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        });
        // .catch((error) => {
        //   // console.log(error);
        // })
        // .catch((error) => {
        //   //const errorCode = error.code;
        //   // const errorMessage = error.message;
        //   // console.log(error);
        // });
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log(token);

      if (token && token.uid) {
        const firebaseToken = await admin.auth().createCustomToken(token.uid);

        session.firebaseToken = firebaseToken;
      }
      return session;
    },

    // async signIn(user, account, profile) {
    //   // Example of how to customize signin callback

    //   return true; // Return `true` to allow signin
    // },
    async jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
  },
};
export default NextAuth(authOptions);
