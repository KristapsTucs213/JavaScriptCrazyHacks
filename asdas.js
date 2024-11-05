const Objekts = {name: "John", Vecums: 30, IrSkolens: false}
console.log(Objekts);

if(Objekts.Vecums >= 18){
    console.log("Big boy")
}else{
    console.log("Small boy")
}

if(Objekts.IrSkolens == false){
    console.log("Nav stundents")
}else{
    console.log("Ir students")
}



// ----------------------------------------------------------------------------------

function vardaMetejs(){
    let namer = "Kristaps";
    console.log(namer);
}

console.log(vardaMetejs());

function padoTekstu(name){
    console.log(name);
}

console.log(padoTekstu("Aldis"))

function skaititajs(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
console.log(skaititajs());

function nosacejs(skait1, skait2){
    for (let i = skait1; i <= skait2; i++) {
        console.log(i);
    }
}

console.log(nosacejs(5, 8));