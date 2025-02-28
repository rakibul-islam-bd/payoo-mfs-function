document.getElementById('btn-cash-out').addEventListener('click', function (event){
    event.preventDefault();

    const cashOutNumber = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('pin-number-cash-out');
    

    if (pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert ('Failed to cash out');
    }

})