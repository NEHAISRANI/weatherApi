const fs=require("fs")
new_data=[]
let raw_data=fs.readFileSync("read.json");
var student_list=JSON.parse(raw_data);
student_list.push(new_data)
console.log(student_list);
