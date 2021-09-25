
let messageArray = ["Hello, my name is Nicole Gainska!"];
let textPosition = 0;
let speed = 50;

typewriter = () => {
  document.querySelector("#type").innerHTML = messageArray[0].substring(0, textPosition)+ "<span  >\u25ae</span>" ;

  if(textPosition++ != messageArray[0].length)
  setTimeout(typewriter, speed,); 
  
}

window.addEventListener("load", typewriter);

//<span>⏷</span>