let dots = [".", "..", "..."]
let increment = 1
setInterval(()=>{
let dot = document.getElementById("dots")
if(increment % 3 == 0){
  dot.textContent = dots[0]
}else if(increment % 3 == 1){
  dot.textContent = dots[1]
}else{
    dot.textContent = dots[2]
}
increment = increment + 1
}, 1000)