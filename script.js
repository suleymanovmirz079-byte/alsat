const searchInput = document.querySelector(".search-box input");

function showProducts(){

const cards = document.querySelectorAll(".card");
let text = searchInput.value.toLowerCase();

cards.forEach(function(card){

let product = card.innerText.toLowerCase();

if(product.includes(text)){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

}


searchInput.addEventListener("keyup", showProducts);


function filterProducts(category){

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let item = card.getAttribute("data-category");

if(category === "all" || item === category){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

}

