// program to check if a number is prime or not

// take input from the user>
//

//const number = parseInt(prompt("Enter a positive number: "));
//let isPrime = true;
//var givenNum=document.getElementById("prime").innerHTML

function checkPrime()
{
    const number = parseInt(prompt("Enter a positive number: "));
    var givenNum=document.getElementById("prime")
    let isPrime = true;

if (number === 1) {
   
    givenNum.innerHTML   
    += "1 is neither prime nor composite number."
   // result= alert("1 is neither prime nor composite number.")

}


else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
      
        givenNum.innerHTML   
        += "The given number is a  prime number."
    givenNum.innerHTML=result
    } else {
       
        givenNum.innerHTML   
        += "The given number  is a not prime number."
    }
}

// check if number is less than 1
else {
   
    givenNum.innerHTML   
    += "The given number  is a not prime number ,Number should be greater than one."

}
}