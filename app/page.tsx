import BrandLogo from '../components/BrandLogo';
import { CONTACT_PHONE_DISPLAY, SMS_HREF, TEL_HREF } from '../lib/contact';
import HeroSection from './HeroSection';
import SpecialBonus from './SpecialBonus';
import CompanyBenefits from './CompanyBenefits';
import ContactCTA from './ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="container-section flex h-14 items-center justify-center">
          <BrandLogo
            variant="section"
            className="bg-transparent shadow-none hover:shadow-none hover:scale-100 rounded-none min-w-0 max-w-[100px] px-0 py-0 transition-none"
          />
        </div>
      </header>
      <HeroSection />
      <SpecialBonus />
      <CompanyBenefits />
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
            href="mailto:rose7348@naver.com"
            className="cursor-pointer break-all text-xs text-slate-400 transition-colors hover:text-slate-200"
          >
            rose7348@naver.com
          </a>
        </div>
      </footer>
    </main>
  );
}
