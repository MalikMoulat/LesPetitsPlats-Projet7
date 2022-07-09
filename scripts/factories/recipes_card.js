function recipesFactory(data) {

    //console.log('data Function', data)
    const { id, name, servings, ingredients, time , description, appliance, ustensils } = data || {};



    //console.log('ID', id)
    //console.log('name', name)
    //console.log('INGREDIENT', ingredients[2].quantity)

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
                                            <div>
                                                <p>${ingredients[0].ingredient} ${ingredients[0].quantity} ${ingredients[0].unit} </p> 
                                                <p>${ingredients[1].ingredient} ${ingredients[1].quantity}</p>
                                                <p>${ingredients[2].ingredient} ${ingredients[2].quantity} ${ingredients[2].unit}</p>
                                                <p>${ingredients[3].ingredient} ${ingredients[3].quantity} ${ingredients[3].unit}</p>
                                                <p>${ingredients[4].ingredient} ${ingredients[4].quantity} ${ingredients[4].unit}</p>
                                            </div>
                                            <div>
                                                <p>
                                                ${description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>`

        article.innerHTML = recipeCardDom
        console.log('ARTICLE', article)
        return article
    }
    return { cardRecipesDom }
}
