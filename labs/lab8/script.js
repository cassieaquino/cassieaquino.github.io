function toggleTheme() { 
    let pageList = document.querySelector("body");
    pageList.classList.toggle("dark-mode");
}


let buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;