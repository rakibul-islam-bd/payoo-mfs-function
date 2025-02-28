document.getElementById('btn-cash-out').addEventListener('click', function (event){
    event.preventDefault();

    const cashOutNumber = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('pin-number-cash-out');
    
    if(isNaN(cashOutNumber)){
        alert('Failed to cash out');
        return;
    }

    if (pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if (cashOutNumber > balance){
            alert('You do not have enough money to cash out');
            return;
        }
        const newBalance = balance - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
        // Add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out </h4>
        <p>${cashOutNumber} withdraw. New Balance ${newBalance} </p>
        `
        document.getElementById('transaction-container').appendChild(div);
       
    }
    else{
        alert ('Failed to cash out');
    }

})