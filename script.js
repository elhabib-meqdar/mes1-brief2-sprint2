// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.

const buttonAjouter =document.getElementById("buttonAjouter")
const participantNom =document.getElementById("nom")
const listeParticipants =document.getElementById("liste-participants")

let nombre =101

let participant ={
  "id" : nombre,
  "nom" :participantNom.value,
  "status" : "Marquer présent",
}
affichier()

buttonAjouter.addEventListener("click", (e) =>{
  e.preventDefault()
  
  participants.push(participant)
  listeParticipants.innerHTML=""
  affichier()
})

function affichier (){
    participants.forEach(p =>{
      nombre ++
    const participantInformation = document.createElement("li")
    listeParticipants.append(participantInformation)

    const participantInfo =document.createElement("div")
    participantInformation.append(participantInfo)

    const participantId =document.createElement("span")
    participantId.textContent=(nombre)
    participantInfo.append(participantId)

    const info =document.createElement("div")
    participantInfo.append(info)

    const participantName =document.createElement("h3")
    participantName.textContent=(p.nom)
    info.append(participantName)

    const badge =document.createElement("span")
    info.append(badge)
    badge.textContent=("Inscrit")

    // const pNom =document.getElementById("p")
    // pNom.textContent=(p.nom)

    const contuner =document.createElement("div")
    listeParticipants.append(contuner)

    const buttonPresence =document.createElement("button")
    buttonPresence.textContent=(" Marquer présent")
    contuner.append(buttonPresence)
    buttonPresence .addEventListener("click", (e) =>{
      if (buttonPresence.textContent==(" Marquer présent")){
        badge.textContent=("Présent")
        buttonPresence.textContent=("Remettre inscrit")

      }else{
        buttonPresence.textContent=(" Marquer présent")
        badge.textContent=("Inscrit")
      }
      
    })


    const buttonDelete =document.createElement("button")
    buttonDelete.textContent=("Supprimer")
    contuner.append(buttonDelete)

    buttonDelete.addEventListener("click", (e) =>{
      e.preventDefault()
      Supprimer(p)
      affichier()
    })

    function Supprimer(pS){
      
      participants =participants.filter(v => v.id == pS.id)
    }
  })

}