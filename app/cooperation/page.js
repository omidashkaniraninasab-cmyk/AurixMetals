// app/cooperation/page.js
import Link from 'next/link';
import styles from './page.module.css';

export default function CooperationPage() {
  return (
    <section className={styles.cooperationPage}>
      <div className={styles.cooperationContainer}>
        
        {/* ===== هدر صفحه ===== */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>نحوه همکاری با ما</h1>
          <div className={styles.goldDivider}></div>
          <p className={styles.pageSubtitle}>
            از مشاوره اولیه تا تحویل فلز خالص، همه مراحل با شفافیت و دقت انجام می‌شود
          </p>
        </div>

        {/* ===== مراحل همکاری (گام‌ها) ===== */}
        <section className={styles.stepsSection}>
          <h2 className={styles.sectionTitle}>مراحل همکاری</h2>
          <div className={styles.stepsList}>
            
            <div className={styles.stepRow}>
              <div className={styles.stepBadge}>۱</div>
              <div className={styles.stepCard}>
                <h3>تماس و مشاوره اولیه رایگان 📞</h3>
                <p>با کارشناسان مجرب ما تماس بگیرید و نیاز خود را مطرح کنید. در این مرحله، نوع ماده اولیه، حجم تقریبی و روش‌های پیشنهادی بررسی می‌شود.</p>
                <div className={styles.stepDetail}>
                  <span>⏱️ زمان: ۱۵-۳۰ دقیقه</span>
                  <span>📋 خروجی: تعیین روش بهینه</span>
                </div>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepBadge}>۲</div>
              <div className={styles.stepCard}>
                <h3>ارسال نمونه (۱۰  کیلوگرم تا ۱ تن) 📦</h3>
                <p>نمونه خود را برای آزمایش و بررسی به واحد ما ارسال کنید. نمونه‌برداری اصولی با حضور شما یا نماینده‌تان انجام می‌شود.</p>
                <div className={styles.stepDetail}>
                  <span>📦  حداقل نمونه: ۱۰  کیلوگرم و برای فاز صنعتی یک تن</span>
                  <span>🔬 آنالیز اولیه </span>
                </div>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepBadge}>۳</div>
              <div className={styles.stepCard}>
                <h3>آزمایش و انتخاب بهترین روش فرآوری 🔬</h3>
                <p>انجام آزمایش‌های تخصصی بر روی نمونه و انتخاب بهینه‌ترین روش فرآوری بر اساس نوع ماده، عیار و حجم.</p>
                <div className={styles.stepDetail}>
                  <span>🧪 روش‌های فیزیکی، شیمیایی، سیانیدی</span>
                  <span>📊 گزارش کامل آزمایش</span>
                </div>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepBadge}>۴</div>
              <div className={styles.stepCard}>
                <h3>فرآوری و تحویل فلز خالص 💎</h3>
                <p>انجام فرآیند استحصال با حضور شما در مراحل کلیدی و تحویل فلز خالص به همراه گواهینامه خلوص معتبر.</p>
                <div className={styles.stepDetail}>
                  <span>📜 گواهینامه خلوص</span>
                  <span>⚡ زمان: ۳-۷ روز کاری</span>
                </div>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepBadge}>۵</div>
              <div className={styles.stepCard}>
                <h3>اجرای فاز صنعتی 🏢</h3>
                <p>پس از تأیید کیفیت در مرحله آزمایشی، تولید در مقیاس صنعتی با همان استانداردها و کیفیت تضمین شده آغاز می‌شود.</p>
                <div className={styles.stepDetail}>
                  <span>📈 افزایش راندمان</span>
                  <span>🤝 قراردادهای بلندمدت</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== مزایای همکاری ===== */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>مزایای همکاری با ما</h2>
          <div className={styles.benefitsGrid}>
            
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>📈</span>
              <h3>بازیابی ۹۵-۹۹٪</h3>
              <p>بالاترین نرخ بازیابی فلزات با استفاده از روش‌های بهینه</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>⚡</span>
              <h3>سرعت بالا</h3>
              <p>انجام سریع فرآیندها با حفظ کیفیت و دقت</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🔬</span>
              <h3>تکنولوژی پیشرفته</h3>
              <p>استفاده از جدیدترین تجهیزات و روش‌های روز دنیا</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>💰</span>
              <h3>مقرون به صرفه</h3>
              <p>بهینه‌سازی هزینه‌ها با کاهش ضایعات و افزایش بازدهی</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🌿</span>
              <h3>محیط زیست</h3>
              <p>رعایت کامل استانداردهای زیست‌محیطی در تمام مراحل</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🤝</span>
              <h3>پشتیبانی کامل</h3>
              <p>مشاوره و پشتیبانی در تمام مراحل همکاری</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>📊</span>
              <h3>گزارش‌دهی دقیق</h3>
              <p>شفافیت کامل در فرآیندها با گزارش‌های تصویری و عددی</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🎯</span>
              <h3>تضمین کیفیت</h3>
              <p>گواهینامه‌های معتبر خلوص با استانداردهای بین‌المللی</p>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🔐</span>
              <h3>امنیت بالا</h3>
              <p>حفظ محرمانگی اطلاعات و امنیت کامل نمونه‌ها</p>
            </div>

          </div>
        </section>

        {/* ===== شرایط همکاری ===== */}
        <section className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>شرایط همکاری</h2>
          <div className={styles.conditionsBox}>
            <div className={styles.conditionItem}>
              <span className={styles.conditionIcon}>✅</span>
              <div>
                <h4>حداقل حجم قابل قبول</h4>
                <p>۵ کیلوگرم برای نمونه‌های آزمایشی و ۵۰ کیلوگرم برای فاز صنعتی</p>
              </div>
            </div>

            <div className={styles.conditionItem}>
              <span className={styles.conditionIcon}>✅</span>
              <div>
                <h4>انواع مواد اولیه قابل پذیرش</h4>
                <p>خاک زرگری، ضایعات الکترونیکی، لجن‌های صنعتی، براده‌ها، فیلترها و هر گونه ماده حاوی فلزات گرانبها</p>
              </div>
            </div>

            <div className={styles.conditionItem}>
              <span className={styles.conditionIcon}>✅</span>
              <div>
                <h4>مدت زمان همکاری</h4>
                <p>از قراردادهای تک‌باره تا همکاری‌های بلندمدت و مستمر</p>
              </div>
            </div>

            <div className={styles.conditionItem}>
              <span className={styles.conditionIcon}>✅</span>
              <div>
                <h4>تسویه حساب</h4>
                <p>پرداخت نقدی و تسویه فوری پس از اتمام فرآیند و تحویل فلز خالص</p>
              </div>
            </div>

            <div className={styles.conditionItem}>
              <span className={styles.conditionIcon}>✅</span>
              <div>
                <h4>گواهینامه‌ها</h4>
                <p>صدور گواهینامه خلوص معتبر با قابلیت راستی‌آزمایی</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== مقایسه اوریکس VS قالکاری معمولی ===== */}
        <section className={styles.vsSection}>
          <h2 className={styles.sectionTitle}>مقایسه اوریکس متالز با قالکاری معمولی</h2>
          <div className={styles.vsGrid}>
            <div className={styles.vsGreenCard}>
              <h4>روش اوریکس ✅</h4>
              <ul>
                <li>• شفافیت کامل در تمام مراحل</li>
                <li>• حضور شما در تمام مراحل کلیدی</li>
                <li>• تا ۹۹٪ بازیافت فلزات</li>
                <li>• گزارش‌های تصویری و عددی</li>
                <li>• گواهینامه خلوص معتبر</li>
              </ul>
            </div>

            <div className={styles.vsRedCard}>
              <h4>روش معمولی ❌</h4>
              <ul>
                <li>• بدون شفافیت در فرآیند</li>
                <li>• عدم حضور شما در مراحل</li>
                <li>• تنها ۸۵-۹۰٪ بازیافت</li>
                <li>• بدون گزارش دقیق</li>
                <li>• بدون گواهینامه معتبر</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== بنر ویژه طلاسازان ===== */}
        <section className={styles.specialSection}>
          <div className={styles.specialCard}>
            <h2>🎁 ویژه طلاسازان</h2>
            <div className={styles.specialItems}>
              <p>بازیافت تا ۹۹٪ <span className={styles.goldCheck}>✓</span></p>
              <p>فرآیند کاملاً شفاف <span className={styles.goldCheck}>✓</span></p>
              <p>قیمت‌گذاری منصفانه <span className={styles.goldCheck}>✓</span></p>
              <p>تخفیف ویژه حجم بالا <span className={styles.goldCheck}>✓</span></p>
            </div>
            <div className={styles.specialDivider}></div>
            <p className={styles.specialSlogan}>کسب‌وکار بهتر = مشتریان راضی</p>
          </div>
        </section>

        {/* ===== تماس سریع ===== */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h3>برای شروع همکاری، هم‌اکنون تماس بگیرید</h3>
            <p className={styles.ctaSub}>مشاوره اولیه کاملاً رایگان است</p>
            <div className={styles.ctaPhones}>
              <a href="tel:09120336514" className={styles.ctaPhone}>📞 ۰۹۱۲۰۳۳۶۵۱۴</a>
              <a href="tel:09124590995" className={styles.ctaPhone}>📞 ۰۹۱۲۴۵۹۰۹۹۵</a>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>
              فرم تماس
            </Link>
          </div>
        </section>

      </div>
    </section>
  );
}