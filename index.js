const increase= document.getElementById("increasebtn")
const reset= document.getElementById("reset")
const decrease= document.getElementById("decrease")
const counter= document.getElementById("countlabel")
let count=0;


increase.onclick=()=>{
    count++;
    counter.textContent=count;
}
decrease.onclick=()=>{
    count--;
    counter.textContent=count;
}
reset.onclick=()=>{
    count =0
    counter.textContent=count;
}