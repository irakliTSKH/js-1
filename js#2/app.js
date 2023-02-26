
const users = [{name: "Temo", age: 29},
              {name: "Lasha", age: 21},
              {name: "Ana", age: 27}]



///////////////// დავალება #1 პირველი ხერხი  

// minAgeName = (users) => {
//     let min = users[0].age
//     let minUser = users[0].name
//     for (let user of users){
//         if(user.age < min){
//             min = user.age
//             minUser = user.name
//         }
//     }
//   return minUser
// }
//    console.log(minAgeName(users))




///////////// დავალება #1 მეორე ხერხი

// minName = () => {
//     const minAge = Math.min(...users.map(user => user.age));
//     for(let user of users){
//         if(user.age == minAge){
//             return user.name
//         }
//     }
// }
// console.log(minName(users))


//////////// დავალება #2 

// function creatNewObj(obj) {
//     const newObj = {};
//     for (let key in obj) {
//          newObj[key] = obj[key];
//     }
//       return newObj;
//     }
//     console.log(creatNewObj(obj1))



//////// დავალება #3 კამათლის გაგორება

// const getRandom = () =>  Math.floor(Math.random()*6 + 1)
// let rand1 = getRandom()
// let rand2 = getRandom()

// const player1 = () => {
//     let index1 = 1
//     while(rand1 !== 3){
//         rand1 = getRandom()
//         index1++
//      }
//     return index1
//     }

// const player2 = () => {
//     let index2 = 1
//     while(rand2 !== 3){
//         rand2 = getRandom()
//         index2++
//      }
//      return index2
//     }

//    const game = () => {
//     const playerIndex1 = player1()
//     const playerIndex2 = player2()
//     if (playerIndex1 > playerIndex2){
//         console.log("And the Oscar Goes To Player1")
//     } else if (playerIndex1 < playerIndex2){
//         console.log("And the Oscar Goes To player2")
//     } else {
//         console.log("And the Oscar Goes To Leonardo DiCaprio :))")
//     }
//    }

//    game()

