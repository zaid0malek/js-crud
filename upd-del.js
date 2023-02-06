///This File Contains Functions for Updating Product , Deleting Product
function updateProduct() {
    loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    id = this.getAttribute("id");
    // Loop through the array to find the product with the matching id
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // Return the matching product
            x = products[i];
        }
    }

    document.getElementById('updateModal').style.display = "block";
    productId = document.getElementById("UproductId");
    productName = document.getElementById("UproductName");
    productImage = document.getElementById("UproductImage");
    productPrice = document.getElementById("UproductPrice");
    productDescription = document.getElementById("UproductDescription");
    productId.value = id;
    console.log(x.name)
    productName.value = x.name

    productPrice.value = x.price
    productDescription.value = x.description

}
function update() {
    productId = document.getElementById("UproductId").value
    productName = document.getElementById("UproductName").value;
    productImage = document.getElementById("UproductImage").value;
    productPrice = document.getElementById("UproductPrice").value;
    productDescription = document.getElementById("UproductDescription").value;

    if (productName == "" || productImage == "" || productPrice == "") {


        console.log("productId")
        if (productName == "") {
            document.getElementById("UproductNameError").innerHTML = "Please Enter Product Name";
        }

        if (productImage == "") {
            document.getElementById("UproductImageError").innerHTML = "No Image Selected";
        }

        if (productPrice == "") {
            document.getElementById("UproductPriceError").innerHTML = "Please Enter Product Price";
        }
    }
    else {


        loc_products = localStorage.getItem("products")
        products = JSON.parse(loc_products);

        // Loop through the array to find the product with the matching id
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                // Return the matching product
                products[i].name = productName;
                products[i].price = productPrice;
                products[i].description = productDescription;
                products[i].image = Imagebin
                localStorage.setItem("products", JSON.stringify(products))
            }
        }
        document.getElementById("UproductName").value = "";
        document.getElementById("UproductPrice").value = "";
        document.getElementById("UproductImage").value = "";
        document.getElementById("UproductDescription").value = "";
        console.log(document.getElementById("productDescription"))
        console.log(document.getElementById("ProductModal"))
        document.getElementById("updateModal").style.display = "None"
        refreshProduct()

    }
}

function deleteProduct() {
    loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    id = this.getAttribute("id");
    // Loop through the array to find the product with the matching id
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // Return the matching product
            products.splice(i, 1);
            localStorage.setItem("products", JSON.stringify(products))
        }
    }
    refreshProduct()
}