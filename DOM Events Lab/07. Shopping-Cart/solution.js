function solve() {
 
   let checkoutButton = document.querySelector(".checkout");
   let addButtons = document.querySelectorAll(".add-product");
   let textarea = document.querySelector("textarea");
   let totalPrice = 0;
   let products = new Set();

   addButtons.forEach(button => {
       button.addEventListener("click", function() {
           let product = button.parentNode.parentNode;
           let productName = product.querySelector(".product-title").textContent;
           let productPrice = Number(product.querySelector(".product-line-price").textContent);

           totalPrice += productPrice;
           products.add(productName);

           textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
       });
   });

   checkoutButton.addEventListener("click", function() {
       let productList = [...products].join(", ");
       textarea.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.`;

       addButtons.forEach(button => {
           button.disabled = true;
       });
       checkoutButton.disabled = true;
   });
}