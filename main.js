if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}

const btns = document.querySelectorAll(".addToCart");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        let productName = e.target.parentElement.querySelector(".item-name").textContent;
        let productPrice = e.target.parentElement.querySelector(".price").textContent;
        let productDiscount = e.target.parentElement.querySelector(".discount").textContent;
        let basketItems = JSON.parse(localStorage.getItem("basket"));
        basketItems.push({
            name: productName,
            price: productPrice,
            discount: productDiscount,
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

if (basketItems && basketItems.length > 0) {
    
    const totalDiscount = basketItems.reduce((acc, item) => {
        
        const discount = parseFloat(item.discount.slice(0, -1));
        return acc + discount; 
    }, 0);

    const discountAmountElement = document.querySelector(".orderContentBodycash span:nth-child(2)");
    discountAmountElement.textContent = `${totalDiscount} ₼`;
}

    const totalAmountElement = document.querySelector(".orderContentBody span:nth-child(2)");
    if (totalAmountElement !== null) {
        const totalAmount = parseFloat(totalAmountElement.textContent.replace(' ₼', ''));
        
        const discountAmountElement = document.querySelector(".orderContentBodycash span:nth-child(2)");
        const finalAmountElement = document.querySelector(".footerspan span:nth-child(2)");

        const discountAmount = parseFloat(discountAmountElement.textContent.replace(' ₼', ''));

        const finalAmount = totalAmount - discountAmount;

        finalAmountElement.textContent = `${finalAmount} ₼`;
    }
    




