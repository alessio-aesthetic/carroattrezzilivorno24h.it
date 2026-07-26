'use client';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { site, services, zones } from '@/data/site';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

export default function Navbar() {
  const { isScrolled } = useNavbarScroll(150);
  return <header className={cn('fixed top-5 left-1/2 z-50 w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 sm:max-w-[650px] lg:max-w-[1140px]', isScrolled && 'top-2')}><RevealAnimation direction="up" offset={100} delay={0.1} instant><div className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 mx-auto flex items-center justify-between rounded-full border px-3 py-2.5"><Link href="/" className="flex items-center"><Image src="/images/logo-livorno.png" alt={site.name} width={170} height={54} className="h-10 w-auto object-contain" priority /></Link><nav className="hidden items-center gap-1 lg:flex"><Link href="#servizi" className="text-tagline-1 text-secondary/70 hover:text-secondary rounded-full px-4 py-2 transition-colors">Servizi</Link><Link href="#zone" className="text-tagline-1 text-secondary/70 hover:text-secondary rounded-full px-4 py-2 transition-colors">Zone servite</Link><Link href="/contatti" className="text-tagline-1 text-secondary/70 hover:text-secondary rounded-full px-4 py-2 transition-colors">Contatti</Link></nav><Link href={`tel:${site.tel}`} className="btn btn-md btn-primary whitespace-nowrap">Chiama 24H</Link></div></RevealAnimation></header>;
}
