function btnclick(val){
    document.getElementById("output").value+=val
}
function cleardisplay(){
document.getElementById("output").value=''
}
function equals(){
    var text=document.getElementById("output").value
    var equals=eval(text)
    document.getElementById("output").value=equals
}