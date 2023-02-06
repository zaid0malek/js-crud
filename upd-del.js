// This function manages updates product modal and puts values to feilds by getting its id from the clicked button
function updateProduct() {
    // Get the string representation of the products array from local storage
    loc_products = localStorage.getItem("products")
    // Parse the string into a JavaScript object
    products = JSON.parse(loc_products);
    // Get the id of the clicked product from the button's attribute
    id = this.getAttribute("id");
    // Loop through the array to find the product with the matching id
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // Return the matching product
            x = products[i];
        }
    }

    // Show the update modal
    document.getElementById('updateModal').style.display = "block";
    // Get the form inputs
    productId = document.getElementById("UproductId");
    productName = document.getElementById("UproductName");
    productImage = document.getElementById("UproductImage");
    productPrice = document.getElementById("UproductPrice");
    productDescription = document.getElementById("UproductDescription");
    // Populate the form inputs with the product data
    productId.value = id;
    productName.value = x.name;
    productPrice.value = x.price;
    productDescription.value = x.description;
}
// This function updates a product in local storage
function update() {
    // Retrieve values from input fields
    productId = document.getElementById("UproductId").value;
    productName = document.getElementById("UproductName").value;
    productImage = document.getElementById("UproductImage").value;
    productPrice = document.getElementById("UproductPrice").value;
    productDescription = document.getElementById("UproductDescription").value;

    // Check if any of the fields are empty
    if (productName == "" || productImage == "" || productPrice == "") {
        // If product name is empty, display error message
        if (productName == "") {
            document.getElementById("UproductNameError").innerHTML = "Please Enter Product Name";
        }

        // If product image is empty, display error message
        if (productImage == "") {
            document.getElementById("UproductImageError").innerHTML = "No Image Selected";
        }

        // If product price is empty, display error message
        if (productPrice == "") {
            document.getElementById("UproductPriceError").innerHTML = "Please Enter Product Price";
        }
    } else {
        // Retrieve the products from local storage
        loc_products = localStorage.getItem("products");
        products = JSON.parse(loc_products);

        // Loop through the products array to find the product with the matching id
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                // Update the matching product with the new values
                products[i].name = productName;
                products[i].price = productPrice;
                products[i].description = productDescription;
                products[i].image = Imagebin;

                // Save the updated products to local storage
                localStorage.setItem("products", JSON.stringify(products));
            }
        }
        // Clear the input fields
        document.getElementById("UproductName").value = "";
        document.getElementById("UproductPrice").value = "";
        document.getElementById("UproductImage").value = "";
        document.getElementById("UproductDescription").value = "";

        // Hide the update modal
        document.getElementById("updateModal").style.display = "None";

        // Refresh the product list
        refreshProduct();
    }
}

// This function deletes selected product from local storage
function deleteProduct() {
    // Retrieve the products stored in local storage
    loc_products = localStorage.getItem("products");
    products = JSON.parse(loc_products);

    // Get the id of the product to be deleted
    id = this.getAttribute("id");

    // Loop through the products array to find the product with the matching id
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // Check if there's only one product in the array
            if (products.length == 1) {
                // If so, remove the entire products from local storage
                localStorage.removeItem("products");
                productListBody.innerHTML = "";
            } else {
                // Otherwise, remove the matching product from the array
                products.splice(i, 1);
                // Update the products stored in local storage
                localStorage.setItem("products", JSON.stringify(products));
                // Refresh the product list
                refreshProduct();
            }
        }
    }
}
