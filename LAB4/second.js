export function openSecond() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        const content = document.querySelector('.content')
        content.innerHTML = ''
        const div = document.createElement('div')
        const ul = document.createElement('ul')
        const arr = data.results
        arr.forEach(pokemon => {
            const li = document.createElement('li')
            const pokemonName = document.createTextNode(pokemon.name)
            li.appendChild(pokemonName)
            ul.appendChild(li)
        })
        const title = document.createElement('h2')
        const titleValue = document.createTextNode('All aviable Pokemons:')
        title.appendChild(titleValue)
        div.appendChild(title)
        div.appendChild(ul)
        content.appendChild(div)
    })
}