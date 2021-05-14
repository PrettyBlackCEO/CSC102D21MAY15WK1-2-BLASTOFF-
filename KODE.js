//UATSpace Page
//Written By: Keila Snyder
//KeiSnyde@Uat.edu
//14May2021

//WK1-2 Countdown Timer Should run 10....1 then print Blastoff!
function startCountdown() { //Countdown function that will print the countdown to INDEX.html
    var Kount = 10; //Completes the command and sets the variable 

    document.getElementById("countdownTimer").innerHTML = Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [10]
    Kount = Kount - 1; // Variable to Decrese count by 1

    setTimeout(function () { // Used to set a delay
        // after 1 second, code will run here
        document.getElementById("countdownTimer").innerHTML = Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [9]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 1000); // tells the program to wait for 1 second

    setTimeout(function(){
        // after 2 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML = Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [8]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 2000) // tells the program to wait for 2 seconds

    setTimeout(function(){
        //after 3 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [7]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 3000) // tells the program to wait for 3 seconds

    setTimeout(function(){
        //after 4 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [6]]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 4000) // tells the program to wait for 4 seconds

    setTimeout(function(){
        //after 5 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [5] 
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 5000) // tells the program to wait for 5 seconds

    setTimeout(function(){
        //after 6 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [4] 
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 6000) // tells the program to wait for 6 seconds

    setTimeout(function(){
        //after 7 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [3]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 7000) // tells the program to wait for 7 seconds

    setTimeout(function(){
        //after 8 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [2] 
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 8000) // tells the program to wait for 8 seconds

    setTimeout(function(){
        //after 9 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML =Kount; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the Kount variable [1]
        Kount = Kount - 1; //Variable to Decrease count by 1
    }, 9000) // tells program to wait for 9 seconds

    setTimeout(function(){
        //after 10 seconds, code will run here
        document.getElementById("countdownTimer").innerHTML ="BLASTOFF!"; //Connects the pages so that the ID from index is printed which is the starting of the Countdown Timer which is connected to the "BLASTOFF" String
    }, 10000) // tells program to wait for 10 seconds


} 
//All previous code completed 14May2021 unless notated otherwise
 