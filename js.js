selecione = document.querySelector("#sel");
botao=document.querySelector('#btn')
code = document.querySelector("#code");
decode = document.querySelector("#decode");

function base64() {
 msg=document.form.mensagem.value
  
  if (code.checked) {
    var codificado = btoa(msg);
    document.form.resultado.value=codificado
  } 
  else if (decode.checked) {
    var decodificado = atob(msg);
   document.form.resultado.value=decodificado
  }
}


//cesar
var letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cifraCesar() {
  if (code.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    x = parseInt(3)
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []

    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j]) {
            crip[i] = letras[(j + x1) % letras.length]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }
  else if (decode.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    x = parseInt(3)
    casas=letras.length
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []
    
    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j] && (j-x)>=0) {
            crip[i] = letras[(j - x1) % letras.length]
            break
          }
          else if((msg[i] == letras[j] && (j-x)<0)) {
            crip[i] = letras[((j - x) % letras.length)+parseInt(casas)]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }

}

incremento=document.querySelector('.incremento')
selecione.addEventListener('click',function(){
  if (selecione.value=='cifrad'){
    incremento.style.display='block';
  }
  else{
    incremento.style.display='none';
  }
})


botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") { 
   resultado.innerText = base64();
  } 
  else if (selecione.value === "cifrad") {
    resultado.innerText = cifraCesar();
  }
});
