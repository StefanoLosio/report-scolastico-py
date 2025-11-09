function ricaricaScript(src) {
    // Trova lo script esistente 
    const scriptEsistente = document.querySelector(`script[src="${src}"]`); 
    if (scriptEsistente) { 
        scriptEsistente.remove(); // rimuove lo script dalla pagina console.log(Rimosso script: ${src}); 
    }
    // Crea un nuovo script const 
    nuovoScript = document.createElement("script"); 
    nuovoScript.src = src; nuovoScript.defer = true; 
    document.body.appendChild(nuovoScript); 
}

const contenuto = document.getElementById("contenuto");

function assegnazioni() {
    contenuto.innerHTML = `
        <div id="contenitore">
            <div style="display: flex; flex-direction: row; justify-content: center; gap: 10vw; align-items: center;">
                <div id="data"><div id="mese"></div><div id="anno"></div></div>
                <div id="cambiaMese">
                    <button id="precedente"></button>
                    <button id="oggi">oggi</button>
                    <button id="successivo"></button>
                </div>
            </div>
            <div id="giorni">
                <div>Lun</div>
                <div>Mar</div>
                <div>Mer</div>
                <div>Gio</div>
                <div>Ven</div>
                <div>Sab</div>
                <div>Dom</div>
            </div>
            <div id="tabella"></div>
        </div>
        <div id="note">
            <h2>Note</h2>
            <ul id="agenda">
                Nessun evento per oggi.
            </ul>
        </div>
    `;

    ricaricaScript("calendario.js");
    ricaricaScript("visualizzaEventi.js"); 
};