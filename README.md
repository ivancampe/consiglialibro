# 📖 Consiglialibro

Un piccolo sito che consiglia libri agli studenti della scuola secondaria di primo grado (11–13 anni). Funziona interamente nel browser: **niente server, niente registrazione, niente dati raccolti**. Puoi aprirlo con un doppio clic su `index.html` oppure pubblicarlo gratis su GitHub Pages.

> 📚 **Il catalogo qui dentro è solo un campione.** I libri di `catalogo.js` servono a far vedere com'è fatta una scheda e a provare il sito subito dopo averlo scaricato: **non è un elenco che viene tenuto aggiornato**. Il senso di Consiglialibro è che ogni insegnante ci metta *le proprie* letture, con le proprie note — quelle sono la parte che vale. Sostituisci pure tutto il contenuto di `catalogo.js` con i tuoi libri: le istruzioni sono più sotto, e non serve saper programmare.

## Come funziona

Lo studente risponde a sei domande a colpi di pulsante (classe → esperienza di lettura → formato → genere → effetto cercato → lunghezza) e riceve una o due schede libro che compaiono come **post-it attaccati con lo scotch** su un quaderno a righe, con la nota personale dell'insegnante.

L'ordine delle domande non è casuale: **prima i due filtri rigidi** (classe ed esperienza di lettura), che insieme decidono quali libri esistono davvero, **poi le domande che pesano sul punteggio**, dalla più forte alla più leggera. Il vantaggio è che le domande 3 e 4 mostrano solo opzioni che portano davvero a un libro: se in 1ª non c'è nessun saggio, il pulsante "Saggio" non compare proprio, e lo studente non finisce mai in un vicolo cieco. Classe, livello di lettura e formato (se scelto) restano filtri rigidi: non viene mai proposto un libro fuori da questi paletti; genere, effetto e lunghezza pesano invece sul punteggio con cui i libri vengono messi in classifica.

La domanda sul genere mostra solo i generi disponibili per le scelte fatte finora (con l'opzione "Qualsiasi 🤷"); se ne resta uno solo il bot la risponde d'ufficio con una nota simpatica, ma la domanda conta lo stesso nel totale, così il contatore "Domanda N di 6" non salta mai un numero. Su ogni consiglio c'è il pulsante "L'ho già letto 🙋" che, con tanto di timbro «Letto ✓», lo sostituisce col successivo in classifica.

Il catalogo completo è sempre a portata di mano: dal pulsante **📚 Catalogo** nell'header, dalla parola "Catalogo" nella nota sotto il titolo, o dal pulsante "Sfoglia tutto il catalogo" a fine quiz. La vista catalogo ha una casella di ricerca (ovunque, o solo per titolo / autore / parola chiave, ignorando maiuscole e accenti) e una barra di filtri combinabili tra loro e con la ricerca.

## I file del progetto

| File | A cosa serve |
|------|--------------|
| `index.html` | La struttura della pagina (versione completa, con Info e contatti). |
| `index_studenti.html` | **Copia per gli studenti**: identica ma senza pulsante Info, contatti e social. È la pagina da diffondere in classe. |
| `style.css` | Colori, caratteri e aspetto grafico (tema **quaderno a righe**; vedi la sezione "L'aspetto" più sotto). |
| `app.js` | La logica del sito **e i testi personalizzabili** (in cima al file). |
| `catalogo.js` | **Il catalogo dei libri**: è il file che modificherai più spesso. |
| `copertine/` | La cartella con le immagini delle copertine. |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Il marchio (libro + spunta) come icona del sito e della schermata home. |
| `icon-192.png`, `icon-512.png`, `manifest.json` | Servono per "aggiungere alla schermata home" come se fosse un'app. |
| `og-image.png` | L'immagine che compare quando condividi il link su WhatsApp, Classroom o Telegram. |

> ⚠️ **Le due pagine vanno tenute allineate**: se modifichi qualcosa in `index.html` (a parte le parti Info), riporta la stessa modifica anche in `index_studenti.html`. Catalogo, testi e grafica invece sono condivisi (`catalogo.js`, `app.js`, `style.css`): lì basta modificare una volta sola e vale per entrambe.

## ➕ Aggiungere o modificare un libro

Apri `catalogo.js` con un editor di testo (va bene anche il Blocco note, meglio ancora [Visual Studio Code](https://code.visualstudio.com/), gratuito).

1. Copia un blocco libro esistente, da `{` fino a `},` compresa la virgola.
2. Incollalo prima della riga finale `];`.
3. Modifica i testi tra virgolette.

Esempio di blocco:

```js
{
  titolo: "Wonder",
  autore: "R.J. Palacio",
  genere: ["formazione", "psicologico"], // uno o più, vedi elenco qui sotto
  classi: [1, 2, 3],               // classi adatte: [1], [2, 3], [1, 2, 3]…
  effetto: ["emozionarmi", "riflettere"], // vedi elenco qui sotto
  formato: "romanzo",              // UN solo valore, vedi qui sotto
  paroleChiave: ["amicizia", "diversità", "scuola"],
  trama: "Breve trama senza spoiler (2-3 frasi).",
  difficolta: "facile",            // facile | media | impegnativa
  pagine: 285,                     // numero, senza virgolette
  notaDocente: "Il tuo commento personale.",
  copertina: "wonder.jpg"          // nome del file dentro /copertine
},
```

Regole importanti:

- **formato**: che tipo di libro è, **un solo valore** (è un filtro rigido: chi vuole un fumetto non vuole un romanzo). Vocabolario ufficiale: `romanzo`, `racconti`, `poesia`, `manga & fumetto`, `saggio`, `albo illustrato`, `diario`. Puoi anche coniare etichette nuove: compaiono **automaticamente** tra i pulsanti della domanda "Che tipo di libro preferisci?" e nel filtro Formato del catalogo (per l'emoji, aggiungila in `EMOJI_FORMATI` in cima ad `app.js`, altrimenti 📚). Scrivila sempre uguale (tutto minuscolo); nei casi ibridi scegli il formato che meglio descrive l'esperienza di lettura (un diario a fumetti → `manga & fumetto`).
- **genere**: etichetta **libera**, **uno o più valori**. Vocabolario ufficiale: `fiaba & favola`, `avventura`, `umorismo`, `fantasy`, `giallo`, `mistero & fantastico`, `formazione`, `psicologico`, `storico & sociale`, `romance`, `fantascienza`, `classico`, `biografia & autobiografia`, `horror` — tutti già con emoji e colore in `STILE_GENERI`. Più generi si scrivono tra parentesi quadre: `genere: ["avventura", "formazione"]` — il primo è quello principale (decide emoji e colore della copertina segnaposto), gli altri contano comunque per la domanda e per il filtro. Anche qui puoi inventare generi nuovi (emoji e colore in `STILE_GENERI` in cima ad `app.js`, altrimenti 📕 e un colore neutro); scrivili sempre uguali, tutto minuscolo.
- **classi**: le classi per cui il libro è adatto, tra parentesi quadre. Può essere una sola (`[1]`) o più di una (`[2, 3]`). È un filtro rigido: lo studente vede solo i libri della sua classe.
- **effetto**: che cosa "fa" il libro a chi lo legge. Uno o più valori tra parentesi quadre, scelti esattamente tra questi quattro: `"ridere"`, `"emozionarmi"`, `"brividi"`, `"riflettere"`. Esempio: `["ridere", "emozionarmi"]`.
- **difficolta** deve essere `facile`, `media` oppure `impegnativa`.
- Non cancellare virgolette, virgole o parentesi: se il sito appare "vuoto" dopo una modifica, il 99% delle volte manca una virgola o una virgoletta in `catalogo.js`.

Per eliminare un libro, cancella tutto il suo blocco `{ ... },`.

## 🖼️ Aggiungere una copertina

1. Procurati l'immagine della copertina (una foto o la copertina ufficiale dell'edizione che avete in biblioteca).
2. Formato consigliato: **JPG** (va bene anche PNG o WebP), proporzioni verticali 2:3, dimensioni suggerite **circa 400×600 pixel** (bastano e il sito resta veloce).
3. Dai al file un nome semplice, **senza spazi né accenti**: ad esempio `wonder.jpg`, `lo-hobbit.jpg`.
4. Copia il file nella cartella `copertine/`.
5. Scrivi lo stesso nome nel campo `copertina` del libro in `catalogo.js`.

Finché l'immagine non c'è, il sito mostra automaticamente un segnaposto elegante con titolo e autore: nessun errore, nessun riquadro rotto.

## ✏️ Modificare i testi (sottotitolo, Info, contatti)

Apri `app.js`: **tutti i testi personalizzabili sono nelle prime righe del file**, ben commentati.

- `SOTTOTITOLO` → la frase sotto il titolo nell'header.
- `NOTA_CATALOGO` → la piccola nota con il pallino verde.
- `EMAIL_DOCENTE`, `INSTAGRAM_URL`, `INSTAGRAM_NOME`, `SITO_URL`, `SITO_NOME` → i contatti della finestra Info.
- `INFO_DESCRIZIONE` e `INFO_BIO` → i paragrafi della finestra Info (puoi usare `<p>…</p>` per i paragrafi, `<strong>…</strong>` per il grassetto, `<em>…</em>` per il corsivo).

## 🌐 Dove vive il sito, e a che serve GitHub

Due cose diverse, che conviene non confondere:

- **Il sito vero** è pubblicato sullo spazio web personale, all'indirizzo
  <https://profcampedelli.netsons.org/consiglialibro/>. È questo il link da dare alle classi
  (funziona benissimo anche come QR code da appendere in biblioteca).
- **GitHub** serve solo a *condividere i file* con altri insegnanti che vogliano riusare o
  adattare Consiglialibro. Non ospita il sito: è un magazzino ordinato del codice.

L'indirizzo del sito è scritto dentro `index.html` e `index_studenti.html`, nel blocco
"ANTEPRIMA QUANDO CONDIVIDI IL LINK": ci sono un `canonical`, un `og:url` e due `og:image`.
Se un giorno il sito traslocasse, sono quelli i punti da correggere.

### Aggiornare il sito sullo spazio web

Carica via FTP (o dal gestore file del pannello Netsons) i file modificati dentro la cartella
`consiglialibro/`, sovrascrivendo quelli vecchi. Non serve toccare nient'altro.

> ⚠️ Se **cancelli** un file (per esempio una copertina che non usi più), ricordati di
> cancellarlo anche sul server: caricando i file non si elimina nulla, si sovrascrive soltanto.

### Aggiornare il repository su GitHub

Il modo più semplice, senza installare niente:

1. Vai sul repository e clicca **Add file → Upload files**.
2. Trascina i file modificati (o l'intera cartella del progetto: i file identici vengono ignorati).
3. In fondo, nel riquadro del commit, scrivi due righe su cosa è cambiato — servono a te fra sei mesi.
4. Clicca **Commit changes**.

I file **cancellati** vanno tolti a mano: aprili sul sito di GitHub, clicca i tre puntini in alto
a destra e scegli **Delete file**. Il caricamento non se ne accorge da solo.

Se ti capita spesso, vale la pena installare [GitHub Desktop](https://desktop.github.com/):
mostra da solo l'elenco di cosa è cambiato, cancellazioni comprese, e si aggiorna con un clic.

### 💡 Quando cambi l'immagine di anteprima

WhatsApp, Facebook e Telegram si tengono in memoria l'anteprima di un link per giorni: se
sostituisci `og-image.png`, chi condivide il sito continuerà a vedere la vecchia figura.
Per costringerli a rileggere la pagina, incolla l'indirizzo del sito nel
[debugger di Facebook](https://developers.facebook.com/tools/debug/) e premi **Scrape Again**.

## 🎨 L'aspetto: quaderno a righe

Dalla versione 3 il sito ha la veste di un **quaderno a righe scritto a mano**, curato nei dettagli ma essenziale:

- **Il foglio** ha righe azzurre, margine rosso, fori della spirale e, in cima, un'intestazione con la **data del giorno** che si aggiorna da sola.
- **La chat** è scritta a mano e compare con l'effetto **macchina da scrivere**, con un pennino che segue il testo; la risposta dello studente appare in penna rossa evidenziata.
- **I libri consigliati** sono **post-it attaccati con lo scotch** che entrano con l'animazione di **pagina che si gira**; la copertina sembra una foto incollata e la difficoltà è un timbro rosso.
- **Catalogo e Info** si aprono come altre pagine del quaderno (con post-it e scorrimento verticale); nel catalogo i post-it arricciano l'angolo al passaggio del mouse.
- Piccoli **scarabocchi a penna** decorano il margine destro.

Approccio ai caratteri **ibrido**, per non sacrificare la leggibilità: font a mano (Caveat per i titoli, Kalam per il testo scritto) per chat, note e post-it; le **trame lunghe** restano in un font stampato leggibile (Roboto). Tutte le animazioni rispettano la preferenza di sistema "riduci animazioni".

> 🔧 **Un solo valore per la messa a punto**: in cima a `style.css`, tra le variabili `:root`, c'è `--riga-offset`. Regola quanto in alto o in basso cade la riga stampata rispetto al testo scritto a mano. Se il testo sembra "galleggiare" sopra la riga, rendilo più negativo (es. `-10px`); se sfonda sotto la riga, avvicinalo a `0`.

## Note tecniche

- Nessuna libreria esterna: solo HTML, CSS e JavaScript "vanilla" (unica risorsa esterna: i caratteri Google Fonts — Caveat, Kalam e Roboto).
- Il catalogo è in un file `.js` (non CSV) apposta: così il sito funziona anche aperto in locale con doppio clic, senza problemi di sicurezza del browser.
- Il sito è responsive (pensato prima di tutto per lo smartphone), accessibile da tastiera e rispetta la preferenza di sistema "riduci animazioni".
- **Il quaderno si scrive una riga alla volta**: i pulsanti di risposta compaiono solo quando la domanda ha finito di scriversi, e ogni messaggio aspetta che il precedente sia completo.
- **Screen reader**: i messaggi vengono letti una volta sola, già completi, grazie alla zona invisibile `<div id="annunci">` in fondo al `<main>`. Non va tolta: se l'`aria-live` tornasse sulla chat, l'effetto macchina da scrivere farebbe rileggere ogni frase da capo a ogni carattere.
- **Testi del catalogo**: titoli, autori, trame e note passano da `proteggi()` prima di finire nella pagina, quindi puoi scrivere tranquillamente `&`, `<` e `>` senza rompere niente.
- **Righe del quaderno**: l'allineamento legge `--u` da `style.css`, non una misura fissa nel JavaScript. Se cambi l'interlinea, cambiala solo lì.
