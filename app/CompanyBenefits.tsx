'use client';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionDivider from './SectionDivider';

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
          <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200/35 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-5 shadow-inner sm:p-6 md:p-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black tracking-tight text-gray-900 md:text-3xl">걱정하지 마세요</h3>
              <p className="mt-1 text-base font-medium text-gray-600">누구든 시작할 수 있어요</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 md:mt-8 md:grid md:grid-cols-3 md:gap-4">
              {okItems.map((item, i) => (
                <div
                  key={i}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-gray-200/80 bg-white/90 p-3.5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md sm:gap-4 sm:p-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0A2540]/8 text-[#0A2540]">
                    <i className={`${item.icon} text-2xl`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-black text-lg text-[#0A2540]">{item.title}</p>
                    <p className="text-sm font-medium text-gray-500">{item.desc}</p>
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
