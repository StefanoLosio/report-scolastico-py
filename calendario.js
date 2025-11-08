const mese = document.getElementById("mese");
const anno = document.getElementById("anno");
const tabella = document.getElementById("tabella");

mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

function giorniDelMese() {
    const annoImpostato=parseInt(anno.textContent);
    const meseImpostato=mesi.indexOf(mese.textContent);

    // pulisco la tabella
    while (tabella.firstChild) {
        tabella.removeChild(tabella.firstChild);
    }

    let giorniMese = new Date(annoImpostato, meseImpostato + 1, 0).getDate();
    let primoGiorno = new Date(annoImpostato, meseImpostato, 1).getDay();
    if (primoGiorno === 0) {
        primoGiorno = 7;
    }

    let anno_mesePrec;
    if (meseImpostato === 0) {
        anno_mesePrec = annoImpostato - 1;
    } else {
        anno_mesePrec = annoImpostato;
    }

    let giorniMese_prec = new Date(anno_mesePrec, meseImpostato, 0).getDate();

    let giorniPrec = [];
    for (let giorno = primoGiorno; giorno > 1; giorno--) {
        giorniPrec.push(giorniMese_prec);
        giorniMese_prec--;
    }

    for (let i = giorniPrec.length - 1; i >= 0; i--) {
        let cella = document.createElement("div");
        cella.textContent = giorniPrec[i];
        cella.classList.add("nascondi");
        tabella.appendChild(cella);
    }

    for (let giorno = 1; giorno <= giorniMese; giorno++) {
        let cella = document.createElement("div");
        cella.textContent = giorno;
        if (giorno === new Date().getDate() && meseImpostato === new Date().getMonth() && annoImpostato === new Date().getFullYear()) {
            cella.classList.add("giornoOggi");
        }
        else{
            cella.classList.add("giorno");
        }
        tabella.appendChild(cella);
    }

    //let ultimoGiorno = new Date(anno, mese+1, giorniMese).getDate()
    let ultimoGiorno = new Date(annoImpostato, meseImpostato, giorniMese).getDay();
    if (ultimoGiorno === 0) {
        ultimoGiorno = 7;
    }

    let i = 1;
    for (let giorno = ultimoGiorno + 1; giorno <= 7; giorno++) {
        let cella = document.createElement("div");
        cella.textContent = i;
        cella.classList.add("nascondi");
        tabella.appendChild(cella);
        i++;
    }
}

function today() {
    mese.textContent = mesi[new Date().getMonth()];
    anno.textContent = new Date().getFullYear();
    giorniDelMese();
};

// primo settaggio al caricamento della pagina
today();

// funzioni per il click dei bottoni

const precedente = document.getElementById("precedente");
const oggi = document.getElementById("oggi");
const successivo = document.getElementById("successivo");

precedente.addEventListener("click", () => {
    const meseNumerico = mesi.indexOf(mese.textContent);
    const annoNumerico = parseInt(anno.textContent);

    if (meseNumerico === 0) {
        mese.textContent = mesi[11];
        anno.textContent = annoNumerico - 1;
    }
    else {
        mese.textContent = mesi[meseNumerico - 1];
    }
    giorniDelMese();
});

successivo.addEventListener("click", () => {
    const meseNumerico = mesi.indexOf(mese.textContent);
    const annoNumerico = parseInt(anno.textContent);

    if (meseNumerico === 11) {
        mese.textContent = mesi[0];
        anno.textContent = annoNumerico + 1;
    }
    else {
        mese.textContent = mesi[meseNumerico + 1];
    }
    giorniDelMese();
});

oggi.addEventListener("click", () => today());