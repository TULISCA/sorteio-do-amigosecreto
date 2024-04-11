let amigos = [];

function adicionar() {
  let nomes = document.getElementById('nome-amigo');
  if (nomes.value == '') {
    alert('Informe o nome do amigo!');
    return;
}
if (amigos.includes(nomes.value)) {
   alert('Esse nome jan foi adicionado ;)');
    return;
}

  let lista = document.getElementById('lista-amigos');
   amigos.push(nomes.value);
  if (lista.textContent == '') {
    lista.textContent = nomes.value;
} else {
    lista.textContent = lista.textContent + ', ' + nomes.value;
    nomes.value = '';
}
}
  

function sortear(){
  if(amigos.length < 4){
    alert('Adicione pelo menos 4 amigos!');
    return;
  }
  embaralha(amigos);
let sorteio = document.getElementById('lista-sorteio');


for (let i = 0; i < amigos.length; i++) {
  if (i == amigos.length - 1) {
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
  } else {
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
      }
}
}



function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}





function reiniciar() {
  amigos [0];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML= '';

}
