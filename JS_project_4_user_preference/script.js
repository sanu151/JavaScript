// Select DOM Elements
const selectFontSize = document.getElementById('selectFontSize');
const selectBgColor = document.getElementById('selectBgColor');
const resetButton = document.getElementById('resetButton');
const mainElement = document.querySelector('main');

// Functions
const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}
const initialSetup = () => {
    const fontSize = localStorage.getItem('fontSize');
    const bgColor = localStorage.getItem('bgColor');

    if(fontSize && bgColor){
        setValues(fontSize, bgColor);
    }
    if(!fontSize && !bgColor){
        setValues('16px', 'aqua');
    }
    if(fontSize && !bgColor){
        setValues(fontSize, 'aqua');
    }
    if(!fontSize && bgColor){
        setValues('16px', bgColor);
    }
}
const fontSizeSelect = (event) => {
    const selectedFontSize = event.target.value
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize);
}
const bgColorSelect = (event) => {
    const selectedBgColor = event.target.value
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem('bgColor', selectedBgColor);
}
const clearLocalStorage = () => {
    localStorage.removeItem('fontSize');
    localStorage.removeItem('bgColor');
    setValues('16px', 'aqua');
}


// Event Listener
selectFontSize.addEventListener('change', fontSizeSelect);
selectBgColor.addEventListener('change', bgColorSelect);
resetButton.addEventListener('click', clearLocalStorage);


//Function Call
initialSetup();

