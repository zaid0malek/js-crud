// Get the modal
// const fs = require('fs');

// var modal = document.getElementById("addProductModal");
var loc_products, Imagebin
// // // Get the button that opens the modal
// var btn = document.getElementById("createProductBtn");

// // // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }
window.onload = function () {
    loc_products = localStorage.getItem("products")
    if (loc_products) {
        refreshProduct()
    }
}
// When the user clicks on <span> (x), close the modal
document.getElementById("close").onclick = close
document.getElementById("close1").onclick = close
document.getElementById("close2").onclick = close
document.getElementById("close3").onclick = close
function close() {
    document.getElementById('productModal').style.display = "none";
    document.getElementById('updateModal').style.display = "none";

}

function dispCreate() {
    document.getElementById('productModal').style.display = 'block'
}
function dispUpdate() {
    document.getElementById('updateModal').style.display = 'block'
}

function newProduct() {
    // productId = document.getElementById("productId").value;
    productName = document.getElementById("productName").value;
    productImage = document.getElementById("productImage").value;
    productPrice = document.getElementById("productPrice").value;
    productDescription = document.getElementById("productDescription").value;

    if (productName == "" || productImage == "" || productPrice == "") {


        if (productName == "") {
            document.getElementById("productNameError").innerHTML = "Please Enter Product Name";
        }

        if (productImage == "") {
            document.getElementById("productImageError").innerHTML = "No Image Selected";
        }

        if (productPrice == "") {
            document.getElementById("productPriceError").innerHTML = "Please Enter Product Price";
        }
    }
    else {

        productId = 1
        products = []
        loc_products = localStorage.getItem("products")
        console.log(loc_products)
        if (loc_products != null) {
            products = JSON.parse(loc_products);

            productId += products[products.length - 1].id;
        }

        product = { id: productId, name: productName, image: Imagebin, price: productPrice, description: productDescription };
        products.push(product)
        localStorage.setItem("products", JSON.stringify(products))
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";
        document.getElementById("productDescription").value = "";
        console.log(document.getElementById("productDescription"))
        console.log(document.getElementById("ProductModal"))
        document.getElementById("productModal").style.display = "None"
        refreshProduct()
    }

}
const fileInput = document.getElementById("productImage");
const fileInput2 = document.getElementById("UproductImage");

fileInput.addEventListener("change", (event) => {
    imageconvert(event)
});
fileInput2.addEventListener("change", (event) => {
    imageconvert(event)
});
function imageconvert(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const fileData = event.target.result;

        // encode fileData as base64 string
        const encodedData = btoa(fileData);

        // store encodedData in local storage
        Imagebin = encodedData
    };
    reader.readAsBinaryString(file);
}
function removeWarning() {
    document.getElementById(this.id + "Error").innerHTML = "";
}

document.getElementById("productName").onkeyup = removeWarning;
document.getElementById("productPrice").onkeyup = removeWarning;
document.getElementById("productImage").onkeyup = removeWarning;


