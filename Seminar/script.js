const ul = document.getElementById("myUL");

const itemsText = ["Fisrtt", "Second", "Third", "Fourth"];

itemsText.forEach(text => {
    const li = document.createElement("li");
    li.classList.add("list-element");
    li.textContent = text;
    const span = document.createElement("span");
    span.textContent = "close";             
    span.classList.add("close");            
    li.append(span);
    ul.append(li);
});
