function myError(){

    var msg, x;

    msg = document.getElementById("msg");
    msg.innerHTML = "";

    x = document.getElementById("some").value;
    try{
        if(x == "") throw "please choose a number";
        if(isNaN(x)) throw "Only number are allowed";
        if(x < 4) throw "Choose a number greater than 3";
    } catch(err){
        msg.innerHTML = "Error is " + err;
    } finally{
        document.getElementById("some").value = "";
    }
}