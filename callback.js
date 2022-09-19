// **** AJax (asynchronous javascript xml)

//********   know more about ( xml vs Json )

// ******* Synchronous code example
// where it gone wrong

// console.log("start");

// function loginUser(email,password){
//     setTimeout(() => {
//         console.log("now we have the data");
//         return {userEmail: email};
//     }, 5000);
// }

// const user = loginUser('alok60541@gmail.com', 123456);
// console.log(user);  // this not print the data because till now timehas not completed


// console.log("finish");



// ***** after modified  ***
console.log("start");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("now we have the data");
        callback({userEmail: email});
    }, 2000);
}

// function getUserVideos(email){
//     setTimeout(() =>{
//         callback(["video1","video2", "video3"]);
//     },2000);
// }

// function videoDetails(video){
//     setTimeout(() =>{
//         callback("title of the video");
//     },2000);
// }
const user = loginUser('alok60541@gmail.com', 123456, user =>{
    console.log(user);
});

console.log("finish");


// function loginUser(email,password){
//     setTimeout(() => {
//         console.log("now we have the data");
//         return {userEmail: email};
//     }, 3000);
// }