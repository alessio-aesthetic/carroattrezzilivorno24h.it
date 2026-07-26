import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { services, site, zones } from '@/data/site'

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) return {}
  return {
    title: { absolute: zone.title },
    description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli con assistenza chiara e destinazione concordata.`,
    alternates: { canonical: `/zone/${zone.slug}/` },
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()

  return (
    <main className="bg-white">
      <section className="bg-[#F4F5F8] py-16">
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1E6C83]">
                copertura locale · Livorno
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950">
                {zone.title}
              </h1>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Il servizio di <strong>carroattrezzi a {zone.name}</strong> è
                  pensato per chi ha un mezzo fermo e vuole una gestione
                  semplice: chiamata chiara, destinazione concordata e recupero
                  organizzato con attenzione.
                </p>
                <p>
                  Interveniamo per auto in panne, incidenti, moto da caricare,
                  furgoni leggeri e trasporti verso officine o carrozzerie della
                  zona di Livorno. Anche quando il veicolo si trova in un
                  parcheggio privato, in una strada secondaria o vicino a
                  un’area produttiva, valutiamo gli accessi prima di muoverci.
                </p>
              <p>
                A {zone.name} la rapidità conta, ma conta anche il modo in cui
                  viene eseguito il servizio. Ti aiutiamo a comunicare le
                  informazioni giuste e a decidere dove portare il mezzo senza
                pressioni inutili.
              </p>
              <p>
                La zona può cambiare completamente il modo in cui si organizza
                un recupero. Un veicolo fermo in una via stretta richiede spazi
                e manovre diversi rispetto a un mezzo lasciato in un parcheggio
                ampio, lungo una strada provinciale o vicino a un’attività
                commerciale. Per questo chiediamo riferimenti visibili,
                direzione di marcia, accessi e qualsiasi elemento che possa
                aiutare a raggiungere il punto senza perdite di tempo.
              </p>
              <p>
                Il servizio di soccorso stradale a {zone.name} comprende il
                recupero di auto che non ripartono, il traino dopo un incidente,
                il trasporto di moto e scooter e l’assistenza per furgoni leggeri.
                Prima dell’intervento puoi indicare la destinazione preferita e
                ricevere indicazioni sui passaggi successivi. Una richiesta
                completa rende più semplice preparare il mezzo, proteggere il
                veicolo e gestire l’arrivo in modo ordinato.
              </p>
              <p>
                La conoscenza del contesto locale aiuta soprattutto quando la
                strada è trafficata, l’accesso è poco visibile oppure il punto
                indicato non coincide con un numero civico preciso. Per questo
                puoi comunicare un incrocio, un’attività vicina, un distributore
                o un riferimento riconoscibile. Se ti trovi vicino al porto,
                alla costa, a una zona produttiva o lungo un collegamento
                provinciale, anche la direzione di marcia è un’informazione
                preziosa.
              </p>
              <p>
                Ogni recupero viene valutato anche in base al tipo di mezzo. Un
                veicolo con ruote bloccate, una moto caduta, un furgone carico o
                un’auto che ha subito un urto non possono essere trattati nello
                stesso modo. Descrivere con sincerità il problema permette di
                preparare l’attrezzatura adeguata e di ridurre il rischio di
                manovre improvvisate una volta arrivati sul posto.
              </p>
              <p>
                Se il mezzo è fermo in un parcheggio privato, in un cortile o
                in una strada secondaria, indica la larghezza dell’ingresso e
                gli ostacoli che potrebbero impedire la manovra. Se invece sei
                in carreggiata, la priorità è mettere in sicurezza le persone,
                segnalare la presenza del veicolo e comunicare con precisione
                la direzione. Queste indicazioni aiutano a rendere il lavoro
                più rapido e più ordinato.
              </p>
              <p>
                Il servizio a {zone.name} può concludersi presso un’officina,
                una carrozzeria, un deposito, la tua abitazione o un altro
                indirizzo concordato. Se non hai ancora una destinazione,
                comunicalo durante la chiamata: prima di partire è sempre utile
                chiarire il percorso e capire quale soluzione sia più pratica
                per il veicolo e per chi lo sta aspettando.
              </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`tel:${site.tel}`}
                  className="rounded-xl bg-[#B8F34A] px-6 py-3 text-center text-sm font-black text-[#101A33]"
                >
                  Chiama {site.phone}
                </Link>
              </div>
            </div>
            <img
              src={`/images/zones/${zone.slug}.jpg`}
              alt={`Carroattrezzi a ${zone.name} in zona locale`}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1E6C83]">
                come lavoriamo
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-slate-950">
                Recupero chiaro, anche fuori dal centro città.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Se il mezzo è fermo in un punto poco visibile, vicino a una
                curva, in una zona industriale o in una strada di campagna, la
                posizione precisa è fondamentale. Ti guidiamo nella raccolta dei
                dati utili per evitare passaggi confusi.
              </p>
              <p>
                Poi concordiamo la destinazione: officina, carrozzeria,
                abitazione, deposito o altra sede. Questo rende l’intervento più
                ordinato e ti permette di sapere già dove finirà il veicolo.
              </p>
            </div>
          </div>

          <h2 className="mt-16 font-display text-3xl font-bold text-slate-950">
            Servizi disponibili a {zone.name}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}/`}
                className="rounded-2xl border border-slate-200 bg-[#F5F8FC] px-5 py-4 font-semibold text-slate-800 transition hover:border-[#1E6C83]/40 hover:bg-white hover:text-[#1E6C83]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}






