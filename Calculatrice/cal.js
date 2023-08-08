//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// https://www.w3schools.com/jsref/event_onload.asp

function clearScreen(){
    document.getElementById("number").value = "";
}

function display(value) {
    document.getElementById("number").value += value;
}

function correct(answer){
    var ok = document.getElementById('number').value;
    if(ok == answer){
        document.getElementById("container").style.display= "none";
        document.getElementById("good").style.display= "block";
    }
}