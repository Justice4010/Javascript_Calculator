// Web 1 calculator

const display = document.getElementById('display');

function addToDisplay(input) {
    display.value  += input;
};
function clearDislay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value ="Error";
    }
};