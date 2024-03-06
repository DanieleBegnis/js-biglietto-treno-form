const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    
const userAge = parseInt(document.querySelector('#user-age').value);
const userKm = parseInt(document.querySelector('#user-km').value);
const price = userKm * 0.21

//calcolare sconto
if (userAge > 65) {
    let userDiscount = price * 0.6;
    //arrotondare sconto
    let priceFix = userDiscount.toFixed(2);
    finalPriceMessage = ('Il costo per anziani è ' + priceFix + ('$'));
    document.querySelector('.user-message').innerHTML = finalPriceMessage
}  else if (userAge < 18) {
    let userDiscount = price * 0.8;
    //arrotondare output ai centesimi
    let priceFix = userDiscount.toFixed(2);
    finalPriceMessage = ('Il costo per minorenni è ' + priceFix + ('$'));
    document.querySelector('.user-message').innerHTML = finalPriceMessage
} else {
    let userDiscount = price;
    //arrotondare output ai centesimi
    let priceFix = userDiscount.toFixed(2);
    //mostrare risultato
    finalPriceMessage = ('Il costo totale è ' + priceFix + ('$'));
    document.querySelector('.user-message').innerHTML = finalPriceMessage
}
    const userMessageDiv = document.querySelector('.user-message');
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-age').value = '';
    document.querySelector('#user-km').value = '';
    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = '';
});