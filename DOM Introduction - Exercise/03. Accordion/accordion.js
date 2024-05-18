function toggle() {
    const btn = document.querySelector(".button");
    const hiddenContent = document.getElementById("extra");
 
    if (btn.textContent == "More") {
     hiddenContent.style.display = "block";
     btn.textContent = "Less";
    } else if (btn.textContent == "Less") {
     hiddenContent.style.display = "none";
     btn.textContent = "More";
    }
 }