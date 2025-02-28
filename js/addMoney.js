document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyNumber = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("pin-number");

    if(isNaN(addMoneyNumber)){
      alert('Failed to add money')
      return;
    }

    if(pinNumber === 1234){

        const balance = getTextFieldValueById ("account-balance");
        const newBalance = addMoneyNumber + balance;
        document.getElementById('account-balance').innerText = newBalance;

        const p= document.createElement('p');
        p.innerText = `Added: ${addMoneyNumber} Tk. New Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);

    }else
    {
        alert('Failed to add the money');
    }
  });
