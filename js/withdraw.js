document.getElementById('btn-withdraw').addEventListener('click' , function(){
    
    const newWithdraw = getInputValueById('withdraw-field');
    if(isNaN(newWithdraw)){
        alert('please provide valid withdraw amount');
        return;
    }
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const previousBalanceTotal = getElementValueById('balance-total');
    if(newWithdraw> previousBalanceTotal || newWithdraw <= 0){
        alert('Tomar baap ato takar malik na')
        return;
    }
    const newElementWithdrawTotal = newWithdraw + previousWithdrawTotal;
    setNewElementValue('withdraw-total' , newElementWithdrawTotal);

    const newElementBalanceTotal = previousBalanceTotal - newWithdraw ;
    setNewElementValue('balance-total' , newElementBalanceTotal);
})