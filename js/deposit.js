

document.getElementById('btn-deposit').addEventListener('click' , function(){
    const newDepositAmount = getInputValueById('deposit-field');
    if(isNaN(newDepositAmount) || newDepositAmount <= 0){
        alert('please provide valid deposit amount');
        return;
    }
    const depositElementTotal = getElementValueById('deposit-total');

    const balanceElement = getElementValueById('balance-total');

    const newDepositElementTotal = newDepositAmount + depositElementTotal ;
    const newBalanceElementTotal = newDepositAmount + balanceElement;

    setNewElementValue('deposit-total', newDepositElementTotal);
    setNewElementValue('balance-total' , newBalanceElementTotal);

 
})