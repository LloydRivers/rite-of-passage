import products from './products';
let productName: string = 'fanny pack';
let shipping: number 
let taxPercent: number
let taxTotal: number
let total: number
const shippingAddress: string = "28 Manchester Road, Manchester, New York" 

const product = products.filter(product =>{
  return product.name === productName;
})[0];


if(product.preOrder) {
  console.log("We’ll send you a message when it’s on the way.")
};

if(product.price > 25){
  console.log("We provide free shipping for this product")
  shipping = 0
} else {
  shipping = 5
}
if(shippingAddress.match('New York')){
  taxPercent = 0.1
} else {
  taxPercent = 0.05
}

taxTotal = product.price * taxPercent
total = product.price + taxTotal + shipping

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);











