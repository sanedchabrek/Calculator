var display = document.getElementById("display")
var acc=""
 function appendToDisplay(input){
   acc=acc+" "+input;
    display.value= acc
 }
 function clearDisplay(){
display.value=" ";
acc=" ";
 }
   function calculate(){
try{
 display.value=eval(display.value)
}catch(error){  

 display.value="error"
}
   }
