const botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

function obtemPacienteFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("table-row");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

botaoAdicionarPaciente.addEventListener("click", function(event){
  event.preventDefault();

  let paciente = obtemPacienteFormulario(modalPaciente);
  
  if (paciente.peso >= 600 || paciente.peso <= 0) {
    notificationError("Erro", "Valor de peso fora do padrão.");
    modalPaciente.peso.focus();
  } else if (paciente.altura >= 3 || paciente.altura <= 0) {
    notificationError("Erro", "Valor altura fora do padrão.");
    modalPaciente.altura.focus();
  } else {
    const pacienteTr = montaTr(paciente);

    const tabelaPacientes = document.querySelector(".tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);

    fechaModal();
    notificationSuccess("Sucesso", "Usuário cadastrado com sucesso.");
    modalPaciente.nome.value = "";
    modalPaciente.peso.value = "";
    modalPaciente.altura.value = "";
    modalPaciente.gordura.value = "";
  }
});