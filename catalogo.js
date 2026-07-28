/* ============================================================
   CATALOGO DI CONSIGLIALIBRO
   ============================================================

   COME AGGIUNGERE UN LIBRO (anche se non sai programmare):

   1. Copia un blocco intero, da una parentesi graffa { alla
      sua chiusura },  (compresa la virgola finale).
   2. Incollalo prima della riga finale con la parentesi ];
   3. Cambia i testi tra virgolette. Attenzione a:
      - non cancellare le virgolette " "
      - non cancellare le virgole alla fine delle righe
      - se nel testo ti serve un apostrofo o una virgoletta,
        usa pure l'apostrofo ' normale: è tutto tra doppi apici.

   SIGNIFICATO DEI CAMPI:
   - titolo, autore, trama, notaDocente: testo libero.
   - formato: che tipo di libro è, UN SOLO valore (è un filtro
     rigido e nel quiz è la domanda 2). Vocabolario ufficiale:
       "romanzo", "racconti", "poesia", "manga & fumetto",
       "saggio", "albo illustrato", "diario"
     Puoi inventare etichette nuove: compaiono da sole tra i
     pulsanti e nei filtri (con l'emoji generica 📚, salvo
     aggiungerla in EMOJI_FORMATI in cima ad app.js). Scrivi
     l'etichetta sempre uguale, tutto minuscolo. Nei casi ibridi
     scegli il formato che meglio descrive l'esperienza di
     lettura (es. un diario a fumetti → "manga & fumetto").
   - genere: etichetta libera, UNO O PIÙ valori (nel quiz è la
     domanda 4, e pesa sul punteggio). Vocabolario ufficiale:
       "fiaba & favola", "avventura", "umorismo", "fantasy",
       "giallo", "mistero & fantastico", "formazione",
       "psicologico", "storico & sociale", "romance",
       "fantascienza", "classico", "biografia & autobiografia",
       "horror"
     Più generi: tra parentesi quadre, es. ["avventura",
     "formazione"]. Il PRIMO è quello principale: decide emoji e
     colore della copertina segnaposto; gli altri contano
     comunque per la domanda e per il filtro. Anche qui puoi
     coniare generi nuovi (emoji e colore in STILE_GENERI in cima
     ad app.js, altrimenti 📕 e un colore neutro).
   - classi: le classi per cui il libro è adatto, tra parentesi
     quadre e separate da virgole. Esempi: [1] solo prima,
     [2, 3] seconda e terza, [1, 2, 3] tutte.
   - effetto: che cosa "fa" il libro a chi lo legge. Uno o più
     valori tra parentesi quadre, scelti ESATTAMENTE tra questi
     quattro: "ridere", "emozionarmi", "brividi", "riflettere".
     Esempio: ["emozionarmi", "riflettere"]
   - paroleChiave: da 3 a 6 parole tra virgolette, separate da
     virgole, dentro le parentesi quadre [ ].
   - difficolta: "facile", "media" oppure "impegnativa".
   - pagine: solo il numero, senza virgolette.
   - copertina: il nome del file immagine dentro la cartella
     /copertine (es. "wonder.jpg"). Se il file non c'è ancora,
     il sito mostra automaticamente una copertina segnaposto.

   Per ELIMINARE un libro: cancella tutto il suo blocco { ... },
   ============================================================ */

const CATALOGO = [
  {
    titolo: "Wonder",
    autore: "R.J. Palacio",
    genere: ["formazione", "psicologico"],
    classi: [1, 2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["amicizia", "diversità", "scuola", "coraggio", "commovente"],
    trama: "August ha dieci anni, una passione per lo spazio e un volto diverso da tutti gli altri. Dopo anni di scuola a casa, entra per la prima volta in una vera classe. Un anno scolastico raccontato da tante voci, che ti farà ridere e commuovere.",
    difficolta: "facile",
    pagine: 285,
    notaDocente: "È il libro che consiglio quando qualcuno mi dice \"non mi piace leggere\". Dopo Wonder, di solito, cambia idea.",
    copertina: "wonder.jpg"
  },
  {
    titolo: "Lo Hobbit",
    autore: "J.R.R. Tolkien",
    genere: "fantasy",
    classi: [2, 3],
    effetto: ["emozionarmi", "brividi"],
    formato: "romanzo",
    paroleChiave: ["draghi", "viaggio", "magia", "tesoro", "compagnia"],
    trama: "Bilbo Baggins ama la vita tranquilla, finché un mago e tredici nani non bussano alla sua porta per trascinarlo in una missione: riconquistare un tesoro custodito da un drago. Un viaggio pieno di troll, enigmi e un misterioso anello.",
    difficolta: "impegnativa",
    pagine: 342,
    notaDocente: "Il fantasy da cui è nato tutto il fantasy. Richiede un po' di pazienza all'inizio, ma poi non si molla più.",
    copertina: "lo-hobbit.jpg"
  },
  {
    titolo: "Percy Jackson e gli dei dell'Olimpo. 1. Il ladro di fulmini",
    autore: "Rick Riordan",
    genere: "fantasy",
    classi: [1, 2, 3],
    effetto: ["ridere", "brividi"],
    formato: "romanzo",
    paroleChiave: ["mitologia", "avventura", "dei greci", "azione", "ironia"],
    trama: "Percy ha dodici anni, qualche guaio a scuola e un segreto che non conosce: è il figlio di un dio greco. Quando Zeus lo accusa di aver rubato il suo fulmine, ha dieci giorni per trovare il vero ladro e evitare una guerra tra dèi.",
    difficolta: "media",
    pagine: 361,
    notaDocente: "Mitologia greca ad altissima velocità: perfetto se ti piacciono l'azione e le battute. E poi ripassi Omero senza accorgertene.",
    copertina: "percy-jackson-il-ladro-di-fulmini.jpg"
  },
  {
    titolo: "Diario di una schiappa",
    autore: "Jeff Kinney",
    genere: "umorismo",
    classi: [1, 2, 3],
    effetto: ["ridere"],
    formato: "diario",
    paroleChiave: ["scuola", "risate", "fumetto", "famiglia", "disavventure"],
    trama: "Greg Heffley inizia la scuola media con un piano preciso: diventare popolare. Peccato che tra fratelli dispettosi, amici imbarazzanti e il temutissimo Formaggio Maledetto, niente vada mai come previsto. Un diario tra testo e vignette, primo capitolo di una serie di enorme successo in tutto il mondo.",
    difficolta: "facile",
    pagine: 217,
    notaDocente: "Si legge in un lampo e si ride davvero. Ottimo per riprendere il ritmo della lettura dopo una pausa.",
    copertina: "diario-di-una-schiappa.jpg"
  },
  {
    titolo: "La fabbrica di cioccolato",
    autore: "Roald Dahl",
    genere: "mistero & fantastico",
    classi: [1, 2],
    effetto: ["ridere", "emozionarmi"],
    formato: "romanzo",
    paroleChiave: ["cioccolato", "fantasia", "invenzioni", "giustizia", "sorprese"],
    trama: "Charlie Bucket è poverissimo, ma trova uno dei cinque biglietti d'oro che aprono le porte della misteriosa fabbrica di Willy Wonka. Dentro lo aspettano fiumi di cioccolato, invenzioni impossibili e quattro bambini decisamente insopportabili.",
    difficolta: "facile",
    pagine: 208,
    notaDocente: "Dahl è garanzia: cattivissimo con i personaggi antipatici e dolcissimo con i lettori. Da leggere anche se hai visto il film.",
    copertina: "la-fabbrica-di-cioccolato.jpg"
  },
  {
    titolo: "L'isola del tesoro",
    autore: "Robert Louis Stevenson",
    genere: ["avventura", "classico"],
    classi: [2, 3],
    effetto: ["brividi", "emozionarmi"],
    formato: "romanzo",
    paroleChiave: ["pirati", "mare", "tesoro", "coraggio", "tradimenti"],
    trama: "Quando un vecchio marinaio muore nella locanda dei suoi genitori, Jim Hawkins trova nel suo baule la mappa di un tesoro. Inizia così un viaggio per mare tra pirati, ammutinamenti e il più affascinante dei cattivi: Long John Silver.",
    difficolta: "media",
    pagine: 260,
    notaDocente: "Il romanzo di pirati per eccellenza. Se ti è mai piaciuta una storia di mare, è nata quasi sicuramente da qui.",
    copertina: "lisola-del-tesoro.jpg"
  },
  {
    titolo: "Uno studio in rosso",
    autore: "Arthur Conan Doyle",
    genere: ["giallo", "classico"],
    classi: [2, 3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["Sherlock Holmes", "indagine", "Londra", "deduzione", "delitto"],
    trama: "Il dottor Watson cerca un coinquilino a Londra e finisce per dividere casa con un tipo stranissimo che capisce tutto di tutti al primo sguardo: Sherlock Holmes. Insieme affrontano il primo caso, un delitto con una scritta misteriosa sul muro.",
    difficolta: "impegnativa",
    pagine: 176,
    notaDocente: "Qui nasce il detective più famoso del mondo. Corto, elegante e con un finale che spiega ogni tassello: da leggere con la matita in mano.",
    copertina: "uno-studio-in-rosso.jpg"
  },
  {
    titolo: "Storia di una gabbianella e del gatto che le insegnò a volare",
    autore: "Luis Sepúlveda",
    genere: ["fiaba & favola", "formazione"],
    classi: [1, 2],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["promessa", "amicizia", "mare", "diversità", "tenerezza"],
    trama: "Una gabbiana, intrappolata dal petrolio, affida il suo uovo a Zorba, un grosso gatto nero del porto di Amburgo. Zorba promette di covarlo, proteggere la piccola e, soprattutto, insegnarle a volare. Ma come fa un gatto a insegnare il volo?",
    difficolta: "facile",
    pagine: 128,
    notaDocente: "Una storia breve che dice cose enormi: sulle promesse, sull'accogliere chi è diverso e sul coraggio di lanciarsi. Fa bene al cuore.",
    copertina: "gabbianella.jpg"
  },
  {
    titolo: "Piccole donne",
    autore: "Louisa May Alcott",
    genere: ["classico", "formazione"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["sorelle", "famiglia", "crescere", "sogni", "Ottocento"],
    trama: "Meg, Jo, Beth e Amy crescono in una casa piena di affetto ma con pochi soldi, mentre il padre è lontano per la guerra. Tra recite, litigi, sogni di gloria e prime delusioni, ognuna cerca la propria strada. Jo, aspirante scrittrice, vi conquisterà.",
    difficolta: "media",
    pagine: 360,
    notaDocente: "Un classico che non invecchia: Jo March è una delle protagoniste più moderne che conosca, altro che romanzo \"antico\".",
    copertina: "piccole-donne.jpg"
  },
  {
    titolo: "Il richiamo della foresta",
    autore: "Jack London",
    genere: ["avventura", "classico"],
    classi: [3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["cani", "natura selvaggia", "Alaska", "sopravvivenza", "libertà"],
    trama: "Buck è un cane di casa, viziato e felice, finché non viene rapito e venduto come cane da slitta nel gelo del Grande Nord. Per sopravvivere dovrà imparare le dure leggi dei lupi e ascoltare un richiamo antico che viene dalla foresta.",
    difficolta: "impegnativa",
    pagine: 160,
    notaDocente: "Poche pagine ma intense: London non addolcisce niente. Per chi vuole una storia vera, dura e bellissima sulla natura.",
    copertina: "il-richiamo-della-foresta.jpg"
  },
  {
    titolo: "La bussola d'oro",
    autore: "Philip Pullman",
    genere: "fantasy",
    classi: [2, 3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["mondi paralleli", "daimon", "orsi corazzati", "mistero", "viaggio al Nord"],
    trama: "Nel mondo di Lyra ogni persona ha un daimon, un animale che è parte della sua anima. Quando il suo migliore amico scompare come altri bambini, Lyra parte verso il Nord con uno strano strumento capace di dire la verità: l'aletiometro.",
    difficolta: "impegnativa",
    pagine: 360,
    notaDocente: "Un fantasy ricco e ambizioso, con una delle protagoniste più coraggiose di sempre. Se lo ami, è una trilogia: sei sistemato per mesi.",
    copertina: "la-bussola-doro.jpg"
  },
  {
    titolo: "Se tutte insieme. Poesie di madri, figlie, sorelle",
    autore: "Silvia Vecchini",
    genere: ["storico & sociale", "formazione"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "poesia",
    paroleChiave: ["donne", "femminismo", "madri e figlie", "famiglia", "identità"],
    trama: "Una raccolta di poesie che è un canto a tutte le donne: madri, figlie, sorelle e la lunga catena di chi ci ha precedute. Silvia Vecchini intreccia infanzia, ricordi e piccoli gesti quotidiani in versi liberi e limpidi, illustrati da Sualzo. Un invito a riconoscersi parte di una storia più grande.",
    difficolta: "media",
    pagine: 112,
    notaDocente: "La poesia a scuola spesso mette soggezione: questa no. Vecchini scrive versi che sembrano parlare a bassa voce. Leggetene una alla volta, senza fretta.",
    copertina: "se-tutte-insieme.jpg"
  },
  {
    titolo: "In mezzo alla fiaba",
    autore: "Silvia Vecchini",
    genere: ["fiaba & favola"],
    classi: [1, 2],
    effetto: ["emozionarmi", "riflettere"],
    formato: "poesia",
    paroleChiave: ["fiabe", "poesia", "crescere", "trasformazione", "illustrazioni"],
    trama: "Venti poesie si nascondono dentro le fiabe che conosci: a parlare non è il narratore, ma una voce testimone che ha visto, rischiato, perso e capito. Un gioco raffinato tra parole e immagini, in cui scoprire a quale fiaba appartiene ogni voce grazie ai titoli nascosti nelle ultime pagine.",
    difficolta: "facile",
    pagine: 48,
    notaDocente: "Perfetto per chi pensa che la poesia sia noiosa: qui è un indovinello. Riconoscere la fiaba dietro ogni voce diverte e, senza accorgersene, fa scoprire quanto una poesia può dire in poche righe.",
    copertina: "in-mezzo-alla-fiaba.jpg"
  },
  {
    titolo: "Canti dell'inizio Canti della fine",
    autore: "Silvia Vecchini e Bruno Tognolini",
    genere: ["formazione", "psicologico"],
    classi: [1, 2],
    effetto: ["emozionarmi", "riflettere"],
    formato: "poesia",
    paroleChiave: ["poesia", "inizi e fine", "crescere", "rime", "illustrazioni"],
    trama: "Venti momenti della vita, ciascuno con un inizio e una fine: il gelato, la scuola, il teatro… Silvia Vecchini e Bruno Tognolini firmano a quattro mani quaranta poesie sui passaggi, quegli attimi di confine in cui qualcosa sta per cominciare o per finire. Ritmo, rime e immagini che affiorano piano.",
    difficolta: "facile",
    pagine: 64,
    notaDocente: "Due poeti diversissimi nello stesso libro: uno batte il ritmo come un tamburo, l'altra scava le parole ripetendole. Bello da leggere ad alta voce, magari a due voci, una ciascuno.",
    copertina: "canti-dellinizio-canti-della-fine.jpg"
  },
  {
    titolo: "CountDawn 1. Il libro di neve",
    autore: "Pierdomenico Baccalario e Marco Magnone",
    genere: "fantascienza",
    classi: [3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["distopia", "intelligenza artificiale", "ribelli", "libertà", "futuro"],
    trama: "Anno 2069: una forma di vita ostile si è fusa con la tecnologia e ha ridotto l'umanità in schiavitù. Un gruppo di ribelli rischia tutto per spedire indietro nel tempo un libro fragilissimo, fatto di carta e inchiostro perché nessuno scanner possa leggerlo: un avvertimento capace di cambiare la storia. Primo volume di una dilogia distopica ad alta tensione.",
    difficolta: "impegnativa",
    pagine: 320,
    notaDocente: "La fantascienza distopica che tiene incollati: ritmo serratissimo e, sotto l'azione, una domanda seria su quanto possiamo fidarci della tecnologia. Avvisati: appena finito, vorrete subito il secondo volume.",
    copertina: "countdawn-1-il-libro-di-neve.jpg"
  },
  {
    titolo: "La pescatrice",
    autore: "Giuseppe Festa",
    genere: ["avventura", "formazione"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["mare", "crescere", "mistero", "natura", "pesca"],
    trama: "Marettimo, Sicilia. Scilla, quattordici anni, è la 'Capitana' della feluca ereditata dal padre. Il giorno in cui cattura il pesce spada più grande della sua vita, tra le branchie trova un ciondolo d'oro con una foto: da lì parte una ricerca fatta di tempeste e silenzi, mentre un segreto riaffiora dal passato. Una storia di formazione e di mare, tra radici e voglia di libertà.",
    difficolta: "media",
    pagine: 288,
    notaDocente: "Festa racconta il mare come pochi sanno fare, e qui ci aggiunge un mistero che non molla la presa. Se ami le storie in cui la natura è un personaggio e crescere vuol dire imparare a riconoscersi, Scilla ti resterà addosso.",
    copertina: "la-pescatrice.jpg"
  },
  {
    titolo: "Ettie e lo stagno di mezzanotte",
    autore: "Julia Green",
    genere: ["avventura", "mistero & fantastico"],
    classi: [1, 2],
    effetto: ["emozionarmi", "brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["natura", "libertà", "mistero", "crescere", "acqua"],
    trama: "Ettie vive con la nonna in una valle isolata, tra boschi e vecchie storie, in un mondo che porta i segni di una catastrofe lontana. Ma il suo desiderio di libertà cresce in fretta e, quando la misteriosa Cora la conduce a una pozza nascosta dentro una cava, Ettie non resiste al richiamo di quelle acque fredde e profonde. Per svelare ciò che nascondono, dovrà immergersi fino in fondo al buio.",
    difficolta: "media",
    pagine: 256,
    notaDocente: "Un romanzo che sa di acqua, muschio e mistero: Julia Green scrive atmosfere che ti restano sulla pelle. Per chi ama la natura e le storie che, sotto una superficie tranquilla, nascondono qualcosa di più profondo.",
    copertina: "ettie-e-lo-stagno-di-mezzanotte.jpg"
  },
  {
    titolo: "Poesie della notte, del giorno, di ogni cosa intorno",
    autore: "Silvia Vecchini",
    genere: ["formazione", "psicologico"],
    classi: [1, 2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "poesia",
    paroleChiave: ["poesia", "crescere", "identità", "infanzia", "acquerelli"],
    trama: "L'esordio di Silvia Vecchini nella poesia per ragazzi: versi che scavano nel giacimento dell'infanzia e dell'adolescenza per portare a galla istanti di bellezza, lampi di dolore e improvvise consapevolezze. Tra il tempo dei giorni e quello sospeso del cuore, accompagnati dagli acquerelli di Marina Marcolin. Una poesia 'alta', che parla del coraggio di conoscere se stessi.",
    difficolta: "facile",
    pagine: 56,
    notaDocente: "Chiede di fermarsi e rileggere, ma non spaventatevi: sono poche pagine e ogni poesia sta in piedi da sola. Se una poesia ti è mai rimasta in testa senza sapere perché, qui ne trovi tante. Gli acquerelli di Marcolin fanno il resto.",
    copertina: "poesie-della-notte-del-giorno.jpg"
  },
  {
    titolo: "Nelle terre selvagge",
    autore: "Gary Paulsen",
    genere: ["avventura", "formazione"],
    classi: [1, 2, 3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["sopravvivenza", "natura", "coraggio", "solitudine", "resilienza"],
    trama: "Mentre vola verso il padre, l'aereo su cui viaggia Brian precipita nel nulla del Nord del Canada. Tredici anni, nessuno intorno per chilometri e in tasca solo una piccola accetta regalo della madre: da qui comincia la sua lotta per sopravvivere tra fame, animali selvatici e stagioni che cambiano. Un classico assoluto dell'avventura di sopravvivenza.",
    difficolta: "media",
    pagine: 182,
    notaDocente: "Uno di quei libri che ti fanno chiedere: 'io ce la farei?'. Paulsen scrive la fame, la paura e i piccoli trionfi con una precisione che ti mette lì, nel bosco, accanto a Brian. Impossibile smettere di leggere.",
    copertina: "nelle-terre-selvagge.jpg"
  },
  {
    titolo: "Alle medie senza cellulare",
    autore: "Annalisa Strada",
    genere: ["umorismo", "formazione"],
    classi: [1, 2],
    effetto: ["ridere", "riflettere"],
    formato: "diario",
    paroleChiave: ["scuola", "cellulare", "amicizia", "crescere", "tecnologia"],
    trama: "Cinzia è in prima media e, unica tra i compagni, non ha il cellulare. Peccato che le uscite del pomeriggio si organizzino nella chat di classe e che perfino i prof scrivano su WhatsApp: 'Non avere il cellulare è come non esistere', confida al suo diario Argo. Così propone ai genitori un patto: cento imprese per dimostrare di sapersela cavare da sola e conquistarsi il telefono.",
    difficolta: "facile",
    pagine: 208,
    notaDocente: "Una storia che i ragazzi di prima riconoscono al volo, raccontata con leggerezza e ironia. Fa ridere, ma sotto sotto pone la domanda giusta: cosa vuol dire davvero essere 'grandi'?",
    copertina: "alle-medie-senza-cellulare.jpg"
  },
  {
    titolo: "La casa sul mare celeste",
    autore: "T.J. Klune",
    genere: "fantasy",
    classi: [3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["magia", "diversità", "accettazione", "famiglia", "pregiudizio"],
    trama: "Linus Baker è un grigio assistente sociale del Dipartimento della Magia Minorile: verifica che gli orfanotrofi per bambini magici siano in regola. Un incarico top secret lo spedisce sull'isola di Marsyas, dove sei bambini specialissimi e il loro enigmatico tutore, Arthur Parnassus, gli rivolteranno la vita come un guanto. Una favola moderna su cosa significa trovare casa e accettare gli altri, e se stessi.",
    difficolta: "impegnativa",
    pagine: 348,
    notaDocente: "Un libro-abbraccio: comincia in grigio e finisce pieno di colore. Parla di diversità e di famiglie che si scelgono, e con delicatezza racconta anche l'amore tra due uomini. Ironia e tenerezza a ogni pagina: uno di quelli che ti lasciano più buono di come ti hanno trovato.",
    copertina: "la-casa-sul-mare-celeste.jpg"
  },
  {
    titolo: "Ombre sulla sabbia",
    autore: "Aidan Chambers",
    genere: ["formazione", "psicologico"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["crescere", "amicizia", "mare", "primo amore", "scelte"],
    trama: "Kevin ha diciassette anni e vive a Marle, una lingua di terra che con l'alta marea diventa isola. Costruisce barche nell'officina del nonno e non ha mai detto a Susan, l'unica sua coetanea, quello che prova davvero. Quando lei parte per la città, Kevin decide di seguirla: e scoprirà che allontanarsi da casa serve, a volte, per capire dove si vuole stare.",
    difficolta: "facile",
    pagine: 160,
    notaDocente: "Chambers lo scrisse per convincere a leggere una classe che non ne voleva sapere, e si sente: frasi asciutte, niente giri di parole. Sotto la superficie, però, c'è una domanda che a quindici anni brucia: seguire qualcuno o seguire se stessi?",
    copertina: "ombre-sulla-sabbia.jpg"
  },
  {
    titolo: "Viva la Costituzione. Le parole e i protagonisti",
    autore: "Andrea Franzoso",
    genere: ["storico & sociale"],
    classi: [2, 3],
    effetto: ["riflettere"],
    formato: "saggio",
    paroleChiave: ["costituzione", "diritti", "democrazia", "educazione civica", "storie vere"],
    trama: "Che cos'è davvero la Costituzione italiana? Andrea Franzoso la racconta attraverso venti parole - memoria, libertà, uguaglianza, lavoro, pace, resistenza... - e per ognuna mette in campo storie vere, testimoni e persone che quelle parole le hanno prese sul serio. Ne esce una Carta viva, che parla delle nostre giornate e delle nostre scelte.",
    difficolta: "media",
    pagine: 224,
    notaDocente: "L'ho trovato utilissimo per l'educazione civica: le venti parole si possono leggere una alla volta, anche fuori ordine, e ciascuna regge da sola una discussione in classe. Franzoso non fa la predica, racconta storie: ed è così che gli articoli smettono di essere formule e diventano persone.",
    copertina: "viva-la-costituzione.jpg"
  },
  {
    titolo: "Borders",
    autore: "Giuliana Facchini",
    genere: "fantascienza",
    classi: [2, 3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["distopia", "libertà", "ribellione", "natura", "amicizia"],
    trama: "Magnolia è una megalopoli perfetta in mezzo a un deserto di cemento: ruoli assegnati per sempre, ordine assoluto e nemmeno un libro, perché lì il sapere lo decide qualcun altro. Lindgren, Dickens, Verne e Alcott portano i nomi di scrittori che nessuno ricorda più, e la loro madre adottiva Olmo ha un progetto per loro: fuggire. Fuori dalle mura, però, c'è la natura selvaggia, e capire cosa sia giusto diventa molto più difficile.",
    difficolta: "media",
    pagine: 336,
    notaDocente: "Una distopia che non fa la maestrina: nessuna apocalisse spettacolare, solo quattro ragazzi che vogliono decidere da soli della propria vita. Ha vinto il Premio Rodari e si capisce perché. Avvertenza: c'è il seguito, No borders, e vorrete leggerlo.",
    copertina: "borders.jpg"
  },
  {
    titolo: "Il custode",
    autore: "Niccolò Ammaniti",
    genere: "mistero & fantastico",
    classi: [3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["mito", "Medusa", "Sicilia", "segreto di famiglia", "crescere"],
    trama: "In un borgo sperduto della costa siciliana i Vasciaveo lavorano il marmo. È una copertura: da secoli quella famiglia custodisce in casa qualcosa che nessuno deve vedere. Nilo ha tredici anni e sa che quel compito, un giorno, sarà tutto suo. Poi in paese arrivano Arianna e sua figlia Saskia, e l'equilibrio che teneva in piedi tutto comincia a incrinarsi.",
    difficolta: "impegnativa",
    pagine: 176,
    notaDocente: "Un avvertimento prima di tutto: Ammaniti mescola elementi della narrativa per ragazzi con la narrativa per adulti. Troverete: violenza, un adolescente alle prese con desideri che non sa gestire, e alcune pagine molto forti. Una lettura da fare non prima della terza e su cui confrontarsi con i più grandi. Detto questo, però, è una favola gotica splendida: breve, velocissima, sul peso di un destino che ti tocca per nascita e sulla voglia di sceglierne un altro.",
    copertina: "il-custode.jpg"
  },
  {
    titolo: "Un ragazzo è quasi niente",
    autore: "Lisa Balavoine",
    genere: ["formazione", "psicologico"],
    classi: [3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "poesia",
    paroleChiave: ["versi liberi", "musica", "primo amore", "fragilità", "cyberbullismo"],
    trama: "Romeo ha sedici anni e ha capito presto che cosa il mondo si aspetta da un maschio. Lui però preferisce ballare da solo, i film di Jim Jarmusch e la musica di un'altra epoca; la sua vera casa è il negozio di dischi dello zio, dove non deve assomigliare a niente. Poi incontra Justine, e per la prima volta scopre di non essere l'unico a volersi libero. Un romanzo scritto in versi, che si legge come una canzone.",
    difficolta: "media",
    pagine: 248,
    notaDocente: "Sono 248 pagine ma non spaventatevi: è scritto in versi liberi, e vola. Parla di una cosa di cui si parla poco, cioè quanto sia faticoso per un ragazzo non corrispondere all'idea di ragazzo che gli altri hanno in testa. C'è anche il cyberbullismo, raccontato dal punto di vista di chi sta accanto a chi lo subisce.",
    copertina: "un-ragazzo-e-quasi-niente.jpg"
  },
  {
    titolo: "L'ultimo cavaliere. La Torre Nera 1",
    autore: "Stephen King",
    genere: "fantasy",
    classi: [3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["deserto", "inseguimento", "western", "ossessione", "mondo perduto"],
    trama: "\"L'uomo in nero fuggì nel deserto e il pistolero lo inseguì\": comincia così il viaggio di Roland di Gilead, ultimo cavaliere di un mondo che è andato avanti e ha lasciato indietro tutto il resto. Rovine, città morte e un ragazzino incontrato per caso accompagnano una caccia che dura da anni, verso una Torre attorno a cui gira ogni realtà.",
    difficolta: "impegnativa",
    pagine: 223,
    notaDocente: "L'incipit più famoso di King, e uno dei più belli in assoluto. Attenzione però: è un libro per adulti, a volte con scene violente e con un finale che fa male. Consigliato per la terza e per chi legge già parecchio. È anche il primo di otto volumi: se vi prende, avete sistemato i prossimi due anni.",
    copertina: "lultimo-cavaliere.jpg"
  },
  {
    titolo: "Nihal della Terra del Vento. Cronache del Mondo Emerso 1",
    autore: "Licia Troisi",
    genere: "fantasy",
    classi: [1, 2, 3],
    effetto: ["brividi", "emozionarmi"],
    formato: "romanzo",
    paroleChiave: ["guerra", "spada", "vendetta", "magia", "crescere"],
    trama: "Nihal ha la pelle scura, i capelli blu e le orecchie a punta: nel Mondo Emerso non c'è nessun altro come lei. Cresciuta da un armaiolo in una città-torre della Terra del Vento, passa le giornate a battersi per gioco con gli amici, finché il Tiranno non arriva davvero. Da quel momento Nihal vuole solo una cosa: diventare guerriera e vendicarsi. Ma imparare a combattere e imparare a vivere non sono la stessa cosa.",
    difficolta: "media",
    pagine: 392,
    notaDocente: "Il fantasy che ha fatto leggere mezza generazione italiana, scritto da un'astrofisica che a vent'anni si è inventata un mondo intero. Nihal è arrabbiata, testarda e sbaglia parecchio: per questo funziona. C'è la guerra, quindi ci sono anche morti che pesano. È il primo di tre volumi, e poi ci sono altre due saghe nello stesso mondo.",
    copertina: "nihal-della-terra-del-vento.jpg"
  },
  {
    titolo: "Ero un bullo. La vera storia di Daniel Zaccaro",
    autore: "Andrea Franzoso",
    genere: ["biografia & autobiografia", "formazione"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["bullismo", "periferia", "storia vera", "riscatto", "seconde possibilità"],
    trama: "Daniel cresce a Quarto Oggiaro, tra i cortili delle case popolari e una famiglia che litiga sempre. Il calcio potrebbe essere la sua via d'uscita - a dieci anni gioca nell'Inter - finché un gol sbagliato non manda in pezzi tutto. Alle medie è il bullo che fa paura a tutti; qualche anno dopo è in carcere minorile, considerato un caso perso. Poi incontra qualcuno che non la pensa così.",
    difficolta: "media",
    pagine: 256,
    notaDocente: "È una storia vera, e Daniel Zaccaro oggi lavora proprio con i ragazzi come era lui. Quello che mi colpisce è che il libro non ti chiede di assolverlo: racconta le rapine e la rabbia senza sconti, e proprio per questo la parte finale non sembra una favoletta. Buono per parlare di bullismo senza fare la lezione.",
    copertina: "ero-un-bullo.jpg"
  },
  {
    titolo: "Bianca è cambiata!",
    autore: "Linda Traversi",
    genere: ["psicologico", "formazione"],
    classi: [2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["bugie", "amicizia", "genitori separati", "bullismo", "identità"],
    trama: "Bianca ha paura di tutto: dei bulli del quartiere, dei silenzi di sua madre, di una famiglia che si è spezzata in due case. Nella seconda casa, però, nessuno sa chi è davvero. E quando tre ragazze la accolgono nel loro gruppo, Bianca comincia a raccontare bugie: piccole, poi sempre più grandi. Per la prima volta si sente speciale. Ma quanto può reggere una vita costruita così?",
    difficolta: "media",
    pagine: 264,
    notaDocente: "La cosa coraggiosa di questo libro è che non ti fa detestare Bianca: capisci benissimo perché mente, e a un certo punto vorresti fermarla tu. Racconta bene quella fatica di essere accettati che alle medie conoscono quasi tutti. Finalista al Premio Bancarellino 2026.",
    copertina: "bianca-e-cambiata.jpg"
  },
  {
    titolo: "La bestia di Waltanna",
    autore: "Nicola Cinquetti",
    genere: ["mistero & fantastico", "avventura"],
    classi: [1, 2, 3],
    effetto: ["brividi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["palude", "mostro", "notte", "lutto", "paura"],
    trama: "Nelle paludi di Waltanna qualcuno ha visto una bestia enorme uscire dall'acqua: si parla di cavalli sbranati, ma prove non ce ne sono. Jonathan ci va per lavoro, e si porta dietro il fratello George, tredici anni, che vuole vedere con i suoi occhi. Poi l'auto si ferma, cala il buio e George resta solo tra i sentieri dell'acquitrino. Nel buio, si sa, riaffiorano i mostri: anche quelli che uno si porta dentro.",
    difficolta: "facile",
    pagine: 144,
    notaDocente: "Centoquaranta pagine e un'atmosfera che ti si appiccica addosso: Cinquetti costruisce la paura con i suoni e i silenzi più che con i colpi di scena. E mentre cerchi di capire se la bestia esista davvero, ti accorgi che il libro sta parlando del padre che George ha perso. Finalista al Premio Andersen 2026.",
    copertina: "la-bestia-di-waltanna.jpg"
  },
  {
    titolo: "Il ragazzo del fiume",
    autore: "Tim Bowler",
    genere: ["mistero & fantastico", "formazione"],
    classi: [1, 2, 3],
    effetto: ["emozionarmi", "riflettere"],
    formato: "romanzo",
    paroleChiave: ["nuoto", "fiume", "nonno", "sogno", "mistero"],
    trama: "Jess è nata per nuotare: l'acqua viene prima di tutto, tranne che di suo nonno. Quando scopre che al nonno resta poco tempo, lo accompagna nel paese della sua infanzia, dove il vecchio vuole finire un quadro rimasto incompiuto: \"Il ragazzo del fiume\". Ma nel fiume, intanto, Jess intravede qualcuno che nuota: un ragazzo che forse esiste e forse no, e che le lancia una sfida.",
    difficolta: "facile",
    pagine: 180,
    notaDocente: "Uno di quei libri in cui non capisci mai del tutto cosa sia reale e cosa no, e va benissimo così. Parla di un nonno che sta morendo, quindi non è una lettura leggera, ma è scritto con una delicatezza che lascia più consolati che tristi. Ha vinto la Carnegie Medal, e in Italia il Premio Andersen vent'anni dopo.",
    copertina: "il-ragazzo-del-fiume.jpg"
  },
];
