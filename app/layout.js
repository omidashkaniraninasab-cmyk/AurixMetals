// app/layout.js
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';


const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vazirmatn',
});

export const metadata = {
  title: 'قالکاری اوریکس متال',
  description: ' کارگاه قالکاری',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
      
          <Header />
          <main className="main-container">
            {children}
          </main>
          <Footer />
      
      </body>
    </html>
  );
}