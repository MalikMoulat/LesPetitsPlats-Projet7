function recipesFactory(data) {

    // Création des variables
    const { id, name, servings, ingredients, time , description, appliance, ustensils } = data || {};

    // Init variable pour la liste des ingredients de chaque recette
    let listCard_HTML = "";
        
    ingredients.map((elt) => {
        listCard_HTML += `<p>
                            <strong>
                            ${elt.ingredient ? elt.ingredient : ""}:
                            </strong>
                            ${elt.quantity ? elt.quantity.toString().trim() : ""} 
                            ${elt.unit ? elt.unit.toLowerCase().trim() : ""}
                        </p>`;
    
        return listCard_HTML;
    });
    
    // factories des cards (recette)
    function cardRecipesDom() {

        //crée une balise artilce
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
                                                <!--<p>${ingredients.ingredient} ${ingredients.quantity} ${ingredients.unit} </p>--> 
                                                ${listCard_HTML}
                                            </div>
                                            <div>
                                                <p>
                                                ${description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>`

        // Insert recipeCardDom dans Article
        article.innerHTML = recipeCardDom
        
        return article
    }

    return { cardRecipesDom }
}

