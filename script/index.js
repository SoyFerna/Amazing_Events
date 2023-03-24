
let eventos = data.events

console.log(eventos)



//llamadas de funciones
displayCard(eventos)


//constantes capturadas y variables
const input = document.getElementById('input')
const inputChecks = document.getElementById('checks')
const input2 = document.querySelector('input2')

//eventos
checkBoxes(eventos)

input.addEventListener('input', mixFiltros)

inputChecks.addEventListener('change', mixFiltros)

//MIX DE FILTROS 

fitrarPorCetegoria(eventos)

//funciones

function mixFiltros(){
    let arrayFiltrado = filterText(eventos, input.value)
    let arrayFiltrado2 = fitrarPorCetegoria(arrayFiltrado)
    displayCard(arrayFiltrado2)
}
function checkBoxes(arrInfo){
    let checks = ``
    let categoriaRepetida = arrInfo.map(elemento => elemento.category)
   let categoria = new Set(categoriaRepetida.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
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

function fitrarPorCetegoria(arrInfo){
    let checkBoxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkBoxes);
    let arrayChecks = Array.from(checkBoxes)
    console.log(arrayChecks);
    let checkChecked = arrayChecks.filter(check => check.checked)
    console.log(checkChecked);
    if(checkChecked.length == 0){
        return arrInfo
    }
    let checkValues= checkChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrInfo.filter(elemento => checkValues.includes(elemento.category))
    console.log(arrayFiltrado);
    return arrayFiltrado
}


/* //Print de todos los checks de forma dinamica, usando un map
function printChecks(id_etiqueta, array_tipos) {
    let container = document.querySelector(id_etiqueta)
    array_tipos = array_tipos.map(each => {
      return {
      `<div class="card m-2 shadow" style="width: 18rem"> 
      <fieldset>
      <input onclick="captureData()" class="checks" type="checkbox" id="${each}" role="switch" id="checks" value="${each}">
      <label class="form-check-label" for="${each}">${each}</label>
      </fieldset>
      </div>`
    } */
      
  /*   }) } */
{/* ` <div class="row ">
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
        </div>` */}
        
/*     array_tipos.push(<div class= "input-group mb-2 w-25 container">
    <input oninput="captureData()"  id="id_search" class="form-control h-1" type="text" name="text" placeholder= "Search" > 
    </div>
    )
    container.innerHTML = array_tipos.join('')
  }
  
  //Llamamos a la funcion con el ID de los checks y las categorias filtradas sin repetir
  printChecks('#table_checks', dataArrayFiltrado)
  
  //Capturo los datos para realizar el filtro funcional
  
  function captureData() {
    let text = document.getElementById('id_search').value.toLowerCase()
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value) //Forma no aceptada por Edge
    let filter = dataArray.filter(each => {
      return (
        each.name.toLowerCase().includes(text)
      ) && (
          (checks.length === 0 || checks.includes(each.category))
        )
    })
    if (filter.length > 0) {
      cards(filter)
    }
    else {
      notFound()
  
    } */