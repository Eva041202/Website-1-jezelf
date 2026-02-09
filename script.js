const base = "https://fdnd.directus.app/items"
let endpoint = "/person?filter[id][_in]=301, 286, 283"
let url = base + endpoint

let deLijst = document.querySelector("ul")

getMinorMensen()

async function getMinorMensen () {
    let response = await fetch(url)

    let responseJSON = await response.json();

    let deMinorMensen = responseJSON.data


    deMinorMensen.forEach( eenMinorMens => {
        console.log(deMinorMensen)

        let minorMensHTML =
        `<li>
            <h2>${eenMinorMens.name}}</h2>
            <p>${eenMinorMens.fav_tag}</p>
            <img src="${eenMinorMens.avatar}" alt="${eenMinorMens.name}"
        </li>`

        deLijst.insertAdjacentHTML("afterbegin", minorMensHTML)

    } )

}