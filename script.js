let messageArray = ["Hello, I'm Nicole Gainska!"];
let secondArray = ["Welcome to the Contact Center!"];
let textPosition = 0;
let speed = 40;


typewriter = () => {
  document.querySelector("#type").innerHTML = messageArray[0].substring(0, textPosition)+ `<span class="main-title">\u25ae</span>` ;
  if(textPosition++ != messageArray[0].length)
  setTimeout(typewriter, speed,); 
  
}
window.addEventListener("load", typewriter);


  
  




//<span>⏷</span>