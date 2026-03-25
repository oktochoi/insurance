'use client';
import { useEffect, useRef, useState } from 'react';

const perks = [
  { icon: 'ri-graduation-cap-line', label: '자녀 학자금 지원', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: 'ri-heart-line', label: '경조사 지원', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: 'ri-shield-check-line', label: '보험 혜택', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: 'ri-plane-line', label: '해외 포상', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: 'ri-stethoscope-line', label: '건강검진', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: 'ri-building-line', label: '리조트 지원', color: 'text-orange-500', bg: 'bg-orange-50' },
];

const okItems = [
  { icon: 'ri-book-open-line', title: '보험 몰라도 OK', desc: '체계적인 전문 교육을 제공해요', color: 'text-blue-700', bg: 'bg-blue-50' },
  { icon: 'ri-user-star-line', title: '경력 없어도 OK', desc: '신입 환영, 처음부터 함께해요', color: 'text-green-700', bg: 'bg-green-50' },
  { icon: 'ri-home-heart-line', title: '육아 병행 가능', desc: '유연한 근무 환경을 지원해요', color: 'text-pink-600', bg: 'bg-pink-50' },
];

export default function CompanyBenefits() {
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
    <section ref={ref} className="bg-white py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
      <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900 md:text-4xl">복리후생</h2>
        <div className="mx-auto h-1 w-16 rounded-full bg-[#FF6A00]" />
        <p className="mt-3 text-sm text-gray-600">함께 일하는 분들을 소중히 생각합니다</p>
      </div>
      <div className="mx-auto mb-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {perks.map((p, i) => (
          <div
            key={i}
            className="flex cursor-pointer flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_30px_rgba(15,23,42,0.14)]"
            style={{ transitionDelay: `${i * 80 + 200}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)' }}
          >
            <div className={`mb-3 h-14 w-14 rounded-xl ${p.bg} flex items-center justify-center`}>
              <i className={`${p.icon} ${p.color} text-3xl`} />
            </div>
            <span className="text-xs font-bold text-gray-800 md:text-sm">{p.label}</span>
          </div>
        ))}
      </div>
      <div className={`mx-auto max-w-5xl rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-8 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-black tracking-tight text-gray-900 md:text-3xl">걱정하지 마세요</h3>
          <p className="mt-1 text-sm text-gray-600">누구든 시작할 수 있어요</p>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
          {okItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-white/80 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
              style={{ transitionDelay: `${i * 100 + 600}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)' }}
            >
              <div className={`w-12 h-12 flex items-center justify-center ${item.bg} rounded-xl flex-shrink-0`}>
                <i className={`${item.icon} ${item.color} text-2xl`} />
              </div>
              <div>
                <p className={`font-black text-base ${item.color}`}>{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <div className="ml-auto w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                <i className="ri-check-line text-green-600 text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
