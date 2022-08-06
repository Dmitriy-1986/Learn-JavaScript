/* Callback function */
const printMyName = () => {
    console.log('Dima');
}

setTimeout(printMyName, 1000);

/* Example callback function */
function anotherFunction() {
    console.log('Callback function!');
}

function fnWithCallback(callbackFunction) {
    callbackFunction();
}
fnWithCallback(anotherFunction);
