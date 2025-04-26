// const btn= document.querySelector('#btn');
// btn.onclick= function(){remove.remove() ;}


btn.addEventListener("click", () => alert("1"));
btn.removeEventListener("click", () => alert("1"));
btn.onclick = () => alert(2);
