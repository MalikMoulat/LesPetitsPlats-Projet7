//Selectionne et affiche le tag dans la section tag
function selectTag(){

    //Récupère les elements du DOM
    const tagSection = document.getElementById('tags') // Section tag
    const tagList = document.getElementsByClassName('tag--list') // Selectionne tout les tags dans le DOM

        // Boucle dans le tableau des tags
        for (let i = 0; i < tagList.length; i++) {

            // Écoute l'evenement click sur le tag
            tagList[i].addEventListener('click', (e) => {
                
                // Récupère la valeur du tag cliquer
                const tagClicked = tagList[i].innerHTML
                // Récupère data-type (pour ajouter la couleur de fond via une class)
                const getDataType = tagList[i].getAttribute("data-type")
                // Crée la div avec les valeurs récupèrer
                const tagAddOnSection = `   <div class="${'color__' + getDataType} tags">
                                                <p>${tagClicked}</p>
                                                <i class="far fa-times-circle" onclick="deleteTag()"></i>
                                            </div>`
                
                // Injecte la div dans le DOM
                tagSection.insertAdjacentHTML('beforeEnd', tagAddOnSection)

            })
        }
}

setTimeout(function () {
    selectTag()
}, 500)

// Supprime un tag selectionner
function deleteTag(){

    // Récupère tout les boutons liée aux tags
    const buttonClose = document.getElementsByClassName('fa-times-circle')
    
        for ( let i = 0; i < buttonClose.length; i++){
            // Écoute l'évenement click sur le bouton cliquer
            buttonClose[i].addEventListener('click' , (e) => {
                // Supprime la DIV parent du bouton
                buttonClose[i].parentElement.remove()  
            })
        }
}