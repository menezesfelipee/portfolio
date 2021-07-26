const btnUm = document.querySelector('#btnUm');
const btnDois = document.querySelector('#btnDois');
const logica = document.querySelector('#logica');
const front = document.querySelector('#front');
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')
const btnEnviar = document.querySelector("#enviar")
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled = true


btnUm.addEventListener('click', () => {
    if(btnUm.value == 'inativo') {
        logica.style.display = 'flex';
        front.style.display = 'none';
        btnUm.value = 'ativo';
        btnDois.value = 'inativo';
        btnUm.classList.remove('inativo')
        btnUm.classList.add('ativo')
        btnDois.classList.remove('ativo')
        btnDois.classList.add('inativo')
    }
})

btnDois.addEventListener('click', () => {
    if(btnDois.value == 'inativo') {
        logica.style.display = 'none';
        front.style.display = 'flex';
        btnDois.value = 'ativo';
        btnUm.value = 'inativo'
        btnDois.classList.remove('inativo')
        btnDois.classList.add('ativo')
        btnUm.classList.remove('ativo')
        btnUm.classList.add('inativo')
    }
})




nome.addEventListener('keyup', () => {
   if (nome.value.length < 3) {
      nome.style.borderColor = 'red'
      nomeOk = false
   } else {
      nome.style.borderColor = 'green'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = 'green'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

mensagem.addEventListener('keyup', () => {
   if (mensagem.value.length > 100) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
      mensagem.style.borderColor = 'green'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})


btnEnviar.addEventListener('click', () => {
   alert('Mensagem enviada com sucesso!')
})
