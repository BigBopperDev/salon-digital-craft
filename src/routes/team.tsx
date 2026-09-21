import { createFileRoute } from "@tanstack/react-router";

import { team } from "@/lib/salon";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Das Team – Sie & Er Haarmoden Emmelshausen" },
      {
        name: "description",
        content:
          "Das Team von Sie & Er Haarmoden in Emmelshausen besteht ausschließlich aus fachlich qualifizierten Mitarbeiterinnen – von der Colorspezialistin bis zur Friseurmeisterin.",
      },
      { property: "og:title", content: "Das Team – Sie & Er Haarmoden" },
      {
        property: "og:description",
        content:
          "Fachlich qualifizierte Friseurinnen, die kompetent und freundlich für Sie im Einsatz sind.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function initials(name: string) {
  return name
    .replace(/^Frau\s+/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function TeamPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">Sie &amp; Er Haarmoden</p>
      <h1 className="mt-3 text-4xl text-foreground">Das Team</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Das Team besteht ausschließlich aus fachlich qualifizierten Mitarbeitern, die kompetent und
        freundlich für Sie im Einsatz sind.
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <li
            key={member.name}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg text-secondary-foreground">
              {initials(member.name)}
            </span>
            <span>
              <span className="block font-medium text-foreground">{member.name}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{member.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
