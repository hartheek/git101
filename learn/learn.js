setTimeout(()=>{
    console.log("hello");
},2000);
setTimeout(()=>{
    console.log("hello");
},1000);
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");
console.log("hellooooooo");

// callback

let a= (b)=>{
    b();
    console.log("hello one");
    b();
}
let b= ()=>{
    console.log("hello two");
}
a(b);
