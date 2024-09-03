// let myarr = [55,7,17,8,9];
// let sorted = myarr.sort((a,b)=>{return b-a});
// console.log(sorted);

console.log("Starting");

function callMe(cb){
    setTimeout(()=>{
        cb("Inside CalleMe");
        // return "Inside callMe";
    },3000);
}
callMe((data)=>{
    console.log(data);
});

console.log("Ending");
