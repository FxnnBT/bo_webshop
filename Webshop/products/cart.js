var cart = JSON.parse(localStorage.getItem("cart")) || [];
var tbody = document.getElementById("cart-items");
var totalCell = document.getElementById("cart-total");
var emptyMsg = document.getElementById("cart-empty");
var table = document.querySelector(".cart-table");

if (cart.length === 0) {
    table.style.display = "none";
    emptyMsg.style.display = "block";
    document.getElementById("checkout-btn").style.display = "none";
} else {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var price = parseFloat(item.price.replace("€", ""));
        total += price;

        var row = document.createElement("tr");
        row.innerHTML = "<td>" + item.title + "</td><td>" + item.price + "</td>";
        tbody.appendChild(row);
    }

    totalCell.innerText = "€" + total.toFixed(2);
}

function completeOrder() {
    document.getElementById("checkout-btn").style.display = "none";
    document.getElementById("order-gif").style.display = "block";
    localStorage.removeItem("cart");
}
