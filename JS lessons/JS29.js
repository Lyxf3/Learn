

const box = document.getElementById(`box`),
    btns = document.getElementsByTagName(`button`),
    circles = document.getElementsByClassName(`circle`),
    wrapper =  document.querySelector(".wrapper"),
    hearts = wrapper.querySelectorAll(`.heart`),
    oneHeart = wrapper.querySelector(`.heart`);


box.style.backgroundColor = "blue";
box.style.width = "500px";

let num = 100;

box.style.cssText = `background-color: blue; width:${num}px `;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = "black";
}

hearts.forEach(item =>{
    item.style.backgroundColor = "black";
});

const div = document.createElement("div");
const text = document.createTextNode("tut bil ya");

div.classList.add("black");

wrapper.append(div);
wrapper.prepend(div);

hearts[0].after(div);

circles[0].remove();

wrapper.removeChild(hearts[0]);

hearts[1].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello World</h1>";
div.textContent = "Hello World";
div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>")

