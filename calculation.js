function inputValue(id) {
    const input = document.getElementById(id);
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    input.value='';
    return inputNumber;
}
function elementValue(string) {
    const element = document.getElementById(string);
    const elementString = element.innerText;
    const elementNumber = parseFloat(elementString);
    return elementNumber;
}
function setValue(id, result) {
    document.getElementById(id).innerText=result;
}


document.getElementById('sum').addEventListener('click', function () {
    const firstInput = inputValue('first-input');
    const secondInput = inputValue('second-input');
    const summation = firstInput + secondInput;
    setValue('final-output',summation);
})
