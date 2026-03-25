'use client';

import BrandLogo from '../components/BrandLogo';
import { TEL_HREF } from '../lib/contact';
import SectionDivider from './SectionDivider';

const glassCard =
  'rounded-lg border border-slate-200/70 bg-white/[0.75] px-2 py-1 shadow-sm backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-1.5';

type Kpi = { label: string; value: string; emphasize?: boolean };

const kpis: Kpi[] = [
  { label: '월 평균 수익', value: '300만+' },
  { label: '고객 DB 제공', value: '무료', emphasize: true },
  { label: '즉시 지급', value: '10만원' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#FFF7ED] to-[#F3F6FF] pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF5E9] via-[#FFFFFF] to-[#EEF4FF]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-[#FFF5E9]/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(10,37,64,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[min(90%,42rem)] -translate-x-1/2 rounded-full bg-[#0A2540]/10 blur-[72px]"
        aria-hidden
      />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-0" aria-hidden />

      {/* 모바일: 첫 화면(100svh) 안에 CTA까지 — 데스크톱은 기존 여백 */}
      <div className="container-section relative z-10 max-lg:min-h-[calc(100dvh-3.5rem)] max-lg:min-h-[calc(100svh-3.5rem)] max-lg:pt-[max(0.5rem,env(safe-area-inset-top))] max-lg:pb-3 lg:py-16">
        <div className="grid gap-8">
          <div className="mx-auto flex w-full max-w-xl flex-col max-lg:px-2 max-lg:max-h-[calc(100svh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-0.75rem-3.5rem)] max-lg:justify-between lg:max-h-none lg:justify-start lg:gap-0">
            <div className="min-h-0 max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col max-lg:pb-0.5">
              {/* 타이틀 */}
              <h1 className="mt-1 flex-shrink-0 text-center font-bold leading-[1.7] tracking-[-0.01875rem] text-[#111111] max-lg:mt-1 sm:mt-3 lg:mt-5 lg:text-center">
                <span className="block text-[1.75rem] sm:text-[1.875rem] font-extrabold leading-[1.7] text-[#111111]">
                  보유고객 관리상담
                </span>
                <span className="mt-1 flex flex-col items-center justify-center gap-y-1">
                  <span className="inline-flex items-center justify-center px-[14px] py-[2px] text-[1.125rem] sm:text-[1.25rem] font-bold text-[#FF6600] leading-[1.7] tracking-[-0.01875rem]">
                    보상처리접수
                  </span>
                  <span className="inline-flex items-center justify-center gap-2 px-[14px] py-[2px] text-[1rem] sm:text-[1.125rem] font-medium text-[#333333] leading-[1.7] tracking-[-0.01875rem]">
                    <i className="ri-file-text-line text-[1.125rem] text-[#111827]" aria-hidden />
                    법인 계약 관리자
                  </span>
                </span>
              </h1>


              <div className="mt-2 min-h-0 flex-1 space-y-3 max-lg:mt-1 sm:mt-3 sm:space-y-4 lg:mt-6 lg:space-y-5">
                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-1 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="text-center text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.7] tracking-[-0.01875rem] text-[#222222] sm:text-center lg:text-center">
                    기계약 고객 DB 간단 상담
                  </p>
                  <p className="mt-1 text-center text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.7] tracking-[-0.01875rem] text-[#222222] sm:mt-2 sm:text-center lg:text-center">
                    <span className="inline-flex items-center justify-center rounded-xl border border-[#FF6600]/40 bg-[#FFF1E6] px-3 py-1">
                      <i className="ri-coupon-3-line mr-1 text-[1.125rem] text-[#FF6600]" aria-hidden />
                      ☆☆기계약 고객DB <span className="font-semibold text-[#FF6600]">무료</span>제공☆☆
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white px-2 py-1 shadow-[0_10px_24px_rgba(15,23,42,0.06)] sm:px-5 sm:py-1">
                  <p className="text-center text-[0.9375rem] sm:text-[1rem] font-medium leading-[1.7] tracking-[-0.01875rem] text-[#333333] sm:text-center lg:text-center">신입 / 경력</p>
                  <div className="mt-2 flex flex-row items-center justify-center gap-2 sm:mt-3 sm:gap-3 lg:justify-center">
                    <span className="inline-flex shrink-0 items-center rounded-[6px] bg-[#F3F4F6] px-[10px]  text-[0.75rem] font-bold text-[#111827]">
                      <i className="ri-flashlight-line mr-1 text-[0.875rem] text-[#111827]" aria-hidden />
                      특별채용
                    </span>
                    <p className="text-[1.25rem] sm:text-[1.375rem] font-extrabold leading-none text-[#111827]">
                      (5명) 모집
                    </p>
                    <span className="ml-2 inline-flex items-center gap-1 text-[#111827]/60" aria-hidden>
                      <i className="ri-user-3-fill text-[1.125rem]" />
                      <i className="ri-user-3-line text-[1.125rem]" />
                      <i className="ri-user-3-line text-[1.125rem]" />
                    </span>
                  </div>
                </div>

                {/* 혜택 2종 — 한 줄 2열 · 패딩 최소 */}
                <div className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="min-w-0 flex items-start gap-3">
                      <div className="min-w-0 flex flex-col gap-1">
                      <p className="text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.7] tracking-[-0.01875rem] text-[#222222]/90">
                        <span className="text-[#222222]/65">#</span> 보험 경력자 세미나 참석시
                      </p>
                      <p className="mt-0 text-[0.9375rem] sm:text-[1rem] font-bold leading-[1.7] tracking-[-0.01875rem] text-[#222222]">
                        <span className="text-[#FF6600] font-extrabold text-[1.125rem] sm:text-[1.25rem] leading-[1.7] tracking-[-0.01875rem]">10만원</span>{' '}
                        <span className="text-[0.875rem] sm:text-[0.875rem]">즉시 지급</span>
                      </p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#111827]">
                        <i className="ri-file-list-3-line text-[1.375rem]" aria-hidden />
                      </div>
                    </div>
                    <div className="min-w-0 flex items-start gap-3">
                      <div className="min-w-0 flex flex-col gap-1">
                      <p className="text-[0.9375rem] sm:text-[0.875rem] font-semibold leading-[1.7] tracking-[-0.01875rem] text-[#222222]/90">
                        <span className="text-[#222222]/65">#</span> 보험 경력이 없어도 면접후
                      </p>
                      <p className="mt-0 text-[0.6875rem] sm:text-[0.8125rem] font-semibold leading-[1.5] tracking-[-0.01875rem] text-[#222222]">
                        3일 직업체험만 해도
                      </p>
                      <p className="mt-0 text-[0.9375rem] sm:text-[1rem] font-bold leading-[1.7] tracking-[-0.01875rem] text-[#222222]">
                        <span className="text-[#FF6600] font-extrabold text-[1.125rem] sm:text-[1.25rem] leading-[1.7] tracking-[-0.01875rem]">10만원</span> 지급
                      </p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#111827]">
                        <i className="ri-calendar-event-line text-[1.375rem]" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#FFF7ED] px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <p className="whitespace-nowrap text-[0.8125rem] sm:text-[0.875rem] font-semibold italic leading-[1.7] tracking-[-0.01875rem] text-[#4B5563]">
                    <i className="ri-database-2-line mr-1 text-[1rem] text-[#111827]" aria-hidden />
                    DB 이제 돈주고 사지 마세요!! - 기계약 고객 DB <span className="font-semibold text-[#FF6600]">무료</span> 제공 -
                  </p>
                </div>

                <p className="text-center text-[0.8125rem] sm:text-[0.875rem] font-medium leading-[1.7] tracking-[-0.01875rem] text-[#4B5563] max-lg:line-clamp-2 sm:text-center lg:text-center">
                  <span className="font-bold text-[#0A2540]">한화생명</span>을 포함한 모든 손보사 비교견적 및 상담 안내 가능!!
                  <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-[#111827]/50" aria-hidden>
                    <i className="ri-shield-check-line text-[1rem]" />
                    <i className="ri-customer-service-2-line text-[1rem]" />
                    <i className="ri-search-eye-line text-[1rem]" />
                  </span>
                </p>

                {/* KPI 카드 영역 제거 */}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 flex-shrink-0 max-lg:mt-3 lg:mt-7">

              <p className="mt-1.5 hidden text-center text-[0.9375rem] sm:text-[1rem] font-medium leading-[1.7] tracking-[-0.01875rem] text-[#4B5563] sm:mt-2 sm:block sm:text-left lg:text-center">
                오늘 지원 시 <span className="font-extrabold text-[#FF6600] text-[1.125rem] sm:text-[1.25rem] leading-[1.7] tracking-[-0.01875rem]">10만원</span> 지급 / 선착순 마감 임박
              </p>
              <a
                href={TEL_HREF}
                className="flex h-11 pt-1 w-full touch-manipulation items-center justify-center rounded-full bg-[#FF6600] px-4 pt-1 text-[1.125rem] font-bold text-white shadow-sm transition duration-200 hover:brightness-[1.02] active:scale-[0.99] max-lg:h-11 sm:h-[52px] sm:px-6 lg:min-h-14"
              >
                지금 바로 지원하기 →
              </a>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider fillClass="text-slate-100" />
    </section>
  );
}
