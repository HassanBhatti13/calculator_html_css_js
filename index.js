// Calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate (){
    try {
    display.value = eval (display.value);             /*eval function takes an expression such as 1+2+3 etc and evaluates it and gives
                                            gives a result */
    }
    catch (error){
        display.value = "Error";
    }
}

document.title = "Calculator";

// const userName = " Hassan";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += userName === "" ? ' Guest' : userName;