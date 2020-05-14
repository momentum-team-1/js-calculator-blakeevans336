let calculator = document.querySelector(".calculator");
// console.log(calculator)
display.textContent = "";

function selectNumber (id, number){
    document.querySelector(id).addEventListener ("click",
    function(){
        // console.log(number)
        display.textContent += number;
    }
    )
}

function selectClear (id){
    document.querySelector(id).addEventListener ("click",
    function(){
        display.textContent = "";
    }
    )
}
function selectEqual (id, number){
    document.querySelector(id).addEventListener ("click",
    function(){
        display.textContent = eval(display.textContent);
    }
    )
}
selectNumber("#one",1)
selectNumber("#two", 2)
selectNumber("#three", 3)
selectNumber("#four", 4)
selectNumber("#five", 5)
selectNumber("#six", 6)
selectNumber("#seven", 7)
selectNumber("#eight", 8)
selectNumber("#nine", 9)
selectNumber("#zero", 0)
selectClear("#c")