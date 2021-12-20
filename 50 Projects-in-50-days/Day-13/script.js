let logoString = "hebe.";
   let index = 0, index2 = 4;
   let totalLength= 5;

function printText(){
   let logo = document.getElementById("logo");
   let count = logoString.length;
   if(index < count){
       logo.innerHTML += logoString.charAt(index);
       index++; 
} else if(index2 >= 0){ 
   let str = logo.innerText
   str = str.substring(0, str.length - 1);
   logo.innerText = str
      index2--; 
}
else {
   index = 0;
   index2 = 4;
   
  
}

setTimeout(printText, 500)
}
printText();



