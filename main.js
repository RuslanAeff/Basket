if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}

const btns = document.querySelectorAll(".addToCart");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let productName = e.target.parentElement.querySelector(".product-name").textContent;
        let productPrice = e.target.parentElement.querySelector(".price").textContent;
        let basketItems = JSON.parse(localStorage.getItem("basket"));
        basketItems.push({
            name: productName,
            price: productPrice,
        })
        localStorage.setItem("basket", JSON.stringify(basketItems));
    });
});
const basketItems = JSON.parse(localStorage.getItem("basket"));

if (basketItems && basketItems.length > 0) {
    const itemCount = basketItems.length;
    const totalAmount = basketItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

    const itemCountElement = document.querySelector(".orderContentHeader span:nth-child(2)");
    const totalAmountElement = document.querySelector(".orderContentBody span:nth-child(2)");

    itemCountElement.textContent = itemCount;
    totalAmountElement.textContent = `${totalAmount} ₼`;
}

