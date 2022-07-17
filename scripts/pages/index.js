// Affiche les recettes
async function displayData (recipesData) {
    const recipesSection = document.getElementById('recipe--card')
    recipesData.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe)
        const recipeCardDom = recipeModel.cardRecipesDom()
        try {
            recipesSection.appendChild(recipeCardDom)
        } catch {

        }
    })
}

async function init () {
    //console.log('init', recipes)
    recipes
    displayData(recipes)
}

init()

// Ajoute la liste des ingredients dans le dropdown des bouttons
function displayListDorpDownBtn() {

    // élements du DOM
    let dropDownBtnIngredients = document.getElementById('dropdown__ingredients--list')
    let dropDownBtnAppareils = document.getElementById('dropdown__appareils--list')
    let dropDownBtnUstensils = document.getElementById('dropdown__ustensils--list')

    // initialisation des variables
    let tabIngredients = []
    let tabAppareils = []
    let tabUstensils = []


    /********************
     * Ingredients list *
     *******************/
    recipes.forEach(recette => {
        // Re-boucle sur les tableaux d'ingrédients pour les concatener 
        recette.ingredients.forEach((ingredients) => {
            
            // Concatene les ingrédients de chaque tableau
            tabIngredients = tabIngredients.concat(ingredients.ingredient.toLowerCase())

        })
                    
        // Supprime les doublons
        tabIngredients = [...new Set(tabIngredients.sort())]
        
        
    })

    for (let i = 0; i < tabIngredients.length; i++) {

        // Ajoute une majuscule au début de chaque ingrédient
        let varIngredient = tabIngredients[i].charAt(0).toUpperCase() + tabIngredients[i].slice(1)

        const listeItemIngredient = `
                <li class="ingredients--list tag--list" data-type="ingredients" data-ingredient="${varIngredient}">${varIngredient}</li>
                `
        
        // Inject listeItemIngredient dans le DOM
        dropDownBtnIngredients.insertAdjacentHTML('beforeEnd', listeItemIngredient)
    }







    /******************
     * Appareils list *
     ******************/
    recipes.forEach(recette => {
            
        // Concatene les appareils de chaque tableau
        tabAppareils = tabAppareils.concat(recette.appliance.toLowerCase())
        
        // Supprime les doublons
        tabAppareils = [...new Set(tabAppareils.sort())]
        
    })
    
    for (let i = 0; i < tabAppareils.length; i++) {

        // Ajoute une majuscule au début de chaque appareils
        let varAppareils = tabAppareils[i].charAt(0).toUpperCase() + tabAppareils[i].slice(1)

        const ListeItemAppareils = `
                <li class="appareils--list tag--list" data-type="appareils" data-appareils="${varAppareils}">${varAppareils}</li>
            `
        // Inject listeItemAppareils dans le DOM
        dropDownBtnAppareils.insertAdjacentHTML('beforeEnd', ListeItemAppareils)
    }




    /******************
     * Ustensils list *
     *****************/
     recipes.forEach(recette => {
        // Re-boucle sur les tableaux d'ustensils pour les concatener 
        recette.ustensils.forEach((ustensils) => {
            
            // Concatene les ustensils de chaque tableau
            tabUstensils = tabUstensils.concat(ustensils.toLowerCase())
        })
                    
        // Supprime les doublons
        tabUstensils = [...new Set(tabUstensils.sort())]
        
        
    })

    for (let i = 0; i < tabUstensils.length; i++) {

        // Ajoute une majuscule au début de chaque ingrédient
        let varUstensils = tabUstensils[i].charAt(0).toUpperCase() + tabUstensils[i].slice(1)

        const listeItemIngredient = `
                <li class="ustensils--list tag--list" data-type="ustensils" data-ustensils="${varUstensils}">${varUstensils}</li>
            `
        // Inject listeItemUstensils dans le DOM
        dropDownBtnUstensils.insertAdjacentHTML('beforeEnd', listeItemIngredient)
    }

}

displayListDorpDownBtn()