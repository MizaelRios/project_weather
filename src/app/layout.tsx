import NavBar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

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
    <html lang='pt-BR'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
