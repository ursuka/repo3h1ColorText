const find = (selector) => {
    return document.querySelector(selector);
}

const vladBtn = find("#vlad");

vladBtn.addEventListener("click", ()=>{
    alert("Hello vlad!");
})