const memory8gb = document.getElementById('extended-memory-8gb');
const memory16gb = document.getElementById('extended-memory-16gb');
const memoryCost = document.getElementById('extended-memory-cost');

memory8gb.addEventListener('click', function(){
    memoryCost.innerText = '0';
    updateTotal()
});
memory16gb.addEventListener('click', function(){
    memoryCost.innerText = '180';
    updateTotal();
});

 const storage256gb = document.getElementById('extended-storage-256gb');
 const storage512gb = document.getElementById('extended-storage-512gb');
 const storage1tbssd = document.getElementById('extended-storage-1tb');
 const storageCost = document.getElementById('extended-storage-cost');


storage256gb.addEventListener('click', function(){
    storageCost.innerText = '0';
    updateTotal()
});

// 512 SSD
storage512gb.addEventListener('click', function(){
    storageCost.innerText = '100';
    updateTotal()
});

// 1 TB SSD
storage1tbssd.addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotal()
});

/* Delviery Cost  */
const freeDelviery = document.getElementById('free-delivery'); 
const expressDelviery = document.getElementById('express-delivery'); 
const deliveryCost = document.getElementById('delivery-charge');


// Free Delivery
freeDelviery.addEventListener('click', function(){
    deliveryCost.innerText = '0';
    updateTotal()
});

// Express Delivery 
expressDelviery.addEventListener('click', function(){
    deliveryCost.innerText = '20';
    updateTotal()
});

// price
const bestPrice = document.getElementById('price');
const price = bestPrice.innerText;
const priceAmount = parseInt(price);

// total price
let totalPrice = document.getElementById('total-price');
let discountPrice = document.getElementById('discount-price')
function updateTotal(){
    const memoryCharge =  parseInt(memoryCost.innerText);
    const storageCharge = parseInt(storageCost.innerText);
    const deliveryCharge = parseInt(deliveryCost.innerText);
    const totalPriceAmount = memoryCharge + storageCharge + deliveryCharge +  priceAmount;
    totalPrice.innerText = totalPriceAmount;
    discountPrice.innerHTML = totalPriceAmount;  
};


// Coupon enabled 
const couponApply = document.getElementById('button-addon2');
document.getElementById('promo-input').addEventListener('keyup', function(event){
    if(event.target.value == 'stevekaku'){
        couponApply.removeAttribute('disabled');
    }
    else{
        couponApply.setAttribute('disabled', true);
    }
});

// dicount price function
function promoFunction() {
    const promoInput = document.getElementById('promo-input');
    let promoInputValue = promoInput.value;
    if (promoInputValue == 'stevekaku') {
        const finalTotalPrice = totalPrice.innerText;
        const finalDiscountPrice = finalTotalPrice - (finalTotalPrice * 20) / 100;
        discountPrice.innerText = finalDiscountPrice;
    }
    promoInput.value = '';
  };
  
