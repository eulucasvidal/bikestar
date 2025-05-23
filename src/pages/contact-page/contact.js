  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio para validar primeiro

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
    const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let erros = [];

    if (!nomeRegex.test(nome)) {
      erros.push('Nome inválido. Use apenas letras e pelo menos 2 caracteres.');
    }

    if (!telefoneRegex.test(telefone)) {
      erros.push('Telefone inválido. Use o formato (xx) xxxxx-xxxx ou (xx) xxxx-xxxx.');
    }

    if (!emailRegex.test(email)) {
      erros.push('Email inválido.');
    }

    if (mensagem.length < 10) {
      erros.push('A mensagem deve ter pelo menos 10 caracteres.');
    }

    if (erros.length > 0) {
      alert(erros.join('\n'));
    } else {
      alert('Formulário enviado com sucesso!');
      form.submit(); // Agora sim envia
    }
  });