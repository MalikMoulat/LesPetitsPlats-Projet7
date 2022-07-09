

//console.log('recipes', recipes[0].ustensils[2])
//console.log(recipesFactory())


async function displayData (recipesData) {
    const recipesSection = document.getElementById('recipe--card')
    console.log('init', recipesSection)
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
