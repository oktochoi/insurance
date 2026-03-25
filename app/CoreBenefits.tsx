'use client';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: 'ri-money-dollar-circle-line',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: '월 300만원 + α',
    desc: '최고 수수료 체계로 노력한 만큼 버는 구조',
  },
  {
    icon: 'ri-database-2-line',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    title: '고객 DB 무료 제공',
    desc: '검증된 보유 고객 리스트로 빠르게 시작',
  },
  {
    icon: 'ri-gift-line',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
    title: '10만원 즉시 지급',
    desc: '조건 충족 즉시 현금 지급, 기다림 없음',
  },
];

export default function CoreBenefits() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
      <div className="text-center mb-10 md:mb-12">
        <h2 className={`text-2xl font-black tracking-tight text-gray-900 md:text-4xl mb-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          왜 우리 회사인가요?
        </h2>
        <div className={`mx-auto h-1 w-16 rounded-full bg-[#FF6A00] transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex cursor-default items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(15,23,42,0.14)]"
            style={{ transitionDelay: `${i * 120 + 200}ms`, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
          >
            <div className={`${b.iconBg} h-14 w-14 rounded-xl flex flex-shrink-0 items-center justify-center md:h-16 md:w-16`}>
              <i className={`${b.icon} ${b.iconColor} text-2xl md:text-3xl`} />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-black tracking-tight text-gray-900 md:text-xl">{b.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
