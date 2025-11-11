(function() {
    const aggiungiAssegnazione = document.getElementById("nuova_assegnazione");

    aggiungiAssegnazione.addEventListener("click", function() {
        window.pywebview.api.nuovaAssegnazione();
    });
})();