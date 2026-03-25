'use client';
import BrandLogo from '../components/BrandLogo';
import RevealOnScroll from '../components/RevealOnScroll';
import { CONTACT_PHONE_DISPLAY, SMS_HREF, TEL_HREF } from '../lib/contact';

export default function ContactCTA() {
  return (
    <section
      id="apply-section"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0c2f52] to-[#071426] py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_45%)]" />

      <RevealOnScroll className="container-section relative text-center">
        <div className="mb-8 flex justify-center">
          <BrandLogo variant="cta" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-[#FF6A00]/50 bg-[#FF6A00]/20 px-3 py-1 text-[11px] font-black tracking-wide text-[#FF6A00]">
              선착순 5명 모집
            </span>
            <span className="rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-black text-gray-900 shadow-sm">
              지금 지원하면
            </span>
          </div>

          <h2 className="text-[clamp(1.35rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            🔥 지금 지원하면 10만원 즉시 지급
          </h2>
          <p className="mt-3 text-sm font-semibold text-amber-200 sm:text-base md:text-lg">오늘 마감 가능성 있음</p>
          <p className="mt-2 text-sm font-medium text-blue-100/90">
            모집 인원 <span className="font-black text-yellow-300">5명</span> 한정 · 선착순 마감
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:gap-4">
          <a
            href={TEL_HREF}
            className="animate-pulse-glow flex min-h-[52px] w-full touch-manipulation items-center justify-center gap-3 rounded-full bg-[#FF6A00] px-4 py-3.5 text-base font-black text-white shadow-[0_18px_44px_rgba(255,106,0,0.45)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95 sm:min-h-14 sm:py-4 sm:text-lg md:py-5 md:text-xl"
          >
            <i className="ri-phone-line shrink-0 text-xl sm:text-2xl" />
            전화 상담하기
          </a>
          <a
            href={SMS_HREF}
            className="flex min-h-[52px] w-full touch-manipulation items-center justify-center gap-3 rounded-full border-2 border-white/35 bg-white px-4 py-3.5 text-base font-black text-[#0A2540] shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-50 active:scale-95 sm:min-h-14 sm:py-4 sm:text-lg md:py-5 md:text-xl"
          >
            <i className="ri-message-2-line shrink-0 text-xl sm:text-2xl" />
            문자로 지원하기
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:mt-10 sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-100/90">연락처</p>
          <a
            href={TEL_HREF}
            className="mb-3 flex cursor-pointer flex-wrap items-center justify-center gap-2 text-xl font-black tabular-nums text-white transition-colors hover:text-yellow-300 sm:text-2xl"
          >
            <i className="ri-phone-line shrink-0 text-[#FF6A00] text-xl sm:text-2xl" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href="mailto:dasanmy75@naver.com"
            className="flex cursor-pointer items-center justify-center gap-2 text-sm font-medium text-blue-100 transition-colors hover:text-white"
          >
            <i className="ri-mail-line text-[#FF6A00] text-lg" />
            dasanmy75@naver.com
          </a>
        </div>
        <p className="mt-6 text-xs font-medium text-blue-200/90">평일 09:00 ~ 17:00 상담 가능</p>
      </RevealOnScroll>
    </section>
  );
}
