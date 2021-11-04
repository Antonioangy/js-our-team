// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// array membri
const utenti = [
    {
        image: "img/wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    
    {
        image: "img/angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    } ,
    {
        image: "img/walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager",
    },
    {
        image: "img/scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer"
    }
]

console.log(utenti)

let container = document.querySelector('.team-container');


let image = document.getElementById("image").value
let name = document.getElementById("name").value
let role = document.getElementById("role").value
console.log(name)

// creo un ciclo che aggiunge automaticamente i membri
for (let i = 0; i<utenti.length; i++){

    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
        <img
            src="${utenti[i].image}"
            alt="Wayne Barnett"
        >
        </div>
        <div class="card-text">
        <h3>${utenti[0].name}</h3>
        <p>${utenti[i].ruolo}</p>
        </div>
    </div>`;
}
