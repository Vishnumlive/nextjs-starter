import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "@/firebase/firebase";

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
          .then(userCredential => {
            if (userCredential.user) {
              console.log(userCredential.user);
              return userCredential.user;
            }
            return null;
          })
          .catch(error => {
            
            console.log(error)
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(error);
          
          });
      }
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Example of how to customize signin callback
      console.log('User signed in:', user);
      return true; // Return `true` to allow signin
    },
  },

}
export default NextAuth(authOptions)