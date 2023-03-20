
let eventos = data.events

console.log(eventos)



//llamadas de funciones
displayCard(eventos)
checkBoxes(eventos)

//constantes capturadas y variables
const input = document.getElementById('input')
const inputChecks = document.getElementById('checks')

console.log(inputChecks) 
//eventos

input.addEventListener('input',() => {
   let arrayFiltrado = filterText(eventos, input.value)
   displayCard(arrayFiltrado)
})


//funciones
function checkBoxes(arrInfo){
    let checks = ``
    let categoriaRepetida = arrInfo.map(elemento => elemento.category)
   let categoria = new Set(categoriaRepetida)
    categoria.forEach(elemento => {
        checks += `<div class="form-check mx-2">
        <input class="form-check-input amazeCheck" type="checkbox" value="${elemento}" id="${elemento}" />
        <label class="form-check-label" for="${elemento}">
            ${elemento}
        </label>
    </div>`

    });
    inputChecks.innerHTML = checks
}


function displayCard(arr) {

    let card = ``
    let showCard = document.getElementById("cardcontainer")

    for (i = 0; i < arr.length; i++) {
        card +=
            ` <div class="row ">
        <div class="col-3"></div>
        <div class="card m-2 shadow" style="width: 18rem">
            <img src="${arr[i].image} " class="card-img-top" alt="..." height="150" />
            <div class="card-body">
                <h5 class="card-title">${arr[i].name}</h5>
                <p class="card-text">
                ${arr[i].description}
                </p>
            </div>
            <div class="card-footer border-0">
                <div class="d-flex justify-content-between">
                    <p>${arr[i].price}</p>
                    <a href="./details.html" class="btn amazeButton">See more...</a>
                </div>
            </div>
            </div>
        </div>`
    }
    showCard.innerHTML = card;
    if(arr.length == 0){
        showCard.innerHTML = "<h2 class='display-1 fw-bolder'>NO SE ENCONTRARON RESULTADOS</h2>"
        return
       }
}


function filterText(arr, text) {
    let arrayFiltrado = arr.filter(elemento => elemento.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFiltrado
}