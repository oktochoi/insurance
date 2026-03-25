'use client';
import { useEffect, useRef, useState } from 'react';

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
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-50 py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
      <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900 md:text-4xl">주요 업무 & 근무 조건</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-[#0A2540]" />
      </div>
      <div className="mx-auto max-w-5xl">
        <h3 className={`mb-4 text-lg font-black text-[#0A2540] md:text-2xl transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>주요 업무</h3>
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:gap-6">
          {jobs.map((j, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_26px_rgba(15,23,42,0.14)]"
              style={{ transitionDelay: `${i * 100 + 200}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)' }}
            >
              <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                <i className={`${j.icon} text-[#0A2540] text-2xl`} />
              </div>
              <div>
                <p className="text-base font-black text-gray-900">{j.label}</p>
                <p className="text-sm text-gray-600">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className={`mb-4 text-lg font-black text-[#0A2540] md:text-2xl transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>근무 조건</h3>
        <div
          className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] md:gap-5 md:p-6"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s 0.5s' }}
        >
          {conditions.map((c, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl bg-slate-50 p-3 text-center">
              <div className="mb-2 h-11 w-11 flex items-center justify-center">
                <i className={`${c.icon} text-[#0A2540] text-2xl`} />
              </div>
              <span className="mb-1 text-xs text-gray-500">{c.label}</span>
              <span className="text-sm font-black text-gray-900 md:text-base">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
