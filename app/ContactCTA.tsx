'use client';
import BrandLogo from '../components/BrandLogo';
import RevealOnScroll from '../components/RevealOnScroll';
import { CONTACT_PHONE_DISPLAY, SMS_HREF, TEL_HREF } from '../lib/contact';

const EMAIL = 'rose7348@naver.com';

export default function ContactCTA() {
  return (
    <section
      id="apply-section"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0c2f52] to-[#071426] py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_45%)]" />

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
          <p className="mt-3 text-base font-semibold text-amber-200 sm:text-lg md:text-xl">오늘 마감 가능성 있음</p>
          <p className="mt-2 text-base font-medium text-blue-100/90 sm:text-lg">
            모집 인원 <span className="font-black text-yellow-300">5명</span> 한정 · 선착순 마감
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:gap-4">
          <a
            href={TEL_HREF}
            className="animate-pulse-glow flex min-h-[52px] w-full touch-manipulation items-center justify-center gap-3 rounded-full bg-[#FF6A00] px-4 py-3.5 text-base font-black text-white shadow-[0_14px_36px_rgba(255,106,0,0.4)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95 sm:min-h-14 sm:py-4 sm:text-lg md:py-5 md:text-xl"
          >
            <i className="ri-phone-line shrink-0 text-xl sm:text-2xl" />
            전화 상담하기
          </a>
          <a
            href={SMS_HREF}
            className="flex min-h-[52px] w-full touch-manipulation items-center justify-center gap-3 rounded-full border border-white/25 bg-white px-4 py-3.5 text-base font-black text-[#0A2540] shadow-[0_10px_28px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-50 active:scale-95 sm:min-h-14 sm:py-4 sm:text-lg md:py-5 md:text-xl"
          >
            <i className="ri-message-2-line shrink-0 text-xl sm:text-2xl" />
            문자로 지원하기
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/[0.06] px-5 py-6 text-left backdrop-blur-sm sm:mt-10 sm:px-7 sm:py-8">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100/90 sm:text-left sm:text-base">
            연락처
          </p>
          <a
            href={TEL_HREF}
            className="mb-5 flex cursor-pointer flex-wrap items-center justify-center gap-2 text-2xl font-black tabular-nums text-white transition-colors hover:text-yellow-300 sm:justify-start sm:text-3xl"
          >
            <i className="ri-phone-line shrink-0 text-[#FF6A00] text-2xl sm:text-3xl" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="mb-8 flex cursor-pointer items-center justify-center gap-2 text-base font-medium text-blue-100 transition-colors hover:text-white sm:justify-start sm:text-lg"
          >
            <i className="ri-mail-line shrink-0 text-[#FF6A00] text-xl" />
            {EMAIL}
          </a>

          <div className="mt-6 border-t border-white/[0.06] pt-6 sm:mt-8 sm:pt-8">
            <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
              <i className="ri-map-pin-line text-xl text-[#FF6A00]" aria-hidden />
              <span className="text-base font-bold text-white sm:text-lg">주소</span>
            </div>
            <p className="text-center text-[15px] font-medium leading-relaxed text-white/90 sm:text-left sm:text-base">
              경기도 구리시 경춘로 158
              <br />
              한화생명B/D 8층 (뉴인창지점)
            </p>
          </div>

          <div className="mt-6 border-t border-white/[0.06] pt-6 sm:mt-8 sm:pt-8">
            <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
              <i className="ri-train-line text-xl text-[#FF6A00]" aria-hidden />
              <span className="text-base font-bold text-white sm:text-lg">교통 안내</span>
            </div>
            <div className="space-y-1.5 text-center text-[15px] font-medium leading-relaxed text-white/90 sm:text-left sm:text-base">
              <p>(8호선 / 경의중앙선)</p>
              <p>구리역 6번출구</p>
              <p>교문사거리 방향</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-blue-200/90 sm:text-base">평일 09:00 ~ 17:00 상담 가능</p>
      </RevealOnScroll>
    </section>
  );
}
