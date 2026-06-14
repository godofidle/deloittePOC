var products;

function showData(data) {
    products = JSON.parse(data);
    if (products.status == 0) {
        if (products.products.length > 0) {
            document.getElementById('allProducts').innerHTML = "";
            for (var i = 0; i < products.products.length; i++) {
                var item = document.createElement("div");

                var itemImage = document.createElement("img");
                itemImage.src = "./assets/Images/Items/" + products.products[i].image;
                itemImage.classList.add("full-width");
                item.appendChild(itemImage);


                var itemHeading = document.createElement("h6");
                itemHeading.innerHTML = products.products[i].name;
                item.appendChild(itemHeading);

                var itemSubHeading = document.createElement("div");
                itemSubHeading.classList.add("clearfix");

                var itemTag = document.createElement("div");
                itemTag.innerHTML = products.products[i].type;
                itemTag.classList.add("float-left", "half-width", "item-tag");
                itemSubHeading.append(itemTag);

                var itemPrice = document.createElement("div");
                itemPrice.innerHTML = "$" + products.products[i].amount;
                itemPrice.classList.add("float-right", "half-width", "text-right");
                itemSubHeading.append(itemPrice);

                item.appendChild(itemSubHeading);
                item.classList.add("col-12", "col-sm-12", "col-md-6", "col-lg-4", "product-item");
                item.addEventListener("click", function () {
                    window.changeLink('detail');
                });
                document.getElementById('allProducts').appendChild(item);
            }
        }
        else {
            document.getElementById('serviceCallHomeMessage').innerHTML = "No Results Found.";
        }
    }
    else {
        document.getElementById('serviceCallHomeMessage').innerHTML = products.message || "Sorry, Something Went Wrong. Please try again after sometime.";
    }
}



window.homeInit = function homeInit() {
    window.doServiceCall('products.json', showData);
    document.getElementById('filterIconID').addEventListener("click", function () {
        if (document.getElementById('filterBlock').classList.contains("d-none")) {
            document.getElementById('filterBlock').classList.remove("d-none");
            document.getElementById('filterBlock').classList.add("d-block");
        } else {
            document.getElementById('filterBlock').classList.add("d-none");
            document.getElementById('filterBlock').classList.remove("d-block");
        }
    });
}

