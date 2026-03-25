type SectionDividerProps = {
  /** 다음 섹션 배경색 (Tailwind fill) */
  fillClass?: string;
  flip?: boolean;
};

export default function SectionDivider({
  fillClass = 'text-white',
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className={`relative -mt-px h-10 w-full overflow-hidden md:h-14 ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <svg
        className={`absolute bottom-0 h-full w-full ${fillClass}`}
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,32L60,28C120,24,240,16,360,18.7C480,21,600,35,720,37.3C840,40,960,32,1080,26.7C1200,21,1320,19,1380,18L1440,17L1440,56L0,56Z" />
      </svg>
    </div>
  );
}
