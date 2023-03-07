

// დავალება #1 (ფუნქცია პარამეტრად მიიღებს N ცალ რიცხვს)

// const myFunc = (num1, num2, ...args) => {
//     const item1 = num1 + num2;
//     const item2 = args.reduce((previouse, current) => previouse *= current, 1);
//     const arr = [item1, item2];
//     return arr;
// }


// დავალება #2 (ობიექტის დესტრუქტურიზაცია)

// const user = {
//     banks:[, , {address:{city: "tbilisi"}}]
//  }
 
 
//  function getCity(user){
//     const {banks:[, , {address:{city = undefined}}]} = user;
//     return city;
//  }
 




// დავალება #3 (ახალი ობიექტის შექმნა)

// const copyObj = (obj) => {
//     let result = {};
//     for(const field in obj){
//         if(typeof obj[field] === "object"){
//             result[field] = copyObj(...obj[field])
//         }  else {
//              result = {...obj};
//         }
//         return result;
//     }
// }       
