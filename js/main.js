// main.js
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".projects-slider");
  const cards  = [...document.querySelectorAll(".project-card")];
  let index = 0;
  let timer;

  if (!slider || cards.length === 0) return;

  function goTo(i) {
    index = (i + cards.length) % cards.length;
    const card = cards[index];

    // centro horizontal del card dentro del slider
    const targetLeft =
      card.offsetLeft - (slider.clientWidth / 2) + (card.clientWidth / 2);

    slider.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth"
    });
  }

  function start() {
    stop();
    timer = setInterval(() => goTo(index + 1), 4000);
  }
  function stop() {
    if (timer) clearInterval(timer);
  }

  // autoplay
  start();

  // pausa cuando el usuario pasa el mouse o toca (evita “brincos”)
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("touchstart", stop, {passive:true});
  slider.addEventListener("touchend", start);

  // re-centra al cambiar tamaño
  window.addEventListener("resize", () => goTo(index));
});
