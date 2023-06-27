import NavBar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Clima Hoje',
  description: 'Confira como vai ser o clima hoje'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
