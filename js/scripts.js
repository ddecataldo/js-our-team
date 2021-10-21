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

function addMember(container, immagine, nome, ruolo) {
    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${immagine}"
            alt="${nome}"
            />
        </div>
        <div class="card-text">
            <h3>${nome}</h3>
            <p>${ruolo}</p>
        </div>
    </div>
    `;
}

for (let i = 0; i < team.length; i++) {
    const membroTeam = team[i];
    console.log(membroTeam)

    addMember(teamContainer, team[i].immagine, team[i].nome, team[i].ruolo);

}

const addMemberBtn = document.getElementById(addMemberButton);
let teamCard = document.querySelectorAll(".team-card").length;

addMemberButton.addEventListener("click", function(){

    // Richiamo l'id del botton dove far iniziare l'evento
    
    const nomeUtenteTeam = document.getElementById("name").value;
    const ruoloUtenteTeam = document.getElementById("role").value;
    const imgUtenteTeam = document.getElementById("image").value;

    team.push ({
        nome: nomeUtenteTeam,
        ruolo: ruoloUtenteTeam,
        immagine: imgUtenteTeam
    });

    y = teamCard;
    y++;

    addMember(teamContainer, team[teamCard].immagine, team[teamCard].nome, team[teamCard].ruolo);

});




