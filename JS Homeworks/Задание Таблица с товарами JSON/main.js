import {goods} from "./goods.js"

let tables_titles = ["id","наименование", "категория", "цена"]
let main = document.querySelector("main")
let table = document.createElement("table")
let headerRow = document.createElement("tr")


tables_titles.forEach(title => {
    let th = document.createElement('th')
    th.textContent = title ;
    headerRow.appendChild(th);
});

table.appendChild(headerRow)
main.appendChild(table)

function showTable(products) {
    let headerRow = table.rows[0]

    table.innerHTML=""

    table.appendChild(headerRow)


    products.forEach((good, index) => {
        let tr = document.createElement('tr')

        let id = document.createElement('td')
        id.textContent = index + 1;

        let name = document.createElement('td')
        name.textContent = good.name;

        let category = document.createElement('td')
        category.textContent = good.category;
        
        let price = document.createElement('td')
        price.textContent = good.price;
        
        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(category)
        tr.appendChild(price)

        table.appendChild(tr)
    })
}


let selectedList =  document.getElementById("good")
selectedList.addEventListener("change",function() {
    let selectedCategory = selectedList.value;
    console.log("Выбрано:",selectedCategory)

    if (selectedCategory==="all") {
        showTable(goods)
    } else {
        let filteredGoods = goods.filter(good => good.category === selectedCategory)
        showTable(filteredGoods)
    }
});

showTable(goods)