document.addEventListener("DOMContentLoaded", function () {
    const galleryTrack = document.querySelector(".gallery-track");
    const galleryImages = document.querySelectorAll(".gallery-track img");
    const prevButton = document.querySelector(".gallery-arrow.prev");
    const nextButton = document.querySelector(".gallery-arrow.next");
    const dots = document.querySelectorAll(".gallery-dots span");

    let currentSlide = 0;

    const services = {

        websites: {

            gallery: [
                "img/bussiness.jpg",
                "img/bussiness.jpg",
                "img/bussiness.jpg"
            ],

            titleEn: "Websites",
            titleEs: "Páginas Web",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Modern Websites</strong>

                <p>
                    Professional websites designed for businesses, entrepreneurs and
                    personal brands with responsive layouts, multilingual support and
                    modern user experiences.
                </p>

                <ul class="service-features">
                    <li>Responsive Design</li>
                    <li>SEO Optimization</li>
                    <li>Modern UI / UX</li>
                    <li>Hosting & Domain Support</li>
                </ul>

                <span class="service-price">
                    Starting from $5,000 MXN
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Páginas Web Modernas</strong>

                <p>
                    Sitios web profesionales para negocios, emprendedores y marcas
                    personales con diseño responsivo, soporte multilenguaje y una
                    experiencia moderna para el usuario.
                </p>

                <ul class="service-features">
                    <li>Diseño Responsivo</li>
                    <li>Optimización SEO</li>
                    <li>UI / UX Moderna</li>
                    <li>Hosting y Dominio</li>
                </ul>

                <span class="service-price">
                    Desde $5,000 MXN
                </span>
            `

        },

        photography: {

            gallery: [
                "img/photo1.jpg",
                "img/photo2.jpg",
                "img/photo3.jpg"
            ],

            titleEn: "Photography",
            titleEs: "Fotografía",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Professional Photography</strong>

                <p>
                    Creative photography for brands, events, products,
                    personal sessions and wrestling.
                </p>

                <ul class="service-features">
                    <li>Portrait Sessions</li>
                    <li>Business Photography</li>
                    <li>Sports & Wrestling</li>
                    <li>Product Photography</li>
                </ul>

                <span class="service-price">
                    Contact for quotation
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Fotografía Profesional</strong>

                <p>
                    Fotografía creativa para marcas, eventos, productos,
                    sesiones personales y lucha libre.
                </p>

                <ul class="service-features">
                    <li>Sesiones Personales</li>
                    <li>Fotografía Comercial</li>
                    <li>Eventos y Lucha Libre</li>
                    <li>Fotografía de Producto</li>
                </ul>

                <span class="service-price">
                    Cotización personalizada
                </span>
            `

        },

        "video-editing": {

            gallery: [
                "img/video1.jpg",
                "img/video2.jpg",
                "img/video3.jpg"
            ],

            titleEn: "Video Editing",
            titleEs: "Edición de Video",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Cinematic Video Editing</strong>

                <p>
                    Professional editing for commercials, social media,
                    YouTube channels and promotional videos.
                </p>

                <ul class="service-features">
                    <li>Cinematic Color Grading</li>
                    <li>Motion Graphics</li>
                    <li>Transitions & Effects</li>
                    <li>Social Media Formats</li>
                </ul>

                <span class="service-price">
                    Contact for quotation
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Edición de Video Cinematográfica</strong>

                <p>
                    Edición profesional para comerciales,
                    redes sociales, YouTube y contenido promocional.
                </p>

                <ul class="service-features">
                    <li>Corrección de Color</li>
                    <li>Motion Graphics</li>
                    <li>Transiciones y Efectos</li>
                    <li>Formatos para Redes Sociales</li>
                </ul>

                <span class="service-price">
                    Cotización personalizada
                </span>
            `

        },

        "apps-systems": {

            gallery: [
                "img/app1.jpg",
                "img/app2.jpg",
                "img/app3.jpg"
            ],

            titleEn: "Apps & Systems",
            titleEs: "Apps y Sistemas",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Custom Software Development</strong>

                <p>
                    Mobile applications, business systems and custom software
                    built to improve productivity and automate processes.
                </p>

                <ul class="service-features">
                    <li>Desktop Applications</li>
                    <li>Mobile Apps</li>
                    <li>Business Systems</li>
                    <li>REST APIs</li>
                </ul>

                <span class="service-price">
                    Custom quotation
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Desarrollo de Software</strong>

                <p>
                    Aplicaciones móviles, sistemas empresariales
                    y software personalizado para automatizar procesos.
                </p>

                <ul class="service-features">
                    <li>Aplicaciones de Escritorio</li>
                    <li>Apps Móviles</li>
                    <li>Sistemas Empresariales</li>
                    <li>APIs REST</li>
                </ul>

                <span class="service-price">
                    Cotización personalizada
                </span>
            `

        },

        "digital-marketing": {

            gallery: [
                "img/mkt1.jpg",
                "img/mkt2.jpg",
                "img/mkt3.jpg"
            ],

            titleEn: "Digital Marketing",
            titleEs: "Marketing Digital",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Brand Identity</strong>

                <p>
                    Design banners, social media content,
                    personal branding, wrestling masks and merchandise.
                </p>

                <ul class="service-features">
                    <li>Brand Design</li>
                    <li>Social Media</li>
                    <li>Banners & Posters</li>
                    <li>Merchandise Design</li>
                </ul>

                <span class="service-price">
                    Contact for quotation
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Marketing Digital</strong>

                <p>
                    Diseño de identidad visual,
                    banners, contenido para redes sociales,
                    máscaras y mercancía personalizada.
                </p>

                <ul class="service-features">
                    <li>Diseño de Marca</li>
                    <li>Redes Sociales</li>
                    <li>Banners y Posters</li>
                    <li>Diseño de Mercancía</li>
                </ul>

                <span class="service-price">
                    Cotización personalizada
                </span>
            `

        },

        videogames: {

            gallery: [
                "img/game1.jpg",
                "img/game2.jpg",
                "img/game3.jpg"
            ],

            titleEn: "Videogames",
            titleEs: "Videojuegos",

            descEn: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Interactive Experiences</strong>

                <p>
                    Personal Unity projects focused on gameplay,
                    programming and interactive experiences.
                </p>

                <ul class="service-features">
                    <li>Unity Development</li>
                    <li>Gameplay Programming</li>
                    <li>Prototype Design</li>
                    <li>Interactive Demos</li>
                </ul>

                <span class="service-price">
                    Portfolio Projects
                </span>
            `,

            descEs: `
                <span class="service-category">MCGILFORD STUDIO</span>

                <strong>Experiencias Interactivas</strong>

                <p>
                    Proyectos personales desarrollados en Unity
                    enfocados en programación, jugabilidad
                    y experiencias interactivas.
                </p>

                <ul class="service-features">
                    <li>Desarrollo en Unity</li>
                    <li>Programación Gameplay</li>
                    <li>Diseño de Prototipos</li>
                    <li>Demos Interactivas</li>
                </ul>

                <span class="service-price">
                    Proyectos de Portafolio
                </span>
            `

        }

    };

    const serviceTiles = document.querySelectorAll(".service-tile");
    const panel = document.getElementById("service-expanded");
    const closeButton = document.getElementById("close-service");

    const images = panel.querySelectorAll(".service-gallery img");

    const titleEn = panel.querySelector(".service-info h2.en");
    const titleEs = panel.querySelector(".service-info h2.es");

    const descEn = panel.querySelector(".description.en");
    const descEs = panel.querySelector(".description.es");

    serviceTiles.forEach(function (tile) {

        tile.addEventListener("click", function () {

            const serviceKey = tile.dataset.service;
            const service = services[serviceKey];

            if (!service) {
                return;
            }

            images.forEach(function (img, index) {
                img.src = service.gallery[index];
                img.alt = service.titleEn + " preview " + (index + 1);
            });

            titleEn.textContent = service.titleEn;
            titleEs.textContent = service.titleEs;

            descEn.innerHTML = service.descEn;
            descEs.innerHTML = service.descEs;

            panel.classList.add("active");

            document.getElementById("project-categories").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    closeButton.addEventListener("click", function () {
        panel.classList.remove("active");
    });

        function updateGallery()
    {
        galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach(function(dot, index) {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    nextButton.addEventListener("click", function () {
        currentSlide++;

        if (currentSlide >= galleryImages.length) {
            currentSlide = 0;
        }

        updateGallery();
    });

    prevButton.addEventListener("click", function () {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = galleryImages.length - 1;
        }

        updateGallery();
    });

    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function () {
            currentSlide = index;
            updateGallery();
        });
    });
    const scene = document.querySelector(".about-scene");

    if (!scene) {
        return;
    }

    function updateParallax() {
        const rect = scene.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        progress = Math.max(0, Math.min(1, progress));

        scene.style.setProperty("--about-scroll", progress);
    }

    scene.addEventListener("mousemove", function (event) {
        const rect = scene.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) - 0.5;
        const y = ((event.clientY - rect.top) / rect.height) - 0.5;

        scene.style.setProperty("--mx", x);
        scene.style.setProperty("--my", y);
    });

    scene.addEventListener("mouseleave", function () {
        scene.style.setProperty("--mx", 0);
        scene.style.setProperty("--my", 0);
    });

    updateParallax();

    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
});
