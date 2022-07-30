// Récupère les tags selectionner
function getSelectTags() {

    // Récupère tout les tags selectionner du DOM
    const listTags = document.getElementsByClassName('tags__p')

    // Init array
    let arrTagsSelectDOM =[]

    // Boucle chaque elements du tableau et les ajoute au tableau arrTagSelectDOM
    for (let i = 0; i < listTags.length ; i++){

        arrTagsSelectDOM.push(listTags[i].innerText.toLocaleLowerCase().replace(/ /g, ''))
    }
    
    return arrTagsSelectDOM
}




async function princiaplSearch() {

    // Récupère tout les tags selectionner
    getSelectTags()

    
    // Init array
    let recipeFilterIngredients =[]
    let recipeFilterAppareils = []
    let recipeFilterUstensils = []

    

    function getRecipesByTag(recipesArr){
        // Boucle le tableau des recettes
        for(let i = 0; i < recipesArr.length; i++) {
            //console.log('dans la boucle')
            // Si recipes[i].ingredients est supérieur à 1
            if (recipesArr[i].ingredients.length > 0) {
                // boucle sur chaque élément de recipes[i].ingredients
                recipesArr[i].ingredients.forEach(ingredients => {
                    // Crée une variable qui récupère le contenue de recipes[i].ingredients.ingredient
                    let ingredient1 = ingredients.ingredient.toLocaleLowerCase().replace(/ /g, '')
                    // Boucle le tableau des tags selectionnés
                    getSelectTags().forEach(tag => {
                        // Si la valeur de ingredients1 est égale à une valeur du tableau de getSelectTags()
                        if (ingredient1 === tag) {
                            // Ajoute la recette dans le tableau RecipesFilterIngredients
                            recipeFilterIngredients.push(recipesArr[i])
                        }
                    })
                })
            }
    
            // si recipes[i].appliance est supérieur à 1
            if (recipesArr[i].appliance.length > 0){
                // Crée une variable qui récupère le contenue de appliance
                const appliance1 = recipesArr[i].appliance.toLocaleLowerCase().replace(/ /g, '')
                // boucle le tableau getSelectTags()
                getSelectTags().forEach(tag => {
                    // Vérifie si appliance1 est égale a un élémént du tableau getSelectTags()
                    if (appliance1 === tag) {
                        // Ajoute la recette dans le tableau recipesFilterAppareils
                        recipeFilterAppareils.push(recipesArr[i])
                    }
                })
            }
    
            // Si recipes[i].ustensils est supérieur à 1
            if (recipesArr[i].ustensils.length > 0) {
                // Boucle sur chaque éléments du tableau recipes.ustensils
                recipesArr[i].ustensils.forEach(ustensils => {
                    // Crée une variable qui récupère le contenue de recipes[i].ustensils
                    let ustensils1 = ustensils.toLocaleLowerCase().replace(/ /g, '')
                    // Boucle le tableau getSelectTags()
                    getSelectTags().forEach(tag => {
                        // Si la valeur de ustensils1 est égale à une valeur de getSelectTags()
                        if (ustensils1 === tag) {
                            // Ajoute la recette dans le tableau recipesFilterUstensils
                            recipeFilterUstensils.push(recipesArr[i])
                            
                        }
                    })
                })
            }
        }
    }


    getRecipesByTag(recipes)
    
    



    // Crée une nouveau tableau qui concat les 3 tableaux de recettes (recipesFilterIngredients + recipesFilterAppareils + RecipesFilterUstensils)
    let concatArray = recipeFilterIngredients.concat(recipeFilterAppareils.concat(recipeFilterUstensils))

    

    // Tri le contenue de concatArray par id
    concatArray.sort((a,b) =>  a.id - b.id)

    console.log('CONCAT ARR : ', concatArray)

    // Init array
    let doublonsArr = []
    let doublonsArrOnlyWithDoublons = []

    // Boucle le tableau concatArray
    for (let i = 0; i < concatArray.length; i++){
        // Si le tableau des tags selectionner à plus de 2 tags
        if (getSelectTags().length > 2){
            // Je vérifie qu'il y a des doublons (même recette) dans le tableau concatarray
            if (concatArray[i + 1] == concatArray[i] && concatArray[i + 2] == concatArray[i] ){
                // Si il y a une meme recette 3 fois je l'ajoute au tableau doublonsArr
                doublonsArr.push(concatArray[i])
                
            }
        }
        // Si le tableau des tags selectioner contiens plus de 1 tag
        else if (getSelectTags().length > 1) {
            // Je vérifie qu'il y a des doublons (même recette) dans le tableau concatarray
            if (concatArray[i + 1] == concatArray[i] ){
                // Si il y a une meme recette 2 fois je l'ajoute au tableau doublonsArr
                doublonsArr.push(concatArray[i])
                
            }
        }
    }

    /*  À ce moment la le tabelau doublonsArr contient
        les recette qui sont presente plusieurs fois 
        dans le tableau concatArray
    */

    

    // Boucle le tableau doublonArr
    for (let i = 0; i < doublonsArr.length; i++){
        // Si le tableau doublonArr à plus de 2 recettes
        if ( doublonsArr.length > 2){
            // Si le tableau contient des doublons
            if (doublonsArr[i + 1] == doublonsArr[i] ){
                // J'ajoute les doublons dans le tableau doublonsArrOnlyWithDoublons
                doublonsArrOnlyWithDoublons.push(doublonsArr[i])
                
            }
        }
    }
    


    // Suprime tout les doublons dans les tableau
    concatArray = [...new Set(concatArray)]
    doublonsArr = [...new Set(doublonsArr)]
    doublonsArrOnlyWithDoublons = [...new Set(doublonsArrOnlyWithDoublons)]



    function whatArray(){
        // Si le tableau doublonsArrOnlyWithDoublons contient des recettes
        if(doublonsArrOnlyWithDoublons.length >= 1){
            // Retoune ce tableau
            return doublonsArrOnlyWithDoublons
        // Si doublonsArr contient des recettes
        } else if (doublonsArr.length >= 1){
            // Retourne ce tableau
            return doublonsArr
        }
    }



    ///////////////////    

    // Affiche la liste des btn dropDown en fonction des données
    function displayTags() {

        if (getSelectTags().length >= 2){

                
            
            getRecipesByTag(whatArray())

            searchTagsIngredients(whatArray())
            searchTagsAppareils(whatArray())
            searchTagsUstensils(whatArray())
        }
        else if (concatArray.length > 0) {

            
            getRecipesByTag(concatArray)

            searchTagsIngredients(concatArray)
            searchTagsAppareils(concatArray)
            searchTagsUstensils(concatArray)

        } else if (concatArray.length <= 0){
            

            getRecipesByTag(recipes)

            searchTagsIngredients(recipes)
            searchTagsAppareils(recipes)
            searchTagsUstensils(recipes)
        }
    }

    displayTags()




    /*******************************************
     * ***** SECTION RECHERCHE PAR INPUT ***** * 
     *******************************************/
    
    

    // Section du DOM ou les recettes s'affichent
    const recipesSection = document.getElementById('recipe--card')

    // Input
    const inputPrincipal = document.getElementById('input__principal')

    // Affiche les recettes
    function displayRecipes(){

        if (getSelectTags().length >= 2){
            recipesSection.innerHTML = ""
            
            // Affiche les recette par tags
            recipesCardFactory(whatArray(), recipesSection)

        }
         else if (concatArray.length > 0) {


            recipesSection.innerHTML = ""
            // Affiche les recette par tags
            recipesCardFactory(concatArray, recipesSection)

        } else if (recipes.length > 0) {
            recipesSection.innerHTML = ""
            // Affiche toutes les recettes
            recipesCardFactory(recipes, recipesSection)


        }
    }

    displayRecipes()

    // Écoute l'evenement
    inputPrincipal.addEventListener('input', filterData)

    // Filtre le tableau concatArray en fonction de la valeur de l'input
    function filterData(){

        // Vide le DOM des recettes affichées
        recipesSection.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputPrincipal.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré
        const result = recipes.filter(e => e.name.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        //console.log('RESULT :', result)

        // Si la longeur de l'input est inférieur à 3
        if (input.length < 3){

            recipesSection.innerHTML = ""
            // Affiche les recettes
            displayRecipes()

            displayTags()

        } else if (input.length >= 3){

            if(result.length == 0){
                recipesSection.innerHTML = ""
                console.log('AUCUNE RECETTES TROUVÉES')
            }
            recipesSection.innerHTML = ""
            // Affiche les recettes filtrés
            recipesCardFactory(result, recipesSection)

            searchTagsIngredients(result)
            searchTagsAppareils(result)
            searchTagsUstensils(result)
            
        }
    }
}

/*
setTimeout(function () {
    princiaplSearch()
}, 500)

*/

princiaplSearch()