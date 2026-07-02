document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger-menu");
    const nav = document.querySelector(".navigation-bar-text");

    if (!hamburger || !nav) {
        return;
    }

    const panel = document.createElement("div");
    panel.classList.add("mobile-nav-panel");

    panel.innerHTML = `
        <a href="#projects">Projects</a>
        <a href="#about-me">About Me</a>
        <a href="#videogames">Videogames</a>
    `;

    document.body.appendChild(panel);

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        panel.classList.toggle("active");
    });

    panel.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            panel.classList.remove("active");
        });
    });

});