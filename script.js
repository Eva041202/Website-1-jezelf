console.log("werkt!");

const apiURL = "https://fdnd.directus.app/items/person/290"
const parentElement = document.querySelector("article")

parentElement.classList.add("loading")

fetchJson(apiURL).then(function (response) {
    console.log(response.data)
    parentElement.innerHTML =
    `<article>
        <p>${response.data.bio}</p>
    </article>`

    parentElement.classList.remove("loading")
})

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}

const base = "https://fdnd.directus.app/items"
let endpoint = "/person?filter[id][_in]=301, 286, 283, 222"
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
            <p>${eenMinorMens.bio}</p>
            <img src="${eenMinorMens.avatar}" alt="${eenMinorMens.name}"
        </li>`

        deLijst.insertAdjacentHTML("afterbegin", minorMensHTML)

    } )

}