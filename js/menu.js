const container = document.querySelector("#container")

const llamarApi = () => {
    const json = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w")
    .then(response => response.json())
    .then(data => data.drinks.forEach(element => mostrarDatos(element)))
}

const mostrarDatos = (drink) => {
    let divTragos = document.createElement('div')
    divTragos.classList.add("card")
    divTragos.classList.add("card-drinks")
    divTragos.innerHTML = `
        <h5 class="card-title text-center">${drink.strDrink}</h5>
        <img src="${drink.strDrinkThumb}" class="card-img-top"></img>
    `
    container.appendChild(divTragos)
}

async function crear() {

    const drink = document.getElementById('drink').value
    const ingredients = document.getElementById('ingredients').value

    const jsonRequest = {
        drink,
        ingredients
    }

    // const json = JSON.stringify(jsonRequest);

    // await fetch("http://localhost:8080/webapp/CrearTragoController", {
    //     method: 'POST',
    //     body: json,
    //     headers: new Headers({
    //         'Content-Type': 'text/json'
    //     })
    // }
    // )
}

const list = document.querySelector("#list")

function listar() {

    const json = 
        fetch('http://localhost:8080/webapp/ListarTragosController')
        .then(response => response.json())
        //.then(data => data.drinks.forEach(element => dibujarDatos(element)))
        //.then(data => {
        //    datos = data;
        //    dibujarDatos(data)
        //});
}

function dibujarDatos(json) {

    let divLista = document.createElement('div')
    divLista.classList.add("card")
    divLista.classList.add("card-drinks")
    divLista.innerHTML = `
        <h5 class="card-title text-center">${d}</h5>
        <p class="">${d}</p>
    `
    list.appendChild(divLista)
}
