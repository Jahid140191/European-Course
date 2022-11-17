let scount=1;

setInterval(secAnim,500);

function secAnim(){
    let sec=document.querySelector("#sec");
        if(scount<6){
        sec.innerHTML=scount;
        scount+=1;
    }
        else {
        scount=0;
        sec.innerHTML=scount;
        scount+=1;
        }
    
}

let mcount=1;
setInterval(minAnim,3000);

function minAnim(){
    let min=document.querySelector("#min");
    if(mcount<6){
        min.innerHTML=mcount;
        mcount+=1;
    }
    else {
        mcount=0;
        min.innerHTML=mcount;
        mcount+=1;
        }
}

let hcount=1;
setInterval(hourAnim,18000);

function hourAnim(){
    let hour=document.querySelector("#hour");
    if(hcount<6){
        hour.innerHTML=hcount;
        hcount+=1;
    }
    else {
        hcount=0;
        hour.innerHTML=hcount;
        hcount+=1;
        }
}

