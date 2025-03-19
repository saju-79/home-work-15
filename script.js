// const age = 18;
// const age1 = 21;
// localStorage.setItem("age" , age);
// localStorage.setItem("saju" , age1)

// console.log("age :" , age );
const prodactName = document.getElementById("prodact-name");
const prodactQuality = document.getElementById("prodact-quality");
const handelAddtoCard = () =>{
const name = prodactName.value;
const quality = prodactQuality.value;
displayshow(name , quality);
addToCard(name ,quality)

prodactName.value = "";
prodactQuality.value = "";


}

const displayshow = (name , quality) =>{
    const card = document.getElementById("display");
     const li = document.createElement("li")
    li.innerHTML = `
        ${name} : ${quality};
    `
    card.appendChild(li);
}
const addToCard = (name , quality) =>{
     const newProdac = {name : quality};
     localStorage.setItem("card", JSON.stringify(newProdac));
    console.log(name , quality);
}
