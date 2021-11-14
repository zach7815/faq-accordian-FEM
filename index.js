const acc= document.querySelectorAll(".accordian");
const downArrow = document.querySelectorAll(".downArrow");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        hideAll();
        this.classList.add("active");
        downArrow[i].classList.add("rotate");
        this.nextElementSibling.style.maxHeight= this.scrollHeight +"px";
    })   
}

function hideAll() {
    for (i = 0; i < acc.length; i++) {
        acc[i].classList.remove("active");
        downArrow[i].classList.remove("rotate");
        acc[i].nextElementSibling.style.maxHeight="0";
    }
}


