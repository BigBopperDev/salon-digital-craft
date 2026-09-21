import { createFileRoute } from "@tanstack/react-router";

import { salon } from "@/lib/salon";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Sie & Er Haarmoden Emmelshausen" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung von Sie & Er Haarmoden, Rhein-Mosel-Straße 44, 56281 Emmelshausen.",
      },
      { property: "og:title", content: "Impressum – Sie & Er Haarmoden" },
      { property: "og:description", content: "Anbieterkennzeichnung nach § 5 DDG." },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl text-foreground">Impressum</h1>

      <div className="prose-legal mt-8">
        <h2>Verantwortlich</h2>
        <p>
          {salon.name}
          <br />
          {salon.owner}
          <br />
          {salon.street}
          <br />
          {salon.zip} {salon.city}
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={`tel:${salon.phoneLink}`}>{salon.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${salon.email}`}>{salon.email}</a>
        </p>

        <h2>Bei Problemen mit der Webseite</h2>
        <p>
          <a href={`mailto:${salon.webmaster}`}>{salon.webmaster}</a>
        </p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte und Links</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Für
          die Inhalte verlinkter externer Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </div>
    </section>
  );
}
