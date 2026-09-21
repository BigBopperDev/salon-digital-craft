import { createFileRoute, Link } from "@tanstack/react-router";

import salonPhoto from "@/assets/salon-aussenansicht.jpg";
import { salon, team } from "@/lib/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sie & Er Haarmoden – Friseur in Emmelshausen" },
      {
        name: "description",
        content:
          "Herzlich willkommen bei Sie & Er Haarmoden, Ihrem Stadtfriseur im Zentrum von Emmelshausen. Rhein-Mosel-Straße 44, Terminvereinbarung telefonisch unter 06747 6141.",
      },
      { property: "og:title", content: "Sie & Er Haarmoden – Friseur in Emmelshausen" },
      {
        property: "og:description",
        content:
          "Ihr Stadtfriseur im Zentrum von Emmelshausen. Qualifiziertes Team, persönliche Beratung, Termine telefonisch unter 06747 6141.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:pt-20">
        <div>
          <p className="eyebrow">{salon.claim}</p>
          <h1 className="mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Herzlich willkommen bei {salon.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Schön, Sie zu sehen. Hier finden Sie das Team von Sie &amp; Er Haarmoden. Schauen Sie
            doch ruhig einmal bei uns herein und lernen Sie uns kennen. Wir freuen uns auf Ihr
            Interesse.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${salon.phoneLink}`}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Termin: {salon.phoneDisplay}
            </a>
            <Link
              to="/team"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Unser Team
            </Link>
          </div>
        </div>

        <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <img
            src={salonPhoto}
            alt="Außenansicht des Salons Sie & Er Haarmoden in der Rhein-Mosel-Straße 44 in Emmelshausen"
            className="h-full w-full object-cover"
            width={448}
            height={298}
          />
          <figcaption className="px-4 py-3 text-xs text-muted-foreground">
            Unser Salon in der {salon.street}, {salon.zip} {salon.city}
          </figcaption>
        </figure>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="eyebrow">Das Team</p>
          <h2 className="mt-3 text-3xl text-foreground">
            Fachlich qualifiziert, kompetent und freundlich
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="rounded-lg border border-border bg-card p-5">
                <p className="font-medium text-foreground">{member.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Anrufen</p>
            <a
              href={`tel:${salon.phoneLink}`}
              className="mt-2 block text-lg text-foreground hover:text-primary"
            >
              {salon.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Termine nur telefonisch oder persönlich im Salon.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">E-Mail</p>
            <a
              href={`mailto:${salon.email}`}
              className="mt-2 block break-all text-base text-foreground hover:text-primary"
            >
              {salon.email}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Für Fragen rund um den Salon.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Anfahrt</p>
            <p className="mt-2 text-base text-foreground">{salon.street}</p>
            <p className="text-base text-foreground">
              {salon.zip} {salon.city}
            </p>
            <Link to="/kontakt" className="mt-2 inline-block text-sm text-primary hover:underline">
              Karte &amp; Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
