const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const applyButton = document.getElementById('applyButton');
const colorSquare = document.getElementById('colorSquare');
const errorElement = document.getElementById('error');


function checkData (value,color) {
    const num = Number(value);
    if (isNaN(num)) {
        return`поле "${color}" должно быть числом!`;
    }

    if (num < 0) {
        return `поле "${color}" не может быть меньше 0!`;
    }

    if (num > 255) {
        return `поле "${color}" не может быть больше 255!`;
    }
    return null

}
applyButton.addEventListener('click',() => {

    const rValue= redInput.value;
    const gValue= greenInput.value;
    const bValue= blueInput.value;

    const errors = [];
    const rError = checkData(rValue,'R');
    const gError = checkData(gValue,'G');
    const bError = checkData(bValue,'B')

    if (rError) errors.push(rError);
    if (gError) errors.push(gError);
    if (bError) errors.push(bError);

    if (errors.length > 0) {
        errorElement.textContent = 'Исправьте: ' + errors.join('; ');
        return;
    }

    errorElement.textContent ='';

    const r = Math.floor(Number(rValue));
    const g = Math.floor(Number(gValue));
    const b = Math.floor(Number(bValue));


    colorSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
})