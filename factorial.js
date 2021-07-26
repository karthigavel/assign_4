

// take input from the user

function factorial(){
    const number = parseInt(prompt("Enter a positive number: "));
    var givenNum=document.getElementById("factorial")
    
// checking if number is negative
if (number < 0) {
    //console.log('Error! Factorial for negative number does not exist.');
    givenNum.innerHTML   
    += "Error! Factorial for negative number does not exist.."
}

// if number is 0
else if (number === 0) {
    //console.log(`The factorial of ${number} is 1.`);
    givenNum.innerHTML   
    += "1 is neither prime nor composite numbeThe factorial of given number is 1."
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    //console.log(`The factorial of ${number} is ${fact}.`);
    givenNum.innerHTML   
    +=`The factorial of ${number} is ${fact}.`
}
}