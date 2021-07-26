


function cal()
{
    //var students = [['David', 80], ['Vinoth', 77], ['Divya', 58], ['Ishitha', 65], ['Thomas', 38],['Hema', 98]['Balu', 48]['Iris', 28]['Agnes', 68]];
    //var marks = 0;
    const marks = parseInt(prompt("Enter marks obtained: "));
    var givenMarks=document.getElementById("grade");

//for (var i=0; i < students.length; i++) {
       // marks= students[i][1];
      
//}

//console.log("Average grade: " + (Avgmarks)/students.length);

        if (marks >= 90&& marks<=100){
          //console.log("Grade : A+"); 

          givenMarks.innerHTML   
    += "Grade : A+";
       
          } 
        else if (marks >= 80&& marks<=90) {
                //console.log("Grade : A"); 
                givenMarks.innerHTML   
                += "Grade : A";
                  } 
        else if (marks >= 70&& marks<=80)
             {
                console.log("Grade : B+");
                givenMarks.innerHTML   
                += "Grade : B+";  
        } 
        else if  (marks >= 60&& marks<=70) {
                //console.log("Grade : B"); 
                givenMarks.innerHTML   
                += "Grade : B"; 
        } 
        else if (marks >= 50&& marks<=60) {
                console.log("Grade : C+"); 
                givenMarks.innerHTML   
                += "Grade : C+"; 
        }
        else if (marks >= 40&& marks<=50) {
                  console.log("Grade : C"); 
                  givenMarks.innerHTML   
                  += "Grade : C   "; 
                  }  
        else if (marks >= 30&& marks<=40) {
                console.log("Grade : E+"); 
                givenMarks.innerHTML   
                += "Grade : E+"; 
                 }
        else {
               console.log("Grade : F"); 
               givenMarks.innerHTML   
               += "Grade : F"; 
}
}
