/*function Calculator() {
    that = this;
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    this.t = document.getElementsByClassName("buttons");
    // this.field = "inputnumber",
    //     this.button = "#body #buttons",
    //     this.init = false,

    this.run = function () {
        console.log(t);

        // $(this.button).click(function(){
        //     var value = $(this).html();

        //     if (that. init == false)
        //     {
        //         $(that.field).val("");
        //         that.init= true;
        //     }

        //     if (value != "=")

        //     $(that.field).val($(that.field).val() + value);

        //     that.dispatcher(value);
        // });

    },

        this.dispatcher = function (value) {

        }
}*/

function removeZero(){
    var value = document.getElementById("number").innerHTML;
    if (value == "0"){
        value = " "
        document.getElementById("number").innerHTML = value;
    }
}

function fordisplay(value){
    removeZero()
    document.getElementById("number").innerHTML += value;
}