// Write a JavaScript program to print all the numbers divisble by 3 present in an array
 var num_array = [57,21,25,18,81,90,50,99,150];
 console.log("The numbers divisble by 3 are:");
 for (var i of num_array) {
    if (i%3==0) {
        console.log(i);
    }
 }