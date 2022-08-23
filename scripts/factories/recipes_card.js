// data = recipes array     recipeSection = DOM element
function recipesCardFactory (data, recipeSection) {
    if (data && data.length) {
        data.forEach(dataRecipe => {
            // Création des variables
            const { id, name, ingredients, time, description } = dataRecipe || {}

            // Init variable pour la liste des ingredients de chaque recette
            let listCardHtml = ''
            ingredients.map((elt) => {
                listCardHtml += `<p>
                                    <strong>
                                    ${elt.ingredient ? elt.ingredient : ''}:
                                    </strong>
                                    ${elt.quantity ? elt.quantity.toString().trim() : ''} 
                                    ${elt.unit ? elt.unit.toLowerCase().trim() : ''}
                                </p>`

                return listCardHtml
            })

            // factories des cards (recette)

                // crée une balise artilce
                const article = document.createElement('article')
                article.setAttribute('id', id)

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
                                                        ${listCardHtml}
                                                    </div>
                                                    <div class="desc--recipe">
                                                        <p>
                                                        ${description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>`

                // Insert recipeCardDom dans Article
                article.innerHTML = recipeCardDom

                // Ajout la card dans le DOM
                try {
                    recipeSection.appendChild(article)
                } catch {

                }
        })
    }
}
