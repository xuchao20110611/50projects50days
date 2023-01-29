let textcontent=document.getElementsByClassName('loading-text')[0];
let imgcontent=document.getElementsByClassName('bg')[0];

let time=0;

let intervalID = setInterval(()=>{
    time++;
    if(time>=100){
        clearInterval(intervalID);
    }
    let blur=30-0.3*time;
    textcontent.textContent=`${time}%`;
    textcontent.style.opacity=1-time/100;
    imgcontent.style.filter=`blur(${blur}px)`;
}, 30);