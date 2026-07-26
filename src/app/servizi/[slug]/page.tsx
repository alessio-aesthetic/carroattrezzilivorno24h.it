import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site } from '@/data/site'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) return {}
  const title = `${service.title} a Livorno`
  return {
    title: { absolute: title },
    description: `${title}: assistenza rapida, recupero ordinato del veicolo e destinazione concordata prima dell’intervento.`,
    alternates: { canonical: `/servizi/${service.slug}/` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="bg-white">
      <section className="bg-[#F4F5F8] py-16">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
            <img
              src={`/images/services/${service.slug}.jpg`}
              alt={`${service.title} a Livorno con carroattrezzi professionale`}
              className="h-[360px] w-full object-cover lg:h-[460px]"
            />
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.45fr] lg:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1E6C83]">
                  intervento verificato · Livorno
                </p>
                <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
                  {service.title} a Livorno
                </h1>
                <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
                  <p>
                    <strong>{service.text}</strong>
                  </p>
                  <p>{service.detail}</p>
                  <p>
                    La cosa più importante è non improvvisare. Se il veicolo è
                    fermo, danneggiato o in una posizione scomoda, una
                    telefonata precisa permette di capire come procedere, dove
                    portare il mezzo e quali attenzioni servono durante il
                    recupero.
                  </p>
                  <p>
                    A Livorno ogni intervento può presentare condizioni diverse:
                    un’auto può essere ferma sul lungomare, in una strada del
                    centro, vicino al porto, in una zona industriale o lungo un
                    collegamento provinciale. Per questo chiediamo sempre se il
                    mezzo è accessibile, se le ruote girano, se ci sono danni
                    visibili e se il veicolo trasporta persone o oggetti da
                    proteggere. Sono dettagli semplici, ma permettono di
                    scegliere il modo più prudente per caricare e trasportare
                    l’auto.
                  </p>
                  <p>
                    Anche la destinazione viene definita con attenzione. Puoi
                    indicare un’officina di fiducia, una carrozzeria, un deposito
                    o un indirizzo privato. Se non hai ancora deciso, ti
                    aiutiamo a valutare il passaggio più pratico in base al
                    problema riscontrato. L’obiettivo è evitare spostamenti
                    inutili e accompagnarti fino a una soluzione concreta, con
                    una comunicazione chiara prima dell’uscita del mezzo.
                  </p>
                  <p>
                    La preparazione cambia in base al servizio richiesto. Un
                    traino semplice può richiedere un accesso libero e un punto
                    di aggancio praticabile; un veicolo incidentato può avere
                    ruote bloccate, parti sporgenti o danni che rendono
                    necessario lavorare con maggiore cautela. Se si tratta di
                    una moto, di uno scooter o di un furgone leggero, è utile
                    comunicare dimensioni e condizioni per evitare di arrivare
                    con un mezzo non adeguato.
                  </p>
                  <p>
                    Anche l’ambiente intorno al veicolo fa la differenza. Un
                    recupero sul lungomare, in una via stretta del centro, in
                    prossimità del porto o in una zona industriale presenta
                    spazi di manovra e flussi di traffico diversi. Descrivere
                    i riferimenti visibili, la direzione di marcia e l’accesso
                    più semplice permette di lavorare con maggiore ordine e di
                    ridurre le attese legate a indicazioni incomplete.
                  </p>
                  <p>
                    Se il problema sembra limitato a una batteria scarica o a
                    una gomma, non è sempre prudente tentare di ripartire. Una
                    ruota danneggiata, un rumore insolito, una spia importante o
                    una perdita possono trasformare un guasto in un danno più
                    serio. Prima di spostare il mezzo, racconta ciò che hai
                    notato: possiamo aiutarti a capire se serve assistenza sul
                    posto oppure un trasporto verso un’officina.
                  </p>
                  <p>
                    Il nostro obiettivo è rendere il servizio comprensibile
                    dall’inizio alla fine. Ti aiutiamo a raccogliere i dati
                    essenziali, a indicare la destinazione e a preparare le
                    persone presenti al momento dell’arrivo. In questo modo il
                    recupero resta concentrato sul problema reale e il veicolo
                    viene gestito con attenzione, senza aggiungere passaggi
                    evitabili a una situazione già delicata.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl bg-[#101A33] p-6 text-white">
                <p className="font-display text-2xl font-bold">
                  Chiamata chiara, intervento ordinato.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-200">
                  Comunica posizione, tipo di mezzo e destinazione. Ti aiutiamo
                  a gestire il passaggio successivo con semplicità.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`tel:${site.tel}`}
                    className="rounded-xl bg-[#B8F34A] px-6 py-3 text-center text-sm font-black text-[#101A33]"
                  >
                    Chiama {site.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                'Valutazione prima di muoversi',
                'Capire accessi, spazio di manovra e condizioni del mezzo permette di preparare un recupero più preciso e meno stressante.',
              ],
              [
                'Trasporto verso la destinazione scelta',
                'Il veicolo può essere portato in officina, carrozzeria, deposito o presso un indirizzo concordato prima dell’intervento.',
              ],
              [
                'Comunicazione senza confusione',
                'Ti diciamo quali dati servono e cosa fare mentre aspetti, con un approccio pratico e comprensibile.',
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-[#F5F8FC] p-6"
              >
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] bg-[#101A33] p-8 text-white">
            <h2 className="font-display text-3xl font-bold">
              Quando è meglio chiamare subito
            </h2>
            <div className="mt-5 grid gap-5 text-sm leading-6 text-slate-200 md:grid-cols-2">
              <p>
                Se il mezzo non parte, perde liquidi, ha spie accese o si trova
                in un punto trafficato, è più prudente chiedere assistenza
                prima di muoverlo.
              </p>
              <p>
                Anche un guasto apparentemente piccolo può peggiorare se
                continui a guidare. Una valutazione rapida aiuta a scegliere tra
                supporto sul posto, traino o trasporto.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}






