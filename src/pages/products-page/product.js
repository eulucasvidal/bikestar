let select = document.querySelector(".select");
selectedValue = document.querySelector("#selected-value");
optionsViewButton = document.querySelector("#options-view-button");
inputsOptions = document.querySelectorAll(".option input");

inputsOptions.forEach((input) => {
  input.addEventListener("click", (e) => {
    selectedValue.textContent = input.dataset.label;

    const isMouseOrTouch = 
    e.pointerType == "mouse" ||
    e.pointerType == "touch"

    isMouseOrTouch && optionsViewButton.click();
  });
});

// Config do filter

  const botoesFiltro = document.querySelectorAll('.filter-buttons .btn');
  const produtos = document.querySelectorAll('.products-item');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      const filtro = botao.getAttribute('data-filter');

      botoesFiltro.forEach(btn => btn.classList.remove('secundario'));

      botao.classList.add('secundario');

      produtos.forEach(produto => {
        const categoria = produto.getAttribute('data-categoria');

        if (filtro === 'todos' || filtro === categoria) {
          produto.style.display = 'block';
        } else {
          produto.style.display = 'none';
        }
      });
    });
  });
console.log(buttonsFilter)