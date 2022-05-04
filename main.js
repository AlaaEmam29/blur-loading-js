const loadingText = document.querySelector(".loading-screen"),
bg = document.querySelector(".bg-section")

let timer = setInterval(blurring,30)
let load = 0
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurring() {
load++;
if(load > 99)
{
    clearInterval(timer)
}    
loadingText.innerHTML = `${load}%`;
loadingText.style.opacity = `${scale(load,0,100,1,0)}`
bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}