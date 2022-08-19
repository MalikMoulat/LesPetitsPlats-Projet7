function openDropdow (id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = 'block'
    btnChoseRecipes[0].style.display = 'none'
    btnChildren[1].style.transform = 'rotate(180deg)'
    btnChildren[1].style.textAlign = 'start'
}

function closeDropdow (id, type) {
    const btnDropDown = document.getElementsByClassName(id)
    const btnChoseRecipes = document.getElementsByClassName('btn__' + type)
    const btnList = document.getElementsByClassName('secondary__' + type)

    const btnChildren = btnDropDown[0].children

    btnList[0].style.display = 'none'
    btnChoseRecipes[0].style.display = 'block'
    btnChoseRecipes[0].style.display = 'flex'
    btnChildren[1].style.transform = 'rotate(180deg)'
    btnChildren[1].style.textAlign = 'end'
}

function closeBtnClickOutside () {
    window.addEventListener('mouseup', function (event) {
        const btnIngredients = this.document.getElementById('ingredients__btn')
        const inputIngredients = this.document.getElementById('input__ingredients')

        const btnAppareils = this.document.getElementById('appareils__btn')
        const inputAppareils = this.document.getElementById('input__appareils')

        const btnUstensils = this.document.getElementById('ustensils__btn')
        const inputUstensils = this.document.getElementById('input__ustensils')

        if (event.target !== btnIngredients && event.target !== inputIngredients) {
            closeDropdow('secondary__ingredients', 'ingredients')
        }
        if (event.target !== btnAppareils && event.target !== inputAppareils) {
            closeDropdow('secondary__appareils', 'appareils')
        }
        if (event.target !== btnUstensils && event.target !== inputUstensils) {
            closeDropdow('secondary__ustensils', 'ustensils')
        }
    })
}

closeBtnClickOutside()
