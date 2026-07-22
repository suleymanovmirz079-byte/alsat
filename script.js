const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");


searchInput.addEventListener("keyup", function(){

    let text = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        let name = card.innerText.toLowerCase();

        if(name.includes(text)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});
