const imc = document.querySelector(".info-imc").textContent;
const pacientes = document.querySelectorAll(".table-row");

const modalPaciente = document.querySelector("#form-adiciona");
const backdrop = document.querySelector(".backdrop");

const botao = document.getElementById("botao-calcular");
const botaoModal = document.querySelector("#abrir-modal-paciente");
const botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");


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

function abreModal() {
  if (!modalAtivo) {
    modalPaciente.style.display = 'flex';
    backdrop.style.display = 'block';
    modalAtivo = true;
  } 
}

function fechaModal() {
  if (modalAtivo) {
    modalPaciente.style.display = 'none';
    backdrop.style.display = 'none';
    modalAtivo = false;
  } 
}

botaoModal.addEventListener("click", abreModal);
backdrop.addEventListener("click", fechaModal);


botaoAdicionarPaciente.addEventListener("click", function(event){
  event.preventDefault();

  const nome = modalPaciente.nome.value;
  const peso = modalPaciente.peso.value;
  const altura = modalPaciente.altura.value;
  const gordura = modalPaciente.gordura.value;

  const pacienteTr = document.createElement("tr");

  const nomeTd = document.createElement("td");
  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = 1.25;


  pacienteTr.classList.add("table-row");
  nomeTd.classList.add("info-nome");
  pesoTd.classList.add("info-peso");
  alturaTd.classList.add("info-altura");
  gorduraTd.classList.add("info-gordura");
  imcTd.classList.add("info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  const tabelaPacientes = document.querySelector(".tabela-pacientes");
  tabelaPacientes.appendChild(pacienteTr);

  fechaModal();
});