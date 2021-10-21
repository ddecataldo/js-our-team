/* name,role,image
Wayne Barnett,Founder & CEO,wayne-barnett-founder-ceo.jpg
Angela Caroll,Chief Editor,angela-caroll-chief-editor.jpg
Walter Gordon,Office Manager,walter-gordon-office-manager.jpg
Angela Lopez,Social Media Manager,angela-lopez-social-media-manager.jpg
Scott Estrada,Developer,scott-estrada-developer.jpg
Barbara Ramos,Graphic Designer,barbara-ramos-graphic-designer.jpg
*/
let membroTeam;
const team = [
    // Indice 0
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg"
    },
    // Indice 1
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg"
    },
    // Indice 2
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "img/walter-gordon-office-manager.jpg"
    },
    // Indice 3
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/angela-lopez-social-media-manager.jpg"
    },
    // Indice 4
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "img/scott-estrada-developer.jpg"
    },
    // Indice 5
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/barbara-ramos-graphic-designer.jpg"
    }
];

// Richiamo la classe dove posizionare gli elementi html
const teamContainer = document.querySelector(".team-container");

for (let i = 0; i < team.length; i++) {
    const membroTeam = team[i];
    console.log(membroTeam)
    
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${team[i].immagine}"
            alt="${team[i].nome}"
            />
        </div>
        <div class="card-text">
            <h3>${team[i].nome}</h3>
            <p>${team[i].ruolo}</p>
        </div>
    </div>
    `;
}

// Richiamo l'id del botton dove far iniziare l'evento
const addMember = document.getElementById(addMemberButton);
const nomeUtenteTeam = document.getElementById("name").value;
const ruoloUtenteTeam = document.getElementById("role").value;
const imgUtenteTeam = document.getElementById("image").value

let y;
addMemberButton.addEventListener("click", function(){

    team.push ({
        nome: nomeUtenteTeam,
        ruolo: ruoloUtenteTeam,
        immagine: imgUtenteTeam
    });

});




