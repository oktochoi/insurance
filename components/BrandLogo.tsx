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
  hero: `${cardBase} min-w-[112px] max-w-[188px] px-2.5 py-1.5 md:min-w-[120px] md:max-w-[200px] md:px-3 md:py-2`,
  section: `${cardBase} min-w-[104px] max-w-[168px] px-2.5 py-2 md:px-3 md:py-2.5`,
  cta: `${cardBase} min-w-[112px] max-w-[188px] px-2.5 py-2 md:min-w-[120px] md:max-w-[200px] md:px-3 md:py-3`,
  footer: `${cardBase} min-w-[80px] max-w-[120px] px-2 py-1.5 md:min-w-[88px] md:max-w-[132px] md:px-2.5 md:py-2 hover:scale-[1.02]`,
};

/** 로고는 카드 내부에서 가로 기준 ~76% — 여백이 살아 보이도록 */
const inner: Record<BrandLogoProps['variant'], string> = {
  hero: 'flex w-full items-center justify-center',
  section: 'flex w-full items-center justify-center',
  cta: 'flex w-full items-center justify-center',
  footer: 'flex w-full items-center justify-center',
};

const imgClass: Record<BrandLogoProps['variant'], string> = {
  hero: 'h-auto w-[72%] max-w-[100px] min-w-0 object-contain object-center md:max-w-[100px]',
  section: 'h-auto w-[72%] max-w-[104px] min-w-0 object-contain object-center md:max-w-[112px]',
  cta: 'h-auto w-[72%] max-w-[120px] min-w-0 object-contain object-center md:max-w-[136px]',
  footer: 'h-auto w-[72%] max-w-[76px] min-w-0 object-contain object-center md:max-w-[84px]',
};

export default function BrandLogo({ variant, className = '', priority = false }: BrandLogoProps) {
  return (
    <div className={`${shell[variant]} ${className}`}>
      <div className={inner[variant]}>
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={20}
          priority={priority}
          className={imgClass[variant]}
        />
      </div>
    </div>
  );
}
