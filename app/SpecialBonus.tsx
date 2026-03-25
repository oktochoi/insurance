'use client';
import { useEffect, useRef, useState } from 'react';

export default function SpecialBonus() {
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
    <section ref={ref} className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
      <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="mb-3 inline-block rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-white shadow-md">HOT</span>
        <h2 className="text-2xl font-black tracking-tight text-gray-900 md:text-4xl">특별 지원금 안내</h2>
        <p className="mt-2 text-sm text-gray-600">조건 상관없이 누구나 받을 수 있어요</p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-6">
        <div
          className={`rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_10px_24px_rgba(120,53,15,0.12)] transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
        >
          <div className="mb-4 h-1.5 w-16 rounded-full bg-red-500" />
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">보험 경력자</span>
          </div>
          <p className="text-base font-bold text-gray-800">세미나 참석 시</p>
          <p className="mt-1 text-3xl font-black tracking-tight text-red-600 md:text-4xl">10만원 즉시 지급</p>
          <p className="mt-2 text-xs text-gray-500">세미나 참석만으로 바로 지급</p>
        </div>
        <div
          className={`rounded-2xl border border-orange-200 bg-white p-6 shadow-[0_10px_24px_rgba(194,65,12,0.12)] transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
        >
          <div className="mb-4 h-1.5 w-16 rounded-full bg-orange-500" />
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700">비경력자</span>
          </div>
          <p className="text-base font-bold text-gray-800">3일 체험만 해도</p>
          <p className="mt-1 text-3xl font-black tracking-tight text-[#FF6A00] md:text-4xl">10만원 즉시 지급</p>
          <p className="mt-2 text-xs text-gray-500">부담 없이 3일만 체험해보세요</p>
        </div>
      </div>
      </div>
    </section>
  );
}
