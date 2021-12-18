let logoString = "hebe.";
   let index = 0;
   let totalLength= 5;
function printText(){
    
   let logo = document.getElementById("logo");
   let count = logoString.length;
   if(index < count){
       logo.innerHTML += logoString.charAt(index);
       index++; 
}

setTimeout(printText, 500)

}
printText();
