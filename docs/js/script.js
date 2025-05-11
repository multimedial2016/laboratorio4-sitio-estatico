const nombre = document.querySelector('#userName')
const asunto = document.querySelector('#userSubject')
const correo = document.querySelector('#userEmail')

const nombreMsg = document.querySelector('#user-span')
const asuntoMsg = document.querySelector('#asunto-span')
const correoMsg = document.querySelector('#email-span')
const msgSpan = document.querySelector('#msg-span')

//Oculta el mensaje de error si el usuario empieza a escribir en el campo
nombre.addEventListener('input', function() {
  if(nombre.value.trim() !== '') {
    nombreMsg.style.display = "none"
  }
});
asunto.addEventListener('input', function() {
  if(asunto.value.trim() !== '') {
    asuntoMsg.style.display = "none"
  }
});
correo.addEventListener('input', function() {
  if(correo.value.trim() !== '') {
    correoMsg.style.display = "none"
  }
})

//Controla que los campos no esten vacios para enviar los datos del formulario
document.querySelector('#form').addEventListener('submit', function(submitEvent) {
  submitEvent.preventDefault()
  let valido = true

  if(nombre.value.trim() == ''){
    nombreMsg.style.display = "inline"
    valido = false
  }else{
    nombreMsg.style.display = "none"
  }
  if(asunto.value.trim() == ''){
    asuntoMsg.style.display = "inline"
    valido = false
  }else{
    asuntoMsg.style.display = "none"
  }
  if(correo.value.trim() == ''){
    correoMsg.style.display = "inline"
    valido = false
  }else{
    correoMsg.style.display = "none"
  }

  if(valido){
    msgSpan.style.display = 'inline'
  }else{
    msgSpan.style.display = 'none'
  }
});

//Funcion para sección desplegable estilo acordeon
const collapsibles = document.querySelectorAll('.collapsible')
collapsibles.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active')
    const content = this.nextElementSibling
    content.classList.toggle('show')
  })
})



