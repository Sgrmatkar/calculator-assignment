const addition = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');
const reset = document.querySelector('#button-49');
reset.addEventListener('click', ( ) => {
    fieldOne.value = "";
    fieldTwo.value = "";
    resultValue.innerHTML = "";
});
addition.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const addResult = valueOne + valueTwo;
    if (addResult < 0) {
        resultValue.innerHTML = resultValue.style.color = 'red';
    }
    else{ 
        resultValue.innerHTML = resultValue.style.color = 'green';
    }
    resultValue.innerHTML = addResult; 
} );
const substraction = document.querySelector('#substraction');
substraction.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const subResult = valueOne - valueTwo;
    if (subResult< 0) {
        resultValue.innerHTML = resultValue.style.color = 'red';
    }
    else{ 
        resultValue.innerHTML = resultValue.style.color = 'green';
    }
    resultValue.innerHTML = subResult; 
} );

const multiplcation = document.querySelector('#multiplcation');
multiplcation.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const mulResult = valueOne * valueTwo;
     resultValue.innerHTML = mulResult;
     if (mulResult< 0) {
        resultValue.innerHTML = resultValue.style.color = 'red';
    }
    else{ 
        resultValue.innerHTML = resultValue.style.color = 'green';
    }
    resultValue.innerHTML = mulResult;
     
});   
const division = document.querySelector('#division');
division.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const divResult = valueOne / valueTwo;
    if(divResult == 'Infinity') {
        resultValue.innerHTML = "Invalid input"
    }
    else{
        resultValue.innerHTML = divResult
    }
    
})
    const onresultValue = document.querySelector('#resultValue');


