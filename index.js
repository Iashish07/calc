const display = document.getElementById("display");
function append_display(input){
    display.value += input;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}
function cleardisplay(){
    display.value="";

}