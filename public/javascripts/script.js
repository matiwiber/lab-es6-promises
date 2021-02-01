// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
//A callback is a function passed as an argument..
// ..to another function
//starts from 0 to 7(enjoy)
// addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 // const steakImg = document.createElement("img");
//                 // steakImg.src = "public/images/steak.jpg";
//                 // document.getElementById("table").appendChild(steakImg);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // Iteration 2 using `.then()`
// //you can see the difference between the 1st & `.then()`
// addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//   // ... your code here
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "mashPotatoes").then(() => {
//           // const potatoeImg = document.createElement("img");
//           // potatoeImg.src = "public/images/mashPotatoes.jpg";
//           // document.getElementById("table").appendChild(potatoeImg);
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await

async function makeFood(steps, id, picname) {
  // ... your code here
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], id);
  }
  const divImg = document.createElement("div");
  divImg.innerHTML = `<img src=\"./public/images/${picname}.jpg\"></img>`;
  document.getElementById("table").appendChild(divImg);
}

const foodOne = makeFood(mashPotatoes, "#mashPotatoes", "mashPotatoes");
const foodTwo = makeFood(brusselSprouts, "#brusselSprouts", "brusselSprouts");
const foodThree = makeFood(steak, "#steak", "steak");

Promise.all([foodOne, foodTwo, foodThree]).then(() => {
  const buttonEnd = document.createElement("button");
  buttonEnd.textContent = "Dinner is served.";
  document.querySelector("body").appendChild(buttonEnd);
  const audioFinal = "public/media/dinnerIsServed.mp3";
  const playSound = (url) => new Audio(url).play(audioFinal);
  // buttonEnd.addEventListener("click", playSound);
  // playSound(audioFinal);
});
