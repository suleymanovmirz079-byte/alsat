function addProduct(){

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let city = document.getElementById("productCity").value;
    let info = document.getElementById("productInfo").value;
    let phone = document.getElementById("productPhone").value;


    let product = {
        name:name,
        price:price,
        city:city,
        info:info,
        phone:phone
    };


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push(product);


    localStorage.setItem("products", JSON.stringify(products));


    alert("Məhsul əlavə olundu");

    window.location.href="index.html";

}




if(document.getElementById("productList")){


let list = document.getElementById("productList");


let products = JSON.parse(localStorage.getItem("products")) || [];


products.forEach(function(product){


list.innerHTML += `

<div class="card">

<h3>${product.name}</h3>

<p>📍 ${product.city}</p>

<strong>${product.price} AZN</strong>

<p>${product.info}</p>

<button>
📞 ${product.phone}
</button>


</div>

`;


});


}
function elanYarat(){

    let ad = document.getElementById("ad").value;
    let qiymet = document.getElementById("qiymet").value;
    let seher = document.getElementById("seher").value;
    let satici = document.getElementById("satici").value;
    let telefon = document.getElementById("telefon").value;
    let melumat = document.getElementById("melumat").value;


    let yeniElan = {
        ad: ad,
        qiymet: qiymet,
        seher: seher,
        satici: satici,
        telefon: telefon,
        melumat: melumat
    };


    let elanlar = JSON.parse(localStorage.getItem("elanlar")) || [];


    elanlar.push(yeniElan);


    localStorage.setItem("elanlar", JSON.stringify(elanlar));


    alert("Elan əlavə edildi!");

    window.location.href="index.html";

}
