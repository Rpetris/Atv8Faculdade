var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var valor = document.getElementById("valor").value;
  var qtd = document.getElementById("qtd").value;
  var resultado = document.getElementById("resultado");
  var porcentagem;
  var valorFinal;

  if (valor > 100 && qtd > 5) {
    porcentagem = 0.1;
  } else {
    porcentagem = 0.05;
  }
  parseFloat(valor);
  var valorFinal = valor - valor * porcentagem;
  resultado.innerHTML = valorFinal;
});
