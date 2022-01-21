const botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

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