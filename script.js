// Store "products" data from local storage in "loc_products" variable
var loc_products, Imagebin;

// On window load, check if there is any "products" data stored in local storage.
// If yes, call the "refreshProduct" function
window.onload = function () {
    loc_products = localStorage.getItem("products");
    if (loc_products) {
        refreshProduct();
    }
};

// Attach the "close" function to the "close" button in the modal
document.getElementById("close").onclick = close;
document.getElementById("close1").onclick = close;
document.getElementById("close2").onclick = close;
document.getElementById("close3").onclick = close;

// The "close" function hides both product modal and update modal
function close() {
    document.getElementById('productModal').style.display = "none";
    document.getElementById('updateModal').style.display = "none";
}

// The "dispCreate" function displays the product modal
function dispCreate() {
    document.getElementById('productModal').style.display = 'block';
}

// The "dispUpdate" function displays the update modal
function dispUpdate() {
    document.getElementById('updateModal').style.display = 'block';
}
function newProduct() {
    // Get the product name, image, price, and description from the input fields
    productName = document.getElementById("productName").value;
    productImage = document.getElementById("productImage").value;
    productPrice = document.getElementById("productPrice").value;
    productDescription = document.getElementById("productDescription").value;

    // Check if the product name, image or price is empty
    if (productName == "" || productImage == "" || productPrice == "") {
        // If product name is empty, display error message
        if (productName == "") {
            document.getElementById("productNameError").innerHTML = "Please Enter Product Name";
        }

        // If product image is empty, display error message
        if (productImage == "") {
            document.getElementById("productImageError").innerHTML = "No Image Selected";
        }

        // If product price is empty, display error message
        if (productPrice == "") {
            document.getElementById("productPriceError").innerHTML = "Please Enter Product Price";
        }
    } else {
        // Product id starts with 1, or if products exist, increment the last product's id
        productId = 1;
        products = [];
        loc_products = localStorage.getItem("products");
        if (loc_products != null) {
            products = JSON.parse(loc_products);
            productId += products[products.length - 1].id;
        }
        // Create the product object with id, name, image, price, and description
        product = { id: productId, name: productName, image: Imagebin, price: productPrice, description: productDescription };
        // Add the product to the products array
        products.push(product);
        // Save the products array to local storage
        localStorage.setItem("products", JSON.stringify(products));
        // Clear the input fields
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";
        document.getElementById("productDescription").value = "";
        // Hide the product modal
        document.getElementById("productModal").style.display = "None";
        // Refresh the product list
        refreshProduct();
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

//whenever data is added to element error for that element is removed
function removeWarning() {
    document.getElementById(this.id + "Error").innerHTML = "";
}

document.getElementById("productName").onkeyup = removeWarning;
document.getElementById("productPrice").onkeyup = removeWarning;
document.getElementById("productImage").onkeyup = removeWarning;


