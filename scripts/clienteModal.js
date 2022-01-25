const modalCliente = document.querySelector(".cliente");

const paciente = document.querySelectorAll(".table-row");
const tabela = document.querySelector(".tabela-pacientes");

const botaoExcluir = document.querySelector(".excluir");
const botaoEditar = document.querySelector(".editar");

let modalClienteAtivo = false;

function abreModalCliente() {
  if (!modalClienteAtivo) {
    modalCliente.style.display = 'flex';
    backdrop.style.display = 'block';
    modalClienteAtivo = true;
  } 
}

function fechaModalCliente() {
  if (modalClienteAtivo) {
    modalCliente.style.display = 'none';
    backdrop.style.display = 'none';
    modalClienteAtivo = false;
  } 
}

tabela.addEventListener("click", function(event) {
    abreModalCliente();
    document.querySelector("#nomeCliente").value = event.target.parentNode.querySelector(".info-nome").textContent;
    document.querySelector("#pesoCliente").value = event.target.parentNode.querySelector(".info-peso").textContent;
    document.querySelector("#alturaCliente").value = event.target.parentNode.querySelector(".info-altura").textContent;
    document.querySelector("#gorduraCliente").value = event.target.parentNode.querySelector(".info-gordura").textContent;
    document.querySelector("#imcCliente").value = event.target.parentNode.querySelector(".info-imc").textContent;
    document.querySelector("#imcCliente").readOnly = true;

    botaoExcluir.addEventListener("click", function() {
        event.target.parentNode.remove();
        fechaModalCliente();
        notificationSuccess("Excluído com sucesso", "Usuário '" + event.target.parentNode.querySelector(".info-nome").textContent + "' excluído com sucesso!");
    });

    botaoEditar.addEventListener("click", function() {
        event.target.parentNode.querySelector(".info-nome").textContent = document.querySelector("#nomeCliente").value;
        event.target.parentNode.querySelector(".info-peso").textContent = document.querySelector("#pesoCliente").value;
        event.target.parentNode.querySelector(".info-altura").textContent = document.querySelector("#alturaCliente").value;
        event.target.parentNode.querySelector(".info-gordura").textContent = document.querySelector("#gorduraCliente").value;
        event.target.parentNode.querySelector(".info-imc").textContent = document.querySelector("#imcCliente").value;
        fechaModalCliente();
        notificationSuccess("Editado com sucesso", "Usuário '" + event.target.parentNode.querySelector(".info-nome").textContent + "' editado com sucesso!");
    });
});

backdrop.addEventListener("click", fechaModalCliente);