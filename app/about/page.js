// app/about/page.js
import Image from 'next/image';
import styles from './page.module.css';


export const metadata = {
  title: 'درباره ما | تخصص در قالکاری و آنالیز فلزات گرانبها | AurixMetals',
  description: 'آشنایی با تیم متخصص AurixMetals در زمینه قالکاری طلا، آنالیز عیار، Fire Assay و فرآوری فلزات گرانبها.',
};


export default function About() {
  return (
    <section className={styles.aboutPage}>
      <h1 className={styles.title}>درباره AurixMetals</h1>
        {/* --- بخش ۳: درباره ما --- */}
        <section className={styles.catalogAboutSection}>
          <div className={styles.bannerHeader}>
            <h2>💎 درباره ما</h2>
          </div>

          <div className={styles.mintCard}>
            <h3>AurixMetals - اوریکس متالز</h3>
            <p>
              با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا و تیمی مجرب، خدمات جامع فرآوری و استحصال فلزات گرانبها را ارائه می‌دهد. ما با افتخار می‌توانیم ادعا کنیم که نه تنها آنالیز ارائه می‌دهیم، بلکه فلز خالص را در کف دست شما قرار می‌دهیم.
            </p>
          </div>

          <div className={styles.goldBanner}>
            <p>✨ ما آنالیز نمی‌کنیم، فلز را می‌گذاریم کف دست شما! 🪙 💎</p>
          </div>

          <h3 className={styles.sectionTitleCenter}>ویژگی‌های برجسته ما:</h3>

          <div className={styles.whyUsGrid}>
            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🏆</span>
              <h4>تجربه و تخصص</h4>
              <p>سال‌ها تجربه در صنعت فرآوری فلزات گرانبها</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🔬</span>
              <h4>تکنولوژی پیشرفته</h4>
              <p>استفاده از جدیدترین تجهیزات و روش‌های روز دنیا</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>✅</span>
              <h4>کیفیت تضمین شده</h4>
              <p>خلوص و کیفیت بالا با استانداردهای بین‌المللی</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🤝</span>
              <h4>پشتیبانی کامل</h4>
              <p>همراهی و مشاوره در تمام مراحل پروژه</p>
            </div>
          </div>
        </section>
      <div className={styles.card}>
     <div className={styles.imageWrapper}>
  <Image
    src="/images/about-team.jpg"
    alt="تیم AurixMetal"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
    style={{ 
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '100%'
    }}
  />
</div>
        <div className={styles.text}>
          <p>
            <strong>AurixMetals</strong> در سال ۱۳۹۱ با هدف ارائه خدمات حرفه‌ای در
            زمینه قالکاری و بازیافت فلزات گرانبها تأسیس شد. تیم ما متشکل از
            کارشناسان مجرب شیمی و متالورژی است که با استفاده از کوره‌های مدرن و
            مواد شیمیایی باکیفیت، بهترین بازدهی را برای مشتریان خود فراهم می‌کنند.
          </p>
          <p>
            ما به محیط‌زیست اهمیت می‌دهیم و فرآیندهای ما به‌گونه‌ای طراحی شده که
            کمترین آلایندگی را داشته باشد. تا امروز موفق به بازیابی بیش از ۱۰۰۰
            کیلوگرم طلا و نقره از ضایعات صنعتی شده‌ایم.
          </p>
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <p className={styles.statNumber}>۱۰۰۰+</p>
              <p className={styles.statLabel}>کیلوگرم طلا و نقره</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statNumber}>٪۱۰۰</p>
              <p className={styles.statLabel}>رضایت مشتریان</p>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statNumber}>۱۴ </p>
              <p className={styles.statLabel}>سال تجربه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}