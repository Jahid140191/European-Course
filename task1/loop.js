//use for loop:
console.log("for loop:-")
for(let i=1; i<=10; i++){
    if(i%2==0){
      console.log(i+" is even number");
      console.log();
    }
    else{
        console.log(i+" is a odd number");
        console.log();
    }
}

console.log();


//use for-of loop:
let array1=[10,20,30,40,50,60];

console.log("for-of loop:")
for(let x of array1){
   console.log(x);
}


console.log();


//use for-in loop:
let obj={
    std1:"jahid",
    std2:"raju",
    std3:"rony",
    std4:"jony"
}

for(let i in obj){
  console.log(i+": "+obj[i]);
}