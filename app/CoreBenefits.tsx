'use client';
import BrandLogo from '../components/BrandLogo';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

const benefits = [
  {
    icon: 'ri-money-dollar-circle-line',
    variant: 'elevated' as const,
    title: '월 300만원 + α',
    desc: '최고 수수료 체계로 노력한 만큼 버는 구조',
  },
  {
    icon: 'ri-database-2-line',
    variant: 'flat' as const,
    title: '고객 DB 무료 제공',
    desc: '검증된 보유 고객 리스트로 빠르게 시작',
  },
  {
    icon: 'ri-gift-line',
    variant: 'accent' as const,
    title: '10만원 즉시 지급',
    desc: '조건 충족 즉시 현금 지급, 기다림 없음',
  },
];

const whyBullets = [
  '고객 DB 무료 제공',
  '상담 스크립트 제공',
  '교육비 전액 지원',
];

const variantClass: Record<(typeof benefits)[number]['variant'], string> = {
  elevated:
    'border-slate-200/80 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)] ring-1 ring-slate-100',
  flat: 'border-slate-200 bg-slate-50/80 shadow-none',
  accent:
    'border-2 border-[#FF6A00]/40 bg-white shadow-[0_10px_28px_rgba(255,106,0,0.12)]',
};

export default function CoreBenefits() {
  return (
    <section className="bg-slate-50">
      <RevealOnScroll>
        <div className="container-section section-y">
          <div className="mb-10 flex flex-col items-center gap-6 sm:mb-12 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A2540]/70">채용 안내</p>
              <h2 className="mt-1 text-[clamp(1.25rem,3.5vw,2.25rem)] font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                왜 우리 회사인가요?
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#FF6A00] md:mx-0" />
            </div>
            <div className="shrink-0 opacity-95">
              <BrandLogo variant="section" />
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`flex cursor-default flex-col gap-3 rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:gap-4 sm:p-6 ${variantClass[b.variant]}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A2540]/8 text-[#0A2540] md:h-16 md:w-16">
                  <i className={`${b.icon} text-3xl`} />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-gray-900 md:text-xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-[#0A2540]/10 bg-gradient-to-br from-white to-slate-100 p-6 shadow-inner md:mt-16 md:p-10">
            <div className="text-center md:text-left">
              <span className="inline-block rounded-full bg-[#FF6A00]/15 px-3 py-1 text-xs font-black text-[#FF6A00]">
                초보 OK
              </span>
              <h3 className="mt-3 text-xl font-black tracking-tight text-gray-900 md:text-2xl">
                왜 초보도 가능한가?
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                막막함을 줄이기 위해 필요한 걸 미리 준비했습니다.
              </p>
            </div>
            <ul className="mt-6 space-y-3 md:mt-8">
              {whyBullets.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-left font-semibold text-gray-800 shadow-sm"
                >
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0A2540] text-white">
                    <i className="ri-check-line text-base" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider fillClass="text-amber-50" />
    </section>
  );
}
