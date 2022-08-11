/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let products =[
  {
    name:"Carton of Cherries",
    price:4,
    quantity:0,
    productId:101,
    image:"images/cherry.jpg"
  },
  {
    name:"Carton of Strawberries",
    price:5,
    quantity:0,
    productId:102,
    image:"images/strawberry.jpg"
  },
  {
    name:"Bag of Oranges",
    price:10,
    quantity:0,
    productId:103,
    image:"images/orange.jpg"
  }
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  // increment the quantity for this product
  products.forEach(function(product) {
    if (product.productId == productId) {
      product.quantity += 1;

      // update cart
      const numItems = cart.length;
      if (numItems == 0) { // the cart was empty
        cart.push(product);
      } else {
        let inCart = false; // assume the product is not in the cart
        for (let x=0; x<numItems; x++) {
          if (cart[x].productId == productId) {
            cart[x].quantity = product.quantity;
            inCart = true; 
          }           
        }
        if (!inCart) { // it wasn't found so add it
          cart.push(product);
        }
      }
    }
  })  
}
  
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  // increment the quantity for this product
  let itemNum = 0; 
  products.forEach(function(product) {
    if (product.productId == productId) {
      product.quantity += 1;
      itemNum = product.quantity; 
    }
  })
  
  // increase the quantity for this cart item
  cart.forEach(function(item) {
    if (item.productId == productId) {
      item.quantity = itemNum;
    }
  })
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  // decrease the quantity for this product
  let itemNum = 0; 
  products.forEach(function(product) {
    if (product.productId == productId) {
      product.quantity -= 1;
      itemNum = product.quantity; 
    }
  })

  // decrease the cart quantity for the product and remove if necessary
  cart.forEach(function(item,idx) {
    if (item.productId == productId) {
      if (itemNum > 0) {
        item.quantity = itemNum;
      } else {
        cart.splice(idx,1);    
      }
    }
  })
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  // set the quantity to zero for this product
  products.forEach(function(product) {
    if (product.productId == productId) {
      product.quantity = 0;
    }
  })  

  // remove this product from the cart
  cart.forEach(function(item,idx) {
    if (item.productId == productId) {
      cart.splice(idx,1); 
    }
  })
}
  
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  products.forEach(function(product) {
    total += product.quantity * product.price;
  })
  return total; 
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0; 
function pay(amount) {
  totalPaid = totalPaid + amount; 
  let balance = totalPaid - cartTotal();
  return balance; 
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
