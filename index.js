for (let i=0; i<2; i++){
    let buttonEl = document.querySelectorAll("button")[i];
    buttonEl.addEventListener("mouseover", function (){      
    this.classList.add("box-shadow");
});
    buttonEl.addEventListener("mouseout", function (){      
    this.classList.remove("box-shadow");
});
}

