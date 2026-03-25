'use client';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

const steps = [
  {
    num: '01',
    icon: 'ri-file-text-line',
    label: '서류 접수',
    desc: '전화 또는 문자로 간단 접수',
    color: 'bg-blue-700',
    ring: 'ring-blue-100',
  },
  {
    num: '02',
    icon: 'ri-chat-smile-2-line',
    label: '면접 진행',
    desc: '편안한 분위기 1:1 면접',
    color: 'bg-[#FF6A00]',
    ring: 'ring-orange-100',
  },
  {
    num: '03',
    icon: 'ri-award-line',
    label: '최종 채용',
    desc: '합격 후 즉시 업무 시작',
    color: 'bg-green-600',
    ring: 'ring-green-100',
  },
];

export default function ApplicationProcess() {
  return (
    <section className="bg-slate-50">
      <RevealOnScroll>
        <div className="container-section section-y">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="mb-2 text-[clamp(1.25rem,3.5vw,2.25rem)] font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              지원 절차
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-[#0A2540]" />
            <p className="mt-3 text-sm font-medium text-gray-600">딱 3단계, 매우 간단해요</p>
          </div>

          <div className="relative mx-auto max-w-4xl pl-0 sm:pl-1 md:pl-0">
            <div className="absolute left-[27px] top-9 hidden h-[calc(100%-3.5rem)] w-1 rounded-full bg-gradient-to-b from-blue-700 via-[#FF6A00] to-green-500 opacity-45 sm:left-[29px] sm:top-10 md:left-[31px] md:block md:h-[calc(100%-4rem)]" />

            {steps.map((s, i) => (
              <div key={i} className="relative mb-4 flex items-start gap-3 sm:gap-4 md:gap-6">
                <div
                  className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ring-4 sm:h-[4.5rem] sm:w-[4.5rem] ${s.color} ${s.ring}`}
                >
                  <i className={`${s.icon} text-2xl sm:text-3xl`} />
                </div>

                <div
                  className={`min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.14)] sm:p-5 ${i === 1 ? 'border-[#FF6A00]/35' : ''}`}
                >
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-2xl font-black tabular-nums leading-none text-[#0A2540] sm:text-3xl md:text-4xl">
                      {s.num}
                    </span>
                    <span className="pb-1 text-xs font-black tracking-widest text-gray-400">STEP</span>
                  </div>
                  <p className="mt-2 text-base font-black text-gray-900 sm:text-lg">{s.label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-gray-600">
              평균 채용 기간 <span className="font-black text-[#0A2540]">3~5일</span>
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <SectionDivider fillClass="text-[#0A2540]" />
    </section>
  );
}
