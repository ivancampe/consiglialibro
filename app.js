/* ============================================================
   CONSIGLIALIBRO — logica dell'applicazione
   ============================================================

   ✏️ TESTI CHE PUOI PERSONALIZZARE — sono tutti qui in cima.
   Modifica solo ciò che sta tra le virgolette "…" o tra i
   backtick `…` (che permettono di andare a capo liberamente).
   ============================================================ */

// --- Testi della barra superiore -----------------------------
const SOTTOTITOLO =
  "Tutti i libri sono stati letti, classificati e approvati personalmente dal prof Campedelli";

const NOTA_CATALOGO =
  "Catalogo in continuo aggiornamento, sulla base delle mie letture.";

// --- Contatti (finestra Info) --------------------------------
// Sostituisci con la tua e-mail e i link ai tuoi profili.
const EMAIL_DOCENTE  = "profcampedelli@gmail.com";
const INSTAGRAM_URL  = "https://www.instagram.com/ivancampedelli/";
const INSTAGRAM_NOME = "@ivancampedelli";                 // testo mostrato accanto all'icona
const SITO_URL  = "https://www.ivancampedelli.it";
const SITO_NOME = "ivancampedelli.it";        // testo mostrato accanto all'icona

// --- Emoji dei formati ----------------------------------------
// Vocabolario ufficiale dei formati (i pulsanti mostrano solo
// quelli presenti in catalogo). Se in catalogo.js inventi un
// formato nuovo, aggiungigli qui un'emoji, altrimenti usa
// quella generica qui sotto.
const EMOJI_FORMATI = {
  "romanzo":         "📖",
  "racconti":        "📜",
  "poesia":          "🪶",
  "manga & fumetto": "💬",
  "saggio":          "💡",
  "albo illustrato": "🎨",
  "diario":          "📓"
};
const EMOJI_FORMATO_GENERICA = "📚";

// --- Emoji e colori dei generi ---------------------------------
// Vocabolario ufficiale dei generi: emoji + colore della
// copertina segnaposto. I pulsanti e i filtri mostrano solo i
// generi presenti in catalogo; un genere nuovo fuori da questa
// tabella funziona comunque (emoji e colore generici qui sotto).
// L'ordine di questa tabella è anche l'ordine dei pulsanti
// (i generi non elencati qui finiscono in coda).
const STILE_GENERI = {
  "fiaba & favola":            { emoji: "🧚", colore: "#97274e" },
  "avventura":                 { emoji: "⚔️", colore: "#8a4b12" },
  "umorismo":                  { emoji: "😂", colore: "#a6440e" },
  "fantasy":                   { emoji: "🐉", colore: "#5b3a8e" },
  "giallo":                    { emoji: "🔍", colore: "#11555c" },
  "mistero & fantastico":      { emoji: "🔮", colore: "#372e63" },
  "formazione":                { emoji: "🦋", colore: "#1f6e6e" },
  "psicologico":               { emoji: "🧠", colore: "#3f5e78" },
  "storico & sociale":         { emoji: "🏺", colore: "#7a5230" },
  "romance":                   { emoji: "💘", colore: "#c0233c" },
  "fantascienza":              { emoji: "🚀", colore: "#23508f" },
  "classico":                  { emoji: "🏛️", colore: "#6b5330" },
  "biografia & autobiografia": { emoji: "🖋️", colore: "#54452e" },
  "horror":                    { emoji: "🧟", colore: "#000000" }
};
const EMOJI_GENERE_GENERICA  = "📕";
const COLORE_GENERE_GENERICO = "#6b5330";

// --- Testi della finestra Info --------------------------------
const INFO_DESCRIZIONE = `
  <p><strong>Consiglialibro</strong> ti aiuta a trovare la tua prossima lettura:
  rispondi a qualche domanda sui tuoi gusti e ricevi <strong>un libro su misura</strong>,
  scelto tra quelli che ho letto e approvato personalmente.</p>
  <p>Il catalogo <strong>attinge dalle mie letture</strong>: rispecchia i miei gusti
  e non contiene tutti i libri dell'universo. Cresce ogni volta che ne finisco uno nuovo.</p>
  <p>Hai un libro del cuore che qui manca? <strong>Scrivimi e lo aggiungo!</strong></p>
`;

const INFO_BIO = `
  <p>Mi chiamo <strong>Ivan Campedelli</strong> e insegno lettere alla scuola
  secondaria di primo grado. Oltre a insegnare e a leggere, <strong>scrivo storie</strong>:
  le trovi nei contatti qui sotto!</p>
`;

/* ============================================================
   ⚙️ DA QUI IN GIÙ: il motore del sito.
   Non serve modificarlo per aggiungere libri o cambiare i testi.
   ============================================================ */

// --- Classi ----------------------------------------------------
const CLASSI = [
  { id: 1, label: "1ª media", emoji: "1️⃣" },
  { id: 2, label: "2ª media", emoji: "2️⃣" },
  { id: 3, label: "3ª media", emoji: "3️⃣" }
];

// --- Effetti ---------------------------------------------------
const EFFETTI = [
  { id: "ridere",      label: "Ridere",             emoji: "😂" },
  { id: "emozionarmi", label: "Emozionarmi",        emoji: "🥹" },
  { id: "brividi",     label: "Brividi e tensione", emoji: "😱" },
  { id: "riflettere",  label: "Riflettere",         emoji: "🤔" }
];

// Frasi usate nella motivazione quando l'effetto corrisponde
const FRASI_EFFETTO = {
  ridere:      "volevi ridere (e qui le risate sono assicurate)",
  emozionarmi: "cercavi emozioni vere (e questo libro ne è pieno)",
  brividi:     "volevi brividi e tensione (qui non mancano)",
  riflettere:  "cercavi un libro che facesse pensare (e questo lo fa)"
};

// Parole chiave "affini" a ciascun effetto: se compaiono tra le
// parole chiave del libro danno un piccolo bonus di punteggio.
const PAROLE_EFFETTO = {
  ridere:      ["risate", "ironia", "umorismo", "divertente", "marachelle"],
  emozionarmi: ["commovente", "amicizia", "tenerezza", "famiglia", "emozione"],
  brividi:     ["mistero", "tensione", "suspense", "delitto", "indagine", "paura"],
  riflettere:  ["diversità", "crescere", "libertà", "giustizia", "coraggio", "promessa"]
};

// --- Opzioni di lunghezza -------------------------------------
const LUNGHEZZE = [
  { id: "corto",     label: "Corto",       dettaglio: "meno di 200 pagine", emoji: "🐇", test: p => p < 200 },
  { id: "medio",     label: "Medio",       dettaglio: "200–300 pagine",     emoji: "🐢", test: p => p >= 200 && p <= 300 },
  { id: "lungo",     label: "Lungo",       dettaglio: "più di 300 pagine",  emoji: "🐋", test: p => p > 300 },
  { id: "qualsiasi", label: "Non importa", dettaglio: "vado a sensazione",  emoji: "🤷", test: () => true }
];

const FRASI_LUNGHEZZA = {
  corto: "volevi una lettura veloce, e queste pagine volano",
  medio: "volevi un libro né troppo corto né troppo lungo: questo è perfetto",
  lungo: "volevi una storia lunga in cui perderti"
};

// --- Livelli di lettura (filtro RIGIDO sulla difficoltà) ------
const LIVELLI = [
  { id: "iniziando", label: "Sto iniziando",  dettaglio: "letture semplici",   emoji: "🌱", ammesse: ["facile"] },
  { id: "melacavo",  label: "Me la cavo",     dettaglio: "anche qualche sfida", emoji: "🌿", ammesse: ["facile", "media"] },
  { id: "esperto",   label: "Lettore esperto", dettaglio: "nessun limite!",    emoji: "🌳", ammesse: ["facile", "media", "impegnativa"] }
];

const FRASI_LIVELLO = {
  iniziando: "è una lettura che scorre senza intoppi, ideale per iniziare",
  melacavo:  "è alla tua portata ma non ti annoierà",
  esperto:   "un lettore esperto come te saprà apprezzarlo fino in fondo"
};

const ETICHETTE_DIFFICOLTA = { facile: "Facile", media: "Media", impegnativa: "Impegnativa" };

const TOTALE_DOMANDE = 6;

// Stato delle scelte dell'utente
let scelte = { classe: null, genere: null, effetto: null, formato: null, lunghezza: null, livello: null };

// Classifica dei consigli correnti (per il pulsante "L'ho già letto")
let classifica = [];
let prossimoInClassifica = 0;

const chat = document.getElementById("chat");
const RITARDO_MESSAGGIO = 350; // ms tra un messaggio e l'altro

// ---------- Piccole utilità ----------
const emojiGenere  = genere => (STILE_GENERI[genere] || {}).emoji  || EMOJI_GENERE_GENERICA;
const coloreGenere = genere => (STILE_GENERI[genere] || {}).colore || COLORE_GENERE_GENERICO;

// Un libro può avere uno o più generi (stringa singola o lista). Il PRIMO
// è il genere "principale": dà emoji e colore alla scheda e alla copertina.
const generiDi = libro => Array.isArray(libro.genere) ? libro.genere : [libro.genere];
const generePrincipale = libro => generiDi(libro)[0];

const emojiFormato = formato => EMOJI_FORMATI[formato] || EMOJI_FORMATO_GENERICA;

const maiuscola = testo => testo.charAt(0).toUpperCase() + testo.slice(1);

// Generi presenti in un insieme di libri, senza doppioni,
// nell'ordine della tabella STILE_GENERI (i generi nuovi in coda,
// in ordine di apparizione nel catalogo)
function generiPresenti(libri) {
  const noti = Object.keys(STILE_GENERI);
  const posizione = g => noti.indexOf(g) === -1 ? noti.length : noti.indexOf(g);
  return [...new Set(libri.flatMap(l => generiDi(l)))].sort((a, b) => posizione(a) - posizione(b));
}

function formatiPresenti(libri) {
  return [...new Set(libri.map(l => l.formato))];
}

// Confronto "morbido" per la ricerca: minuscole e senza accenti
// (così "perche" trova "perché" e "VECCHINI" trova "Vecchini")
function normalizza(testo) {
  return testo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Chiave per l'ordinamento alfabetico del catalogo: minuscole, senza
// accenti e SENZA l'articolo iniziale, cos\u00ec "La casa\u2026" va sotto la C
// e "L'isola\u2026" sotto la I. Vengono ignorati solo gli articoli in
// PRIMA posizione (le preposizioni come "In", "Nelle", "Alle" restano).
const ARTICOLI_INIZIALI = new Set(["il", "lo", "la", "i", "gli", "le", "un", "uno", "una"]);
function chiaveTitolo(titolo) {
  // articoli con apostrofo attaccati alla parola: "l'" e "un'"
  let t = normalizza(titolo).trim().replace(/^(l|un)['\u2019]\s*/, "");
  const spazio = t.indexOf(" ");
  if (spazio !== -1 && ARTICOLI_INIZIALI.has(t.slice(0, spazio))) {
    t = t.slice(spazio + 1).trim();
  }
  return t;
}

// Verifica se un libro corrisponde alla ricerca.
// campo: "tutto" | "titolo" | "autore" | "parola"
function corrispondeRicerca(libro, campo, query) {
  if (!query) return true;
  const q = normalizza(query);
  const inTitolo = normalizza(libro.titolo).includes(q);
  const inAutore = normalizza(libro.autore).includes(q);
  const inParole = libro.paroleChiave.some(p => normalizza(p).includes(q));
  if (campo === "titolo") return inTitolo;
  if (campo === "autore") return inAutore;
  if (campo === "parola") return inParole;
  return inTitolo || inAutore || inParole;   // "tutto": ovunque
}

function scorriInFondo() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: preferisceMenoMovimento() ? "auto" : "smooth" });
}

function preferisceMenoMovimento() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function el(tag, classe, html) {
  const nodo = document.createElement(tag);
  if (classe) nodo.className = classe;
  if (html !== undefined) nodo.innerHTML = html;
  return nodo;
}

// Unisce le parti della motivazione: "a, b e c" (con d eufonica)
function congiungi(parti) {
  let frase;
  if (parti.length === 1) frase = parti[0];
  else frase = parti.slice(0, -1).join(", ") + " e " + parti[parti.length - 1];
  return frase.replace(/ e è/g, " ed è");
}

// ---------- Messaggi in stile chat ----------
// Effetto "scrittura a mano": rivela il testo carattere per carattere
// conservando i tag interni (strong, em, span…). Se l'utente preferisce
// meno movimento, il testo compare subito.
function scriviAMano(nodo) {
  if (preferisceMenoMovimento()) return;
  const nodiTesto = [];
  (function raccogli(n) {
    n.childNodes.forEach(c => {
      if (c.nodeType === Node.TEXT_NODE) nodiTesto.push(c);
      else raccogli(c);
    });
  })(nodo);
  // spezza per "code point" così le emoji non si rompono a metà
  const caratteri = nodiTesto.map(n => [...n.nodeValue]);
  nodiTesto.forEach(n => { n.nodeValue = ""; });
  nodo.classList.add("scrivendo");
  let i = 0, j = 0;
  const passo = () => {
    if (i >= nodiTesto.length) { nodo.classList.remove("scrivendo"); return; }
    if (j < caratteri[i].length) {
      const c = caratteri[i][j];
      j += 1;
      nodiTesto[i].nodeValue = caratteri[i].slice(0, j).join("");
      scorriInFondo();
      // ritmo un po' più lento e umano: pause dopo la punteggiatura
      let pausa = 26;
      if (".!?…".includes(c)) pausa = 300;
      else if (",;:".includes(c)) pausa = 150;
      setTimeout(passo, pausa);
    } else { i += 1; j = 0; passo(); }
  };
  passo();
}

// Allinea un elemento alla griglia delle righe del quaderno: sposta
// il suo bordo superiore sulla riga successiva, così il testo scritto
// a mano cade SEMPRE sopra una riga stampata, anche quando prima ci
// sono post-it o pulsanti di altezza irregolare.
const PASSO_RIGA = 32; // px — deve combaciare con --u (2rem)
function allineaRiga(nodo) {
  const main = document.querySelector(".main");
  if (!main) return;
  const origine = main.getBoundingClientRect().top + parseFloat(getComputedStyle(main).paddingTop);
  const rel = nodo.getBoundingClientRect().top - origine;
  const resto = ((rel % PASSO_RIGA) + PASSO_RIGA) % PASSO_RIGA;
  const correzione = (PASSO_RIGA - resto) % PASSO_RIGA;
  if (correzione > 0.5) {
    const attuale = parseFloat(getComputedStyle(nodo).marginTop) || 0;
    nodo.style.marginTop = (attuale + correzione) + "px";
  }
}

function messaggioBot(html) {
  const m = el("div", "messaggio messaggio-bot", html);
  chat.appendChild(m);
  allineaRiga(m);
  scorriInFondo();
  scriviAMano(m);
  return m;
}

// Domanda con indicatore di avanzamento ("Domanda 2 di 6")
function messaggioDomanda(numero, html) {
  return messaggioBot(`<span class="passo">Domanda ${numero} di ${TOTALE_DOMANDE}</span>${html}`);
}

function messaggioUtente(testo) {
  const m = el("div", "messaggio messaggio-utente");
  m.textContent = testo;
  chat.appendChild(m);
  allineaRiga(m);
  scorriInFondo();
}

// Crea un gruppo di pulsanti-opzione. Quando se ne clicca uno,
// il gruppo viene rimosso e compare la "risposta" dell'utente.
function gruppoOpzioni(opzioni) {
  const gruppo = el("div", "opzioni");
  opzioni.forEach(opz => {
    const btn = el("button", "opzione" + (opz.classe ? " " + opz.classe : ""));
    btn.type = "button";
    btn.innerHTML =
      `<span class="opzione-emoji" aria-hidden="true">${opz.emoji || ""}</span>` +
      `<span class="opzione-testo">${opz.label}` +
      (opz.dettaglio ? `<small>${opz.dettaglio}</small>` : "") +
      `</span>`;
    btn.addEventListener("click", () => {
      gruppo.remove();
      messaggioUtente(`${opz.emoji ? opz.emoji + " " : ""}${opz.label}`);
      setTimeout(opz.azione, RITARDO_MESSAGGIO);
    });
    gruppo.appendChild(btn);
  });
  chat.appendChild(gruppo);
  scorriInFondo();
}

// ---------- Flusso della conversazione ----------
function avvia() {
  scelte = { classe: null, genere: null, effetto: null, formato: null, lunghezza: null, livello: null };
  classifica = [];
  prossimoInClassifica = 0;
  messaggioBot("Ciao! 👋 Sono <strong>Consiglialibro</strong>. Rispondi a sei domande veloci e ti trovo il libro giusto per te.");
  setTimeout(domandaClasse, RITARDO_MESSAGGIO);
}

// 1 · Classe (filtro rigido)
function domandaClasse() {
  messaggioDomanda(1, "<strong>Che classe fai?</strong>");
  gruppoOpzioni(CLASSI.map(c => ({
    emoji: c.emoji,
    label: c.label,
    azione: () => { scelte.classe = c.id; domandaFormato(); }
  })));
}

// I libri adatti alla classe scelta (o tutti, se non scelta)
function libriDellaClasse() {
  return scelte.classe === null
    ? CATALOGO
    : CATALOGO.filter(l => l.classi.includes(scelte.classe));
}

// I libri della classe scelta che rispettano anche il formato
// (se scelto): è l'insieme da cui nasce la domanda sul genere.
function libriClasseFormato() {
  return libriDellaClasse().filter(l =>
    scelte.formato === null || l.formato === scelte.formato);
}

// 2 · Formato preferito (dinamico; se scelto è un filtro rigido
// e restringe i generi mostrati alla domanda 4)
function domandaFormato() {
  messaggioDomanda(2, "<strong>Che tipo di libro preferisci?</strong>");
  const formati = formatiPresenti(libriDellaClasse());
  const opzioni = formati.map(f => ({
    emoji: emojiFormato(f),
    label: maiuscola(f),
    azione: () => { scelte.formato = f; domandaEffetto(); }
  }));
  opzioni.push({
    emoji: "🤷",
    label: "Non importa",
    azione: () => { scelte.formato = null; domandaEffetto(); }
  });
  gruppoOpzioni(opzioni);
}

// 3 · Effetto cercato (punteggio forte, non filtro)
function domandaEffetto() {
  messaggioDomanda(3, "<strong>Che effetto vuoi che ti faccia questo libro?</strong>");
  gruppoOpzioni(EFFETTI.map(e => ({
    emoji: e.emoji,
    label: e.label,
    azione: () => { scelte.effetto = e.id; domandaGenere(); }
  })));
}

// 4 · Genere: solo i generi presenti tra i libri della classe
// E del formato scelti. Se ne resta uno solo (o nessuno), la
// domanda viene saltata con una nota simpatica.
function domandaGenere() {
  const generi = generiPresenti(libriClasseFormato());

  if (generi.length <= 1) {
    scelte.genere = generi[0] || null;
    if (generi.length === 1) {
      messaggioBot(`Con questo tipo di libro il genere è già scritto: ${emojiGenere(generi[0])} <strong>${maiuscola(generi[0])}</strong>!`);
    }
    setTimeout(domandaLunghezza, RITARDO_MESSAGGIO * 2);
    return;
  }

  messaggioDomanda(4, "<strong>Che tipo di storia ti va?</strong>");
  const opzioni = generi.map(g => ({
    emoji: emojiGenere(g),
    label: maiuscola(g),
    azione: () => { scelte.genere = g; domandaLunghezza(); }
  }));
  opzioni.push({
    emoji: "🤷",
    label: "Qualsiasi",
    azione: () => { scelte.genere = null; domandaLunghezza(); }
  });
  gruppoOpzioni(opzioni);
}

// 5 · Lunghezza
function domandaLunghezza() {
  messaggioDomanda(5, "<strong>Quanto vuoi che duri il viaggio?</strong>");
  gruppoOpzioni(LUNGHEZZE.map(l => ({
    emoji: l.emoji,
    label: l.label,
    dettaglio: l.dettaglio,
    azione: () => { scelte.lunghezza = l.id; domandaLivello(); }
  })));
}

// 6 · Esperienza di lettura (filtro rigido)
function domandaLivello() {
  messaggioDomanda(6, "<strong>Come te la cavi con la lettura?</strong>");
  gruppoOpzioni(LIVELLI.map(l => ({
    emoji: l.emoji,
    label: l.label,
    dettaglio: l.dettaglio,
    azione: () => { scelte.livello = l.id; mostraRisultati(); }
  })));
}

// ---------- Filtri rigidi e punteggio ----------
function difficoltaAmmesse() {
  const livello = LIVELLI.find(l => l.id === scelte.livello);
  // Se per qualche motivo il livello non è stato scelto, ammetti tutto
  return livello ? livello.ammesse : ["facile", "media", "impegnativa"];
}

// Filtri RIGIDI: classe, formato (se scelto) e difficoltà.
// Genere, effetto e lunghezza pesano invece sul punteggio.
function libriAmmessi() {
  const ammesse = difficoltaAmmesse();
  return libriDellaClasse().filter(libro =>
    (scelte.formato === null || libro.formato === scelte.formato) &&
    ammesse.includes(libro.difficolta)
  );
}

function punteggio(libro) {
  let punti = 0;
  // genere: peso alto
  if (scelte.genere && generiDi(libro).includes(scelte.genere)) punti += 40;
  // effetto: peso alto
  if (scelte.effetto && libro.effetto.includes(scelte.effetto)) punti += 30;
  // lunghezza: peso medio ("non importa" non dà punti a nessuno)
  const lunghezza = LUNGHEZZE.find(l => l.id === scelte.lunghezza);
  if (lunghezza && scelte.lunghezza !== "qualsiasi" && lunghezza.test(libro.pagine)) punti += 15;
  // piccolo bonus per parole chiave affini all'effetto cercato
  const affini = PAROLE_EFFETTO[scelte.effetto] || [];
  libro.paroleChiave.forEach(parola => {
    if (affini.includes(parola.toLowerCase())) punti += 3;
  });
  return punti;
}

function mescola(array) {
  const copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// ---------- Frase di motivazione ----------
function fraseMotivazione(libro) {
  const parti = [];
  if (scelte.genere && generiDi(libro).includes(scelte.genere)) {
    parti.push(`cercavi <strong>${scelte.genere}</strong> ${emojiGenere(scelte.genere)}`);
  }
  if (scelte.effetto && libro.effetto.includes(scelte.effetto)) {
    parti.push(FRASI_EFFETTO[scelte.effetto]);
  }
  if (scelte.formato && libro.formato === scelte.formato) {
    parti.push(`è proprio il tipo di libro che preferisci: ${emojiFormato(libro.formato)} ${libro.formato}`);
  }
  const lunghezza = LUNGHEZZE.find(l => l.id === scelte.lunghezza);
  if (lunghezza && scelte.lunghezza !== "qualsiasi" && lunghezza.test(libro.pagine)) {
    parti.push(FRASI_LUNGHEZZA[scelte.lunghezza]);
  }
  if (scelte.livello) parti.push(FRASI_LIVELLO[scelte.livello]);
  if (parti.length === 0) return `Te lo consiglio perché <em>${libro.titolo}</em> merita, punto.`;
  // al massimo tre motivi, per non fare la predica
  return "Te lo consiglio perché " + congiungi(parti.slice(0, 3)) + ".";
}

// ---------- Schede libro ----------
// Copertina: prova a caricare l'immagine; se manca, resta visibile
// il segnaposto colorato con titolo e autore.
function creaCopertina(libro, piccola) {
  const box = el("div", "copertina" + (piccola ? " copertina-piccola" : ""));
  box.style.setProperty("--colore-genere", coloreGenere(generePrincipale(libro)));

  const segnaposto = el("div", "copertina-segnaposto",
    `<span class="segnaposto-emoji" aria-hidden="true">${emojiGenere(generePrincipale(libro))}</span>
     <span class="segnaposto-titolo">${libro.titolo}</span>
     <span class="segnaposto-autore">${libro.autore}</span>`);
  box.appendChild(segnaposto);

  // L'immagine resta invisibile finché non è caricata davvero:
  // se manca o non si carica, rimane il segnaposto (mai icone rotte).
  const img = document.createElement("img");
  img.alt = `Copertina di ${libro.titolo}`;
  img.addEventListener("load", () => img.classList.add("caricata"));
  img.addEventListener("error", () => img.remove());
  img.src = "copertine/" + libro.copertina;
  box.appendChild(img);

  return box;
}

function creaScheda(libro, motivazione) {
  const scheda = el("article", "scheda");
  scheda.style.setProperty("--colore-genere", coloreGenere(generePrincipale(libro)));

  const timbro = el("div", "timbro", `Difficoltà<br><strong>${ETICHETTE_DIFFICOLTA[libro.difficolta]}</strong>`);
  scheda.appendChild(timbro);

  scheda.appendChild(creaCopertina(libro, false));

  const info = el("div", "scheda-info");
  info.appendChild(el("p", "scheda-genere",
    `${generiDi(libro).map(g => `${emojiGenere(g)} ${maiuscola(g)}`).join(" · ")} · ${emojiFormato(libro.formato)} ${libro.formato}`));
  info.appendChild(el("h2", "scheda-titolo", libro.titolo));
  info.appendChild(el("p", "scheda-autore", `di ${libro.autore} · ${libro.pagine} pagine`));
  info.appendChild(el("p", "scheda-trama", libro.trama));

  const etichette = el("ul", "etichette");
  etichette.setAttribute("aria-label", "Parole chiave");
  libro.paroleChiave.forEach(parola => etichette.appendChild(el("li", "etichetta", parola)));
  info.appendChild(etichette);

  info.appendChild(el("p", "scheda-nota", `<span class="nota-chi" aria-hidden="true">✍️ Il prof dice:</span> «${libro.notaDocente}»`));

  if (motivazione) info.appendChild(el("p", "scheda-motivazione", `💡 ${motivazione}`));

  scheda.appendChild(info);
  return scheda;
}

// Scheda consigliata: come creaScheda, ma con il pulsante
// "L'ho già letto 🙋" che la sostituisce col prossimo in classifica.
function creaSchedaConsigliata(libro) {
  const scheda = creaScheda(libro, fraseMotivazione(libro));
  const btn = el("button", "opzione btn-gia-letto");
  btn.type = "button";
  btn.innerHTML =
    `<span class="opzione-emoji" aria-hidden="true">🙋</span>` +
    `<span class="opzione-testo">L'ho già letto</span>`;
  btn.addEventListener("click", () => {
    const sostituisci = () => {
      if (prossimoInClassifica < classifica.length) {
        const prossimo = classifica[prossimoInClassifica++];
        scheda.replaceWith(creaSchedaConsigliata(prossimo));
      } else {
        scheda.replaceWith(el("div", "messaggio messaggio-bot",
          "Wow, hai letto tutto quello che fa per te! 🏆 Prova a cambiare gusti o aspetta i prossimi arrivi 📚"));
      }
    };
    if (preferisceMenoMovimento()) { sostituisci(); return; }
    // "sbatte" il timbro LETTO sul post-it, poi passa al prossimo
    btn.disabled = true;
    scheda.appendChild(el("div", "timbro-letto", "LETTO ✓"));
    setTimeout(sostituisci, 700);
  });
  scheda.querySelector(".scheda-info").appendChild(btn);
  return scheda;
}

// ---------- Risultati ----------
function mostraRisultati() {
  // mescola prima di ordinare, così i pari merito variano a ogni giro
  classifica = mescola(libriAmmessi()).sort((a, b) => punteggio(b) - punteggio(a));

  if (classifica.length === 0) {
    messaggioBot(
      "Mmm… 🤔 per questa combinazione di gusti non ho ancora un libro in catalogo. " +
      "Non è colpa tua: è un ottimo motivo per farmi leggere di più! " +
      "Intanto prova a ricominciare cambiando qualcosa, oppure lasciati sorprendere."
    );
    pulsantiFinali();
    return;
  }

  const daMostrare = classifica.slice(0, 2);
  prossimoInClassifica = daMostrare.length;

  messaggioBot(daMostrare.length === 1
    ? "Trovato! 🎯 Ecco il libro che fa per te:"
    : "Trovati! 🎯 Ecco due libri che fanno per te:");

  daMostrare.forEach(libro => {
    chat.appendChild(creaSchedaConsigliata(libro));
  });
  scorriInFondo();
  pulsantiFinali();
}

function pulsantiFinali() {
  gruppoOpzioni([
    { emoji: "🔄", label: "Ricomincia",                 azione: avvia },
    { emoji: "🎲", label: "Sorprendimi!",               azione: sorprendimi },
    { emoji: "📚", label: "Sfoglia tutto il catalogo",  azione: mostraCatalogo }
  ]);
}

// Libro casuale: rispetta sempre classe e livello di lettura scelti
function sorprendimi() {
  const ammesse = difficoltaAmmesse();
  const possibili = libriDellaClasse().filter(libro => ammesse.includes(libro.difficolta));
  if (possibili.length === 0) { // non dovrebbe mai succedere, ma non si sa mai
    messaggioBot("Non ho sorprese adatte a te in questo momento… riprova ricominciando!");
    pulsantiFinali();
    return;
  }
  const libro = possibili[Math.floor(Math.random() * possibili.length)];
  messaggioBot("Il dado è tratto! 🎲 Ecco la tua sorpresa:");
  chat.appendChild(creaScheda(libro, "Te lo consiglio perché ogni tanto il libro giusto è quello che non stavi cercando."));
  scorriInFondo();
  pulsantiFinali();
}

/* ============================================================
   Sfoglia tutto il catalogo: griglia + barra filtri
   ============================================================ */
function creaCellaCatalogo(libro) {
  const cella = el("button", "cella-catalogo");
  cella.type = "button";
  cella.setAttribute("aria-label", `Apri la scheda di ${libro.titolo}`);
  cella.appendChild(creaCopertina(libro, true));
  cella.appendChild(el("span", "cella-titolo", libro.titolo));
  cella.addEventListener("click", () => apriSchedaModale(libro));
  return cella;
}

// Costruisce la vista catalogo (barra filtri + contatore + griglia).
// È usata sia dentro la chat ("Sfoglia tutto il catalogo") sia
// nella modale aperta dal pulsante 📚 Catalogo dell'header.
function creaVistaCatalogo() {
  const box = el("div", "catalogo-box");

  // --- casella di ricerca (Ovunque / Titolo / Autore / Parola chiave) ---
  const barraCerca = el("div", "barra-cerca");
  barraCerca.setAttribute("role", "search");
  const campoCerca = document.createElement("select");
  campoCerca.className = "cerca-campo";
  campoCerca.setAttribute("aria-label", "Dove cercare");
  [["tutto", "🔎 Ovunque"], ["titolo", "Titolo"], ["autore", "Autore"], ["parola", "Parola chiave"]]
    .forEach(([valore, testo]) => {
      const opt = document.createElement("option");
      opt.value = valore;
      opt.textContent = testo;
      campoCerca.appendChild(opt);
    });
  const inputCerca = document.createElement("input");
  inputCerca.type = "search";
  inputCerca.className = "cerca-input";
  inputCerca.placeholder = "Cerca nel catalogo…";
  inputCerca.setAttribute("aria-label", "Cerca nel catalogo");
  campoCerca.addEventListener("change", () => aggiornaGriglia());
  inputCerca.addEventListener("input", () => aggiornaGriglia());
  barraCerca.append(campoCerca, inputCerca);

  // --- definizione dei cinque filtri (si azzerano a ogni apertura) ---
  const definizioni = [
    { id: "classe",     label: "Classe",     opzioni: [["", "Tutte"], ["1", "1ª"], ["2", "2ª"], ["3", "3ª"]] },
    { id: "genere",     label: "Genere",     opzioni: [["", "Tutti"], ...generiPresenti(CATALOGO).map(g => [g, `${emojiGenere(g)} ${maiuscola(g)}`])] },
    { id: "formato",    label: "Formato",    opzioni: [["", "Tutti"], ...formatiPresenti(CATALOGO).map(f => [f, `${emojiFormato(f)} ${maiuscola(f)}`])] },
    { id: "difficolta", label: "Difficoltà", opzioni: [["", "Tutte"], ["facile", "Facile"], ["media", "Media"], ["impegnativa", "Impegnativa"]] },
    { id: "lunghezza",  label: "Lunghezza",  opzioni: [["", "Tutte"], ["corto", "Corto (<200 pag.)"], ["medio", "Medio (200–300)"], ["lungo", "Lungo (>300)"]] }
  ];

  const barra = el("div", "barra-filtri");
  barra.setAttribute("role", "group");
  barra.setAttribute("aria-label", "Filtri del catalogo");
  const tendine = {};
  definizioni.forEach(def => {
    const campo = el("label", "filtro");
    campo.appendChild(el("span", "filtro-label", def.label));
    const sel = document.createElement("select");
    def.opzioni.forEach(([valore, testo]) => {
      const opt = document.createElement("option");
      opt.value = valore;
      opt.textContent = testo;
      sel.appendChild(opt);
    });
    sel.addEventListener("change", aggiornaGriglia);
    tendine[def.id] = sel;
    campo.appendChild(sel);
    barra.appendChild(campo);
  });

  const riga = el("div", "riga-risultati");
  const contatore = el("p", "contatore-risultati");
  contatore.setAttribute("aria-live", "polite");
  const azzera = el("button", "btn-azzera", "Azzera filtri ✕");
  azzera.type = "button";
  azzera.hidden = true;
  azzera.addEventListener("click", () => {
    Object.values(tendine).forEach(sel => { sel.value = ""; });
    inputCerca.value = "";
    campoCerca.value = "tutto";
    aggiornaGriglia();
  });
  riga.append(contatore, azzera);

  const griglia = el("div", "griglia-catalogo");

  function aggiornaGriglia() {
    const valore = id => tendine[id].value;
    const query = inputCerca.value.trim();
    azzera.hidden = !Object.values(tendine).some(sel => sel.value !== "") && query === "";

    const testLunghezza = valore("lunghezza")
      ? LUNGHEZZE.find(l => l.id === valore("lunghezza")).test
      : null;

    const libri = CATALOGO.filter(libro =>
      corrispondeRicerca(libro, campoCerca.value, query) &&
      (!valore("classe")     || libro.classi.includes(Number(valore("classe")))) &&
      (!valore("genere")     || generiDi(libro).includes(valore("genere"))) &&
      (!valore("formato")    || libro.formato === valore("formato")) &&
      (!valore("difficolta") || libro.difficolta === valore("difficolta")) &&
      (!testLunghezza        || testLunghezza(libro.pagine))
    );

    // Ordine alfabetico per titolo, ignorando l'articolo iniziale
    libri.sort((a, b) => chiaveTitolo(a.titolo).localeCompare(chiaveTitolo(b.titolo), "it"));

    contatore.textContent = libri.length === 1 ? "1 libro trovato" : `${libri.length} libri trovati`;
    griglia.innerHTML = "";
    if (libri.length === 0) {
      griglia.appendChild(el("p", "griglia-vuota",
        "Nessun libro con questi criteri… prova a cambiare la ricerca o a togliere un filtro! 🙈"));
    } else {
      libri.forEach(libro => griglia.appendChild(creaCellaCatalogo(libro)));
    }
  }

  box.append(barraCerca, barra, riga, griglia);
  aggiornaGriglia();
  return box;
}

// Catalogo dentro la chat (pulsante "Sfoglia tutto il catalogo")
function mostraCatalogo() {
  messaggioBot(`Ecco tutto il catalogo: <strong>${CATALOGO.length} libri</strong>. Usa i filtri per cercare e tocca una copertina per aprire la scheda. 📚`);
  chat.appendChild(creaVistaCatalogo());
  scorriInFondo();
  pulsantiFinali();
}

// Catalogo nella modale (pulsante 📚 Catalogo dell'header e
// parola "Catalogo" della nota): non tocca la chat.
function apriCatalogoModale() {
  const contenitore = document.getElementById("catalogo-contenitore");
  contenitore.innerHTML = "";
  contenitore.appendChild(creaVistaCatalogo());
  apriModale(document.getElementById("modale-catalogo"));
}
/* ============================================================
   Modali (Info e Scheda libro)
   ============================================================ */
// Pila delle modali aperte: permette di aprire la scheda di un
// libro SOPRA la modale del catalogo e di richiudere nell'ordine
// giusto (ESC chiude solo l'ultima aperta).
const pilaModali = [];

function apriModale(modale) {
  pilaModali.push({ modale, elementoPrima: document.activeElement });
  modale.hidden = false;
  document.body.classList.add("modale-aperta");
  modale.querySelector(".modale-chiudi").focus();
}

function chiudiModale(modale) {
  const indice = pilaModali.findIndex(voce => voce.modale === modale);
  const voce = indice !== -1 ? pilaModali.splice(indice, 1)[0] : null;
  modale.hidden = true;
  // sblocca lo scorrimento solo quando non resta nessuna modale aperta
  if (pilaModali.length === 0) document.body.classList.remove("modale-aperta");
  if (voce && voce.elementoPrima && voce.elementoPrima.focus) voce.elementoPrima.focus();
}

function collegaModale(modale) {
  // Chiusura con la X
  modale.querySelector(".modale-chiudi").addEventListener("click", () => chiudiModale(modale));
  // Chiusura cliccando fuori dal contenuto
  modale.addEventListener("click", evento => {
    if (evento.target === modale) chiudiModale(modale);
  });
}

// Chiusura con il tasto ESC: chiude solo l'ultima modale aperta
document.addEventListener("keydown", evento => {
  if (evento.key === "Escape" && pilaModali.length > 0) {
    chiudiModale(pilaModali[pilaModali.length - 1].modale);
  }
});

function apriSchedaModale(libro) {
  const contenitore = document.getElementById("scheda-contenitore");
  contenitore.innerHTML = "";
  contenitore.appendChild(creaScheda(libro, null));
  apriModale(document.getElementById("modale-scheda"));
}

/* ============================================================
   Icone SVG dei contatti (nessuna dipendenza esterna)
   ============================================================ */
const ICONE = {
  email: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6.5l9 7 9-7"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.2 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none"/></svg>`,
  sito: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18-2.8-2.6-2.8-15.4 0-18z"/></svg>`
};

function riempiInfo() {
  document.getElementById("info-descrizione").innerHTML = INFO_DESCRIZIONE;
  document.getElementById("info-bio").innerHTML = INFO_BIO;
  document.getElementById("contatti").innerHTML = `
    <li><a href="mailto:${EMAIL_DOCENTE}">${ICONE.email}<span>${EMAIL_DOCENTE}</span></a></li>
    <li><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">${ICONE.instagram}<span>${INSTAGRAM_NOME}</span></a></li>
    <li><a href="${SITO_URL}" target="_blank" rel="noopener">${ICONE.sito}<span>${SITO_NOME}</span></a></li>
  `;
}

/* ============================================================
   Decorazioni del quaderno: data in alto e scarabocchi a margine
   ============================================================ */
// Piccoli ghirigori "a penna rossa" (SVG inline, nessuna immagine)
const SCARABOCCHI_SVG = [
  // stellina
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.5l1.8 4 4.4.4-3.3 2.9 1 4.3L8 10.8l-3.9 2.3 1-4.3L1.8 5.9l4.4-.4z"/></svg>`,
  // cuoricino
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M8 13.5C4 10.5 1.5 8 1.5 5.5a3 3 0 0 1 6-.6h1a3 3 0 0 1 6 .6C14.5 8 12 10.5 8 13.5z"/></svg>`,
  // riccio a molla
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M1 11c2-4 3 4 5 0s3 4 5 0 2 2 4 0"/></svg>`,
  // asterisco
  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M8 2v12M2 8h12M3.8 3.8l8.4 8.4M12.2 3.8l-8.4 8.4"/></svg>`
];

function decoraQuaderno() {
  const main = document.querySelector(".main");
  if (!main) return;

  // Intestazione con la data di oggi, come su un compito in classe
  const intestazione = el("div", "intestazione-quaderno");
  const oggi = new Date().toLocaleDateString("it-IT",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  intestazione.appendChild(el("span", "riga-data", `oggi è <strong>${oggi}</strong>`));
  main.insertBefore(intestazione, document.getElementById("chat"));

  // Scarabocchi sparsi lungo il margine destro (decorativi)
  const contenitore = el("div", "scarabocchi");
  contenitore.setAttribute("aria-hidden", "true");
  const posizioni = [
    { top: "9%",  rotazione: -10 },
    { top: "28%", rotazione: 7 },
    { top: "47%", rotazione: -14 },
    { top: "66%", rotazione: 9 },
    { top: "85%", rotazione: -6 }
  ];
  posizioni.forEach((p, i) => {
    const doodle = el("div", "doodle", SCARABOCCHI_SVG[i % SCARABOCCHI_SVG.length]);
    doodle.style.top = p.top;
    doodle.style.transform = `rotate(${p.rotazione}deg)`;
    contenitore.appendChild(doodle);
  });
  main.appendChild(contenitore);
}

/* ============================================================
   Avvio
   ============================================================ */
// Scrive la nota dell'header e, se il testo contiene la parola
// "catalogo", la rende cliccabile: apre la modale del catalogo.
function scriviNotaCatalogo() {
  const nodo = document.getElementById("nota-testo");
  const testo = "📚 " + NOTA_CATALOGO;
  const posizione = testo.toLowerCase().indexOf("catalogo");
  if (posizione === -1) {          // parola assente: testo semplice
    nodo.textContent = testo;
    return;
  }
  nodo.textContent = "";
  nodo.append(testo.slice(0, posizione));
  const legame = el("button", "link-catalogo", testo.substr(posizione, "catalogo".length));
  legame.type = "button";
  legame.setAttribute("aria-haspopup", "dialog");
  legame.addEventListener("click", apriCatalogoModale);
  nodo.appendChild(legame);
  nodo.append(testo.slice(posizione + "catalogo".length));
}

function inizializza() {
  // Testi dell'header
  document.getElementById("sottotitolo").textContent = SOTTOTITOLO;
  scriviNotaCatalogo();
  decoraQuaderno();
  document.getElementById("conta-libri").textContent =
    ` · ${CATALOGO.length} libri e continua a crescere…`;

  // Modali. La parte Info è FACOLTATIVA: index_studenti.html
  // (la copia per gli studenti) non ha pulsante, link nel footer
  // né modale Info, e tutto il resto deve funzionare lo stesso.
  const modaleScheda = document.getElementById("modale-scheda");
  const modaleCatalogo = document.getElementById("modale-catalogo");
  collegaModale(modaleScheda);
  collegaModale(modaleCatalogo);

  const modaleInfo = document.getElementById("modale-info");
  if (modaleInfo) {
    collegaModale(modaleInfo);
    riempiInfo();
    const btnInfo = document.getElementById("btn-info");
    if (btnInfo) btnInfo.addEventListener("click", () => apriModale(modaleInfo));
    const btnInfoFooter = document.getElementById("btn-info-footer");
    if (btnInfoFooter) btnInfoFooter.addEventListener("click", () => apriModale(modaleInfo));
  }

  document.getElementById("btn-catalogo").addEventListener("click", apriCatalogoModale);

  avvia();
}

document.addEventListener("DOMContentLoaded", inizializza);
