
// 4digit pin generate
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('3 digit pin : ' , pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
}

// 27-6 Use event bubble to create calculator and clear


document.getElementById('key-pad').addEventListener('click' , function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    // check if number
    if(isNaN(number)) {
        if(number == 'C')
        {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number
        calcInput.value = newNumber;
    }

})

// 27-7 Verify match and use function to reduce duplicate
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const error = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');

    if(pin == typedNumbers){
        success.style.display = 'block';
        error.style.display = 'none';

    }else{
        error.style.display = 'block';
        success.style.display = 'none';
    }

}