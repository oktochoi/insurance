'use client';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

export default function SpecialBonus() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <RevealOnScroll>
        <div className="container-section section-y">
          <div className="text-center">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-block rounded-full bg-red-600 px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-white shadow-md">
                HOT
              </span>
              <span className="rounded-full border border-red-300 bg-white/80 px-3 py-1 text-[11px] font-black text-red-700">
                선착순 5명 · 놓치면 마감
              </span>
            </div>
            <h2 className="text-[clamp(1.25rem,3.5vw,2.25rem)] font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              특별 지원금 안내
            </h2>
            <p className="mt-2 text-base font-medium text-gray-600">조건 상관없이 누구나 받을 수 있어요</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-amber-200/45 bg-white p-5 shadow-[0_14px_36px_rgba(180,83,9,0.12)] sm:p-6">
              <div className="mb-4 h-1.5 w-16 rounded-full bg-red-500" />
              <div className="mb-2 flex items-center gap-3">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">
                  보험 경력자
                </span>
              </div>
              <p className="text-base font-bold text-gray-800">세미나 참석 시</p>
              <p className="mt-1 text-3xl font-black tracking-tight text-red-600 md:text-4xl">10만원 즉시 지급</p>
              <p className="mt-2 text-xs text-gray-500">세미나 참석만으로 바로 지급</p>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-white/90 p-5 shadow-sm sm:p-6">
              <div className="mb-4 h-1.5 w-16 rounded-full bg-[#FF6A00]" />
              <div className="mb-2 flex items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700">
                  비경력자
                </span>
              </div>
              <p className="text-lg font-bold text-gray-800">3일 체험만 해도</p>
              <p className="mt-1 text-3xl font-black tracking-tight text-[#FF6A00] md:text-4xl">10만원 즉시 지급</p>
              <p className="mt-2 text-sm text-gray-500">부담 없이 3일만 체험해보세요</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider fillClass="text-slate-50" />
    </section>
  );
}
