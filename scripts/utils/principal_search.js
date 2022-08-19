// Récupère les tags selectionner
function getSelectTags () {
    // Regex qui sert à suprimer des caractères
    const regex = /[ .]/g

    // Récupère tout les tags selectionner du DOM
    const listTags = document.getElementsByClassName('tags__p')

    // Init array
    const arrTagsSelectDOM = []

    // Boucle chaque elements du tableau et les ajoute au tableau arrTagSelectDOM
    for (let i = 0; i < listTags.length; i++) {
        arrTagsSelectDOM.push(listTags[i].innerText.toLocaleLowerCase().replace(regex, ''))
    }

    return arrTagsSelectDOM
}

async function princiaplSearch () {
    // Regex qui sert à suprimer des caractères
    const regex = /[ .]/g

    // Récupère tout les tags selectionner
    getSelectTags()

    // Init array
    const recipeFilterIngredients = []
    const recipeFilterAppareils = []
    const recipeFilterUstensils = []

    let doublonsArr = []
    let doublonsArrOnlyWithDoublons = []

    function getRecipesByTag (recipesArr) {
        // Boucle le tableau des recettes
        for (let i = 0; i < recipesArr.length; i++) {
            // Si recipes[i].ingredients est supérieur à 1
            if (recipesArr[i].ingredients.length > 0) {
                // boucle sur chaque élément de recipes[i].ingredients
                recipesArr[i].ingredients.forEach(ingredients => {
                    // Crée une variable qui récupère le contenue de recipes[i].ingredients.ingredient
                    const ingredient1 = ingredients.ingredient.toLocaleLowerCase().replace(regex, '')
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
            if (recipesArr[i].appliance.length > 0) {
                // Crée une variable qui récupère le contenue de appliance
                const appliance1 = recipesArr[i].appliance.toLocaleLowerCase().replace(regex, '')
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
                    const ustensils1 = ustensils.toLocaleLowerCase().replace(regex, '')
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
    concatArray.sort((a, b) => a.id - b.id)

    // Boucle le tableau concatArray
    for (let i = 0; i < concatArray.length; i++) {
        // Si le tableau des tags selectionner à plus de 2 tags
        if (getSelectTags().length > 2) {
            // Je vérifie qu'il y a des doublons (même recette) dans le tableau concatarray
            if (concatArray[i + 1] == concatArray[i] && concatArray[i + 2] == concatArray[i]) {
                // Si il y a une meme recette 3 fois je l'ajoute au tableau doublonsArr
                doublonsArr.push(concatArray[i])
            }
        // Si le tableau des tags selectioner contiens plus de 1 tag
        } else if (getSelectTags().length > 1) {
            // Je vérifie qu'il y a des doublons (même recette) dans le tableau concatarray
            if (concatArray[i + 1] == concatArray[i]) {
                // Si il y a une meme recette 2 fois je l'ajoute au tableau doublonsArr
                doublonsArr.push(concatArray[i])
            }
        }
    }

    /*  À ce moment la le tabelau doublonsArr contient
        les recettes qui sont presente plusieurs fois
        dans le tableau concatArray
    */

    // Boucle le tableau doublonArr
    for (let i = 0; i < doublonsArr.length; i++) {
        // Si le tableau doublonArr à plus de 2 recettes
        if (doublonsArr.length > 2) {
            // Si le tableau contient des doublons
            if (doublonsArr[i + 1] == doublonsArr[i]) {
                // J'ajoute les doublons dans le tableau doublonsArrOnlyWithDoublons
                doublonsArrOnlyWithDoublons.push(doublonsArr[i])
            }
        }
    }

    // Suprime tout les doublons dans les tableaux
    concatArray = [...new Set(concatArray)]
    doublonsArr = [...new Set(doublonsArr)]
    doublonsArrOnlyWithDoublons = [...new Set(doublonsArrOnlyWithDoublons)]

    function whatArray () {
        // Si le tableau doublonsArrOnlyWithDoublons contient des recettes
        if (doublonsArrOnlyWithDoublons.length >= 1) {
            // Retoune ce tableau
            return doublonsArrOnlyWithDoublons
        // Si doublonsArr contient des recettes
        } else if (doublonsArr.length >= 1) {
            // Retourne ce tableau
            return doublonsArr
        }
    }

    // Affiche la liste des btn dropDown en fonction des données
    function displayTags () {
        if (getSelectTags().length >= 2) {
            getRecipesByTag(whatArray())

            searchTagsIngredients(whatArray())
            searchTagsAppareils(whatArray())
            searchTagsUstensils(whatArray())
        } else if (concatArray.length > 0) {
            getRecipesByTag(concatArray)

            searchTagsIngredients(concatArray)
            searchTagsAppareils(concatArray)
            searchTagsUstensils(concatArray)
        } else if (concatArray.length <= 0) {
            getRecipesByTag(recipes)

            searchTagsIngredients(recipes)
            searchTagsAppareils(recipes)
            searchTagsUstensils(recipes)
        }
    }

    displayTags()

    /*******************************************
     * ***** SECTION RECHERCHE PAR INPUT ***** *
     ******************************************/

    // Section du DOM ou les recettes s'affichent
    const recipesSection = document.getElementById('recipe--card')

    // Section du DOM ou un message s'affiche si aucune recette ne correspond
    const noRecipesSection = document.getElementById('no__recipes')

    // Input
    const inputPrincipal = document.getElementById('input__principal')

    // Affiche les recettes
    function displayRecipes () {
        if (getSelectTags().length >= 2) {
            recipesSection.innerHTML = ''

            // Affiche les recette par tags
            recipesCardFactory(whatArray(), recipesSection)

            return whatArray()
        } else if (concatArray.length > 0) {
            recipesSection.innerHTML = ''
            // Affiche les recette par tags
            recipesCardFactory(concatArray, recipesSection)

            return concatArray
        } else if (recipes.length > 0) {
            recipesSection.innerHTML = ''
            // Affiche toutes les recettes
            recipesCardFactory(recipes, recipesSection)

            return recipes
        }
    }

    displayRecipes()

    // Écoute l'evenement
    inputPrincipal.addEventListener('keyup', filterData)

    // Filtre le tableau que la fonction displayRecipes() retourne en fonction de la valeur de l'input
    function filterData () {
        // Variable contenant la valeur de l'input
        const inputPrincipalValue = inputPrincipal.value.toLocaleLowerCase().replace(/ /g, '')

        // init array
        const filterArrayIngredientWithInput = []

        // Retourne un tableau filtré
        let result = displayRecipes().filter(e => e.name.toLocaleLowerCase().replace(/ /g, '').includes(inputPrincipalValue.toLocaleLowerCase()) ||
                                                 e.description.toLocaleLowerCase().replace(/ /g, '').includes(inputPrincipalValue.toLocaleLowerCase()) ||
                                                 e.ingredients.forEach(ingr => {
                                                    // Crée une variable qui récupère le contenue de recipes[i].ingredients.ingredient
                                                    const ingredient1 = ingr.ingredient.toLocaleLowerCase().replace(/ /g, '')

                                                    // Si l'ingredient correspond à la valeur de l'input
                                                        if (ingredient1.toLocaleLowerCase().replace(/ /g, '').includes(inputPrincipalValue.toLocaleLowerCase().replace(/ /g, ''))) {
                                                            // J'ajoute la recette au tableau filterArrayIngredient
                                                            filterArrayIngredientWithInput.push(e)
                                                        }
                                                    })
                                                )

        // Concat le tableau result avec filterArrayIngredientWithInput
        const concatResult = result.concat(filterArrayIngredientWithInput)

        // Réfecte la variable result avec la valeur du tableau concatResult
        result = concatResult

        // Si la longeur de l'input est inférieur à 3
        if (inputPrincipalValue.length < 3) {
            // Vide le DOM des recettes affichées
            recipesSection.innerHTML = ''

            if (inputPrincipalValue.length <= 3) {
                // Rends la partie du DOM contenant un message "aucune recette" invisible
                noRecipesSection.style.display = 'none'
            }

            // Affiche les recettes
            displayRecipes()

            displayTags()
        } else if (inputPrincipalValue.length >= 3) {
            if (result.length == 0) {
                // Vide le DOM des recettes affichées
                recipesSection.innerHTML = ''
                // Rends la partie du DOM contenant un message "aucune recette" visible
                noRecipesSection.style.display = 'block'
            }
            if (result.length >= 1) {
                // Vide le DOM des recettes affichées
                recipesSection.innerHTML = ''
                // Rends la partie du DOM contenant un message "aucune recette" visible
                noRecipesSection.style.display = 'none'
            }

            // Vide le DOM des recettes affichées
            recipesSection.innerHTML = ''

            // Affiche les recettes filtrés
            recipesCardFactory(result, recipesSection)

            searchTagsIngredients(result)
            searchTagsAppareils(result)
            searchTagsUstensils(result)
        }
    }

    filterData()
}

princiaplSearch()
