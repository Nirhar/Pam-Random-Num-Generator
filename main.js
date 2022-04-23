const express = require('express');

console.log("Hello World\n");

while(1){
    setInterval(function(){   
        console.log("Rolling the Dice: "+Math.floor((Math.random()*6)+1)); 
    
     }, 2000);
}