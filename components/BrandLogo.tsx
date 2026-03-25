import Image from 'next/image';

type BrandLogoProps = {
  variant: 'hero' | 'section' | 'cta' | 'footer';
  className?: string;
  priority?: boolean;
};

/** 네이비 등 어두운 배경 위 프리미엄 화이트 카드 — 그림자·은은한 글로우·호버 */
const cardBase =
  'inline-flex flex-col items-center justify-center bg-[#FFFFFF] rounded-2xl ' +
  'shadow-[0_8px_24px_rgba(0,0,0,0.15),0_0_20px_rgba(255,255,255,0.15)] ' +
  'transition-[transform,box-shadow] duration-300 ease-out ' +
  'hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2),0_0_28px_rgba(255,255,255,0.2)]';

const shell: Record<BrandLogoProps['variant'], string> = {
  hero: `${cardBase} px-4 py-3 md:px-5 md:py-4 min-w-[168px] max-w-[260px]`,
  section: `${cardBase} px-4 py-3 md:px-5 md:py-4 min-w-[152px] max-w-[220px]`,
  cta: `${cardBase} px-4 py-3 md:px-5 md:py-5 min-w-[168px] max-w-[260px]`,
  footer: `${cardBase} px-3 py-2.5 md:px-4 md:py-3 min-w-[120px] max-w-[180px] hover:scale-[1.02]`,
};

/** 로고는 카드 내부에서 가로 기준 ~76% — 여백이 살아 보이도록 */
const inner: Record<BrandLogoProps['variant'], string> = {
  hero: 'flex w-full items-center justify-center',
  section: 'flex w-full items-center justify-center',
  cta: 'flex w-full items-center justify-center',
  footer: 'flex w-full items-center justify-center',
};

const imgClass: Record<BrandLogoProps['variant'], string> = {
  hero: 'h-auto w-[76%] max-w-[200px] min-w-0 object-contain object-center md:max-w-[210px]',
  section: 'h-auto w-[76%] max-w-[170px] min-w-0 object-contain object-center md:max-w-[180px]',
  cta: 'h-auto w-[76%] max-w-[200px] min-w-0 object-contain object-center md:max-w-[220px]',
  footer: 'h-auto w-[76%] max-w-[120px] min-w-0 object-contain object-center md:max-w-[132px]',
};

export default function BrandLogo({ variant, className = '', priority = false }: BrandLogoProps) {
  return (
    <div className={`${shell[variant]} ${className}`}>
      <div className={inner[variant]}>
        <Image
          src="/logo.png"
          alt=""
          width={220}
          height={56}
          priority={priority}
          className={imgClass[variant]}
        />
      </div>
    </div>
  );
}
