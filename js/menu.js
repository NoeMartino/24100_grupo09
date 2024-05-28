const container = document.querySelector("#container")

const llamarApi = () => {
    const json = fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?f=w")
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