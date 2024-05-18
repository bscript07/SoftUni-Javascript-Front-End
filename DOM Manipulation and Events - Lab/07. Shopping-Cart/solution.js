function solve() {
   const addProductButtonsElements = document.querySelectorAll(".add-product");
   const checkoutButtonElement = document.querySelector(".checkout");
   const areaElement = document.querySelector("textarea");

   const products = [];
   let totalPrice = 0;

   for (const button of addProductButtonsElements) {
      button.addEventListener('click', addProductInCard);
   }

   checkoutButtonElement.addEventListener('click', checkout);

   function addProductInCard(e) {
      const productElement = e.target.parentNode.parentNode;
      const productTitle = productElement.querySelector(`.product-title`);
      const productPrice = productElement.querySelector(`.product-line-price`);

      print(productTitle, productPrice);

      !products.includes(productTitle.textContent) ? products.push(productTitle.textContent) : null;
      totalPrice += Number(productPrice.textContent);

   }

   function print(productTitle, productPrice) {
      areaElement.textContent += `Added ${productTitle.textContent} for ${productPrice.textContent} to the cart.\n`;

   }

   function checkout() {

      areaElement.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
      for (const btn of addProductButtonsElements) {
         btn.disabled = true;
      }
      checkoutButtonElement.disabled = true;
   }

}