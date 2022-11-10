// 1. ways to print in javascript
console.log("hello world");
// alert("me");
document.write("theis is document");

// 2. javascript console api
console.log("hello world", 5 + 6, "Another log");
console.warn("this is warning"); // It is use to show the worning.
console.error("this is error");

// 3. javascript variables
// what are variables? - Container to store data values
var number1 = 34;
var number2 = 55;
console.log(number1 + number2);

// 4. data types in javascript
var str1 = "this is a string";
var str1 = "this is also a string";

//Objects
var marks = {
    ravi: 32,
    shubham: 33,
    ram: 53

}
console.log(marks);

// booleans
var a = true;
var b = false;
console.log(a, b);

// At a very high level, there are two types of data types in javascript
// 1.primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: arrays and objects

var arr = [1, 2, 3, 4];
console.log(arr);

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6);
console.log(c);


var arr = [3, 4, 45, 6, 43, 4, 4, 6, 7, 8];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;

    }
    console.log(arr[i]);
}

// easy to itterate in javascript through foreach function
arr.forEach(function (element) {
    console.log(element);
})

// let is a temporary variable in a block.
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

do{
    console.log(arr[j]);
    j++;

}while(j<arr.length);

let myarr = ["fan", "camera", 34, null, true];
// Arrays method
console.log(myarr.length);
myarr.pop();  // pop is use to delete the value from last array.
myarr.push();  // push is use to add the value from last arry.
myarr.shift();  // shift is use to delete the value from the starting array.
myarr.unshift();  // unshift is use to add the value from the starting array. 

myarr.pop();
console.log(myarr);

myarr.push("rahul");
console.log(myarr);

myarr.shift();
console.log(myarr);

myarr.unshift(555);
console.log(myarr);

const newlen=myarr.unshift("hello")
console.log(newlen);

// string method in jvascript
let mylovelystring = "Saurabh is a good good boy";
console.log(mylovelystring.length);
console.log(mylovelystring.indexOf("good")); 
console.log(mylovelystring.lastIndexOf("good")); // it show the index of  last  dublicat  word   

console.log(mylovelystring.slice(1,3)); // for slising the element

d=mylovelystring.replace("Saurabh","Pankaj");
console.log(d,mylovelystring);

// formation of date
let mydate= new Date();
// console.log(mydate.getTime()); // it show in second
// console.log(mydate.getFullYear()); // it show only year
// console.log(mydate.getDay()); // it show no of days like sunday is in 0
// console.log(mydate.getMinutes()); //it show only minutes
// console.log(mydate.getHours()); // it show only hour
// console.log(mydate);

// DOM Manipulation
let elem=document.getElementById('click');
//  console.log(elem);

 let elemclass= document.getElementsByClassName('container'); // short form of getelemebtbyidname => gebcn
//  console.log(elemclass)
//  elemclass[0].style.background= "yellow";
 elemclass[0].classList.add("bg-primary") // to add color in the containter
 elemclass[0].classList.add("text-success")
 elemclass[0].classList.remove("text-success") // it is use to remove the text-success class / it is use in the console
elemclass[0].innerHTML  // it is use to show all containt of html of this container
elemclass[0].innertext  // it is use to show all  text of a containter

// console.log(elem.innerHTML); // it is also use to show inner html
// console.log(elem.innertext); // it is also use to show inner text

tn=document.getElementsByTagName('div') // it is use to show the tag name of html
console.log(tn)

rajaram = document.createElement('p'); // it is use to add a paragraph.
rajaram.innertext= "this is a created elelment pera";
tn[0].appendChild(rajaram); // it is use to add a element.

rajaram2 = document.createElement('b');
rajaram2.innertext ="This is a created bold";
tn[0].replaceChild(rajaram2,rajaram); // this is use to replace the document.

// removechild(element); -----> removes an element

document.location // to show the location of document.
document.title  //to show the title of document.
document.url  // to show the url of document.
document.scripts // to show all script.
document.link  // show the link
document.images
document.domain // to show domain

// Selecting using query
sel = document.querySelector('.container') // to show one container
console.log(sel)
sel = document.querySelectorAll('.container') // to show all container
console.log(sel)

function clicked(){
    console.log('the button was clicked')
}

window.onload =function(){
    console.log('The document was loaded') // it is use to add or load document 
}
// Event in javascript
let prevHtml= document.querySelectorAll('.container')[1].innerHTML;

firstcotainer.addEventListener('click',function(){  // it is use to set the function of click
    document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>" // it show when we click on container.
console.log("click hua")
})
firstcotainer.addEventListener('mouseover',function(){ // it is use to show the cursor or mouse on container or div.  
    console.log("mouse on container")
    })
firstcotainer.addEventListener('mouseout',function(){  //it show the mouse or cursor go the out of container
    console.log("Mouse out of container");
    })
firstcotainer.addEventListener('mouseup',function(){ // it show when we release the mouse click.
console.log("mouse up when clicked on container")
})    
firstcotainer.addEventListener('mousedown',function(){  // it show when we click the mouse.
console.log("Mouse down when clicked on container")
})


console.log("Rajaram");