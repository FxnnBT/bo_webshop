var addtocartbutton = document.getElementsByClassName("Addtocart");

for (var i = 0; i < addtocartbutton.length; i++) {
    addtocartbutton[i].addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement;
        var title = product.getElementsByClassName("product-title")[0].innerText;
        var price = product.getElementsByClassName("product-price")[0].innerText;
        var imageSrc = product.getElementsByClassName("product-img")[0].src;
        addItemToCart(title, price, imageSrc);
    });
}

function addItemToCart(title, price, imageSrc) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ title: title, price: price, imageSrc: imageSrc });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(title + " (" + price + ") has been added to your cart!");
}

function updateCartCount() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelector(".cart-count").innerText = cart.length;
}

updateCartCount();
