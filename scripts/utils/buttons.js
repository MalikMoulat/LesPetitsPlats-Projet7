function openDropdow(id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = "block"
    btnChoseRecipes[0].style.display = "none"
    btnChildren[1].style.transform = "rotate(180deg)"
    btnChildren[1].style.textAlign = "start"
}

function closeDropdow(id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = "none"
    btnChoseRecipes[0].style.display = "block"
    btnChoseRecipes[0].style.display = "flex"
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


function openDropdowAndCloseDropdown() {

   // Select element with box class, assign to box variable
    const dropDowIngredients = document.querySelector('.secondary__ingredients')
    const btnIngredients = document.querySelector('.btn__ingredients')

    
    // Detect all clicks on the document
    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.dropDowIngredients !== dropDowIngredients && event.target.btnIngredients !== btnIngredients) {
            // If user clicks outside the element, hide it!
            //dropDowClickOutside.classList.add("hidden")
            console.log('okp')
            
            setTimeout(function () {
                closeDropdow('secondary__ingredients', 'ingredients')
            }, 2000)
            
        }
    })
}

//openDropdowAndCloseDropdown()