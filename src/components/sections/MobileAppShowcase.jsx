import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";
import appMock from "../../assets/images/app-mock.png";
import qrAppStore from "../../assets/images/qr-appstore.png";
import qrPlayStore from "../../assets/images/qr-playstore.png";

const APP_STORE_URL =
  "https://apps.apple.com/nl/app/my-orchestra/id1614141535?l=en-GB";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.orchestra.myorchestra.mobile&pcampaignid=web_share";

const featureIcons = [
  <svg key="chart" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  <svg key="doc" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  <svg key="clock" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function MobileAppShowcase() {
  const { t } = useLanguage();

  const features = [
    { icon: featureIcons[0], text: t("home", "appFeature1") },
    { icon: featureIcons[1], text: t("home", "appFeature2") },
    { icon: featureIcons[2], text: t("home", "appFeature3") },
  ];

  return (
    <SectionWrapper bg="cream" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text + QR codes */}
        <AnimatedSection direction="left">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-700 mb-4">
            {t("home", "appEyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-4">
            {t("home", "appTitle")}
          </h2>
          <div className="h-0.75 w-10 bg-gold-700 mb-6" />
          <p className="text-warm-gray-500 leading-relaxed mb-8">
            {t("home", "appDescription")}
          </p>

          {/* Features */}
          <div className="flex flex-col gap-3 mb-10">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                  {f.icon}
                </div>
                <span className="text-sm font-semibold text-navy-900">
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* QR codes side by side */}
          <div className="flex gap-8">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="hidden md:block bg-white rounded-xl shadow-card group-hover:shadow-card-hover transition-shadow duration-300 p-4 mb-3">
                <img
                  src={qrAppStore}
                  alt="QR code App Store"
                  className="w-48 h-48"
                />
              </div>
              <div className="flex items-center gap-2 text-navy-900 group-hover:text-gold-700 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none text-warm-gray-400">{t("home", "appDownloadAppStore")}</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </div>
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="hidden md:block bg-white rounded-xl shadow-card group-hover:shadow-card-hover transition-shadow duration-300 p-4 mb-3">
                <img
                  src={qrPlayStore}
                  alt="QR code Google Play"
                  className="w-48 h-48"
                />
              </div>
              <div className="flex items-center gap-2 text-navy-900 group-hover:text-gold-700 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302-2.535-2.535 2.535-2.535v.086zM5.864 3.658l10.937 6.333-2.302 2.302-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none text-warm-gray-400">{t("home", "appDownloadPlayStore")}</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Right: App mockup */}
        <AnimatedSection direction="right" delay={0.15}>
          <div className="flex justify-center lg:justify-end">
            <img
              src={appMock}
              alt="My Orchestra app"
              className="w-full"
            />
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
