let modeButton = document.querySelector(".mode-btn"); 
let body = document.querySelector("body");
let mode = "light";
let img = document.querySelector(".flex-item-right");

modeButton.addEventListener("click", ()=> {
    if (mode === "dark"){
        mode = "light"; 
        body.classList.add("light");
        body.classList.remove("dark");
        modeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";
        // modeButton.innerHTML = "<img src='./img/dark.jpg' id='dark'>"
        img.innerHTML = "<img src='./img/undraw_programming_re_kg9v.svg' alt='computerboy' id='comp' width='90%' height='90%' >";
        
    }
    else{
        mode = "dark";
        // button1.innerText = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modeButton.innerHTML = "<i class='fa-regular fa-sun'></i>";
        // modeButton.innerHTML = "<img src='./img/light.png' id='dark'>"
        img.innerHTML = "<img src= './img/arjit.gif' width='90%'  height='90%'>";
    }
    console.log(mode);
});