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

    // aivabeo kora jay

    // const finalResult=document.getElementById(id);
    // finalResult.innerText=result;
}

// function GetTwoInput(first,second){
//     const first = inputValue('first-input');
//     const second = inputValue('second-input');
//     return (first,second);
// }


document.getElementById('sum').addEventListener('click', function () {
    const firstInput = inputValue('first-input');
    const secondInput = inputValue('second-input');
    // GetTwoInput(firstInput,secondInput);
    const summation = firstInput + secondInput;
    setValue('final-output',summation);
})
document.getElementById('sub').addEventListener('click',function(){
    const firstInput = inputValue('first-input');
    const secondInput = inputValue('second-input');
    // GetTwoInput(firstInput,secondInput);
    const subtraction = firstInput - secondInput;
    setValue('final-output',subtraction);
})
document.getElementById('mul').addEventListener('click',function(){
    const firstInput = inputValue('first-input');
    const secondInput = inputValue('second-input');
    // GetTwoInput(firstInput,secondInput);
    const multiplication = firstInput * secondInput;
    setValue('final-output',multiplication);
})
document.getElementById('div').addEventListener('click',function(){
    const firstInput = inputValue('first-input');
    const secondInput = inputValue('second-input');
    if(firstInput<secondInput){
        alert('First number should be big');
    }else{
        const division = firstInput / secondInput;
        setValue('final-output',division);
    }
    // GetTwoInput(firstInput,secondInput);
    
})
