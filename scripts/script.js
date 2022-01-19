const imc = document.querySelector(".info-imc").textContent;
const pacientes = document.querySelectorAll(".table-row");

const botao = document.getElementById("botao-calcular");

$(function() {
  $(".teste").load("./components/pacientesModal.html");
});

function calculaImc() {
  for (let i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
    const nome = pacientes[i].querySelector(".info-nome").textContent;
    const peso = parseInt(pacientes[i].querySelector(".info-peso").textContent);
    const altura = parseFloat(pacientes[i].querySelector(".info-altura").textContent);
    const gordura = pacientes[i].querySelector(".info-gordura").textContent;

    let valorImc = peso / (altura * 2);
    imprimeImc(valorImc, pacientes[i]);
  }
}

function imprimeImc(imc, paciente) {
  paciente.querySelector(".info-imc").innerHTML = imc.toFixed(2);
}

botao.addEventListener("click", calculaImc);