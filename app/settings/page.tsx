'use client';

import { signOut } from 'next-auth/react';
import admin from 'firebase-admin';

export default async function SettingsPage() {
  return (
    <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Settings</h1>
      </div>
      <div className="flex justify-center">
        <button  onClick={() => signOut()}
                 className="border py-3 px-3 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          Đăng xuất
        </button>
        <button onClick={async () => {
        }}>
          Get Firebase Token
        </button>
      </div>
    </main>
  );
}
