//Selectionne et affiche le tag dans la section tag className = class des tag de la list du button dropDown
function selectTag(className){

    //Récupère les elements du DOM
    const tagSection = document.getElementById('tags') // Section tag
    const tagList = document.getElementsByClassName(className) // Selectionne tout les tags du dropDown btn du DOM

        // Boucle dans le tableau des tags
        for (let i = 0; i < tagList.length; i++) {

            // Écoute l'evenement click sur le tag
            tagList[i].addEventListener('click', (e) => {

                // Récupère la valeur du tag cliquer
                const tagClicked = tagList[i].innerHTML
                const tagClickedSansEspace = tagClicked.toLocaleLowerCase().replace(/ /g, '')

                // Récupère data-type (pour ajouter la couleur de fond via une class)
                const getDataType = tagList[i].getAttribute("data-type")

                // Si le tags est déja dans le DOM il est récupérer

                const tagsDom = document.getElementsByClassName('tags__' + tagClicked.toLocaleLowerCase().replace(/ /g, ''))
                
                // Si la liste de tagsDom est inférieur à 1 celà veut dire que le tags n'a pas encore été selectionner donc je l'ajoute au DOM
                if (tagsDom.length < 1) {
                    // Crée la div avec les valeurs récupèrer
                    const tagAddOnSection = `   <div class="${'color__' + getDataType} tags">
                                                    <p class="${'tags__' + tagClicked.toLocaleLowerCase().replace(/ /g, '')} tags__p">${tagClicked}</p>
                                                    <i class="far fa-times-circle" onclick="deleteTag()"></i>
                                                </div>`

                    // Injecte la div dans le DOM
                    tagSection.insertAdjacentHTML('beforeEnd', tagAddOnSection)
                    princiaplSearch()
                }
                // Si le tags est déja dans le DOM
                else if (tagsDom.length >= 1){
                    console.log('TAG DEJA AJOUTER : ', tagsDom)
                }
                
            })
        }
}


// Supprime un tag selectionner
function deleteTag(){

    // Récupère tout les boutons liée aux tags
    const buttonClose = document.getElementsByClassName('fa-times-circle')
    
        for ( let i = 0; i < buttonClose.length; i++){
            // Écoute l'évenement click sur le bouton cliquer
            buttonClose[i].addEventListener('click' , (e) => {
                // Supprime la DIV parent du bouton
                buttonClose[i].parentElement.remove()
                princiaplSearch()
                
            })
        }
}

