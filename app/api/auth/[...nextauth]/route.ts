import GoogleProvider from 'next-auth/providers/google';
import NextAuth, { AuthOptions } from 'next-auth';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { firestore } from '@/lib/firebase';
import admin from '../../../../lib/firebase-admin';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  // @ts-ignore
  adapter: FirestoreAdapter(firestore),
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        if (token && token.uid && admin) {
          session.firebaseToken = await admin.auth().createCustomToken(token.uid as string)
        }
      }
      return session
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id
      }
      return token;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };