function showSurprise() {
  var message = document.getElementById('message');
  var button = document.getElementById('surpriseButton');
  var image = document.getElementById('surpriseImage');
  var backButton = document.getElementById('backButton');

  // mensagem e exibe a imagem
  message.innerHTML = "Surpresa!";

  image.classList.remove('hidden');

  // some o botão de surpresa e exibe o botão de voltar
  button.classList.add('hidden');
  backButton.classList.remove('hidden');

  // Muda o fundo 
  document.body.style.backgroundColor = '#9966CC';
  document.body.style.color = '##40E0D0';
}

function goBack() {
  var message = document.getElementById('message');
  var button = document.getElementById('surpriseButton');
  var image = document.getElementById('surpriseImage');
  var backButton = document.getElementById('backButton');

  // Restaura a mensagem e esconde a imagem
  message.innerHTML = 'Clique no botão para uma surpresa!';
  image.classList.add('hidden');

  // Esconde o botão de voltar e exibe o botão de surpresa
  backButton.classList.add('hidden');
  button.classList.remove('hidden');

  // Restaura o fundo para a cor padrão e o texto para a cor padrão
  document.body.style.backgroundColor = '#DC143C';
  document.body.style.color = '#000';
}