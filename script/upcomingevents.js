let currentDate = data.currentDate 
let pastEvents = []
let upcomingEvents = []
let eventos = data.events

for(let i = 0; i<eventos.length; i++){

    if(eventos[i].date > currentDate){
        upcomingEvents.push(eventos[i])
    }
/*     else{
        pastEvents.push(eventos[i])
    } */

}


console.log(upcomingEvents)

function displayCard(arr){
    let card = ``
    let showCard = document.getElementById("eventcontainer")

    for(i = 0; i < arr.length; i++){
        card += 
        ` <div class="row ">
        <div class="col-3"></div>
        <div class="card m-2 shadow" style="width: 18rem">
            <img src="${arr[i].image } " class="card-img-top" alt="..." height="150" />
            <div class="card-body">
                <h5 class="card-title">${arr[i].name}</h5>
                <p class="card-text">
                ${arr[i].description }
                </p>
            </div>
            <div class="card-footer border-0">
                <div class="d-flex justify-content-between">
                    <p>${arr[i].price }</p>
                    <a href="./details.html" class="btn amazeButton">See more...</a>
                </div>
            </div>
            </div>
        </div>`
    }
showCard.innerHTML = card; 
}

displayCard(upcomingEvents)