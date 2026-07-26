import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const reviews = [
  { quote: 'Sono rimasto fermo in una zona industriale: mi hanno chiesto solo le informazioni necessarie e indicato subito come procedere.', name: 'Luca R.', position: 'Livorno', avatar: '/images/zones/stagno.webp' },
  { quote: 'Dopo l’incidente avevo bisogno di portare l’auto in carrozzeria. Recupero ordinato, comunicazioni chiare e nessuna sorpresa.', name: 'Francesca M.', position: 'Collesalvetti', avatar: '/images/zones/collesalvetti.webp' },
  { quote: 'La moto non partiva più. Il mezzo è arrivato preparato e il trasporto è stato gestito con grande attenzione.', name: 'Davide C.', position: 'Cecina', avatar: '/images/zones/cecina.webp' },
];

export default function Testimonial() { return <section className="pt-20 pb-14 lg:pt-[150px] lg:pb-[88px]"><div className="mx-auto max-w-[1440px] px-4 md:px-[67px]"><div className="mb-14 text-center lg:mb-[70px]"><RevealAnimation delay={0.1}><span className="badge badge-green-v2 mb-5">Esperienze reali</span></RevealAnimation><RevealAnimation delay={0.2}><h2>Quando serve aiuto, conta la chiarezza</h2></RevealAnimation></div></div><RevealAnimation delay={0.3}><div className="relative"><Marquee autoFill pauseOnHover speed={30}><div className="flex gap-8 py-4">{reviews.map((review, index) => <article key={review.name} className={`min-h-[245px] min-w-[340px] max-w-[340px] rounded-[20px] border border-stroke-1 bg-background-2 p-8 sm:min-w-[358px] sm:max-w-[358px] ${index === 0 ? 'ml-8' : ''}`}><p className="line-clamp-4 max-w-[297px]">“{review.quote}”</p><div className="my-7 border-t border-stroke-4" /><figure className="flex items-center gap-3"><Image src={review.avatar} alt="Intervento carroattrezzi" width={44} height={44} className="size-11 rounded-full object-cover" /><figcaption><h3 className="text-tagline-1 font-medium">{review.name}</h3><p className="text-tagline-2">{review.position}</p></figcaption></figure></article>)}</div></Marquee></div></RevealAnimation></section>; }
