async function visualizzaEventi(dataEvento) {
    const agenda = document.getElementById("agenda");
    
    const listaEventi = await window.pywebview.api.getAssegnazioni(dataEvento);

    // Svuota l’agenda prima di popolare
    agenda.innerHTML = "";

    if (!listaEventi || listaEventi.length === 0) {
        agenda.innerHTML = "<p>Nessun evento per oggi.</p>";
        return;
    }

    for (const evento of listaEventi) {
        const li = document.createElement("li");
        li.className = "evento";

        // Testo dell’evento
        const testo = document.createElement("span");
        testo.textContent = `${evento.Materia}: ${evento.Descrizione}`;

        // Icone azione come span
        const iconaModifica = document.createElement("span");
        const iconaCompletato = document.createElement("span");

        iconaModifica.textContent = "✏️";
        iconaCompletato.textContent = "✅";

        iconaModifica.className = "azione modifica";
        iconaCompletato.className = "azione completato";

        // Eventi click (facoltativi)
        iconaModifica.addEventListener("click", () => {
            alert(`Modifica evento: ${evento.Materia}`);
            // qui puoi richiamare una funzione o aprire un form di modifica
        });

        iconaCompletato.addEventListener("click", async () => {
            await window.pywebview.api.completaAssegnazione(evento.ID);
            li.classList.add("completato-evento");
        });

        // Composizione finale
        li.appendChild(testo);
        li.appendChild(iconaModifica);
        li.appendChild(iconaCompletato);
        agenda.appendChild(li);
    }
}
