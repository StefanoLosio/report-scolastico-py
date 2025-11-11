(function() {
    const invio = document.getElementById("inserisci");

    invio.addEventListener('click', async function (e) {
        e.preventDefault(); // ✅ ora funziona

        // Leggi i valori sempre al momento del click
        const materia = document.getElementById("materia").value.trim();
        const data = document.getElementById("data").value;
        const tipo_assegnazione = document.getElementById("tipo_assegnazione").value.trim();
        const descrizione = document.getElementById("descrizione").value.trim();

        // ✅ Gestione data
        const oggi = new Date();

        const [giorno, mese, anno] = data.split("-");
        dataInserita = new Date(`${anno}-${mese}-${giorno}`);

        console.log(dataInserita);
        

        if (!data) {
            alert("Devi selezionare una data!");
            return;
        }
        if (isNaN(dataInserita.getTime())) {
            alert("La data inserita non è valida!");
            return;
        }
        if (dataInserita < oggi.setHours(0,0,0,0)) {
            alert("La data non può essere nel passato!");
            return;
        }

        // ✅ Controllo materia
        if (!materia) {
            alert("Devi inserire una materia!");
            return;
        }

        // ✅ Controllo opzionale altri campi
        if (!tipo_assegnazione) {
            alert("Devi selezionare il tipo di assegnazione!");
            return;
        }
        if (!descrizione) {
            alert("Devi inserire una descrizione!");
            return;
        }

        try {
            await window.pywebview.api.setAssegnazione(materia, data, tipo_assegnazione, descrizione);
            alert("Assegnazione inserita correttamente!");
        } catch (err) {
            console.error("Errore durante l'invio a Python:", err);
            alert("Si è verificato un errore durante l'invio dei dati.");
        }
    });
})();
