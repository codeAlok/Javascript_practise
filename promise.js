// ***** Promises


// creation of promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout( () =>{
//         console.log("got the user");
//         // resolve({user: 'alok'});
//         reject(new Error('user does not logged in '));
//     }, 2000);
// });

// promise.then(user =>{
//     console.log(user);
// })
// .catch(err => console.log(err.message));

// ***** other examples  using Promises ******

console.log("start");

function loginUser(email, password){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({userEmail: email});
        },3000);
    });
}

function getUserVideos(email){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(["video1","video2", "video3"]);
        },2000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("title of the video");
        },2000);
    });
}

loginUser("alok", "enterPass")
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));

//********** to show data together through promises ***********
const yt = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve({videos: [1,2,3,4,5]});
    }, 2000);
});

const fb = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("stuff from facebook");
        resolve({ user: "name"});
    },5000);
});

Promise.all([yt,fb])
.then(result => console.log(result));  // both executed at the same time until both data is accessed


// ***** synchronous way of getting data normally *****
// const user = loginUser("alok", "sfldjk");
// const videos = videoDetails(user.email);


// ********** asynchrounus way (ASYNc and await) **********

async function displayUser(){
    //try-catch to handle if data not found
    try{
        const loggedUser = await loginUser("alok", 12345);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch(err){
        console.log("We could not get the data");
    }
}

displayUser();

console.log("Finish");