// app/contact/page.js
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* هدر صفحه */}
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>تماس با ما</h1>
          <div className={styles.goldDivider}></div>
          <p className={styles.contactSubtitle}>
            برای مشاوره، همکاری و یا هرگونه سوال، با ما در تماس باشید
          </p>
        </div>

        {/* دو ستون اطلاعات و فرم */}
        <div className={styles.contactBox}>
          {/* ستون اطلاعات تماس */}
          <div className={styles.contactInfo}>
            <h3>اطلاعات تماس</h3>
            
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <strong>آدرس کارخانه:</strong>
                <p>بزرگراه خلیج فارس نرسیده به فرودگاه امام خمینی ، خروجی رباط کریم ، وهن آباد ، علی آباد ، خیابان کوثر ، کارخانه AurixMetals</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <strong>شماره تماس</strong>
                <p>۰۹۱۲۰۳۳۶۵۱۴</p>
                <p>۰۹۱۲۴۵۹۰۹۹۵</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>✉️</span>
              <div>
                <strong>ایمیل</strong>
                <p>info@aurixmetals.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <strong>ساعات کاری</strong>
                <p>شنبه تا چهارشنبه: ۸ صبح تا ۶ عصر</p>
                <p>پنجشنبه: ۸ صبح تا ۲ ظهر</p>
              </div>
            </div>

            {/* بنر تماس فوری */}
            <div className={styles.quickContactBox}>
              <p>📞 تماس فوری</p>
              <a href="tel:09120336514" className={styles.phoneLink}>۰۹۱۲۰۳۳۶۵۱۴</a>
              <a href="tel:09124590995" className={styles.phoneLink}>۰۹۱۲۴۵۹۰۹۹۵</a>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <div className={styles.contactFormWrapper}>
            <h3>ارسال پیام</h3>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="name"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ایمیل خود را وارد کنید"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">شماره تماس (اختیاری)</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="شماره تماس خود را وارد کنید"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">موضوع</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="موضوع پیام را وارد کنید"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">پیام شما</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="پیام خود را بنویسید..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        {/* نقشه یا موقعیت مکانی (اختیاری) */}
        <div className={styles.mapSection}>
          <h3>موقعیت مکانی ما</h3>
          <div className={styles.mapPlaceholder}>
            <p>📍بزرگراه خلیج فارس نرسیده به فرودگاه امام خمینی ، خروجی رباط کریم ، وهن آباد ، علی آباد ، خیابان کوثر ، کارخانه AurixMetals</p>
            <p className={styles.mapNote}>
              برای دریافت مسیر دقیق، با ما تماس بگیرید
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}