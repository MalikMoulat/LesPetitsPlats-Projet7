function openDropdow(id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = "block"
    btnChoseRecipes[0].style.display = "none"
    btnChildren[1].style.transform = "rotate(180deg)"
    btnChildren[1].style.textAlign = "start"

    document.addEventListener('click', function(event) {
        let btnList0 = btnList.contains(event.target);
        if (!btnList0) {
            //Do something click is outside specified element
            btnList0[0].style.display = "none"
        }
    })
    
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
