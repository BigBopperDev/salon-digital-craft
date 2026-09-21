import { createFileRoute } from "@tanstack/react-router";

import { salon } from "@/lib/salon";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Sie & Er Haarmoden Emmelshausen" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Sie & Er Haarmoden: keine Cookies, keine Tracker, keine externen Schriften – Karte nur nach ausdrücklichem Klick.",
      },
      { property: "og:title", content: "Datenschutzerklärung – Sie & Er Haarmoden" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
      },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl text-foreground">Datenschutzerklärung</h1>

      <div className="prose-legal mt-8">
        <h2>Verantwortliche Stelle</h2>
        <p>
          Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          {salon.name}, {salon.owner}
          <br />
          {salon.street}, {salon.zip} {salon.city}
          <br />
          Telefon: <a href={`tel:${salon.phoneLink}`}>{salon.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${salon.email}`}>{salon.email}</a>
        </p>

        <h2>Überblick: Was diese Website nicht tut</h2>
        <ul>
          <li>Keine Cookies und keine vergleichbaren Speichertechniken.</li>
          <li>Kein Tracking, keine Statistik- oder Werbedienste.</li>
          <li>Keine externen Schriftarten (z. B. Google Fonts oder Adobe Typekit).</li>
          <li>Keine Social-Media-Plugins und keine eingebetteten Videos.</li>
          <li>Karten werden ausschließlich nach Ihrem ausdrücklichen Klick geladen.</li>
        </ul>

        <h2>Erfassung allgemeiner Informationen (Server-Logfiles)</h2>
        <p>
          Beim Aufruf dieser Website werden technisch notwendige Informationen verarbeitet, etwa
          Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die IP-Adresse. Diese
          Verarbeitung ist zwingend erforderlich, um die Seite auszuliefern und den sicheren Betrieb
          zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an einem technisch fehlerfreien und sicheren Angebot). Die Daten werden nicht zur
          Profilbildung genutzt und nach kurzer Zeit gelöscht.
        </p>

        <h2>Hosting</h2>
        <p>
          Die Website wird bei einem Dienstleister gehostet, der die Daten ausschließlich
          weisungsgebunden in unserem Auftrag verarbeitet (Auftragsverarbeitung nach Art. 28 DSGVO).
        </p>

        <h2>Verschlüsselung</h2>
        <p>
          Zum Schutz der Übertragung verwenden wir eine dem Stand der Technik entsprechende
          Verschlüsselung (TLS/HTTPS).
        </p>

        <h2>Kontaktaufnahme per E-Mail, Telefon und Kontaktformular</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur
          Bearbeitung der Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Das Kontaktformular auf dieser Website überträgt keine Daten an uns oder an Dritte:
          Ihre Eingaben bleiben in Ihrem Browser und werden beim Absenden lediglich in eine
          E-Mail Ihres eigenen E-Mail-Programms übernommen. Erst wenn Sie diese E-Mail selbst
          versenden, erhalten wir Ihre Angaben. Anfragen löschen wir, sobald sie erledigt sind und
          keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>

        <h2>Kartendarstellung (OpenStreetMap)</h2>
        <p>
          Auf der Kontaktseite können Sie eine Karte von OpenStreetMap laden. Die Karte wird nicht
          automatisch eingebunden. Erst wenn Sie auf die Schaltfläche „Karte laden“ klicken, baut
          Ihr Browser eine Verbindung zu Servern der OpenStreetMap Foundation auf; dabei wird Ihre
          IP-Adresse übertragen. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
          DSGVO, die Sie jederzeit für die Zukunft widerrufen können, indem Sie die Seite ohne
          erneutes Laden der Karte aufrufen. Informationen der OpenStreetMap Foundation:{" "}
          <a
            href="https://osmfoundation.org/wiki/Privacy_Policy"
            target="_blank"
            rel="noreferrer noopener"
          >
            osmfoundation.org/wiki/Privacy_Policy
          </a>
        </p>

        <h2>Löschung bzw. Sperrung der Daten</h2>
        <p>
          Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern
          Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der genannten
          Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen. Danach
          werden die Daten routinemäßig gelöscht oder gesperrt.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
          (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
          das Recht, einer Verarbeitung zu widersprechen (Art. 21). Eine erteilte Einwilligung
          können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dazu bitte an
          die oben genannte verantwortliche Stelle.
        </p>

        <h2>Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
          ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz,
          Hintere Bleiche 34, 55116 Mainz.
        </p>

        <h2>Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen unserer Leistungen oder der
          Rechtslage dies erfordern. Für Ihren erneuten Besuch gilt dann die jeweils aktuelle
          Fassung.
        </p>
      </div>
    </section>
  );
}
