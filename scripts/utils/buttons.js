function openDropdow(id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const dropDowClickOutside = document.getElementById('secondary__' + type)

    //console.log(btnList)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = "block"
    btnChoseRecipes[0].style.display = "none"
    btnChildren[1].style.transform = "rotate(180deg)"
    btnChildren[1].style.textAlign = "start"


    /*document.addEventListener('click', function(event) {

        if (event.target.dropDowClickOutside !== dropDowClickOutside){
            //closeDropdow(id, type)
            console.log('OKP')
        }
        
    })*/
    
}

function closeDropdow(id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = "none"
    btnChoseRecipes[0].style.display = "block"
    btnChildren[1].style.transform = "rotate(180deg)"
    btnChildren[1].style.textAlign = "end"
    
}

function displayDropDownBtn() {

    const listDropDownIngredients = document.getElementsByClassName('secondary__ingredients')
    const listDropDownAppareils = document.getElementsByClassName('secondary__appareils')
    const listDropDownUstensils = document.getElementsByClassName('secondary__Ustensils')

    if (listDropDownIngredients[0].style.display == "block") { 

        listDropDownAppareils[0].style.display = "none"
        listDropDownUstensils[0].style.display = "none"

        console.log(listDropDownUstensils)
    } 

}

displayDropDownBtn();



close = (e) => {
        
    if (utils.clickOut(e.target, this.element) || e.target === this.closeIcon) {
        this.element.setAttribute('data-state', 'close');

        document.removeEventListener('click', this.close);
        this.element.addEventListener('click', this.open);
    }
}


function openDropdowAndCloseDropdown() {


    /*const btnIngredients = document.getElementsByClassName('btn__ingredients')
    const btnAppareils = document.getElementsByClassName('btn__appareils')
    const btnUstensils = document.getElementsByClassName('btn__ustensils')

    const dropDownIngredients = document.getElementsByClassName('secondary__ingredients')
    const dropDownAppareils = document.getElementsByClassName('secondary__appareils')
    const dropDownUstensils = document.getElementsByClassName('secondary__ustensils')

    console.log(dropDownIngredients)
    console.log(dropDownAppareils)
    console.log(dropDownUstensils)

    dropDownIngredients[0].addEventListener('click', () => {
        if (dropDownIngredients[0].style.display === 'block')

        dropDownAppareils[0].style.display = 'none'
    })*/

    const dropDowClickOutside =    document.querySelector('.secondary__ingredients')
                                    //document.querySelector('.secondary__appareils'),
                                    //document.querySelector('.secondary__ustensils'),
                                //]

    console.log(dropDowClickOutside)

    /*document.addEventListener('click', function(event) {

        if (event.target.dropDowClickOutside !== dropDowClickOutside){
            closeDropdow('secondary__ingredients', 'ingredients')
        }
        
    })*/



    // Select element with box class, assign to box variable
    const box = document.querySelector(".box")
    // Detect all clicks on the document
    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.dropDowClickOutside !== dropDowClickOutside) {
            // If user clicks outside the element, hide it!
            dropDowClickOutside.classList.add("hidden")
            console.log('okp')
        }
        

    })

}

//openDropdowAndCloseDropdown()