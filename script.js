// Get the modal
// var modal = document.getElementById("addProductModal");
loc_products = localStorage.getItem("products")
// // // Get the button that opens the modal
// var btn = document.getElementById("createProductBtn");

// // // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }
window.onload = function () {
    if (loc_products) {
        productListBody = document.querySelector(".table tbody");
        console.log(productListBody)
        products = JSON.parse(loc_products);
        productListBody.innerHTML = "";
        products.forEach((product) => {
            tr = document.createElement("tr");

            tdProductId = document.createElement("td");
            tdProductId.textContent = product.id;
            tr.appendChild(tdProductId);

            tdProductName = document.createElement("td");
            tdProductName.textContent = product.name;
            tr.appendChild(tdProductName);

            tdProductImage = document.createElement("td");
            tdProductImage.textContent = product.Image;
            tr.appendChild(tdProductImage);

            tdProductPrice = document.createElement("td");
            tdProductPrice.textContent = product.price;
            tr.appendChild(tdProductPrice);

            tdProductDescription = document.createElement("td");
            tdProductDescription.textContent = product.description;
            tr.appendChild(tdProductDescription);

            productListBody.appendChild(tr);
        });

    }
}

// When the user clicks on <span> (x), close the modal
document.getElementById("close").onclick = function () {
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
    productId = document.getElementById("productId").value;
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

        product = { id: productId, name: productName, image: productImage, price: productPrice, description: productDescription };
        products = []
        if (loc_products) {
            products = JSON.parse(loc_products);
        }

        products.push(product)
        localStorage.setItem("products", JSON.stringify(products))
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";
        document.getElementById("productDescription").value = "";
        document.getElementById('ProductModal').style.display = 'none'
    }
    console.log(localStorage)
}

function removeWarning() {
    document.getElementById(this.id + "Error").innerHTML = "";
}

document.getElementById("productName").onkeyup = removeWarning;
document.getElementById("productPrice").onkeyup = removeWarning;
document.getElementById("productImage").onkeyup = removeWarning;
// // Add product
// function addProduct() {


//     var

//         products.push(product);

//     modal.style.display = "none";

//     displayProducts();
// }