'use client';
import BrandLogo from '../components/BrandLogo';
import { TEL_HREF } from '../lib/contact';
import { useEffect, useState } from 'react';
import SectionDivider from './SectionDivider';

function useCountUp(target: number, durationMs: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, active]);
  return n;
}

const PARTICLES = [
  { left: '8%', top: '18%', delay: '0s' },
  { left: '22%', top: '62%', delay: '0.4s' },
  { left: '38%', top: '28%', delay: '0.8s' },
  { left: '55%', top: '72%', delay: '1.2s' },
  { left: '68%', top: '22%', delay: '0.2s' },
  { left: '78%', top: '48%', delay: '0.6s' },
  { left: '88%', top: '78%', delay: '1s' },
  { left: '15%', top: '88%', delay: '1.4s' },
];

export default function HeroSection() {
  const [visible] = useState(true);

  const count300 = useCountUp(300, 1400, visible);
  const count10 = useCountUp(10, 1000, visible);

  return (
    <section className="relative overflow-hidden bg-[#0A2540] pb-0">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(147,51,234,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.28),transparent_50%)]" />
        <div className="animate-drift absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="animate-drift absolute -bottom-1/4 -left-1/4 h-[60%] w-[60%] rounded-full bg-purple-500/10 blur-3xl [animation-delay:2s]" />
      </div>

      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white/30 animate-twinkle"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}

      <div className="container-section relative grid grid-cols-1 items-center gap-8 py-8 sm:gap-10 sm:py-10 md:py-12 lg:grid-cols-2 lg:gap-10 lg:py-14 xl:gap-14 xl:py-16">
        <div className="min-w-0 transition-all duration-700">
          <div className="mb-5 flex flex-col gap-4 sm:mb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
            <div className="flex justify-center lg:justify-start">
              <BrandLogo variant="hero" priority />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-end">
              <span className="rounded-full bg-[#FF6A00] px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-white shadow-lg shadow-orange-600/40 sm:px-3.5 sm:text-xs">
                채용중
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-blue-100/90 sm:text-xs">
                신입 · 경력 무관
              </span>
              <span className="rounded-full border border-[#FF6A00]/50 bg-[#FF6A00]/15 px-2.5 py-1.5 text-[10px] font-black tracking-wide text-[#FF6A00] sm:px-3 sm:text-[11px] md:text-xs">
                선착순 5명 모집
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-black leading-[1.12] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
            보유고객 상담 &<br />
            <span className="relative inline-block text-[#FF6A00] drop-shadow-[0_2px_24px_rgba(255,106,0,0.45)] text-[clamp(1.25rem,4vw,2.75rem)] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              보상처리 접수
            </span>
          </h1>

          <p className="mt-3 text-sm font-semibold text-amber-200/95 sm:text-base md:mt-4 md:text-lg">
            초보도 첫 달 수익 가능 구조
          </p>
          <p className="mt-2 text-sm leading-relaxed text-blue-100/85 sm:text-[0.95rem] md:text-base md:leading-7">
            5명 소규모 채용 · 교육비 전액 지원
            <br />
            첫 달부터 수익 가능한 구조
          </p>

          <div className="mt-6 grid grid-cols-3 gap-1.5 sm:mt-8 sm:gap-2 md:gap-4">
            <div className="rounded-xl border border-white/15 bg-white/10 p-2 text-center shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-3 md:p-4">
              <p className="text-[9px] font-bold uppercase leading-tight tracking-wider text-blue-200/90 sm:text-[10px] md:text-xs">
                월 평균 수익
              </p>
              <p className="mt-0.5 text-base font-black tabular-nums tracking-tight text-yellow-300 sm:mt-1 sm:text-xl md:text-3xl">
                {count300}만+
              </p>
            </div>
            <div className="scale-[1.02] rounded-xl border-2 border-[#FF6A00]/50 bg-white/15 p-2 text-center shadow-[0_14px_34px_rgba(8,18,38,0.5)] backdrop-blur-sm sm:scale-[1.03] sm:rounded-2xl sm:p-3 md:p-4">
              <p className="text-[9px] font-bold uppercase leading-tight tracking-wider text-blue-100 sm:text-[10px] md:text-xs">
                고객 DB 제공
              </p>
              <p className="mt-0.5 text-base font-black tracking-tight text-[#FF6A00] sm:mt-1 sm:text-xl md:text-3xl">무료</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-2 text-center shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-3 md:p-4">
              <p className="text-[9px] font-bold uppercase leading-tight tracking-wider text-blue-200/90 sm:text-[10px] md:text-xs">
                즉시 지급
              </p>
              <p className="mt-0.5 text-base font-black tabular-nums tracking-tight text-yellow-300 sm:mt-1 sm:text-xl md:text-3xl">
                {count10}만원
              </p>
            </div>
          </div>

          <a
            href={TEL_HREF}
            className="animate-pulse-glow mt-6 flex min-h-[52px] w-full touch-manipulation items-center justify-center rounded-full bg-[#FF6A00] px-4 py-3.5 text-base font-black text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:mt-8 sm:min-h-14 sm:max-w-md sm:py-4 sm:text-lg md:text-xl lg:hover:scale-[1.03]"
          >
            지금 바로 지원하기 →
          </a>
          <p className="mt-3 text-center text-[11px] font-semibold leading-snug text-amber-200/95 sm:text-xs md:text-left md:text-sm">
            🔥 오늘 지원 시 10만원 지급 / 선착순 마감 임박
          </p>
        </div>

        <div className="relative min-h-0 w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_45px_rgba(5,16,30,0.45)] sm:rounded-3xl lg:h-[min(24rem,55vh)] lg:min-h-[18rem] xl:h-[28rem]">
          <img
            src="https://readdy.ai/api/search-image?query=bright%20modern%20insurance%20financial%20office%20interior%20with%20professional%20consultants%20at%20clean%20white%20desks%2C%20large%20windows%20with%20natural%20daylight%2C%20contemporary%20furniture%2C%20calm%20productive%20atmosphere%2C%20people%20working%20on%20computers%20smiling%2C%20warm%20tones&width=800&height=400&seq=hero002&orientation=landscape"
            alt=""
            className="h-48 w-full object-cover object-top sm:h-56 md:h-64 lg:h-full lg:min-h-[18rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/2 to-transparent" />
        </div>
      </div>

      <SectionDivider fillClass="text-slate-50" />
    </section>
  );
}
