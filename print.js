
function refreshProduct() {
    var loc_products = localStorage.getItem("products")

    //console.log(productListBody)
    products = JSON.parse(loc_products);
    printsorted(products)

}

function printsorted(products) {
    productListBody = document.querySelector(".table tbody");
    // console.log(products.sort((a, b) => b.name.localeCompare(a.name)))
    productListBody.innerHTML = "";
    products.forEach((product) => {
        tr = document.createElement("tr");

        tdProductId = document.createElement("td");
        tdProductId.textContent = product.id;
        tr.appendChild(tdProductId);

        tdProductName = document.createElement("td");
        tdProductName.textContent = product.name;
        tr.appendChild(tdProductName);

        const imageDataURL = "data:image/png;base64," + product.image;
        tdProductImage = document.createElement("td");
        // tdProductImage.textContent = product.image;
        tr.appendChild(tdProductImage);
        imgtag = document.createElement("img");
        imgtag.src = imageDataURL;
        tdProductImage.appendChild(imgtag);

        tdProductPrice = document.createElement("td");
        tdProductPrice.textContent = product.price;
        tr.appendChild(tdProductPrice);

        tdProductDescription = document.createElement("td");
        tdProductDescription.textContent = product.description;
        tr.appendChild(tdProductDescription);

        tdUpdateButton = document.createElement("td");
        tr.appendChild(tdUpdateButton);
        btnupdate = document.createElement("button");
        btnupdate.textContent = "Update";
        btnupdate.className = "btn btnupdate";
        btnupdate.id = product.id;
        btnupdate.onclick = updateProduct
        tdUpdateButton.appendChild(btnupdate);

        btndelete = document.createElement("button");
        btndelete.textContent = "Delete";
        btndelete.className = "btn btndelete";
        btndelete.id = product.id
        btndelete.onclick = deleteProduct
        tdUpdateButton.appendChild(btndelete);

        productListBody.appendChild(tr);
    });
}

function sortname(method) {
    var loc_products = localStorage.getItem("products")

    //console.log(productListBody)
    products = JSON.parse(loc_products);
    if (method == 'asc') {

        printsorted(products.sort((a, b) => a.name.localeCompare(b.name)))

    }

    else if (method == 'desc') {

        printsorted(products.sort((a, b) => b.name.localeCompare(a.name)))
    }

}
function sortid(method) {
    var loc_products = localStorage.getItem("products")

    //console.log(productListBody)
    products = JSON.parse(loc_products);
    if (method == 'asc')
        printsorted(products.sort((a, b) => a.id - b.id))
    else if (method == 'desc')
        printsorted(products.sort((a, b) => b.id - a.id))
}

function sortprice(method) {
    var loc_products = localStorage.getItem("products")

    //console.log(productListBody)
    products = JSON.parse(loc_products);
    if (method == 'asc')
        printsorted(products.sort((a, b) => a.price - b.price))
    else if (method == 'desc')
        printsorted(products.sort((a, b) => b.price - a.price))
}
document.getElementById("sortpname").onclick = function () {
    icon = document.getElementById("snameicon")
    document.getElementById("sidicon").classList.add("fa-sort");
    document.getElementById("sidicon").classList.remove("fa-sort-asc");
    document.getElementById("sidicon").classList.remove("fa-sort-desc");
    document.getElementById("spriceicon").classList.add("fa-sort");
    document.getElementById("spriceicon").classList.remove("fa-sort-asc");
    document.getElementById("spriceicon").classList.remove("fa-sort-desc");
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

document.getElementById("sortpid").onclick = function () {
    icon = document.getElementById("sidicon")
    document.getElementById("snameicon").classList.add("fa-sort");
    document.getElementById("snameicon").classList.remove("fa-sort-asc");
    document.getElementById("snameicon").classList.remove("fa-sort-desc");
    document.getElementById("spriceicon").classList.add("fa-sort");
    document.getElementById("spriceicon").classList.remove("fa-sort-asc");
    document.getElementById("spriceicon").classList.remove("fa-sort-desc");
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

document.getElementById("sortpprice").onclick = function () {
    icon = document.getElementById("spriceicon")
    document.getElementById("snameicon").classList.add("fa-sort");
    document.getElementById("snameicon").classList.remove("fa-sort-asc");
    document.getElementById("snameicon").classList.remove("fa-sort-desc");
    document.getElementById("sidicon").classList.add("fa-sort");
    document.getElementById("sidicon").classList.remove("fa-sort-asc");
    document.getElementById("sidicon").classList.remove("fa-sort-desc");
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