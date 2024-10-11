import { ReactNode } from 'react';
import { Navbar } from './navbar';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="bg-white dark:bg-black flex flex-col h-screen w-screen">
    <Navbar />
    <main className="container mx-auto">{children}</main>
  </div>
);
