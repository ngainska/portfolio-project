
let messageArray = ["Hello, my name is Nicole Gainska!"];
//let secondArray = ["Welcome to the Contact Center!"];
let textPosition = 0;
let speed = 50;

typewriter = () => {
  document.querySelector("#type").innerHTML = messageArray[0].substring(0, textPosition)+ `<span class="main-title">\u25ae</span>` ;
  //document.querySelector("#trial").innerHTML = secondArray[0].substring(0, textPosition)+ `<span class="main-title">\u25ae</span>` ;

  if(textPosition++ != messageArray[0].length)
  setTimeout(typewriter, speed,); 
  
//(textPosition++ != secondArray[0].length)
}

window.addEventListener("load", typewriter);

//<span>⏷</span>