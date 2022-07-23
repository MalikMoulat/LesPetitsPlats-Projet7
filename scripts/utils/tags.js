//Selectionne et affiche le tag dans la section tag
function selectTag(){

    //Récupère les elements du DOM
    const tagSection = document.getElementById('tags') // Section tag
    const tagList = document.getElementsByClassName('tag--list') // Selectionne tout les tags des dropDown btn du DOM

        // Boucle dans le tableau des tags
        for (let i = 0; i < tagList.length; i++) {

            // Écoute l'evenement click sur le tag
            tagList[i].addEventListener('click', (e) => {

                // Récupère la valeur du tag cliquer
                const tagClicked = tagList[i].innerHTML

                // Récupère data-type (pour ajouter la couleur de fond via une class)
                const getDataType = tagList[i].getAttribute("data-type")

                // Si le tags est déja dans le DOM il est récupérer
<<<<<<< HEAD
                const tagsDom = document.getElementsByClassName('tags__' + tagClicked.toLocaleLowerCase().replace(/ /g, ''))
=======
               
>>>>>>> e0d4f3e39fe1e5ef1c25498fe0e9cbd5b8026f98
                
                // Si la liste de tagsDom est inférieur à 1 celà veut dire que le tags n'a pas encore été selectionner donc je l'ajoute au DOM
                if (tagsDom.length < 1) {
                    // Crée la div avec les valeurs récupèrer
                    const tagAddOnSection = `   <div class="${'color__' + getDataType} tags">
<<<<<<< HEAD
                                                    <p class="${'tags__' + tagClicked.toLocaleLowerCase().replace(/ /g, '')} tags__p">${tagClicked}</p>
=======
                                                    
>>>>>>> e0d4f3e39fe1e5ef1c25498fe0e9cbd5b8026f98
                                                    <i class="far fa-times-circle" onclick="deleteTag()"></i>
                                                </div>`

                    // Injecte la div dans le DOM
                    tagSection.insertAdjacentHTML('beforeEnd', tagAddOnSection)

                }
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


