const imc = document.querySelector(".info-imc").textContent;
const pacientes = document.querySelectorAll(".table-row");

const modalPaciente = document.querySelector("#form-adiciona");
const backdrop = document.querySelector(".backdrop");

const botao = document.getElementById("botao-calcular");
const botaoModal = document.querySelector("#abrir-modal-paciente");


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

let modalAtivo = false;

botaoModal.addEventListener("click", function(){
  if (!modalAtivo) {
    modalPaciente.style.display = 'flex';
    backdrop.style.display = 'block';
    modalAtivo = true;
  } 
});

backdrop.addEventListener("click", function(){
  if (modalAtivo) {
    modalPaciente.style.display = 'none';
    backdrop.style.display = 'none';
    modalAtivo = false;
  } 
});