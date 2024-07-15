import './globals.css';
import Link from 'next/link';
import { Logo, SettingsIcon, UsersIcon,CalendarIcon } from '@/components/icons';
import NavItem from './nav-item';
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"
import  SessionProvider  from "./SessionProvider"
import Login from './login';
import FirebaseAuthProvider from './FirebaseAuthProvider';


export const metadata = {
  title: 'Nha Khoa 233',
  description:
    'Trang quản lí lịch hẹn'
};

export default async function RootLayout({
                                           children
                                         }: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full bg-gray-50">
    <body>
    <SessionProvider session={session}>
      <FirebaseAuthProvider session={session}>
      {!session ?
        <Login />
        :
        <div className="grid min-h-screen w-full lg:grid-cols-[270px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">Nha Khoa 233</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <CalendarIcon className="h-4 w-4" />
                    Quản lí lịch hẹn
                  </NavItem>
                  <NavItem href="/patients">
                    <UsersIcon className="h-4 w-4" />
                    Bệnh nhân
                  </NavItem>
                  <NavItem href="/settings">
                    <SettingsIcon className="h-4 w-4" />
                    Cài đặt
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      }
      </FirebaseAuthProvider>
    </SessionProvider>
    </body>
    </html>
  );
}
