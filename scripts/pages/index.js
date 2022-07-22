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