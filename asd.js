// console.log("Kristaps");
// const vertiba = document.getElementById("text");
// const vertibaInput = vertiba.value;
// console.log(vertibaInput);
// const button = document.getElementById("submiterer")


// function printName(){
//     console.log("Vards")
// }
// button.addEventListener("click", printName);


const vertiba = document.getElementById("skaitlis");
const vertiba2 = document.getElementById("skaitlitis");
const button = document.getElementById("pog")
let intins = 0;

function parbauditajs(){
    let returnText = "Skaitli: ";
    const parag = document.getElementById("paragrah")
    if(vertiba.value>vertiba2.value){
        intins = 1;
    }else{
        alert("NESTRADAAAAAAAAAAAAAAAAAAAAAAAA")
    }
    if(intins = 1){
        for (let i = vertiba2.value; i <= vertiba.value; i++) {
            // console.log(i);
            returnText = returnText + i + ", "
            // const parag = document.getElementById("paragrah").innerHTML = i;
            parag.innerHTML = returnText;
        }

    }
}
button.addEventListener("click", parbauditajs);
