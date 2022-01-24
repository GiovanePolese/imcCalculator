const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  const pacientes = document.querySelectorAll(".table-row");

  if (this.value.length > 0) {
    for (i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      paciente.classList.add("invisivel");

      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(this.value, "i");

      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }
    }
  } else {
    for (i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[1];
      paciente.classList.remove("invisivel");
    }
  }
});