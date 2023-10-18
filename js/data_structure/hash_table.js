//Hash-table
//key-value pairs

//typical example hash-table
const obj = {
    prop1: 'first',
    prop2: 'second',
    prop3: 'third'
}

console.log(obj.prop1);//output: first



const obj2 = {
    prop1: 'change',
    prop3: function () { console.log("function on data table"); }
}

obj2.prop3();//output our console.log
console.log(obj2.prop1);//output: change

//Add new data 
obj.prop4 = 1234;
obj["prop5"] = "new prop5";
obj.prop6 = () => console.log("prop6 funk");

//output values given by us
console.log(obj.prop4);
console.log(obj["prop5"]);
obj.prop6();