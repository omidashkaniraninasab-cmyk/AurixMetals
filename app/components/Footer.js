// app/components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>
            <span>Aurix</span>Metals
          </h3>
          <p>
            کارخانه قالکاری و بازیافت فلزات گرانبها با بیش از ۱۴  سال تجربه و کلیه مجوزهای لازم
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>دسترسی سریع</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/">خانه</a></li>
            <li><a href="#services">خدمات</a></li>
            <li><a href="#gallery">نمونه کارها</a></li>
            <li><a href="/cooperation">نحوه همکاری</a></li>
            <li><a href="/about">درباره ما</a></li>
            <li><a href="/contact">تماس با ما</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>تماس با ما</h4>
          <ul className={styles.footerContact}>
            <li>📧 info@aurixmetals.com</li>
            <li>📞 09120336514</li>
            <li>📞 09124590995</li>
            <li>📍  تهران ، بزرگراه خلیج فارس نرسیده به فرودگاه امام خمینی ، خروجی رباط کریم وهن آباد ، علی آباد ، خیابان کوثر ، کارخانه AurixMetals</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {currentYear} تمامی حقوق برای AurixMetals محفوظ است.</p>
      </div>
    </footer>
  );
}