//Modals: 

// Get the modals
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let modal5 = document.getElementById("myModal5");
let modal6 = document.getElementById("myModal6");

// Get the buttons that open the modals
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

// Get the <span> elements that close the modals
let spans = document.getElementsByClassName("close");

// When the user clicks on the button, open the corresponding modal
btn1.onclick = function() {
  modal1.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden'; //prevents background scrolling while modal is open
}

btn2.onclick = function() {
  modal2.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden'; 
}
 
btn3.onclick = function() {
  modal3.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden';
}

btn4.onclick = function() {
  modal4.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden'; 
}

btn5.onclick = function() {
  modal5.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden'; 
}
 
btn6.onclick = function() {
  modal6.style.display = "block";
  document.querySelector("body").style.overflow = 'hidden'; 
}


// When the user clicks on <span> (x), close the corresponding modal
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
    document.querySelector("body").style.overflow = 'visible'; //make background scrollable again
  }
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 ) {
    event.target.style.display = "none";
    document.querySelector("body").style.overflow = 'visible'; //make background scrollable again
  }
}

// End of modals


// Scroll to bottom of page: 
window.onload = function() {
  let toBottomBtn = document.getElementById("to-bottom-btn");
  toBottomBtn.addEventListener("click", function() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  });
};

