
function contar(){ 
 var numeroX = document.getElementById('txti')
 var numeroY = document.getElementById('txtf')
 var numeroZ = document.getElementById('txtp')
 var res = document.getElementById('res')

 if(numeroX.value.length == 0 || numeroY.value.length == 0 || numeroZ.value.length == 0)
  {res.innerHTML = 'Impossível contar!' 

} else {
  res.innerHTML = 'Contando: <br>'
  var i = Number(numeroX.value)
  var f = Number(numeroY.value)
  var p = Number(numeroZ.value)
  if(p <= 0){
    window.alert('Passo inválido! Considerando PASSO 1')
    p = 1
  }
  if (i < f){
    for (var c = i; c <= f; c += p) {
      res.innerHTML += ` ${c} \u{1F449}`
      }  
     
    } else {
      for(c = i; c >= f; c-= p){
        res.innerHTML += ` ${c} \u{1F449} `
      }
    } 
    res.innerHTML += `\u{1F3C1} `
  } 
}