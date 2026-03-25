'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  { num: '01', icon: 'ri-file-text-line', label: '서류 접수', desc: '전화 또는 문자로 간단 접수', color: 'bg-blue-700' },
  { num: '02', icon: 'ri-chat-smile-2-line', label: '면접 진행', desc: '편안한 분위기 1:1 면접', color: 'bg-orange-500' },
  { num: '03', icon: 'ri-award-line', label: '최종 채용', desc: '합격 후 즉시 업무 시작', color: 'bg-green-600' },
];

export default function ApplicationProcess() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-50 py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
      <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900 md:text-4xl">지원 절차</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-[#0A2540]" />
        <p className="mt-3 text-sm text-gray-600">딱 3단계, 매우 간단해요</p>
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col gap-0">
        <div className="absolute left-9 top-10 bottom-10 w-1 rounded-full bg-gradient-to-b from-blue-700 via-orange-400 to-green-500 opacity-30" />
        {steps.map((s, i) => (
          <div
            key={i}
            className="mb-4 flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,23,42,0.14)]"
            style={{ transitionDelay: `${i * 150 + 200}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(20px)' }}
          >
            <div className={`${s.color} h-16 w-16 flex-shrink-0 rounded-xl flex items-center justify-center shadow-md`}>
              <i className={`${s.icon} text-white text-3xl`} />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-black tracking-wider text-gray-400">STEP {s.num}</span>
              </div>
              <p className="text-lg font-black text-gray-900">{s.label}</p>
              <p className="mt-0.5 text-sm text-gray-600">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute right-5 mt-2">
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={`text-center mt-4 transition-all duration-700 delay-600 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-gray-600">평균 채용 기간 <span className="font-bold text-[#0A2540]">3~5일</span></p>
      </div>
      </div>
    </section>
  );
}
