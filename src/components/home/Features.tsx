import Image from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  { title: 'Soccorso stradale 24 ore', description: 'Quando l’auto si ferma a Livorno, raccogliamo subito posizione e condizioni del mezzo per organizzare un intervento adeguato.', image: '/images/services/soccorso-stradale-24-ore.webp' },
  { title: 'Recupero auto incidentata', description: 'Dopo un sinistro proteggiamo il veicolo, valutiamo l’accesso e coordiniamo il trasporto verso officina, carrozzeria o deposito.', image: '/images/services/recupero-auto-incidentata.webp' },
  { title: 'Assistenza batteria scarica', description: 'Un’auto che non parte richiede una risposta chiara: verifichiamo la situazione e inviamo il mezzo più adatto.', image: '/images/services/assistenza-batteria-scarica.webp' },
];

export default function Features() {
  return <section className="bg-background-2 dark:bg-background-5 py-[60px] lg:py-[100px]">
    <div className="main-container">
      <div className="mx-auto mb-10 max-w-[700px] space-y-5 text-center md:mb-[70px]">
        <RevealAnimation delay={0.1}><span className="badge badge-green">Interventi coordinati con cura</span></RevealAnimation>
        <RevealAnimation delay={0.2}><h2>Quando il veicolo si ferma, sai già a chi rivolgerti</h2></RevealAnimation>
        <RevealAnimation delay={0.3}><p>Dal primo contatto alla destinazione finale, rendiamo più semplice chiedere un carroattrezzi a Livorno anche nei momenti più scomodi.</p></RevealAnimation>
      </div>
      <div className="grid grid-cols-12 gap-y-11 md:gap-8 lg:gap-[42px]">
        {features.map((feature, index) => <RevealAnimation key={feature.title} delay={0.3 + index * 0.1}>
          <article className="col-span-12 md:col-span-6 lg:col-span-4 space-y-3">
            <div className="border-stroke-4 bg-background-1 dark:bg-background-6 dark:border-stroke-6 rounded-[20px] border p-2.5"><Image src={feature.image} alt={feature.title} width={900} height={600} className="aspect-[4/3] w-full rounded-[14px] object-cover" /></div>
            <div className="space-y-2 pl-2.5"><h3 className="text-heading-5 font-normal">{feature.title}</h3><p>{feature.description}</p></div>
          </article>
        </RevealAnimation>)}
      </div>
      <div className="mt-12 text-center"><RevealAnimation delay={0.6}><LinkButton href="/servizi/soccorso-stradale-24-ore" className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md mx-auto w-[90%] sm:w-auto">Vedi tutti i servizi</LinkButton></RevealAnimation></div>
    </div>
  </section>;
}
