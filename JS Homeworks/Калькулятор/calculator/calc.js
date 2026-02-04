let btnTextList = ["C","+/-","%","/",
                    "7","8","9","*",
                    "4","5","6", "-",
                    "1","2","3","+",
                    "<","0",".","="]

let main = document.querySelector("main")
let previousNumber = 0
let operation = ""

// цикл создаем элемент класса лайн два цикла для строк и потом для стобцов(создавать с помощью форич все кнопки)
function createUI () {
    let textField = document.createElement("div")
    textField.className = "textField"
    textField.textContent = "0"
    main.appendChild(textField)

    for (let row = 0; row < 5;row++) {
        let line = document.createElement("div")
        line.className = "line"
        for(let startIndex= row*4,counter=0; counter<4; counter++,startIndex++){
            let btn = document.createElement('div')
            btn.className = "btn"
            btn.textContent = btnTextList[startIndex]
            if (row==0) {
                btn.style.backgroundColor = "#a3a3a3"
            }
            if (counter==3){
                btn.style.backgroundColor = "orange"
            }
            btn.addEventListener("click",() => {clkBtn(btnTextList[startIndex])})
            line.appendChild(btn)
        }
        main.appendChild(line)

    }
}

function clkBtn(txt){

    let textField = document.querySelector(".textField")
    if (txt =="C") {
        textField.textContent = "0"
    } 
    else if (Number(txt) == txt|| txt ==".") {
        if (textField.textContent="0" && txt!="."){
            textField.textContent =""
        }
        textField.textContent += txt
    }
    else if (txt=="+"||txt=="-"||txt=="*"||txt=="/") {
        previousNumber = textField.textContent;
        textField.textContent="0"
        operation = txt
    }
    else if (txt=="="){
        let currentNumber = textField.textContent
        if (operation=="+") {
            textField.textContent=Number(previousNumber)+Number(currentNumber)

        }

        else if (operation=="-") {
            textField.textContent=Number(previousNumber)- Number(currentNumber)

        }
        else if (operation=="*") {
            textField.textContent=Number(previousNumber)* Number(currentNumber)

        }
        else if (operation=="/") {
            textField.textContent=Number(previousNumber)/ Number(currentNumber)

        }
    }

    else if (txt=="<") {
        textField.textContent= textField.textContent.slice(0,-1)
        if (textField.textContent=="") {
            textField.textContent= "0"
        }
    }

    else if (txt=="+/-") {
        textField.textContent = Number(textField.textContent)*-1
    }

    else if (txt=="%") {
        textField.textContent = Number(textField.textContent)/100
    }
}


createUI()   



