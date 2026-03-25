'use client';
import { useEffect, useRef, useState } from 'react';

export default function ContactCTA() {
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
    <section ref={ref} id="apply-section" className="bg-gradient-to-br from-[#0A2540] via-[#0B2E52] to-[#081B33] py-16 px-5 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto max-w-2xl">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-300 px-4 py-1.5 text-xs font-black tracking-wide text-gray-900 shadow-md">
            지금 지원하면
          </span>
          <h2 className="mt-4 mb-2 text-3xl font-black tracking-tight text-white md:text-5xl">
            10만원 즉시 지급!
          </h2>
          <p className="mb-8 text-sm text-blue-100 md:text-base">
            모집 인원 <span className="font-bold text-yellow-300">5명</span> 한정 · 선착순 마감
          </p>
        </div>
        <div
          className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="tel:010-4229-7302"
            className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#FF6A00] py-4 text-lg font-black text-white shadow-[0_14px_30px_rgba(255,106,0,0.35)] transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_18px_38px_rgba(255,106,0,0.52)] active:scale-95"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-phone-fill text-xl" />
            </div>
            전화 상담하기
          </a>
          <a
            href="sms:010-4229-7302?body=채용 지원 문의드립니다."
            className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-white/30 bg-white/95 py-4 text-lg font-black text-[#0A2540] shadow-[0_14px_30px_rgba(8,27,51,0.2)] transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-message-2-line text-xl" />
            </div>
            문자로 지원하기
          </a>
        </div>
        <div className={`mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="mb-3 text-xs font-semibold text-blue-100">연락처</p>
          <a href="tel:010-4229-7302" className="mb-3 flex cursor-pointer items-center justify-center gap-2 text-xl font-bold text-white transition-colors hover:text-yellow-300">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line text-[#FF6A00] text-lg" />
            </div>
            010-4229-7302
          </a>
          <a href="mailto:dasanmy75@naver.com" className="flex cursor-pointer items-center justify-center gap-2 text-sm text-blue-100 transition-colors hover:text-white">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-mail-line text-[#FF6A00] text-base" />
            </div>
            dasanmy75@naver.com
          </a>
        </div>
        <p className="mt-6 text-xs text-blue-200">평일 09:00 ~ 17:00 상담 가능</p>
        </div>
      </div>
    </section>
  );
}
