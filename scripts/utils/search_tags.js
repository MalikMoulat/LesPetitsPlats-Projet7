
// Les fonction ci-dessous servent à afficher les listes dans les btnDropdown et gere la recherche des tags

/********************
* Ingredients list *
*******************/
function searchTagsIngredients(recipesArr){

    // élements du DOM
    const dropDownBtnIngredients = document.getElementById('dropdown__ingredients--list')

    // Vide le DOM de son contenue
    dropDownBtnIngredients.innerHTML = ""

    // initialisation des variables
    let tabIngredients = []

    // Input
    const inputIngredients = document.getElementById('input__ingredients')

    recipesArr.forEach(recette => {
        // Re-boucle sur les tableaux d'ingrédients pour les concatener 
        recette.ingredients.forEach((ingredients) => {
            
            // Concatene les ingrédients de chaque tableau
            tabIngredients = tabIngredients.concat(ingredients.ingredient.toLowerCase())
            

        })     
        // Supprime les doublons
        tabIngredients = [...new Set(tabIngredients.sort())]
        
    })

    // Affiche les tags
    addListDom(tabIngredients, dropDownBtnIngredients, 'ingredients')
    selectTag('ingredients--list')
    
    // Écoute l'input
    inputIngredients.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(){

        // Vide la liste des tags du DOM
        dropDownBtnIngredients.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputIngredients.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabIngredients.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            //addListDom(tabIngredients, dropDownBtnIngredients, 'ingredients')
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnIngredients, 'ingredients')
            
            selectTag('ingredients--list')  
    }


}


/*****************
* Appareils list *
*****************/
function searchTagsAppareils(recipesArr) {

    // élements du DOM
    const dropDownBtnAppareils = document.getElementById('dropdown__appareils--list')

    // Vide le DOM de son contenue
    dropDownBtnAppareils.innerHTML = ""

    // initialisation des variables
    let tabAppareils = []

    // Input
    const inputAppareils = document.getElementById('input__appareils')
    
    recipesArr.forEach(recette => {
            
        // Concatene les appareils de chaque tableau
        tabAppareils = tabAppareils.concat(recette.appliance.toLowerCase())
        
        // Supprime les doublons
        tabAppareils = [...new Set(tabAppareils.sort())]
        
    })

    // Affiche les tags
    addListDom(tabAppareils, dropDownBtnAppareils, 'appareils')
    selectTag('appareils--list')

    // Écoute l'input
    inputAppareils.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(){

        // Vide la liste des tags du DOM
        dropDownBtnAppareils.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputAppareils.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabAppareils.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            //addListDom(tabAppareils, dropDownBtnAppareils, 'appareils')
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnAppareils, 'appareils')
            
            selectTag('appareils--list') 
    }
}







/********************
* Ustensils list *
*******************/
function searchTagsUstensils(recipesArr){
    
    // élements du DOM
     const dropDownBtnUstensils = document.getElementById('dropdown__ustensils--list')
 
    // Vide le DOM de son contenue
    dropDownBtnUstensils.innerHTML = ""

     // initialisation des variables
     let tabUstensils = []
 
     // Input
     const inputUstensils = document.getElementById('input__ustensils')

     recipesArr.forEach(recette => {
        // Re-boucle sur les tableaux d'ustensils pour les concatener 
        recette.ustensils.forEach((ustensils) => {
            
            // Concatene les ustensils de chaque tableau
            tabUstensils = tabUstensils.concat(ustensils.toLowerCase())
        })
                    
        // Supprime les doublons
        tabUstensils = [...new Set(tabUstensils.sort())]
        
        
    })

    // Affiche les tags
    addListDom(tabUstensils, dropDownBtnUstensils, 'ustensils')
    selectTag('ustensils--list')

    // Écoute l'input
    inputUstensils.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(){

        // Vide la liste des tags du DOM
        dropDownBtnUstensils.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputUstensils.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabUstensils.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            //addListDom(tabUstensils, dropDownBtnUstensils, 'ustensils')
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnUstensils, 'ustensils')
            
            selectTag('ustensils--list')  
    }

}


searchTagsIngredients(recipes)
searchTagsAppareils(recipes)
searchTagsUstensils(recipes)


