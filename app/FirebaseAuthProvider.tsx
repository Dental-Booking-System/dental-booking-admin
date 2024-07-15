'use client';

import { Session } from 'next-auth';
import { useEffect } from 'react';
import { signInWithCustomToken } from '@firebase/auth';
import { auth } from '@/lib/firebase';

type Props = {
  children: React.ReactNode,
  session: Session | null
}

async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken)
    } catch (error) {
      console.error('Error signing in with custom token:', error)
    }
  } else {
    await auth.signOut()
  }
}

export default function FirebaseAuthProvider({children, session} : Props) {
  useEffect(() => {
    if(!session) return;
    syncFirebaseAuth(session);
  }, [session]);
  return(<>{children}</>)
}