function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const pripona = "@fit.cvut.cz"

const krestniJmeno = prompt("Zadejte vaše křestní jméno").trim()
const prijmeni = prompt("Zadejte vaše příjmení").trim()

const pridelenyEmail = removeDiacritics(krestniJmeno.slice(0, 5) + prijmeni.slice(0, 3)) + pripona;

document.body.innerHTML +=pridelenyEmail.toLowerCase();