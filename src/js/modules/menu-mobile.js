export default function initToggleMenu() {
  const menuMobile = document.querySelector('[data-menu="suave"]');
  const botaoMobile = document.querySelector('[data-menu="button"]');

  function openMenu(event) {
    if (event.type === 'touchstart')event.preventDefault();
    menuMobile.classList.toggle("ativo");
    botaoMobile.classList.toggle("ativo");
  }
  botaoMobile.addEventListener("click", openMenu);
  botaoMobile.addEventListener("touchstart", openMenu);
}