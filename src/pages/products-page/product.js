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

  // Config do Ordem de preço

  const options = document.querySelectorAll('#options input[name="category"]');
const productsList = document.querySelector('.products-list');

options.forEach(option => {
  option.addEventListener('change', () => {
    const selectedValue = option.value; // "menor preço" ou "maior preço"

    // Pega todos os produtos como array
    const productsArray = Array.from(productsList.querySelectorAll('.products-item'));

    // Função para extrair preço
    function getPrice(productItem) {
      const priceSpan = productItem.querySelector('span.text-info.color-gray');
      if (!priceSpan) return 0;
      const priceText = priceSpan.textContent.trim();
      let num = priceText.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
      return parseFloat(num) || 0;
    }

    // Ordena o array
    productsArray.sort((a, b) => {
      const priceA = getPrice(a);
      const priceB = getPrice(b);

      if (selectedValue === 'menor preço') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Remove todos os produtos e re-insere ordenados
    productsList.innerHTML = '';
    productsArray.forEach(item => productsList.appendChild(item));
  });
});
