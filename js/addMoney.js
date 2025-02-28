document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyNumber = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("pin-number");

    if(pinNumber === 1234){

        const balance = getTextFieldValueById ("account-balance");
        const newBalance = addMoneyNumber + balance;
        document.getElementById('account-balance').innerText = newBalance;

    }else
    {
        alert('Failed to add the money');
    }
  });
