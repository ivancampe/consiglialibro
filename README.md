# 📖 Consiglialibro

**Un consulente di lettura per la tua classe, che sta in una cartella.**

Consiglialibro è un piccolo sito che consiglia libri ai ragazzi della scuola secondaria di primo grado. Lo studente risponde a sei domande a colpi di pulsante e riceve uno o due libri scelti per lui, ognuno con la nota personale di chi glielo consiglia: tu.

Non è un catalogo di biblioteca e non vuole esserlo. È il modo di far arrivare a un ragazzo di dodici anni la frase che di solito gli diresti in corridoio — *«questo secondo me ti piace, fidati»* — anche quando in corridoio non ci sei.

Funziona **interamente nel browser**: niente server, niente database, niente registrazione, nessun dato raccolto. Nessuna competenza di programmazione richiesta per usarlo e riempirlo.

> 📚 **I libri che trovi dentro sono solo un campione.** Servono a farti vedere com'è fatta una scheda e a provare il sito appena scaricato. Non sono un elenco tenuto aggiornato, e non sono il punto. Il punto è che tu ci metta **le tue** letture, con **le tue** note: quella è la parte che vale, ed è l'unica che i tuoi studenti riconosceranno come tua.

---

## Provalo in trenta secondi

Scarica la cartella e fai **doppio clic su `index.html`**. Si apre nel browser e funziona: non serve installare niente, non serve essere online (a parte i caratteri, vedi *Note tecniche*).

Fai un giro di domande fino in fondo, poi apri **📚 Catalogo** in alto e prova ricerca e filtri. In tre minuti hai capito tutto quello che serve.

## ⚠️ Le prime tre cose da cambiare

La cartella che hai in mano è configurata con i dati di chi te l'ha passata. Prima di far vedere il sito a chiunque, sistema queste tre cose — sono tutte facili.

**1. I libri.** Apri `catalogo.js` e sostituisci il campione con le tue letture. Le istruzioni sono nella sezione *Aggiungere o modificare un libro*.

**2. I tuoi dati.** Apri `app.js`: nelle prime righe ci sono e-mail, Instagram, sito, la bio della finestra Info e il link per il caffè. **Sono di un'altra persona.** Cambiali o cancellali, altrimenti i tuoi studenti scriveranno a un insegnante che non conosci.

**3. Gli indirizzi**, ma solo se hai intenzione di pubblicarlo online. Vedi *Metterlo online*: se non li correggi, chi condivide il tuo sito su WhatsApp vedrà comparire l'anteprima del sito di qualcun altro.

---

## Come funziona il consiglio

Le sei domande sono: **classe → esperienza di lettura → formato → genere → effetto cercato → lunghezza.** L'ordine non è casuale, ed è la parte del progetto su cui vale la pena spendere due minuti.

**Prima i due filtri rigidi** (classe ed esperienza di lettura). Insieme decidono quali libri esistono davvero per quello studente. **Poi le domande che pesano sul punteggio**, dalla più forte alla più leggera.

Il vantaggio di quest'ordine è che le domande successive mostrano **solo opzioni che portano davvero a un libro**. Se per la prima non hai in catalogo nessun saggio, il pulsante "Saggio" non compare proprio: lo studente non finisce mai in un vicolo cieco, e non gli capita mai di rispondere a sei domande per sentirsi dire "non ho niente per te".

- **Filtri rigidi** (un libro fuori da questi paletti non viene mai proposto): classe, livello di lettura, formato se scelto.
- **Segnali che pesano sul punteggio** (mettono i libri in classifica): genere 50 punti, effetto 30, lunghezza 10, più un piccolo bonus per le parole chiave affini all'effetto cercato.

I pesi sono tarati perché **il genere resti il segnale più forte in assoluto**: chi ha chiesto un fantasy deve ricevere un fantasy, anche se un altro libro pareggia su tutto il resto. Se metti mano ai numeri (sono in `app.js`, funzione `punteggio`), tieni presente questo equilibrio.

Due dettagli che sembrano piccoli e invece si notano molto:

- La domanda sul **genere** mostra solo i generi ancora disponibili. Se ne resta uno solo, il bot risponde d'ufficio con una battuta — ma la domanda conta lo stesso nel totale, così il contatore "Domanda N di 6" non salta mai un numero.
- Su ogni consiglio c'è **"L'ho già letto 🙋"**: timbra il libro con «Letto ✓» e lo sostituisce col successivo in classifica. Serve più spesso di quanto immagini.

Il catalogo completo è sempre raggiungibile: dal pulsante **📚 Catalogo** in alto, dalla parola "Catalogo" nella nota sotto il titolo, o da "Sfoglia tutto il catalogo" a fine giro. Ha una ricerca (ovunque, oppure solo titolo / autore / parola chiave, ignorando maiuscole e accenti) e cinque filtri combinabili tra loro e con la ricerca.

## I file del progetto

| File | A cosa serve |
|------|--------------|
| `catalogo.js` | **I libri.** È il file che aprirai più spesso, forse l'unico. |
| `copertine/` | Le immagini delle copertine. |
| `app.js` | La logica del sito **e tutti i testi personalizzabili**, raccolti in cima al file. |
| `index.html` | La pagina completa, con la finestra Info e i contatti. |
| `index_studenti.html` | **La copia per le classi**: identica, ma senza Info, contatti e social. |
| `style.css` | Colori, caratteri e aspetto (tema *quaderno a righe*). |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Il marchio come icona del sito e della schermata home. |
| `icon-192.png`, `icon-512.png`, `manifest.json` | Per "aggiungere alla schermata home" come se fosse un'app. |
| `og-image.png` | L'immagine che compare condividendo il link su WhatsApp, Classroom o Telegram. |

### Perché due pagine

`index.html` è la versione pubblica: ha la finestra **Info** con chi sei, come contattarti e il pulsante per condividere. `index_studenti.html` è la stessa cosa senza quella finestra — è la pagina da dare alle classi, dove i contatti personali non servono e i social sono un invito che è meglio non fare.

> ⚠️ **Le due pagine vanno tenute allineate.** Se modifichi qualcosa in `index.html` (a parte le parti Info), riporta la stessa modifica anche in `index_studenti.html`. Catalogo, testi e grafica sono invece condivisi (`catalogo.js`, `app.js`, `style.css`): lì basta modificare una volta sola e vale per entrambe.

---

## ➕ Aggiungere o modificare un libro

Apri `catalogo.js` con un editor di testo. Va bene anche il Blocco note; meglio ancora [Visual Studio Code](https://code.visualstudio.com/), che è gratuito e ti segnala da solo se dimentichi una virgola.

1. Copia un blocco libro esistente, da `{` fino a `},` compresa la virgola finale.
2. Incollalo prima della riga conclusiva `];`.
3. Cambia i testi tra virgolette.

```js
{
  titolo: "Wonder",
  autore: "R.J. Palacio",
  genere: ["formazione", "psicologico"], // uno o più, vedi elenco qui sotto
  classi: [1, 2, 3],                     // classi adatte: [1], [2, 3], [1, 2, 3]…
  effetto: ["emozionarmi", "riflettere"],
  formato: "romanzo",                    // UN solo valore
  paroleChiave: ["amicizia", "diversità", "scuola"],
  trama: "Breve trama senza spoiler (2-3 frasi).",
  difficolta: "facile",                  // facile | media | impegnativa
  pagine: 285,                           // numero, senza virgolette
  notaDocente: "Il tuo commento personale.",
  copertina: "wonder.jpg"                // nome del file dentro /copertine
},
```

Per **eliminare** un libro, cancella tutto il suo blocco `{ … },`.

### I campi, uno per uno

- **`formato`** — che tipo di libro è. **Un solo valore**, ed è un filtro rigido: chi vuole un fumetto non vuole un romanzo. Vocabolario: `romanzo`, `racconti`, `poesia`, `manga & fumetto`, `saggio`, `albo illustrato`, `diario`. Puoi coniare etichette nuove: compaiono **da sole** tra i pulsanti e nei filtri (per l'emoji, aggiungila in `EMOJI_FORMATI` in cima ad `app.js`, altrimenti esce 📚). Scrivile sempre uguali, tutto minuscolo. Nei casi ibridi scegli il formato che descrive meglio *l'esperienza di lettura*: un diario a fumetti è `manga & fumetto`.

- **`genere`** — etichetta libera, **uno o più valori**. Vocabolario già pronto, con emoji e colore: `fiaba & favola`, `avventura`, `umorismo`, `fantasy`, `giallo`, `mistero & fantastico`, `formazione`, `psicologico`, `storico & sociale`, `romance`, `fantascienza`, `classico`, `biografia & autobiografia`, `horror`. Con più generi si usano le parentesi quadre: `["avventura", "formazione"]`. Il **primo è il principale** (decide emoji e colore della copertina segnaposto), gli altri contano comunque per la domanda e per il filtro. Anche qui puoi inventarne di nuovi, aggiungendoli a `STILE_GENERI` in `app.js`.

- **`classi`** — le classi per cui il libro è adatto, tra parentesi quadre: `[1]`, `[2, 3]`, `[1, 2, 3]`. Filtro rigido: lo studente vede solo i libri della sua classe.

- **`effetto`** — che cosa *fa* il libro a chi lo legge. Uno o più valori scelti **esattamente** tra questi quattro: `"ridere"`, `"emozionarmi"`, `"brividi"`, `"riflettere"`.

- **`difficolta`** — `facile`, `media` oppure `impegnativa`. Insieme al livello di lettura dichiarato dallo studente è un filtro rigido.

- **`paroleChiave`** — da tre a sei parole. Oltre a servire per la ricerca, danno un piccolo bonus di punteggio quando sono affini all'effetto cercato.

- **`notaDocente`** — la tua voce. È il campo che rende il sito tuo: scrivi come parleresti, non come scriveresti in una scheda di lettura.

> 💡 **Se dopo una modifica il sito appare vuoto**, nel 99% dei casi manca una virgola o una virgoletta in `catalogo.js`. Non serve cercare a lungo: guarda l'ultima cosa che hai toccato.

### Tenere il catalogo in equilibrio

Il sito è bravo quanto il catalogo che gli dai. Ogni tanto conviene contare: se hai trenta libri ma solo due fanno ridere, chi cerca di ridere riceverà sempre quei due. Vale la pena controllare la copertura di **classi**, **effetti** e **difficoltà** — ed è normale che la prima sia la più scoperta, perché i libri facili si finiscono in fretta.

## 🖼️ Aggiungere una copertina

1. Procurati l'immagine: una foto, o la copertina dell'edizione che avete in biblioteca.
2. Formato consigliato **JPG** (va bene anche PNG o WebP), verticale 2:3, circa **400×600 pixel**. Bastano, e il sito resta veloce.
3. Dai al file un nome semplice, **senza spazi né accenti**: `wonder.jpg`, `lo-hobbit.jpg`.
4. Copialo nella cartella `copertine/`.
5. Scrivi lo stesso nome nel campo `copertina` del libro.

Finché l'immagine non c'è, il sito mostra da solo un segnaposto elegante con titolo e autore: nessun errore, nessun riquadro rotto. Puoi tranquillamente inserire i libri prima e le copertine poi.

## ✏️ I testi da personalizzare

Stanno **tutti nelle prime righe di `app.js`**, commentati uno per uno. Non serve toccare altro.

| Costante | Che cos'è |
|---|---|
| `SOTTOTITOLO` | La frase sotto il titolo, in alto. |
| `NOTA_CATALOGO` | La nota col pallino verde (la parola "catalogo" diventa cliccabile da sola). |
| `EMAIL_DOCENTE`, `INSTAGRAM_URL`, `INSTAGRAM_NOME`, `SITO_URL`, `SITO_NOME` | I contatti della finestra Info. |
| `INFO_DESCRIZIONE`, `INFO_BIO` | I due paragrafi della finestra Info. Accettano `<p>`, `<strong>`, `<em>`. |
| `URL_CONDIVISIONE` | L'indirizzo che viene condiviso dal pulsante 📤. |
| `CONDIVIDI_TITOLO`, `CONDIVIDI_TESTO_STUDENTI`, `CONDIVIDI_TESTO_INFO`, `CONDIVIDI_INVITO_INFO` | I testi della condivisione. |
| `CAFFE_URL`, `CAFFE_TESTO` | Dove porta e come si chiama il pulsante "Offrimi un caffè". |

## 📤 Il pulsante Condividi

Sta in **due punti**, perché il pubblico è diverso.

- **In fondo a ogni giro di domande**, accanto a "Ricomincia" e "Sorprendimi!". È il momento in cui lo studente ha appena ricevuto un consiglio che gli piace: è lì che viene voglia di passarlo a un compagno. Non compare quando il quiz **non** ha trovato nessun libro — a mani vuote non si chiede il passaparola.
- **Nella finestra Info**, sopra il pulsante del caffè: prima il modo gratuito di dare una mano, poi l'altro. Qui il pubblico è adulto — colleghi, genitori — e il testo è diverso. Questa parte non esiste in `index_studenti.html`, ed è proprio per questo che serve anche il pulsante in fondo al quiz.

Sullo smartphone si apre il **menu di condivisione del telefono** (WhatsApp, Classroom, Telegram): un tocco solo. Dove quel menu non esiste — Firefox su computer, qualche browser scolastico — il sito **copia il link negli appunti** e il pulsante diventa per due secondi "Link copiato ✓". Se apri il menu e lo chiudi senza condividere, non succede nulla.

> 🔗 Si condivide sempre **la pagina principale**, anche partendo da `index_studenti.html`. Se il link esce dalle classi e arriva a un genitore o a un collega, chi lo riceve deve poter aprire la finestra Info e capire chi c'è dietro.

## 🌐 Metterlo online

Non è obbligatorio: il sito funziona anche da una cartella su una LIM, su una chiavetta o nel registro elettronico come allegato. Ma un indirizzo web è comodo, soprattutto come **QR code appeso in biblioteca**.

Va bene qualunque spazio che serva file statici: lo spazio web della scuola, un hosting personale, GitHub Pages, Netlify. Si caricano i file così come sono — non c'è niente da installare né da configurare.

**Se lo pubblichi, correggi gli indirizzi**, altrimenti l'anteprima su WhatsApp e Classroom mostrerà il sito di qualcun altro. Sono in due posti:

- in `index.html` e `index_studenti.html`, nel blocco *"ANTEPRIMA QUANDO CONDIVIDI IL LINK"*: un `canonical`, un `og:url` e due `og:image` per ciascuna pagina;
- in `app.js`, la costante `URL_CONDIVISIONE`.

> 🔁 **Il numero di versione, ogni volta che aggiorni.** In fondo alle due pagine i collegamenti finiscono con `?v=3.2`:
>
> ```html
> <link rel="stylesheet" href="style.css?v=3.2">
> <script src="catalogo.js?v=3.2"></script>
> <script src="app.js?v=3.2"></script>
> ```
>
> Ogni volta che modifichi `style.css`, `app.js` o `catalogo.js` e ricarichi online, **alza quel numero in tutti e sei i punti** (`3.3`, `3.4`…). Serve perché i browser tengono in memoria quei file per giorni: senza il cambio, chi ha già visitato il sito continua a vedere la versione vecchia. E se il CSS vecchio non conosce le novità della pagina, il risultato può essere vistoso — è già successo che il logo comparisse grande quanto mezzo schermo. Il file HTML non ha bisogno di versione: i browser lo ricontrollano da soli.

Due avvertenze finali. Se **cancelli** un file (una copertina che non usi più), toglilo anche dal server: caricando non si elimina nulla, si sovrascrive soltanto. E se cambi `og-image.png`, sappi che WhatsApp e Telegram tengono in memoria l'anteprima per giorni.

---

## 🎨 L'aspetto: quaderno a righe

Il sito ha la veste di un **quaderno a righe scritto a mano**, curata nei dettagli ma essenziale:

- **Il foglio** ha righe azzurre, margine rosso, fori della spirale e un'intestazione con la **data del giorno**, che si aggiorna da sola.
- **La chat** è scritta a mano e compare con l'effetto **macchina da scrivere**, con un pennino che segue il testo; la risposta dello studente appare in penna rossa evidenziata.
- **I libri consigliati** sono **post-it attaccati con lo scotch**, che entrano con l'animazione della pagina che si gira; la copertina sembra una foto incollata e la difficoltà è un timbro rosso.
- **Catalogo e Info** si aprono come altre pagine del quaderno.
- Piccoli **scarabocchi a penna** decorano il margine destro.

I caratteri seguono un approccio **ibrido**, per non sacrificare la leggibilità: font scritti a mano (Caveat per i titoli, Kalam per il testo) su chat, note e post-it; le **trame lunghe** restano in un font stampato (Roboto). Tutte le animazioni rispettano la preferenza di sistema *"riduci animazioni"*.

> 🔧 **Un solo valore per la messa a punto.** In cima a `style.css`, tra le variabili `:root`, c'è `--riga-offset`: regola dove cade la riga stampata rispetto al testo scritto a mano. Se il testo sembra galleggiare sopra la riga, rendilo più negativo (es. `-10px`); se sfonda sotto, avvicinalo a `0`.

## Note tecniche

Non servono per usare Consiglialibro. Servono se vuoi metterci le mani.

- **Nessuna libreria esterna**: solo HTML, CSS e JavaScript "vanilla". L'unica risorsa presa da fuori sono i caratteri di Google Fonts. Se la tua scuola preferisce non far contattare server esterni dal browser degli studenti, puoi scaricare i tre font e servirli dalla tua cartella: il sito continua a funzionare identico.
- **Il catalogo è un file `.js`, non un CSV**, apposta: così il sito funziona anche aperto in locale col doppio clic, senza incappare nelle regole di sicurezza del browser.
- Il sito è **responsive** (pensato prima di tutto per lo smartphone), navigabile da tastiera e rispetta *"riduci animazioni"*.
- **Il quaderno si scrive una riga alla volta**: i pulsanti compaiono solo quando la domanda ha finito di scriversi, e ogni messaggio aspetta che il precedente sia completo.
- **Screen reader**: i messaggi vengono letti una volta sola, già completi, grazie alla zona invisibile `<div id="annunci">` in fondo al `<main>`. Non va tolta: se l'`aria-live` tornasse sulla chat, l'effetto macchina da scrivere farebbe rileggere ogni frase da capo a ogni carattere.
- **Testi del catalogo**: titoli, autori, trame e note passano da `proteggi()` prima di finire nella pagina. Puoi scrivere tranquillamente `&`, `<` e `>` senza rompere niente.
- **Righe del quaderno**: l'allineamento legge `--u` da `style.css`, non una misura fissa nel JavaScript. Se cambi l'interlinea, cambiala solo lì.

---

## Usalo pure

Consiglialibro è nato per essere passato di mano. **Prendilo, copialo, modificalo, riempilo con i tuoi libri e dallo ai tuoi studenti**: non serve chiedere il permesso e non c'è niente da pagare.

Se lo trovi utile e ti va, lascia da qualche parte una riga su dove viene — nella finestra Info, o anche solo a voce a un collega. E se lo migliori, fammelo sapere: le idee buone conviene rimandarle indietro.

**Ivan Campedelli** · [profcampedelli@gmail.com](mailto:profcampedelli@gmail.com) · [ivancampedelli.it](https://www.ivancampedelli.it)
