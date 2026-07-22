const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function(){

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

});

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function(){

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

});
