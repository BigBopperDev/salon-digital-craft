import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { salon, openingHours } from "@/lib/salon";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Anfahrt – Sie & Er Haarmoden Emmelshausen" },
      {
        name: "description",
        content:
          "Sie & Er Haarmoden, Rhein-Mosel-Straße 44, 56281 Emmelshausen. Telefon 06747 6141. Terminvereinbarung nur telefonisch oder persönlich im Salon.",
      },
      { property: "og:title", content: "Kontakt & Anfahrt – Sie & Er Haarmoden" },
      {
        property: "og:description",
        content: "Adresse, Telefonnummer, Anfahrt und Kontaktformular des Salons in Emmelshausen.",
      },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function ContactForm() {
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Anfrage über die Website – ${String(data.get("name") ?? "")}`;
    const body = [
      `Name: ${String(data.get("name") ?? "")}`,
      `E-Mail: ${String(data.get("email") ?? "")}`,
      `Telefon: ${String(data.get("phone") ?? "")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${salon.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
      <h2 className="font-display text-2xl text-foreground">Kontaktformular</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Ihre Eingaben werden nicht an einen Server übertragen: Beim Absenden öffnet sich Ihr eigenes
        E-Mail-Programm mit der fertigen Nachricht.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground">E-Mail</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground">Telefon (optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-foreground">Ihre Nachricht</span>
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--primary)]"
          />
          <span>
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
            verwendet werden. Hinweise dazu in der{" "}
            <a href="/datenschutz" className="text-primary underline underline-offset-2">
              Datenschutzerklärung
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={!consent}
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Nachricht verfassen
        </button>
      </div>
    </form>
  );
}

function MapCard() {
  const [showMap, setShowMap] = useState(false);
  const bbox = "7.5460,50.1465,7.5580,50.1545";
  const marker = "50.1505,7.5520";

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="p-6">
        <h2 className="font-display text-2xl text-foreground">Anfahrt</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die Karte wird von OpenStreetMap geladen und erst nach Ihrem Klick eingebunden. Vorher
          verlässt keine Verbindung Ihren Browser.
        </p>
      </div>

      {showMap ? (
        <iframe
          title="Karte: Standort Sie & Er Haarmoden in Emmelshausen"
          className="h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`}
        />
      ) : (
        <div className="mx-6 mb-6 flex h-52 flex-col items-center justify-center gap-3 rounded-md bg-secondary px-6 text-center">
          <p className="text-sm text-secondary-foreground">
            {salon.street}, {salon.zip} {salon.city}
          </p>
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Karte laden (OpenStreetMap)
          </button>
          <a
            href={salon.osm}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-muted-foreground underline underline-offset-2"
          >
            Alternativ bei OpenStreetMap öffnen
          </a>
        </div>
      )}
    </div>
  );
}

function KontaktPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">Wir sind für Sie da</p>
      <h1 className="mt-3 text-4xl text-foreground">Kontakt</h1>

      <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
        <p className="font-medium text-foreground">
          Bitte beachten Sie: Über dieses Kontaktformular ist keine Terminvereinbarung möglich.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Terminvereinbarungen sind nur telefonisch unter{" "}
          <a href={`tel:${salon.phoneLink}`} className="text-primary underline underline-offset-2">
            {salon.phoneDisplay}
          </a>{" "}
          oder persönlich vor Ort im Friseursalon möglich.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-2xl text-foreground">{salon.name}</h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              {salon.street}
              <br />
              {salon.zip} {salon.city}
              <br />
              <br />
              Telefon:{" "}
              <a href={`tel:${salon.phoneLink}`} className="text-primary hover:underline">
                {salon.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${salon.email}`} className="text-primary hover:underline">
                {salon.email}
              </a>
            </address>
          </div>
          <MapCard />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
