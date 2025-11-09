async function visualizzaEventi(dataEvento) {
    const agenda = document.getElementById("agenda");
    
    const listaEventi = await window.pywebview.api.getAssegnazioni(dataEvento);

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