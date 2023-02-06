// Function to get product list by reading the local storage and displaying it in a table
function refreshProduct() {
    // retrieve the "products" data from local storage
    var loc_products = localStorage.getItem("products")

    // parse the "products" data from local storage into a JavaScript object
    products = JSON.parse(loc_products);

    // print the products in the table
    printsorted(products)
}

// Prints the product list in the table
function printsorted(products) {
    // select the table body element
    productListBody = document.querySelector(".table tbody");

    // clear the table body
    productListBody.innerHTML = "";

    // iterate through the products and add them to the table
    products.forEach((product) => {
        // create a table row (tr)
        tr = document.createElement("tr");

        // create a table cell (td) for the product id
        tdProductId = document.createElement("td");
        tdProductId.textContent = product.id;
        tr.appendChild(tdProductId);

        // create a table cell (td) for the product name
        tdProductName = document.createElement("td");
        tdProductName.textContent = product.name;
        tr.appendChild(tdProductName);

        // create a data URL for the product image
        const imageDataURL = "data:image/png;base64," + product.image;
        tdProductImage = document.createElement("td");
        tr.appendChild(tdProductImage);
        // create an image element (img) for the product image
        imgtag = document.createElement("img");
        imgtag.src = imageDataURL;
        tdProductImage.appendChild(imgtag);

        // create a table cell (td) for the product price
        tdProductPrice = document.createElement("td");
        tdProductPrice.textContent = product.price;
        tr.appendChild(tdProductPrice);

        // create a table cell (td) for the product description
        tdProductDescription = document.createElement("td");
        tdProductDescription.textContent = product.description;
        tr.appendChild(tdProductDescription);

        // create a table cell (td) for the update and delete buttons
        tdUpdateButton = document.createElement("td");
        tr.appendChild(tdUpdateButton);

        // create an update button element
        btnupdate = document.createElement("button");
        btnupdate.textContent = "Update";
        btnupdate.className = "btn btnupdate";
        btnupdate.id = product.id;
        btnupdate.onclick = updateProduct;
        tdUpdateButton.appendChild(btnupdate);

        // create a delete button element
        btndelete = document.createElement("button");
        btndelete.textContent = "Delete";
        btndelete.className = "btn btndelete";
        btndelete.id = product.id;
        btndelete.onclick = deleteProduct;
        tdUpdateButton.appendChild(btndelete);

        //append the entire row to the product table body
        productListBody.appendChild(tr);
    });
}

//This Function sorts data according to name either in ascending or descending order
function sortname(method) {
    var loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    if (method == 'asc') {
        printsorted(products.sort((a, b) => a.name.localeCompare(b.name)))

    }
    else if (method == 'desc') {

        printsorted(products.sort((a, b) => b.name.localeCompare(a.name)))
    }

}

//This Function sorts data according to ID either in ascending or descending order
function sortid(method) {
    var loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    if (method == 'asc')
        printsorted(products.sort((a, b) => a.id - b.id))
    else if (method == 'desc')
        printsorted(products.sort((a, b) => b.id - a.id))
}

//This Function sorts data according to PRICE either in ascending or descending order
function sortprice(method) {
    var loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    if (method == 'asc')
        printsorted(products.sort((a, b) => a.price - b.price))
    else if (method == 'desc')
        printsorted(products.sort((a, b) => b.price - a.price))
}

//This function is called when user clicks on Product Name
document.getElementById("sortpname").onclick = function () {
    icon = document.getElementById("snameicon")
    document.getElementById("sidicon").classList.add("fa-sort");
    document.getElementById("sidicon").classList.remove("fa-sort-asc");
    document.getElementById("sidicon").classList.remove("fa-sort-desc");
    document.getElementById("spriceicon").classList.add("fa-sort");
    document.getElementById("spriceicon").classList.remove("fa-sort-asc");
    document.getElementById("spriceicon").classList.remove("fa-sort-desc");
    //it checks that which icon is present in element
    if (icon.classList.contains("fa-sort")) {
        icon.classList.remove("fa-sort")
        icon.classList.add("fa-sort-asc")
        sortname('asc')
    }
    else if (icon.classList.contains("fa-sort-asc")) {
        icon.classList.remove("fa-sort-asc")
        icon.classList.add("fa-sort-desc")
        sortname('desc')
    }
    else if (icon.classList.contains("fa-sort-desc")) {
        icon.classList.remove("fa-sort-desc")
        icon.classList.add("fa-sort")
        refreshProduct()
    }

}
//This function is called when user clicks on Product ID
document.getElementById("sortpid").onclick = function () {
    icon = document.getElementById("sidicon")
    document.getElementById("snameicon").classList.add("fa-sort");
    document.getElementById("snameicon").classList.remove("fa-sort-asc");
    document.getElementById("snameicon").classList.remove("fa-sort-desc");
    document.getElementById("spriceicon").classList.add("fa-sort");
    document.getElementById("spriceicon").classList.remove("fa-sort-asc");
    document.getElementById("spriceicon").classList.remove("fa-sort-desc");
    //it checks that which icon is present in element
    if (icon.classList.contains("fa-sort")) {
        icon.classList.remove("fa-sort")
        icon.classList.add("fa-sort-asc")
        sortid('asc')
    }
    else if (icon.classList.contains("fa-sort-asc")) {
        icon.classList.remove("fa-sort-asc")
        icon.classList.add("fa-sort-desc")
        sortid('desc')
    }
    else if (icon.classList.contains("fa-sort-desc")) {
        icon.classList.remove("fa-sort-desc")
        icon.classList.add("fa-sort")
        refreshProduct()
    }

}
//This function is called when user clicks on Product Name
document.getElementById("sortpprice").onclick = function () {
    icon = document.getElementById("spriceicon")
    document.getElementById("snameicon").classList.add("fa-sort");
    document.getElementById("snameicon").classList.remove("fa-sort-asc");
    document.getElementById("snameicon").classList.remove("fa-sort-desc");
    document.getElementById("sidicon").classList.add("fa-sort");
    document.getElementById("sidicon").classList.remove("fa-sort-asc");
    document.getElementById("sidicon").classList.remove("fa-sort-desc");
    //it checks that which icon is present in element
    if (icon.classList.contains("fa-sort")) {
        icon.classList.remove("fa-sort")
        icon.classList.add("fa-sort-asc")
        sortprice('asc')
    }
    else if (icon.classList.contains("fa-sort-asc")) {
        icon.classList.remove("fa-sort-asc")
        icon.classList.add("fa-sort-desc")
        sortprice('desc')
    }
    else if (icon.classList.contains("fa-sort-desc")) {
        icon.classList.remove("fa-sort-desc")
        icon.classList.add("fa-sort")
        refreshProduct()
    }
}

//this function is called when user adds any text to searchbox
document.getElementById("search").onkeyup = function () {
    var loc_products = localStorage.getItem("products")
    products = JSON.parse(loc_products);
    str = document.getElementById("search").value
    products = products.filter(product => product.name.toLowerCase().includes(str.toLowerCase()));
    printsorted(products)
}