let array1=["jahid","nahid","rakib","shohan"];
let array2=["rohan","roky","jony","shohan"];
let array3=[10,20,30,40,50,60,70,80,90,100];
let array4=["g","v","a","c","e"];


let rakib={0:"jh"}

//use concat method:
let concatResult=array1.concat(array2);
console.log("concat:"+concatResult);
console.log();

//use every method:
let everyResult=array1.every(function result(x){
    return x.length==5;
})
console.log("every:"+everyResult);
console.log();

//use some method:
let someResult=array1.some(function result(x){
    return x.length==5;
})
console.log("some:"+someResult);
console.log();

//use fill method:
let fillResult=array1.fill("ashiq",2,3);
console.log("fill:"+fillResult);
console.log();

//use filter method:
let filterResult= array2.filter(function result(x){
    return x.length==4;
})
console.log("filter:"+filterResult);
console.log();

//use find methopd:
let findResult= array3.find(function result(x){
    return x>=65;
})
console.log("find:"+findResult);
console.log();

//use findindex method:
let findindexResult= array3.findIndex(function result(x){
    return x==30;
})
console.log("findindex:"+findindexResult);
console.log();

//use foretch method:
let forEtchResult=array3.forEach((x)=>{
   process.stdout.write(`${x} `);
})
console.log();
console.log();


//use from method:
let fromResult="i love my country"
console.log(Array.from(fromResult));
console.log();

//use includes method:
console.log("includes: "+array1.includes("jahid"));
console.log();


//use isArray method:
console.log("isArray:"+Array.isArray(array2));
console.log();

//use join method:
console.log("join: "+array1.join(" or "));
console.log();

//use map method:
let mapResult=array3.map(x=>{
    process.stdout.write(`${x+2} `);
})
console.log();
console.log();


//use push method:
array1.push("tanvir");
console.log("push: "+array1);
console.log();

//use pop method:
array2.pop();
console.log("pop: "+ array2);
console.log();


//use revese method:
array3.reverse();
console.log("reverse: "+array3);
console.log();

//use shift method:
array3.shift();
console.log("shift: "+array3);
console.log();

// use unshift method:
array3.unshift(110);
console.log("unshift: "+array3);
console.log();

//use slice method:
let sliceResult= array2.slice(1,3);
console.log(sliceResult);
console.log();


//use splice method:
console.log("splice:"+array3.splice(2,4));
console.log();


//use sort method:
console.log("short:"+array4.sort());
console.log();



//use spread operator program:
console.log("spreead operator:");
let spreadResult=[...array1,...array2,...array3];
console.log(spreadResult);
