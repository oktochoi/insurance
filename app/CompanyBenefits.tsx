'use client';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

const perks = [
  { icon: 'ri-graduation-cap-line', label: '자녀 학자금 지원' },
  { icon: 'ri-heart-line', label: '경조사 지원' },
  { icon: 'ri-shield-check-line', label: '보험 혜택' },
  { icon: 'ri-plane-line', label: '해외 포상' },
  { icon: 'ri-stethoscope-line', label: '건강검진' },
  { icon: 'ri-building-line', label: '리조트 지원' },
];

const okItems = [
  { icon: 'ri-book-open-line', title: '보험 몰라도 OK', desc: '체계적인 전문 교육을 제공해요' },
  { icon: 'ri-user-star-line', title: '경력 없어도 OK', desc: '신입 환영, 처음부터 함께해요' },
  { icon: 'ri-home-heart-line', title: '육아 병행 가능', desc: '유연한 근무 환경을 지원해요' },
];

export default function CompanyBenefits() {
  return (
    <section className="bg-white">
      <RevealOnScroll>
        <div className="container-section section-y">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-[clamp(1.25rem,3.5vw,2.25rem)] font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              복리후생
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-[#FF6A00]" />
            <p className="mt-3 text-sm font-medium text-gray-600">함께 일하는 분들을 소중히 생각합니다</p>
          </div>
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mb-14 md:grid-cols-3 md:gap-6">
            {perks.map((p, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_8px_22px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(15,23,42,0.14)] sm:p-5"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A2540]/8 text-[#0A2540]">
                  <i className={`${p.icon} text-3xl`} />
                </div>
                <span className="text-[11px] font-bold leading-snug text-gray-800 sm:text-xs md:text-sm">{p.label}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-5 shadow-inner sm:p-6 md:p-10">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black tracking-tight text-gray-900 md:text-3xl">걱정하지 마세요</h3>
              <p className="mt-1 text-sm font-medium text-gray-600">누구든 시작할 수 있어요</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 md:mt-8 md:grid md:grid-cols-3 md:gap-4">
              {okItems.map((item, i) => (
                <div
                  key={i}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-white/70 bg-white/90 p-3.5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md sm:gap-4 sm:p-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0A2540]/8 text-[#0A2540]">
                    <i className={`${item.icon} text-2xl`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-black text-base text-[#0A2540]">{item.title}</p>
                    <p className="text-xs font-medium text-gray-500">{item.desc}</p>
                  </div>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <i className="ri-check-line text-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider fillClass="text-slate-50" />
    </section>
  );
}
