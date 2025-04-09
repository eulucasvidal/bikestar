export default function initToggleMenu() {
  const menuMobile = document.querySelector('[data-menu="suave"]');
  const botaoMobile = document.querySelector('[data-menu="button"]');
  // const botaoX = document.querySelector('[data-menu="button-x"]');

  function openMenu(event) {
    if (event.type === 'touchstart')event.preventDefault();
    menuMobile.classList.toggle("ativo");
    botaoMobile.classList.toggle("ativo");
    // botaoX.classList.toggle("ativo");
  }
  // botaoX.addEventListener("click",openMenu);
  // botaoX.addEventListener("touchstart",openMenu);
  botaoMobile.addEventListener("click", openMenu);
  botaoMobile.addEventListener("touchstart", openMenu);
}