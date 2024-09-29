# Webkom: Cloudflare Workers Workshop

Dette er en workshop for å gi en introduksjon til Cloudflare Workers.

Dette repoet er laget med `pnpm create cloudflare` (v2.29.1). Eneste endringene som er gjort er at testene byttet ut med testene for oppgavene.

## Hva trenger du?

På forhånd burde du sørge for at du har følgende:

- Node.js
- PNPM
- En Cloudflare konto

## Oppsett

1. Klon dette repoet
2. Naviger til mappen
3. Kjør `pnpm install`

## Introdusksjon

Cloudflare Workers er en serverless plattform som lar deg kjøre JavaScript på Cloudflares sitt globale nettverk. Dette betyr at du kan kjøre kode nærmere brukeren, og dermed redusere responstiden.

I tillegg tilbyr Cloudflare en rekke med verktøy du kan bruke med dine Workers, som:

- KV: En key-value database
- D1: En serverless database (bygget på SQLite)
- R2: En serverless bucket (for bilder, videoer, etc.)
- Queues: Køer for asynkron kommunikasjon
- ... og mye mer

Dette gjør det veldig enkelt å bygge serverless applikasjoner med Cloudflare Workers med førsteklasses støtte for de fleste behov.

## Oppgaver

### Oppgave 1: Hello World

I denne oppgaven skal du lage en Worker som svarer med `Hello, Webkom!` på alle forespørsler.

Du starter serveren med `pnpm dev` og kan teste den ved å gå til `http://localhost:8787`.

Du kan fortsette når `Oppgave 1` passerer.

### Oppgave 2: Hono

Et objekt med en `fetch`-metode er en ganske primitiv måte å håndtere HTTP-forespørsler på. I denne oppgaven skal du laste ned et bibliotek som heter `hono` som gir deg en enklere måte å håndtere HTTP-forespørsler på.

Du skal sette opp følgende ruter:

- En `GET`-forepørsel til `http://localhost:8787` skal returnere `Hello, Webkom!`.
- En `GET`-forespørsel til `http://localhost:8787/ping` skal returnere `Pong!`.

Du kan fortsette når `Oppgave 2` passerer.

### Oppgave 3: KV

I denne oppgaven skal du bruke Cloudflare Workers KV til å inkrementere en verdi hver gang en forespørsel kommer inn til `/count`.

Først må du sette opp en KV-database. Dette kan du gjøre i CLI-en ved å kjøre `wrangler kv namespace create counter`. Da vil du få et output som ser omtrent slik ut:

```
[[kv_namespaces]]
binding = "counter"
id = "<din id her>"
```

Det kan du legge til i `wrangler.toml`-filen din.

Deretter kan du kjøre `pnpm cf-typegen` for å generere TypeScript-typene for KV-databasen.

Dette gir det tilgang til `KVNamespace`-objektet som du kan bruke til å lagre og hente data fra KV-databasen.

Du kan fortsette når `Oppgave 3` passerer.

### Oppgave 4: Deploy

I denne oppgaven skal du deploye Workeren din til Cloudflare.

Kjør `pnpm run deploy` for å deploye Workeren din. Når det er gjort skal du kunne gå til URL-en som blir printet ut og se Workeren din live.

Sjekk at oppgave 3 fortsatt fungerer.
