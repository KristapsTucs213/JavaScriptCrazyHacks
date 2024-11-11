const Masina = {Marka: "Bmw", Modelis: "316", Gads: 1998}
console.log(Masina.Marka, Masina.Modelis);


let currentYear = new Date().getFullYear();
if(currentYear-Masina.Gads>10){
    console.log("Veca Masina")
}

if(Masina.Marka == "Toyota"){
    console.log("Šī ir Toyota automašīna");
}

Masina.owner = "Nezinams";
console.log(Masina.owner);

