setInterval(anim,500);
let scount=1;
let mcount=1;
let hcount=1;


function anim(){
    let hour=document.querySelector("#hour")
    let min=document.querySelector("#min")
    let sec=document.querySelector("#sec")


    if(scount<6){
        sec.innerHTML=scount;
        scount+=1;

        if(scount == 6){
                min.innerHTML=mcount;
                mcount+=1;
                
                console.log("if"+mcount)

                    if(mcount == 6){
                        hour.innerHTML=hcount;
                        hcount+=1;
                    }
                    else if(hcount == 6){
                        hcount=0;
                        hour.innerHTML=hcount;
                        hcount+=1;
                    }
            }
        else if(mcount == 6){
                mcount=0;
                min.innerHTML=mcount;
                mcount+=1;
            }



        }




    else {
        scount=0;
        sec.innerHTML=scount;
        scount+=1;
        }



    
}





// if(scount > 5){
//     mcount+=1;
//     min.innerHTML=mcount;

// }
// else if(mcount > 4){
//     mcount=0;
//     min.innerHTML=mcount;
//     mcount+=1;
// }