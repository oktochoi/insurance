'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const handleApply = () => {
    const el = document.getElementById('apply-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#0A2540]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-14 pb-12 md:grid-cols-2 md:px-8 md:pt-20 md:pb-16">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-[#FF6A00] px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-white shadow-lg shadow-orange-600/35">채용중</span>
            <span className="text-xs font-semibold tracking-wide text-blue-200/90">신입 · 경력 무관</span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            보유고객 상담 &<br />
            <span className="text-[#FF6A00]">보상처리 접수</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-blue-100/90 md:text-base md:leading-7">
            5명 소규모 채용 · 교육비 전액 지원<br />첫 달부터 수익 가능한 구조
          </p>

          <div className={`mt-8 grid grid-cols-3 gap-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-black tracking-tight text-yellow-300 md:text-3xl">300만+</p>
              <p className="mt-1 text-xs font-semibold text-blue-100/80">월 수익</p>
            </div>
            <div className="scale-[1.04] rounded-2xl border border-white/20 bg-white/15 p-4 text-center shadow-[0_14px_30px_rgba(8,18,38,0.45)] backdrop-blur-sm">
              <p className="text-2xl font-black tracking-tight text-[#FF6A00] md:text-3xl">무료</p>
              <p className="mt-1 text-xs font-semibold text-blue-100/80">고객 DB</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-black tracking-tight text-yellow-300 md:text-3xl">10만원</p>
              <p className="mt-1 text-xs font-semibold text-blue-100/80">즉시 지급</p>
            </div>
          </div>

          <button
            onClick={handleApply}
            className={`mt-8 w-full whitespace-nowrap rounded-full bg-[#FF6A00] py-4 text-base font-black text-white shadow-[0_14px_30px_rgba(255,106,0,0.36)] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_16px_35px_rgba(255,106,0,0.5)] active:scale-95 md:max-w-sm ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '350ms' }}
          >
            지금 바로 지원하기
          </button>
          <p className="mt-3 text-xs text-blue-200/80 md:text-left">5명 한정 · 선착순 마감</p>
        </div>

        <div className={`relative h-56 overflow-hidden rounded-3xl border border-white/10 shadow-[0_18px_45px_rgba(5,16,30,0.4)] transition-all duration-700 delay-200 md:h-[23rem] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <img
            src="https://readdy.ai/api/search-image?query=bright%20modern%20insurance%20financial%20office%20interior%20with%20professional%20consultants%20at%20clean%20white%20desks%2C%20large%20windows%20with%20natural%20daylight%2C%20contemporary%20furniture%2C%20calm%20productive%20atmosphere%2C%20people%20working%20on%20computers%20smiling%2C%20warm%20tones&width=800&height=400&seq=hero002&orientation=landscape"
            alt="office"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-[#0A2540]/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}
