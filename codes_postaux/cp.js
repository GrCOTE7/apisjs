import codesPostaux from 'codes-postaux/index.js';

let cp = 21130
let communes = codesPostaux.find(cp)
let affCommunes = document.getElementById('communes')
let cities = document.getElementsByTagName('span')

let res = []
communes.forEach((commune) => {
  res.push(commune.nomCommune)
})
console.log(res)

let text = res.map((c) => { return '<span>' + c + '</span>' }).slice(0, -1).join(`,<br>`) + '<br>et enfin,<br> ' + '<span>' + res.slice(-1) + '</span>'

if (res.length > 0) {
  affCommunes.innerHTML = cp + '<hr>' + text;
  
  [...cities].forEach((c) => {
    c.style.color = 'blue'
    c.style.fontWeight = 'bold'
  })
}
