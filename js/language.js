document.addEventListener("DOMContentLoaded", function () {

    const languageButton = document.getElementById("language-toggle");

    let currentLanguage = localStorage.getItem("language") || "en";

    function applyLanguage(language) {

        document.querySelectorAll(".en").forEach(element => {
            element.style.display = language === "en" ? "" : "none";
        });

        document.querySelectorAll(".es").forEach(element => {
            element.style.display = language === "es" ? "" : "none";
        });

        languageButton.textContent = language === "en" ? "ES" : "EN";

        localStorage.setItem("language", language);
    }

    languageButton.addEventListener("click", function () {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        applyLanguage(currentLanguage);
    });

    applyLanguage(currentLanguage);

});