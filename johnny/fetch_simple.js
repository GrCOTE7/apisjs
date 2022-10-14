let showResponse = document.getElementById('response')

const ENDPOINT = "https://recherche-entreprises.api.gouv.fr/search?"
let q = 'COTE%20roses%lionel'
let dpt = '59'

let req = ENDPOINT + 'q=' + q + '&departement=' + dpt + '&page=1&per_page=1'
console.log(req)

let response = await fetch(req)
  .then(function (response) {
    return response.json()
  })

let etseObj = response.results[0];
console.log(etseObj)
let etseArr = Object.entries(etseObj)
console.log(etseArr)

let text = etseArr.join(',')
console.log(text)
showResponse.innerHTML = etseObj.date_creation
