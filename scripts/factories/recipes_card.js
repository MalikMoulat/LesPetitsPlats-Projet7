function recipesFactory(data) {

    //console.log('data Function', data)
    const { id, name, servings, ingredients, time , description, appliance, ustensils } = data || {};


    function getIngredientsList() {

        for (let i = 0; i < ingredients.length; i++) {
            

            let varIngredient = ingredients[i].ingredient
            //console.log('varIngredient :', varIngredient)

            let varQuantity = ingredients[i].quantity
            //console.log('varQuantity :', varIngredient)

            let varUnit = ingredients[i].unit
            //console.log('varUnit :', varIngredient)

            if (varQuantity === undefined)
            {
                varQuantity = ""
            }
    
            if (varUnit === undefined)
            {
                varUnit = ""
            }

            const listeItem = `
                    <p><strong>${varIngredient} :</strong> ${varQuantity} ${varUnit}</p>
                `
    
            //console.log('list item', listeItem)
            return listeItem
        }

        /*ingredients.forEach((ingredient) => {
            //console.log('log ingredient', ingredient)
    
            let varIngredient = ingredient.ingredient
            //console.log('VarIngredients', varIngredient)
    
            let varQuantity = ingredient.quantity
            let varUnit = ingredient.unit
    
            if (varQuantity === undefined)
            {
                varQuantity = ""
            }
    
            if (varUnit === undefined)
            {
                varUnit = ""
            }
    
            const listeItem = `
                    <p><strong>${varIngredient} :</strong> ${varQuantity} ${varUnit}</p>
                `
    
            //console.log('list item', listeItem)
            return listeItem
            
            })*/
    }




    //console.log('ID', id)
    //console.log('name', name)
    //console.log('INGREDIENT', ingredients.length)

    function cardRecipesDom() {
        const article = document.createElement('article')

        const recipeCardDom = `<div class="card__img">
                                        <!--Image de l'article-->
                                    </div>
                                    <div class="card__desc">
                                        <div class="card__desc--title">
                                            <h2>${name}</h2>
                                            <div>
                                                <i class="far fa-clock"></i>
                                                <p>${time} min</p>
                                            </div>
                                        </div>
                                        <div class="card__desc--recipe">
                                            <div id="ingredients__list--${id}">
                                                <!--<p>${ingredients[0].ingredient} ${ingredients[0].quantity} ${ingredients[0].unit} </p>--> 
                                                ${getIngredientsList()}
                                            </div>
                                            <div>
                                                <p>
                                                ${description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>`

        article.innerHTML = recipeCardDom
        return article
    }



    



    return { cardRecipesDom }
}
