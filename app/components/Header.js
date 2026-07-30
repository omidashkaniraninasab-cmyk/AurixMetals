// app/components/Header.js
'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* لوگو */}
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoIcon}>⚒️</span>
          <span className={styles.logoText}>
            <span>Aurix</span>Metals
          </span>
        </Link>

        {/* نویگیشن */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            <span>🏠</span>
            <span>خانه</span>
          </Link>
          <Link href="/cooperation" className={styles.navLink}>
  <span>🤝</span>
  <span>همکاری</span>
</Link>
          <Link href="/about" className={styles.navLink}>
            <span>ℹ️</span>
            <span>درباره ما</span>
          </Link>
         <Link href="/contact" className={styles.navLink}>
  <span>📞</span>
  <span>تماس با ما</span>
</Link>
        </nav>
      </div>
    </header>
  );
}