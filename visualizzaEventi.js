(function() {
    const agenda = document.getElementById("agenda");

    async function visualizzaEventi(dataEvento) {
        listaEventi=window.pywebview.api.getEvento(dataEvento);

        if (!listaEventi || listaEventi.length === 0) {
            return;
        }

        for (const evento of listaEventi) {
            agenda.innerHTML = "";
            const li = document.createElement("li");
            li.textContent = `${evento.Materia}: ${evento.Descrizione}`;
            agenda.appendChild(li);
        }
    }
})();