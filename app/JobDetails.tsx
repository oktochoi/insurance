'use client';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

const jobs = [
  { icon: 'ri-customer-service-2-line', label: '보유 고객 상담', desc: '기존 보유 고객 대상 상담 업무' },
  { icon: 'ri-file-list-3-line', label: '보상 처리 접수', desc: '보험 보상 관련 서류 접수 처리' },
  { icon: 'ri-user-heart-line', label: '고객 관리', desc: '장기 고객 관계 유지 및 관리' },
];

const conditions = [
  { icon: 'ri-time-line', label: '근무시간', value: '09:00 ~ 17:00' },
  { icon: 'ri-calendar-line', label: '근무일', value: '주 5일' },
  { icon: 'ri-graduation-cap-line', label: '교육비', value: '100만원 지급' },
  { icon: 'ri-trophy-line', label: '수수료', value: '최고 체계' },
];

export default function JobDetails() {
  return (
    <section className="bg-slate-50">
      <RevealOnScroll>
        <div className="container-section section-y">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-[clamp(1.25rem,3.5vw,2.25rem)] font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              주요 업무 & 근무 조건
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-[#0A2540]" />
          </div>
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-4 text-lg font-black text-[#0A2540] md:text-2xl">주요 업무</h3>
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
              {jobs.map((j, i) => (
                <div
                  key={i}
                  className={`flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)] sm:gap-4 sm:p-5 ${i === 1 ? 'ring-2 ring-[#FF6A00]/25' : ''}`}
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0A2540]/8 text-[#0A2540]">
                    <i className={`${j.icon} text-2xl`} />
                  </div>
                  <div>
                    <p className="text-base font-black text-gray-900">{j.label}</p>
                    <p className="text-sm font-medium text-gray-600">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mb-4 text-lg font-black text-[#0A2540] md:text-2xl">근무 조건</h3>
            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner sm:gap-3 md:gap-5 md:p-6">
              {conditions.map((c, i) => (
                <div
                  key={i}
                  className="flex min-w-0 flex-col items-center rounded-xl bg-white/90 p-2.5 text-center shadow-sm sm:p-3"
                >
                  <div className="mb-1.5 flex h-10 w-10 items-center justify-center text-[#0A2540] sm:mb-2 sm:h-11 sm:w-11">
                    <i className={`${c.icon} text-xl sm:text-2xl`} />
                  </div>
                  <span className="mb-0.5 text-[11px] font-medium leading-tight text-gray-500 sm:mb-1 sm:text-xs">
                    {c.label}
                  </span>
                  <span className="break-words text-xs font-black leading-snug text-gray-900 sm:text-sm md:text-base">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider fillClass="text-white" />
    </section>
  );
}
