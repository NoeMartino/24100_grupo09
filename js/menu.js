const container = document.querySelector("#container")

const llamarApi = () => {
    const json = fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?f=w")
    .then(response => response.json())
    .then(data => data.drinks.forEach(element => mostrarDatos(element)))
}

const mostrarDatos = (drink) => {
    let divTragos = document.createElement('div')
    divTragos.innerHTML = `
        <h3>${drink.strDrink}</h3>
        <img src="${drink.strDrinkThumb}"></img>
    `
    container.appendChild(divTragos)
}