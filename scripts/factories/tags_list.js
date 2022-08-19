// liste = array     dropDownBtn = DOM   type = ingredients or appareils or ustensils
function addListDom (liste, dropDownBtn, type) {
    liste.forEach(list => {
        list = list.charAt(0).toUpperCase() + list.slice(1)

        const listItem = `
                <li class="${type + '--list'} tag--list" data-type="${type}" 
                data-ingredient="${list.toLowerCase().replace(/ /g, '')}">
                    ${list}
                </li>
                `

        dropDownBtn.insertAdjacentHTML('beforeEnd', listItem)
    })
}
