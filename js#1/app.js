// ორი პარამეტრის შედარება
const comp = (a,b) => {
    if(a === b) {
        console.log("ტოლია")
    } else {
        console.log("არ არის ტოლი")
    }
}


// ფარენგეიტი ცელსიუსში 
const farToCel = (far) => {
    if (typeof far != "number") {
        return false
    } else {
        let cel = (far - 32) * 5/9
        return cel
    }
}


// calc
const calc = (a, b, operation) => {
    if(typeof a != "number" || typeof b != "number"){
        return false
    } else if (operation === "+") {
       return a + b
    } else if ( operation === "-"){
        return  a - b
    } else if ( operation === "*"){
        return a * b
    } else if (operation === "/") {
        return  a / b
    } else return false
}




