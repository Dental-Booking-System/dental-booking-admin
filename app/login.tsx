'use client'
import {signIn} from 'next-auth/react'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full border-2 bg-gray-50 gap-10 pb-20">
      <h1 className="font-sans text-center font-bold text-3xl">Nha Khoa 233</h1>
      <button onClick={() => signIn('google')}
              className="px-4 py-2 border flex gap-4 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
          <span className="font-sans text-md text-black">Login with Google</span>
      </button>
    </div>

  )
}