function addProduct(){

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let city = document.getElementById("productCity").value;
    let info = document.getElementById("productInfo").value;
    let phone = document.getElementById("productPhone").value;


    if(name === "" || price === "" || phone === ""){
        alert("Məhsul adı, qiymət və telefon vacibdir!");
        return;
    }


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


    alert("Elan uğurla əlavə edildi!");


    window.location.href="index.html";

}
