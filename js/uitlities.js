function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value ='';
    return inputValue;
}

function getElementValueById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueTotal = parseFloat(elementValue.innerText);
    return elementValueTotal;
}

function setNewElementValue(elementId , elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}