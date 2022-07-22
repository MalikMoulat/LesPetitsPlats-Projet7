
/********************
* Ingredients list *
*******************/
function searchTagsIngredients(){

    // élements du DOM
    const dropDownBtnIngredients = document.getElementById('dropdown__ingredients--list')
    const dropDownBtnAppareils = document.getElementById('dropdown__appareils--list')
    const dropDownBtnUstensils = document.getElementById('dropdown__ustensils--list')

    // initialisation des variables
    let tabIngredients = []
    let tabAppareils = []
    let tabUstensils = []

    // Input
    const inputIngredients = document.getElementById('input__ingredients')
    const inputAppareils = document.getElementById('input__appareils')
    const inputUstensils = document.getElementById('input__ustensils')



    
    recipes.forEach(recette => {
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
    
    // Écoute l'input
    inputIngredients.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(e){

        // Vide la liste des tags du DOM
        dropDownBtnIngredients.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputIngredients.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabIngredients.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            addListDom(tabIngredients, dropDownBtnIngredients, 'ingredients')
            
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnIngredients, 'ingredients')
            console.log('RESULT : ', result)
            selectTag()  
    }


}

searchTagsIngredients()



/*****************
* Appareils list *
*****************/
function searchTagsAppareils() {

    // élements du DOM
    const dropDownBtnAppareils = document.getElementById('dropdown__appareils--list')

    // initialisation des variables
    let tabAppareils = []

    // Input
    const inputAppareils = document.getElementById('input__appareils')
    

    recipes.forEach(recette => {
            
        // Concatene les appareils de chaque tableau
        tabAppareils = tabAppareils.concat(recette.appliance.toLowerCase())
        
        // Supprime les doublons
        tabAppareils = [...new Set(tabAppareils.sort())]
        
    })

    // Affiche les tags
    addListDom(tabAppareils, dropDownBtnAppareils, 'appareils')
    
    // Écoute l'input
    inputAppareils.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(e){

        // Vide la liste des tags du DOM
        dropDownBtnAppareils.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputAppareils.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabAppareils.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            addListDom(tabAppareils, dropDownBtnAppareils, 'appareils')
            
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnAppareils, 'appareils')
            console.log('RESULT : ', result)
            selectTag()  
    }
}

searchTagsAppareils()





/********************
* Ustensils list *
*******************/
function searchTagsUstensils(){
    
    // élements du DOM
     const dropDownBtnUstensils = document.getElementById('dropdown__ustensils--list')
 
     // initialisation des variables
     let tabUstensils = []
 
     // Input
     const inputUstensils = document.getElementById('input__ustensils')

     recipes.forEach(recette => {
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

    // Écoute l'input
    inputUstensils.addEventListener('input', filterData)

    // filtre le tableau tabIngredient en fonction de la valeur de l'input
    function filterData(e){

        // Vide la liste des tags du DOM
        dropDownBtnUstensils.innerHTML = ""

        // Variable contenant la valeur de l'input
        const input = inputUstensils.value.toLocaleLowerCase().replace(/ /g, '')

        // Retourne un tableau filtré 
        const result = tabUstensils.filter(e => e.toLocaleLowerCase().replace(/ /g, '').includes(input.toLocaleLowerCase()))
        
        // Si l'input et vide alors j'affiche tout les tags
        if( input === ""){
            addListDom(tabUstensils, dropDownBtnUstensils, 'ustensils')
            
        }
        // Sinon j'affiche les tag contenu dans le tableau filtré
            addListDom(result, dropDownBtnUstensils, 'ustensils')
            console.log('RESULT : ', result)
            selectTag()  
    }

}

searchTagsUstensils()