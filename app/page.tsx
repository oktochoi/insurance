import BrandLogo from '../components/BrandLogo';
import { CONTACT_PHONE_DISPLAY, SMS_HREF, TEL_HREF } from '../lib/contact';
import HeroSection from './HeroSection';
import CoreBenefits from './CoreBenefits';
import SpecialBonus from './SpecialBonus';
import JobDetails from './JobDetails';
import CompanyBenefits from './CompanyBenefits';
import ApplicationProcess from './ApplicationProcess';
import ContactCTA from './ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <HeroSection />
      <CoreBenefits />
      <SpecialBonus />
      <JobDetails />
      <CompanyBenefits />
      <ApplicationProcess />
      <ContactCTA />
      <footer className="border-t border-white/5 bg-[#081a2c] px-4 py-8 text-center sm:px-6 sm:py-10">
        <div className="mx-auto mb-5 flex justify-center">
          <BrandLogo variant="footer" />
        </div>
        <p className="text-xs text-slate-500">© 2025 보유고객 상담 & 보상처리 채용. All rights reserved.</p>
        <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
          <a
            href={TEL_HREF}
            className="cursor-pointer text-xs font-semibold text-[#FF6A00] transition-colors hover:text-orange-300"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
          <span className="hidden text-slate-700 sm:inline">|</span>
          <a
            href="mailto:dasanmy75@naver.com"
            className="cursor-pointer break-all text-xs text-slate-400 transition-colors hover:text-slate-200"
          >
            dasanmy75@naver.com
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden">
        <div className="mx-auto max-w-lg px-3 pt-2 sm:px-4">
          <p className="mb-1.5 text-center text-[10px] font-black tracking-wide text-red-600 sm:mb-2">
            선착순 5명 · 마감 임박
          </p>
          <div className="flex items-stretch gap-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 sm:gap-3">
            <a
              href={TEL_HREF}
              className="flex min-h-[48px] flex-1 touch-manipulation items-center justify-center rounded-full border border-[#0A2540]/20 bg-[#0A2540] px-3 py-3 text-center text-sm font-black text-white shadow-[0_8px_20px_rgba(10,37,64,0.25)] transition-all hover:brightness-110 active:scale-95"
            >
              전화하기
            </a>
            <a
              href={SMS_HREF}
              className="flex min-h-[48px] flex-1 touch-manipulation items-center justify-center rounded-full border border-[#FF6A00]/30 bg-[#FF6A00] px-3 py-3 text-center text-sm font-black text-white shadow-[0_8px_20px_rgba(255,106,0,0.28)] transition-all hover:brightness-110 active:scale-95"
            >
              문자 지원
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
