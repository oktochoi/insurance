'use client';

import BrandLogo from '../components/BrandLogo';
import { TEL_HREF } from '../lib/contact';
import SectionDivider from './SectionDivider';

const HERO_IMAGE_SRC =
  'https://readdy.ai/api/search-image?query=bright%20modern%20insurance%20financial%20office%20interior%20with%20professional%20consultants%20at%20clean%20white%20desks%2C%20large%20windows%20with%20natural%20daylight%2C%20contemporary%20furniture%2C%20calm%20productive%20atmosphere%2C%20people%20working%20on%20computers%20smiling%2C%20warm%20tones&width=800&height=400&seq=hero002&orientation=landscape';

const glassCard =
  'rounded-lg border border-white/10 bg-white/[0.08] px-1.5 py-1.5 shadow-sm backdrop-blur-md sm:rounded-xl sm:px-2.5 sm:py-2';

type Kpi = { label: string; value: string; emphasize?: boolean };

const kpis: Kpi[] = [
  { label: '월 평균 수익', value: '300만+' },
  { label: '고객 DB 제공', value: '무료', emphasize: true },
  { label: '즉시 지급', value: '10만원' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a1530] via-[#121a38] to-[#0a1628]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060d18] via-transparent to-[#1e1a32]/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[min(90%,42rem)] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[72px]"
        aria-hidden
      />
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden />

      {/* 모바일: 첫 화면(100svh) 안에 CTA까지 — 데스크톱은 기존 여백 */}
      <div className="container-section relative z-10 max-lg:min-h-[100svh] max-lg:min-h-[100dvh] max-lg:pt-[max(0.5rem,env(safe-area-inset-top))] max-lg:pb-3 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="mx-auto flex w-full max-w-xl flex-col max-lg:max-h-[calc(100svh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-0.75rem)] max-lg:justify-between lg:mx-0 lg:max-h-none lg:justify-start lg:gap-0">
            <div className="min-h-0 max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col max-lg:pb-0.5">
              {/* 로고 가운데 + 배지 */}
              <div className="flex flex-shrink-0 flex-col items-center gap-1.5 max-lg:gap-1.5 sm:gap-2">
                <div className="flex justify-center">
                  <div className="origin-center scale-[0.78] sm:scale-[0.85] lg:scale-90">
                    <BrandLogo variant="hero" priority />
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  <span className="rounded-full bg-[#e86e00] px-2.5 py-1 text-[9px] font-bold text-white sm:px-3 sm:py-1 sm:text-xs">
                    채용중
                  </span>
                  <span className="rounded-full border border-white/25 px-2.5 py-1 text-[9px] font-semibold text-white/90 sm:px-3 sm:py-1 sm:text-xs">
                    선착순 5명 모집
                  </span>
                </div>
              </div>

              {/* 타이틀 */}
              <h1 className="mt-2 flex-shrink-0 text-center font-bold leading-[1.15] tracking-tight text-white max-lg:mt-2 sm:mt-5 sm:text-left lg:mt-7">
                <span className="block text-[0.95rem] lg:text-[clamp(1.5rem,4.5vw,2.15rem)]">보유고객 관리상담</span>
                <span className="mt-1 block text-[0.8rem] font-bold text-[#FF7A00] sm:mt-1.5 lg:text-[clamp(1.1rem,3.2vw,1.45rem)]">
                  &amp; 보상처리접수
                </span>
                <span className="mt-1 block text-[0.72rem] font-semibold text-white/85 sm:mt-1.5 lg:text-[clamp(1rem,2.8vw,1.2rem)]">
                  &amp; 법인담당 관리자
                </span>
              </h1>

              <p className="mt-1.5 flex-shrink-0 text-center text-[9px] font-medium leading-snug text-amber-200/90 max-lg:mt-1.5 sm:mt-3 sm:text-left sm:text-sm lg:mt-3 lg:text-[0.95rem]">
                초보도 첫 달 수익 가능 구조
              </p>

              <div className="mt-1.5 min-h-0 flex-1 space-y-1.5 max-lg:mt-1.5 max-lg:space-y-1.5 sm:mt-4 sm:space-y-3 lg:mt-5 lg:space-y-4">
                <div className="rounded-lg border border-white/10 bg-[#0c1830]/90 px-2 py-1.5 backdrop-blur-sm sm:rounded-2xl sm:px-3 sm:py-2.5 lg:px-4 lg:py-3">
                  <p className="text-center text-[9px] font-bold leading-snug text-amber-300 sm:text-left sm:text-sm lg:text-base">
                    기계약 고객 DB 간단 상담
                  </p>
                  <p className="mt-1 text-center text-[9px] font-bold leading-snug text-white sm:mt-1.5 sm:text-left sm:text-sm lg:text-base">
                    ☆☆기계약 고객DB 무료제공☆☆
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1.5 backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-2.5 lg:px-4">
                  <p className="text-center text-[9px] font-bold text-red-400 sm:text-left sm:text-sm">신입 / 경력</p>
                  <div className="mt-1 flex flex-row items-center justify-center gap-2 sm:mt-2 sm:gap-3 lg:justify-start">
                    <span className="inline-flex shrink-0 rotate-[-2deg] items-center border border-red-400/70 bg-red-500/15 px-1.5 py-0.5 text-[8px] font-black tracking-wider text-red-300 sm:px-3 sm:py-2 sm:text-xs">
                      특별채용
                    </span>
                    <p className="text-[0.95rem] font-black leading-none text-red-400 max-lg:text-[0.85rem] sm:text-[clamp(1.35rem,4vw,1.85rem)]">
                      (5명) 모집
                    </p>
                  </div>
                </div>

                {/* 혜택 2종 — 한 줄 2열 · 패딩 최소 */}
                <div className="grid grid-cols-2 gap-1 max-lg:gap-1 sm:gap-2">
                  <div className="relative min-w-0 overflow-hidden rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.03] py-2 pl-2 pr-1.5 shadow-sm backdrop-blur-md sm:rounded-2xl sm:py-2.5 sm:pl-2.5 sm:pr-2">
                    <div
                      className="absolute bottom-1 left-0 top-1 w-0.5 rounded-full bg-gradient-to-b from-[#FF7A00] to-orange-600"
                      aria-hidden
                    />
                    <p className="pl-1.5 text-[8px] font-semibold leading-[1.25] text-white/80 sm:text-[10px]">
                      <span className="text-[#FF7A00]">#</span> 보험 경력자 세미나 참석시
                    </p>
                    <p className="mt-1 pl-1.5 text-[11px] font-bold tabular-nums leading-tight text-[#FF7A00] sm:text-sm">
                      10만원 즉시 지급
                    </p>
                  </div>

                  <div className="relative min-w-0 overflow-hidden rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.03] py-2 pl-2 pr-1.5 shadow-sm backdrop-blur-md sm:rounded-2xl sm:py-2.5 sm:pl-2.5 sm:pr-2">
                    <div
                      className="absolute bottom-1 left-0 top-1 w-0.5 rounded-full bg-gradient-to-b from-amber-400/90 to-amber-600/80"
                      aria-hidden
                    />
                    <p className="pl-1.5 text-[8px] font-semibold leading-[1.25] text-white/80 sm:text-[10px]">
                      <span className="text-amber-400/90">#</span> 보험 경력이 없어도 면접후
                    </p>
                    <p className="mt-0.5 pl-1.5 text-[7px] font-medium leading-tight text-white/85 sm:text-[9px]">
                      3일 직업체험만 해도
                    </p>
                    <p className="mt-0.5 pl-1.5 text-[11px] font-bold tabular-nums leading-tight text-[#FF7A00] sm:text-sm">
                      10만원 지급
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-red-500/35 bg-red-950/50 px-2 py-1.5 text-center backdrop-blur-sm sm:rounded-2xl sm:px-3 sm:py-2 sm:text-left">
                  <p className="text-[8px] font-semibold italic leading-snug text-amber-100 sm:text-[12px] lg:text-sm">
                    DB 이제 돈주고 사지 마세요!! - 기계약 고객 DB 무료 제공 -
                  </p>
                </div>

                <p className="text-center text-[7px] font-semibold leading-snug text-white/90 max-lg:line-clamp-2 sm:text-left sm:text-[11px] lg:text-xs">
                  <span className="text-[#FF7A00]">한화생명</span>을 포함한 모든 손보사 비교견적 및 상담 안내 가능!!
                </p>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                  {kpis.map((k) => (
                    <div
                      key={k.label}
                      className={`${glassCard} text-center sm:min-w-0 ${
                        k.emphasize
                          ? 'relative z-[1] border-white/15 shadow-md ring-1 ring-white/10 sm:scale-105'
                          : ''
                      }`}
                    >
                      <p className="px-0.5 py-0.5 text-[6px] font-semibold uppercase leading-relaxed tracking-tighter text-blue-100/75 sm:text-[9px] lg:text-[10px]">
                        {k.label}
                      </p>
                      <p
                        className={`px-0.5 py-0.5 font-bold tabular-nums tracking-tight text-white max-lg:text-[10px] sm:mt-1 sm:text-sm lg:mt-2 ${
                          k.emphasize ? 'mt-1 text-[11px] sm:text-base lg:text-lg' : 'mt-1 text-[10px] sm:text-sm lg:text-base'
                        }`}
                      >
                        {k.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 flex-shrink-0 max-lg:mt-1.5 lg:mt-6">
              <a
                href={TEL_HREF}
                className="flex h-11 w-full touch-manipulation items-center justify-center rounded-full bg-gradient-to-r from-[#ff8c33] via-[#FF7A00] to-[#e86e00] px-4 text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(255,120,0,0.28)] transition duration-200 hover:brightness-[1.03] active:scale-[0.99] max-lg:h-11 sm:h-[52px] sm:px-6 sm:text-[15px] lg:min-h-14 lg:text-base"
              >
                지금 바로 지원하기 →
              </a>
              <p className="mt-1.5 hidden text-center text-[11px] font-medium leading-snug text-amber-200/85 sm:mt-2 sm:block sm:text-left sm:text-xs lg:text-xs">
                🔥 오늘 지원 시 10만원 지급 / 선착순 마감 임박
              </p>
            </div>
          </div>

          <div className="relative mx-auto hidden max-h-[min(36rem,78vh)] min-h-[20rem] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 lg:sticky lg:top-8 lg:mx-0 lg:block lg:max-w-none">
            <img
              src={HERO_IMAGE_SRC}
              alt=""
              className="h-full min-h-[20rem] w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-[#1a1530]/20" />
          </div>
        </div>
      </div>

      <SectionDivider fillClass="text-slate-50" />
    </section>
  );
}
