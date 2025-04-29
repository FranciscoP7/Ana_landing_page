let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const headerHeight = header.offsetHeight;

  if (currentScrollY > headerHeight) {
    if (currentScrollY > lastScrollY) {
      // Rolando para baixo → esconde o header
      header.style.transform = "translateY(-100%)";
    } else {
      // Rolando para cima → mostra o header
      header.style.transform = "translateY(0)";
    }
  } else {
    // Antes de passar o header → sempre mostra
    header.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});
