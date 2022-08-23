// Selectionne et affiche le tag dans la section tag className = class des tag de la list du button dropDown
function selectTag (className) {
    // Regex qui sert à suprimer des caractères
    const regex = /[ .()]/g

    // Récupère les elements du DOM
    const tagSection = document.getElementById('tags') // Section tag
    const tagList = document.getElementsByClassName(className) // Selectionne tout les tags du dropDown btn du DOM

        // Boucle dans le tableau des tags
        for (let i = 0; i < tagList.length; i++) {
            // Écoute l'evenement click sur le tag
            tagList[i].addEventListener('click', () => {
                // Récupère la valeur du tag cliquer
                const tagClicked = tagList[i].innerHTML

                // Récupère data-type (pour ajouter la couleur de fond via une class)
                const getDataType = tagList[i].getAttribute('data-type')

                // Si le tags est déja dans le DOM il est récupérer

                const tagsDom = document.getElementsByClassName('tags__' + tagClicked.toLocaleLowerCase().replace(regex, ''))
                // Si la liste de tagsDom est inférieur à 1 celà veut dire que le tags n'a pas encore été selectionner donc je l'ajoute au DOM
                if (tagsDom.length < 1) {
                    // Crée la div avec les valeurs récupèrer
                    const tagAddOnSection = `   <div class="${'color__' + getDataType} tags" id=${tagClicked.toLocaleLowerCase().replace(regex, '')}>
                                                    <p class="${'tags__' + tagClicked.toLocaleLowerCase().replace(regex, '')} tags__p">${tagClicked}</p>
                                                    <i class="far fa-times-circle" 
                                                    onclick="deleteTag(${tagClicked.toLocaleLowerCase().replace(regex, '')})"></i>
                                                </div>`

                    // Injecte la div dans le DOM
                    tagSection.insertAdjacentHTML('beforeEnd', tagAddOnSection)

                    princiaplSearch()

                // Si le tags est déja dans le DOM
                } else if (tagsDom.length >= 1) {
                    console.log('TAG DEJA AJOUTER : ', tagsDom)
                }
            })
        }
}

function deleteTag (id) {
    id.remove()

    princiaplSearch()
}
