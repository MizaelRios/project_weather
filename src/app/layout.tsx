import '../styles/globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from '@/provider';

export const metadata = {
  title: 'Como Vai o Clima hoje? Previsão do tempo',
  description: 'Confira como vai ser o clima hoje',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className='relative'>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
