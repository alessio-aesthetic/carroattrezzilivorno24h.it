import { ProjectAchievementCheckIcon, ProjectSatisfiedClientsIcon, ProjectTeamMembersIcon } from '@/icons';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

export default function SelectUs() {
  const items = [
    { icon: <ProjectAchievementCheckIcon />, color: 'bg-ns-yellow', number: 24, suffix: 'H', title: 'Disponibilità', text: 'Richieste gestite anche la sera, di notte e nei giorni festivi.' },
    { icon: <ProjectTeamMembersIcon />, color: 'bg-ns-cyan', number: 1, suffix: ' contatto', title: 'Comunicazione chiara', text: 'Raccogliamo i dati essenziali per evitare passaggi inutili.' },
    { icon: <ProjectSatisfiedClientsIcon />, color: 'bg-ns-red', number: 7, suffix: ' servizi', title: 'Per ogni veicolo', text: 'Auto, moto, furgoni e recuperi dopo un incidente.' },
  ];
  return <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:py-[100px]"><div className="main-container">
    <div className="mb-10 space-y-5 text-center md:mb-[70px]"><RevealAnimation delay={0.1}><span className="badge badge-green">Perché sceglierci</span></RevealAnimation><RevealAnimation delay={0.2}><h2>Un aiuto concreto quando hai bisogno di ripartire</h2></RevealAnimation><RevealAnimation delay={0.3}><p className="mx-auto max-w-[744px]">Ogni intervento nasce dall’ascolto della situazione reale: posizione, veicolo, problema e destinazione. Così il soccorso stradale a Livorno viene organizzato con maggiore precisione.</p></RevealAnimation></div>
    <div className="flex flex-col rounded-[20px] bg-secondary px-6 py-6 md:flex-row md:px-0">{items.map((item, index) => <RevealAnimation key={item.title} delay={0.4 + index * 0.1}><div className="flex-1 border-b border-accent/20 py-6 text-center last:border-0 md:border-r md:border-b-0 md:last:border-0"><div className={`${item.color} mx-auto flex h-[52px] w-20 items-center justify-center rounded-full`}>{item.icon}</div><div className="mt-6 space-y-2"><h3 className="flex items-center justify-center text-heading-6 font-normal text-white"><NumberAnimation number={item.number} speed={900} interval={100} rooms={2} heightSpaceRatio={2.4}>{item.number}</NumberAnimation>{item.suffix}</h3><p className="mx-auto max-w-[274px] text-accent/70"><strong className="text-white">{item.title}.</strong> {item.text}</p></div></div></RevealAnimation>)}</div>
  </div></section>;
}
