var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "You're right";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "You must enter a number in beteew 0 the 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "The requested number is smaller";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "The requested number is bigger";
  } else {
    elementoResultado.innerHTML =
      "You lost the secret number is " + numeroSecreto;
  }
}

// A função Math.random gera diversas possilidade de 0 até 0.9, não chegando a 1 de forma inteira, entretanto se ouver a função Math.random * 10, tal possilidade de números gerados, passam então de 0 até 9, assim em diante quanto mais acrescentar na multiplicação.

//  || este simbolo significa "ou"
//  " = " se trata de uma atribuicao
// " == " se trata de uma comparacao sendo == uma comparacao nao de forma restrita ja === se trata de uma comparacao de forma restrita
