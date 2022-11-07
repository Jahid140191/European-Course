let obj1 = { 1 : 'jahid', 2 : 'ratul', 3 : 'manik' };
let obj2={4 : "rohan", 5 : "roky", 6 : "ashiq"};



//use entries method:
console.log("entry:")
console.log(Object.entries(obj1)[1]);

console.log();

//use keys method:
console.log("keys method:")
let keyResult=Object.keys(obj1);
console.log(keyResult);

console.log();

//use values method:
console.log("valuess method:")
let valueResult=Object.values(obj1);
console.log(valueResult);

console.log();

//use spread oparatop program in obj
console.log("spread operator:")
let spreadResult={...obj1,...obj2};
console.log(spreadResult);


