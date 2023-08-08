function changePage(subject){
    location.href= "../" + subject + "/" + subject + ".html";
}

function codeShow(){
    document.getElementById('container').style.display="block";
}

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
