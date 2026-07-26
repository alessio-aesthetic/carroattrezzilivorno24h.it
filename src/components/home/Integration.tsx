import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const items = [
  ['Posizione precisa', 'Dove intervenire', '/images/services/soccorso-in-autostrada.webp'],
  ['Tipo di veicolo', 'Auto, moto e furgoni', '/images/services/carroattrezzi-moto.webp'],
  ['Problema riscontrato', 'Guasto o incidente', '/images/services/recupero-auto-incidentata.webp'],
  ['Destinazione', 'Officina o carrozzeria', '/images/services/trasporto-veicoli.jpg'],
  ['Intervento notturno', 'Disponibilità 24 ore', '/images/services/assistenza-batteria-scarica.webp'],
  ['Provincia di Livorno', 'Zone vicine incluse', '/images/zones/collesalvetti.webp'],
];

export default function Integration() { return <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]"><div className="main-container"><div className="border-stroke-1 dark:border-stroke-5 dark:bg-background-5 bg-background-2 relative overflow-hidden rounded-[25px] border py-[50px] sm:py-[100px]"><div className="mb-[50px] space-y-5 text-center sm:mb-[70px]"><RevealAnimation delay={0.1}><span className="badge badge-green">Come prepariamo l’intervento</span></RevealAnimation><RevealAnimation delay={0.2}><h2>Le informazioni giuste, senza ripeterle più volte</h2></RevealAnimation><RevealAnimation delay={0.3}><p className="mx-auto max-w-[510px]">Una richiesta completa aiuta a scegliere il mezzo adatto e a ridurre le attese quando il veicolo è fermo.</p></RevealAnimation></div><div className="mx-auto grid max-w-[852px] grid-cols-12 gap-y-6 px-6 md:gap-6 lg:gap-8 lg:px-0">{items.map(([title, category, image], index) => <RevealAnimation key={title} delay={0.4 + index * 0.1}><div className="group col-span-12 md:col-span-6"><Link href="/contatti"><div className="dark:bg-background-8 group-hover:shadow-1 flex items-center justify-between gap-4 rounded-xl bg-white p-4 transition-all duration-500 sm:rounded-2xl sm:p-8"><div className="flex items-center gap-4"><Image src={image} alt={title} width={56} height={56} className="size-14 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" /><div><p className="text-heading-6 text-secondary dark:text-accent font-normal">{title}</p><p>{category}</p></div></div><span className="flex size-10 items-center justify-center rounded-full bg-background-4 text-xl transition-all group-hover:bg-secondary group-hover:text-white sm:size-14">→</span></div></Link></div></RevealAnimation>)}</div></div></div></section>; }
