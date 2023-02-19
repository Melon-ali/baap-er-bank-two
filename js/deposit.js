// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposti amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step-3: get the current deposit total
    // for non-input(element other then input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})