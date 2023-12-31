function getStorageAmount(items ,tk){
    const storagePrice = document.getElementById(items+'-price');
    storagePrice.innerText =tk;
    return tk;
}

function totalAmount(){
    const bestPrice=document.getElementById('best-price').innerText;
    const memoryPrice=document.getElementById('memory-price').innerText;
    const storagePrice =document.getElementById('storage-price').innerText;
    const deliveryPrice =document.getElementById('delivery-price').innerText;
    const totalAmount=parseFloat(bestPrice)+parseFloat(memoryPrice)+parseFloat(storagePrice)+parseFloat(deliveryPrice);
    const totalPrice =document.getElementById('total-price');
    document.getElementById('discount-price').innerText = totalAmount;;
    totalPrice.innerText=totalAmount;
}
// ___________Handle Button Memory cost 0_____________
document.getElementById('memory-cost-0').addEventListener('click', function () {
    getStorageAmount('memory',0);
    totalAmount();
})
// ___________Handle Button Memory cost 180_____________
document.getElementById('memory-cost-180').addEventListener('click', function () {
    getStorageAmount('memory', 180);
    totalAmount();
})
// ___________Handle Button Storage cost 0_____________
document.getElementById('storage-cost-0').addEventListener('click', function () {
    getStorageAmount('storage',0);
    totalAmount();
})
// ___________Handle Button Storage cost 100___
document.getElementById('storage-cost-100').addEventListener('click', function () {
    getStorageAmount('storage',100);
    totalAmount();
})
// ___________Handle Button Storage cost 180___
document.getElementById('storage-cost-180').addEventListener('click', function () {
    getStorageAmount('storage',180);
    totalAmount();
})
// ___________Handle Button delivery cost 0__
document.getElementById('delivery-cost-0').addEventListener('click', function () {
    getStorageAmount('delivery',0);
    totalAmount();
})
// ___________Handle Button delivery cost 20__
document.getElementById('delivery-cost-20').addEventListener('click', function () {
    getStorageAmount('delivery',20);
    totalAmount();
})

// __________________20% discount______
document.getElementById('apply-button').addEventListener('click', function(){
    const promoCode =document.getElementById('promo-code').value;
    if(promoCode.toLowerCase() == 'stevekaku')
    {
       const Amount= parseFloat(document.getElementById('total-price').innerText);
       const totalDiscount= Amount*0.2;
       const discountAmount =Amount-totalDiscount;
       document.getElementById('discount-price').innerText =discountAmount;
       document.getElementById('promo-code').value ='';
    }
    else{
        console.log("Promo Code Doesn't Matched")
        document.getElementById('promo-code').value ='';
    }

})