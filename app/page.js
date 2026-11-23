// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ===== ساختار داده JSON-LD برای سئو ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AurixMetals",
            "description": "خدمات تخصصی قالکاری طلا، آنالیز عیار فلزات گرانبها با روش Fire Assay، استحصال و بازیابی طلا، نقره، پلاتین و پالادیوم",
            "keywords": "قالکاری طلا, Fire Assay, آنالیز فلزات گرانبها, استحصال طلا, بازیابی فلزات گرانبها",
            "url": "https://aurixmetals.ir",
            "telephone": "+98-9120336514",
            "email": "info@aurixmetals.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "بزرگراه خلیج فارس، خروجی رباط کریم وهن آباد، علی آباد، خیابان کوثر",
              "addressLocality": "تهران",
              "addressCountry": "IR"
            },
            "openingHours": "Sa-Th 08:00-18:00",
            "priceRange": "$$"
          })
        }}
      />

      {/* ===== هیرو اصلی سایت ===== */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-bg.jpg"
          alt="کارخانه قالکاری AurixMetals"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span>Aurix</span>Metals
          </h1>
          <p className={styles.heroSub}>
            خدمات تخصصی <strong>قالکاری طلا</strong> و <strong>آنالیز فلزات گرانبها</strong> با روش <strong>Fire Assay</strong>
          </p>
        </div>
      </section>

      {/* ===== کانتینر اصلی محتوا ===== */}
      <div className={styles.container}>

        {/* --- بخش ۱: واحد فرآوری فلزات گرانبها --- */}
        <section className={styles.processSection}>
          <div className={styles.processHeader}>
            <h2 className={styles.processTitle}>کارخانه پیشرفته فرآوری فلزات گرانبها</h2>
            <p className={styles.processSub}>خدمات تخصصی قالکاری با بالاترین استانداردها</p>
            <div className={styles.goldDivider}></div>
          </div>

          {/* ===== ۴ ردیف عمودی — فرآیندها ===== */}
          <div className={styles.processRows}>
            {/* ردیف ۱: حرارتی — عکس چپ */}
            <div className={`${styles.processRow} ${styles.processRowLeft}`}>
              <div className={styles.processRowImage}>
                <Image
                  src="/images/aurix/process/thermal.jpg"
                  alt="فرآیند حرارتی ذوب فلزات گرانبها"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.processRowImg}
                />
                <div className={styles.processRowOverlay} />
              </div>
              <div className={styles.processRowContent}>
                <div className={styles.processRowIconBox}>
                  <span className={styles.processRowEmoji}>🔥</span>
                </div>
                <h3 className={styles.processRowTitle}>فرآیند حرارتی</h3>
                <p className={styles.processRowDesc}>ذوب و تصفیه با تجهیزات پیشرفته صنعتی</p>
              </div>
            </div>

            {/* ردیف ۲: شیمیایی — عکس راست */}
            <div className={`${styles.processRow} ${styles.processRowRight}`}>
              <div className={styles.processRowImage}>
                <Image
                  src="/images/aurix/process/chemical.jpg"
                  alt="فرآیند شیمیایی جداسازی فلزات"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.processRowImg}
                />
                <div className={styles.processRowOverlay} />
              </div>
              <div className={styles.processRowContent}>
                <div className={styles.processRowIconBox}>
                  <span className={styles.processRowEmoji}>🧪</span>
                </div>
                <h3 className={styles.processRowTitle}>فرآیند شیمیایی</h3>
                <p className={styles.processRowDesc}>جداسازی و خالص‌سازی با روش‌های استاندارد</p>
              </div>
            </div>

            {/* ردیف ۳: بازیافت — عکس چپ */}
            <div className={`${styles.processRow} ${styles.processRowLeft}`}>
              <div className={styles.processRowImage}>
                <Image
                  src="/images/aurix/process/recycling.jpg"
                  alt="بازیافت ضایعات زرگری"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.processRowImg}
                />
                <div className={styles.processRowOverlay} />
              </div>
              <div className={styles.processRowContent}>
                <div className={styles.processRowIconBox}>
                  <span className={styles.processRowEmoji}>♻️</span>
                </div>
                <h3 className={styles.processRowTitle}>بازیافت کامل</h3>
                <p className={styles.processRowDesc}>خاک، لجن، فیلتر، دستمال و براده زرگری</p>
              </div>
            </div>

            {/* ردیف ۴: ریفاین — عکس راست */}
            <div className={`${styles.processRow} ${styles.processRowRight}`}>
              <div className={styles.processRowImage}>
                <Image
                  src="/images/aurix/process/refining.jpg"
                  alt="ریفاین حرفه‌ای شمش طلا"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.processRowImg}
                />
                <div className={styles.processRowOverlay} />
              </div>
              <div className={styles.processRowContent}>
                <div className={styles.processRowIconBox}>
                  <span className={styles.processRowEmoji}>✨</span>
                </div>
                <h3 className={styles.processRowTitle}>ریفاین حرفه‌ای</h3>
                <p className={styles.processRowDesc}>تحویل دانه یا شمش با خلوص بالا</p>
              </div>
            </div>
          </div>

          <div className={styles.advantagesBox}>
            <h3 className={styles.advantagesTitle}>مزیت ما</h3>
            <div className={styles.advantagesList}>
              <div className={styles.advantageItem}>
                <span>شفافیت کامل فرآیند</span>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className={styles.advantageItem}>
                <span>نمونه‌برداری اصولی و نگهداری نمونه شاهد</span>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className={styles.advantageItem}>
                <span>حضور صاحب بار در مراحل کلیدی</span>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className={styles.advantageItem}>
                <span>کنترل و اعلام پرت فرآیندی</span>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* --- خدمات اصلی --- */}
        <section id="services" className={styles.services}>
          <h2 className={styles.sectionTitle}>چه کاری انجام می‌دهیم؟</h2>
          <div className={styles.servicesBento}>
            {/* ذوب و جداسازی */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <Image
                  src="/images/aurix/services/melting.jpg"
                  alt="ذوب و جداسازی فلزات گرانبها"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.serviceCardImg}
                />
                <div className={styles.serviceCardImageOverlay} />
                <div className={styles.serviceIconBadge}>🔥</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>ذوب و جداسازی</h3>
                <p className={styles.serviceCardDesc}>استفاده از کوره‌های پیشرفته برای جداسازی فلزات گرانبها از ناخالصی‌ها</p>
              </div>
            </div>

            {/* تصفیه شیمیایی */}
            <div className={`${styles.serviceCard} ${styles.serviceCardReverse}`}>
              <div className={styles.serviceCardImage}>
                <Image
                  src="/images/aurix/services/acid-refining.jpg"
                  alt="تصفیه شیمیایی طلا و نقره"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.serviceCardImg}
                />
                <div className={styles.serviceCardImageOverlay} />
                <div className={styles.serviceIconBadge}>⚗️</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>تصفیه شیمیایی</h3>
                <p className={styles.serviceCardDesc}>عملیات اسیدکاری و تیزابکاری برای دستیابی به طلا و نقره با خلوص بالا</p>
              </div>
            </div>

            {/* بازیافت ضایعات */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <Image
                  src="/images/aurix/services/waste-recycling.jpg"
                  alt="بازیافت ضایعات الکترونیکی"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.serviceCardImg}
                />
                <div className={styles.serviceCardImageOverlay} />
                <div className={styles.serviceIconBadge}>♻️</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>بازیافت ضایعات</h3>
                <p className={styles.serviceCardDesc}>جمع‌آوری و بازیافت طلا از بردهای الکترونیکی، خاک معادن و پسماندها</p>
              </div>
            </div>

            {/* Fire Assay */}
            <div className={`${styles.serviceCard} ${styles.serviceCardReverse}`}>
              <div className={styles.serviceCardImage}>
                <Image
                  src="/images/aurix/services/fire-assay.jpg"
                  alt="قالکاری طلا با روش Fire Assay"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.serviceCardImg}
                />
                <div className={styles.serviceCardImageOverlay} />
                <div className={styles.serviceIconBadge}>🔬</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>قالکاری طلا با روش Fire Assay</h3>
                <p className={styles.serviceCardDesc}>تعیین عیار طلا، نقره، پلاتین و پالادیوم با دقت بالا</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- روش‌های فرآوری --- */}
        <section className={styles.methodsSection}>
          <div className={styles.bannerHeader}>
            <h2>🔬 روش‌های فرآوری</h2>
          </div>

          <div className={styles.methodsList}>
            {/* کارت ۱ */}
            <div className={styles.mintCard}>
              <div className={styles.mintCardContent}>
                <h4>روش‌های فیزیکی پیشرفته 🔬</h4>
                <p>استفاده از تکنولوژی‌های نوین جداسازی مکانیکی و فیزیکی برای پیش‌فرآوری و غنی‌سازی اولیه.</p>
              </div>
              <div className={styles.mintCardImage}>
                <Image
                  src="/images/aurix/methods/physical.jpg"
                  alt="روش‌های فیزیکی پیشرفته"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.mintCardImg}
                />
              </div>
            </div>

            {/* کارت ۲ */}
            <div className={styles.mintCard}>
              <div className={styles.mintCardContent}>
                <h4>روش‌های سیانیدی استاندارد صنعتی 🧪</h4>
                <p>فرآیندهای CIL و CIP با استانداردهای صنعتی جهانی برای بازیابی بهینه فلزات گرانبها.</p>
              </div>
              <div className={styles.mintCardImage}>
                <Image
                  src="/images/aurix/methods/cyanide.jpg"
                  alt="روش‌های سیانیدی"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.mintCardImg}
                />
              </div>
            </div>

            {/* کارت ۳ */}
            <div className={styles.mintCard}>
              <div className={styles.mintCardContent}>
                <h4>روش‌های شیمیایی غیرسیانیدی 🌿</h4>
                <p>فرآیندهای دوستدار محیط زیست برای کانسنگ‌های مقاوم و پروژه‌های ویژه.</p>
              </div>
              <div className={styles.mintCardImage}>
                <Image
                  src="/images/aurix/methods/non-cyanide.jpg"
                  alt="روش‌های غیرسیانیدی"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.mintCardImg}
                />
              </div>
            </div>

            {/* کارت ۴ */}
            <div className={styles.mintCard}>
              <div className={styles.mintCardContent}>
                <h4>استحصال حرارتی تخصصی 🔥</h4>
                <p>مناسب برای خاک‌های طلا‌دار، ضایعات صنعتی و کانسنگ‌های غنی.</p>
              </div>
              <div className={styles.mintCardImage}>
                <Image
                  src="/images/aurix/methods/thermal.jpg"
                  alt="استحصال حرارتی"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.mintCardImg}
                />
              </div>
            </div>
          </div>

          <div className={styles.goldBanner}>
            <p>⚡ انتخاب بهترین روش بر اساس نوع ماده اولیه شما</p>
          </div>
        </section>

        {/* --- فلزات قابل فرآوری --- */}
        <section className={styles.metalsSection}>
          <div className={styles.bannerHeader}>
            <h2>♨️ فلزات قابل فرآوری</h2>
          </div>

          <div className={styles.metalsGrid}>
            <div className={`${styles.metalCard} ${styles.goldMetal}`}>
              <div className={styles.metalIcon}>🥇</div>
              <h3>طلا (Gold)</h3>
              <p>استحصال و خالص‌سازی با بالاترین راندمان و خلوص استاندارد بین‌المللی</p>
            </div>

            <div className={`${styles.metalCard} ${styles.silverMetal}`}>
              <div className={styles.metalIcon}>🥈</div>
              <h3>نقره (Silver)</h3>
              <p>فرآوری نقره با خلوص بالا و کیفیت تضمین شده برای مصارف صنعتی و زیورآلات</p>
            </div>

            <div className={`${styles.metalCard} ${styles.platinumMetal}`}>
              <div className={styles.metalIcon}>💠</div>
              <h3>پلاتین (Platinum)</h3>
              <p>استحصال تخصصی پلاتین با روش‌های پیشرفته برای کاربردهای صنعتی و تخصصی</p>
            </div>

            <div className={`${styles.metalCard} ${styles.palladiumMetal}`}>
              <div className={styles.metalIcon}>💜</div>
              <h3>پالادیوم (Palladium)</h3>
              <p>فرآوری حرفه‌ای پالادیوم برای صنایع الکترونیک، خودرو و کاتالیست‌ها</p>
            </div>

            <div className={`${styles.metalCard} ${styles.rhodiumMetal}`}>
              <div className={styles.metalIcon}>🔷</div>
              <h3>رودیوم (Rhodium)</h3>
              <p>فرآوری تخصصی رودیوم با خلوص بالا برای صنایع کاتالیست، جواهرسازی و الکترونیک</p>
            </div>

            <div className={`${styles.metalCard} ${styles.iridiumMetal}`}>
              <div className={styles.metalIcon}>⚪</div>
              <h3>ایریدیوم (Iridium)</h3>
              <p>فرآوری تخصصی ایریدیوم با بالاترین نقطه ذوب برای صنایع هوافضا، الکترونیک و کاتالیست‌های پیشرفته</p>
            </div>
          </div>

          {/* ===== ردیف جدید: جداسازی سنگ جواهر از طلای سفید ===== */}
          <div className={styles.gemstoneRow}>
            <div className={styles.gemstoneImage}>
              <Image
                src="/images/aurix/gemstone/gemstone.jpg"
                alt="جداسازی سنگ جواهر از طلای سفید"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className={styles.gemstoneImg}
              />
            </div>
            <div className={styles.gemstoneContent}>
              <h3>💎 جداسازی سنگ جواهر از طلای سفید</h3>
              <p>
                خدمات تخصصی جداسازی و بازیابی سنگ‌های قیمتی از طلای سفید و سایر آلیاژهای گرانبها
                با دقت بالا و حفظ کیفیت سنگ‌ها
              </p>
            </div>
          </div>

          <div className={styles.mintCard}>
            <h4>استانداردهای بین‌المللی ✨</h4>
            <p>تمامی فلزات با رعایت کامل استانداردهای بین‌المللی فرآوری می‌شوند و گواهینامه‌های معتبر خلوص صادر می‌گردد.</p>
          </div>

          <div className={styles.goldBanner}>
            <p>🔥 بازیابی ۹۵-۹۹٪ فلزات با خلوص بالا</p>
          </div>
        </section>

        {/* --- چرا اوریکس متالز؟ --- */}
        <section className={styles.whyChooseSection}>
          <div className={styles.bannerHeader}>
            <h2>⭐ چرا اوریکس متالز ؟</h2>
          </div>

          <div className={styles.grid3Cols}>
            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>📈</span>
              <h4>بازیابی ۹۵-۹۹٪</h4>
              <p>بالاترین نرخ بازیابی فلزات</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>⚡</span>
              <h4>سرعت بالا</h4>
              <p>انجام سریع فرآیندها با حفظ کیفیت</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🔬</span>
              <h4>تکنولوژی پیشرفته</h4>
              <p>استفاده از جدیدترین تجهیزات</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>💰</span>
              <h4>مقرون به صرفه</h4>
              <p>کاهش هزینه‌ها با بهینه‌سازی</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🌿</span>
              <h4>محیط زیست</h4>
              <p>رعایت استانداردهای زیست‌محیطی</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🤝</span>
              <h4>پشتیبانی کامل</h4>
              <p>مشاوره در تمام مراحل</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>📊</span>
              <h4>گزارش‌دهی دقیق</h4>
              <p>شفافیت کامل در فرآیندها</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🎯</span>
              <h4>تضمین کیفیت</h4>
              <p>گواهینامه‌های معتبر خلوص</p>
            </div>

            <div className={styles.mintGridCard}>
              <span className={styles.gridEmoji}>🔐</span>
              <h4>امنیت بالا</h4>
              <p>حفظ محرمانگی اطلاعات</p>
            </div>
          </div>

          <div className={styles.mintCard}>
            <h4>مجوزها و استانداردها 📋</h4>
            <p>واحد ما دارای تمامی مجوزهای لازم از مراجع ذیصلاح و استانداردهای بین‌المللی ISO می‌باشد.</p>
          </div>
        </section>

        {/* --- بخش ۵: چرا اوریکس متالز؟ --- */}
        <section className={styles.promoSection}>
          <div className={styles.creamPromoCard}>
            <div className={styles.darkInnerCard}>
              <p>🏭 تجهیزات صنعتی حرفه‌ای</p>
              <p>⚖️ توزین دیجیتال دقیق</p>
              <p>👁️ حضور شما در تمام مراحل</p>
              <p>📷 گزارش کامل با تصاویر</p>
              <p>💰 تسویه بعد از اتمام کار</p>
              <p className={styles.goldTextHighlight}>✅ بازیافت تا ۹۹٪</p>
            </div>
          </div>
        </section>

        {/* --- بخش ۶: هشدار هدر رفت طلا --- */}
        <section className={styles.promoSection}>
          <div className={styles.darkPromoCardAlert}>
            <div className={styles.ctaLogoBox}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.5L18.5 9 12 17.5 5.5 9 12 5.5z" />
              </svg>
              <h3 className={styles.promoLogoText}>بدون اوریکس متالز</h3>
            </div>

            <div className={styles.warningBox}>
              <h2 className={styles.goldLargePercent}>تا ۱۵٪</h2>
              <p className={styles.whiteAlertText}>از طلای شما ممکن است هدر برود!</p>
            </div>

            <div className={styles.warningDetailBox}>
              <p className={styles.whiteSubText}>برای هر ۱۰۰ گرم طلا</p>
              <h3 className={styles.goldGramText}>تا ۱۵ گرم</h3>
              <p className={styles.redAlertText}>ممکن است هدر برود!</p>
            </div>
          </div>
        </section>

        {/* --- بخش ۷: مقایسه اوریکس VS قالکاری معمولی --- */}
        <section className={styles.promoSection}>
          <div className={styles.creamPromoCard}>
            <h2 className={styles.promoTitleCenter}>اوریکس متالز VS قالکاری معمولی</h2>

            <div className={styles.vsGrid}>
              <div className={styles.vsGreenCard}>
                <h4>روش اوریکس ✅</h4>
                <ul>
                  <li>• شفافیت کامل</li>
                  <li>• حضور در تمام مراحل</li>
                  <li>• تا ۹۹٪ بازیافت</li>
                </ul>
              </div>

              <div className={styles.vsRedCard}>
                <h4>روش معمولی ❌</h4>
                <ul>
                  <li>• بدون شفافیت</li>
                  <li>• عدم حضور شما</li>
                  <li>• ۸۵-۹۰٪ بازیافت</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- بخش ۸: ویژه طلاسازان --- */}
        <section className={styles.promoSection}>
          <div className={styles.creamPromoCard}>
            <div className={styles.ctaLogoBox}>
              <h3 className={styles.promoLogoTextDark}>اوریکس متالز</h3>
            </div>

            <h2 className={styles.promoTitleCenter}>ویژه طلا سازان</h2>

            <div className={styles.darkInnerCard}>
              <p>بازیافت تا ۹۹٪ <span className={styles.goldCheck}>✓</span></p>
              <p>فرآیند کاملاً شفاف <span className={styles.goldCheck}>✓</span></p>
              <p>قیمت‌گذاری منصفانه <span className={styles.goldCheck}>✓</span></p>
              <p>تخفیف ویژه حجم بالا <span className={styles.goldCheck}>✓</span></p>
              <div className={styles.goldDivider}></div>
              <p className={styles.goldHighlightCenter}>کسب‌وکار بهتر = مشتریان راضی</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}