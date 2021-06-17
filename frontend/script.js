let base_url = 'http://127.0.0.1:8000/'
var pizzaDiv = document.getElementById('pizzaDiv')
var drinkDiv = document.getElementById('drinkDiv')
var shoppingCart = document.getElementById('list')
var osszeg = document.getElementById('osszeg')
let kosar = []
let kosarItal = []
let vegosszeg = 0
let arakItal = []
let arak = []
getData()



function getData(){
  pizzaDiv.innerHTML = ""
  drinkDiv.innerHTML = ""
    //Pizzák lekérése
    fetch(base_url+'api/pizzas/')
    .then(response=>response.json())
    .then(data=>{
        for(let p in data){
          arak.push(data[p].price)
          card =
          `<div class="card text-center col-xl-2 col-lg-4 col-sm-12" style="width: 18rem;">`+
          `<div class="card-body">`+
          `<h5 class="card-title">(${data[p].id}.) ${data[p].name} pizza</h5>`+
          `<p class="card-text">${data[p].toppings}</p>`+
          `<br><div class="fixed"><span class="badge-dark">${data[p].price} Ft</span>`+
          `<br><a href="#" class="btn btn-primary" onClick=kosarba("${data[p].id}",${data[p].price})>Kosárba</a>`+
          "</div></div></div>"
          pizzaDiv.innerHTML += card
          }
      })
    //Italok lekérése
    fetch(base_url+'api/drinks/')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(ital=>{
          arakItal.push(ital.price)
          card=
          `<div class="card text-center col-xl-2 col-lg-4 col-sm-12" style="width: 18rem;">`+
          `<div class="card-body">`+
          `<h5 class="card-title">(${ital.id}.) ${ital.name}</h5>`+
          `<p class="card-text">${ital.calorie}kCal/100ml</p>`+
          `<br><div class="fixed"><span class="badge-dark">${ital.price} Ft</span>`+
          `<br><a href="#" class="btn btn-primary" onClick=kosarbaItal("${ital.id}",${ital.price})>Kosárba</a>`+
          "</div></div></div>"
          drinkDiv.innerHTML += card
        })
    })
    
    

}
function kosarbaItal(id,price){
  kosarItal.push(id)
  vegosszeg += price
  kosarEpit()
}
function kosarba(id,price){
  kosar.push(id)
  vegosszeg += price

  kosarEpit()
}
function torlesItal(index,ar){
  vegosszeg -= parseInt(ar)
  kosarItal.splice(index,1)
  kosarEpit()
}
function torles(index,ar){
  vegosszeg -= parseInt(ar)
  kosar.splice(index,1)
  kosarEpit()
}
function kosarEpit(){
  shoppingCart.innerHTML = ""
  kosar.forEach(elem=>{
    shoppingCart.innerHTML += `<li><a href='#' class='badge-red' onClick='torles(${kosar.indexOf(elem)},${arak[elem-1]})'>X</a>${elem}. sorszámú pizza</li>`
  })
  kosarItal.forEach(elem=>{
    shoppingCart.innerHTML += `<li><a href='#' class='badge-red' onClick='torlesItal(${kosarItal.indexOf(elem)},${arakItal[elem-1]})'>X</a>${elem}. sorszámú ital</li>`
  })
  osszeg.innerHTML = `Végösszeg: ${vegosszeg}Ft`
}

/* 
<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/