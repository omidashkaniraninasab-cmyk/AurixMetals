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
  title: {
    default: 'قالکاری طلا و فلزات گرانبها | خدمات تخصصی Fire Assay و آنالیز عیار | AurixMetals',
    template: '%s | AurixMetals'
  },
  description: 'خدمات تخصصی قالکاری طلا، آنالیز عیار طلا، نقره، پلاتین و پالادیوم با روش Fire Assay. استحصال و بازیابی فلزات گرانبها از خاک، سنگ معدن و کنسانتره با بالاترین کیفیت.',
  keywords: 'قالکاری طلا، خدمات قالکاری، آزمایش قالکاری، آنالیز عیار طلا، Fire Assay، فایر اسی، آنالیز فلزات گرانبها، استحصال طلا، بازیابی طلا، قالکاری خاک طلا، آزمایشگاه طلا، تعیین عیار طلا، آنالیز پلاتین، آنالیز پالادیوم، آزمایش Fire Assay',
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