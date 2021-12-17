let logoString = "hebe.";
   let i = 0;

function printText(){
   let logo = document.getElementById("logo");
   let count = logoString.length;
   if(i < count){
       logo.innerHTML += logoString.charAt(i);
       i++; 
}

setTimeout(printText, 500)

}
printText();
