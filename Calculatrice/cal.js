//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// https://www.w3schools.com/jsref/event_onload.asp

function clearScreen(){
    document.getElementById("number").value = "";
}

function display(value) {
    document.getElementById("number").value += value;
}
