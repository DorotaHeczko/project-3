const myBtn = document.querySelector("button");

const items = document.querySelectorAll("li");

let fontSize = 10;


myBtn.addEventListener("click", () => {
         fontSize++;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "block";
        items[i].style.fontSize = `${fontSize}px`;
    }
});

