'use client';
import HeroSection from './HeroSection';
import CoreBenefits from './CoreBenefits';
import SpecialBonus from './SpecialBonus';
import JobDetails from './JobDetails';
import CompanyBenefits from './CompanyBenefits';
import ApplicationProcess from './ApplicationProcess';
import ContactCTA from './ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden pb-24 md:pb-0">
      <HeroSection />
      <CoreBenefits />
      <SpecialBonus />
      <JobDetails />
      <CompanyBenefits />
      <ApplicationProcess />
      <ContactCTA />
      <footer className="bg-[#081a2c] py-9 px-5 text-center">
        <p className="text-slate-500 text-xs">© 2025 보유고객 상담 & 보상처리 채용. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="tel:010-4229-7302" className="text-[#FF6A00] text-xs hover:text-orange-300 transition-colors cursor-pointer">010-4229-7302</a>
          <span className="text-slate-700">|</span>
          <a href="mailto:dasanmy75@naver.com" className="text-slate-400 text-xs hover:text-slate-200 transition-colors cursor-pointer">dasanmy75@naver.com</a>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-200/80 bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+0.65rem)] pt-3">
          <a
            href="tel:010-4229-7302"
            className="flex-1 rounded-full border border-[#0A2540]/20 bg-[#0A2540] px-4 py-3 text-center text-sm font-black text-white shadow-[0_8px_20px_rgba(10,37,64,0.25)] transition-all hover:brightness-110 active:scale-95"
          >
            전화하기
          </a>
          <a
            href="sms:010-4229-7302?body=채용 지원 문의드립니다."
            className="flex-1 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00] px-4 py-3 text-center text-sm font-black text-white shadow-[0_8px_20px_rgba(255,106,0,0.28)] transition-all hover:brightness-110 active:scale-95"
          >
            문자 지원
          </a>
        </div>
      </div>
    </main>
  );
}
