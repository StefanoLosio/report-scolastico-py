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
            <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 10px; align-items: center;">
                <div id="data"><div id="mese"></div><div id="anno"></div></div>
                <div id="cambiaMese">
                    <button id="precedente">◀</button>
                    <button id="oggi">oggi</button>
                    <button id="successivo">▶</button>
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
        <div style="width: 30%; height: 50%; display: flex; flex-direction:column; gap: 20px;">
            <button id="nuova_assegnazione">nuova assegnazione +</button>
            <div id="note">
                <h2>Note</h2>
                <ul id="agenda">
                </ul>
            </div>
        </div>
    `;
    
    ricaricaScript("visualizzaEventi.js"); 
    ricaricaScript("calendario.js");
    ricaricaScript("form.js");
};