import codesPostaux from 'codes-postaux/index.js';

let  cp = 21130
let communes = codesPostaux.find(cp)
let affCommunes = document.getElementById('communes')

let res = []
communes.forEach((commune) => {
  res.push(commune.nomCommune)
})
let text = res.join(`<br>`)

affCommunes.innerHTML = cp+'<hr>'+text
