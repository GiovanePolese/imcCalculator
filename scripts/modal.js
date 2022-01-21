const modalPaciente = document.querySelector("#form-adiciona");
const backdrop = document.querySelector(".backdrop");

const botaoModal = document.querySelector("#abrir-modal-paciente");

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