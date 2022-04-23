const express = require('express');
// const Math = require('Math');

console.log("Hello World\n");
function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}
while(1){   
    console.log("Rolling the Dice: "+Math.floor((Math.random()*6)+1)); 
    
    wait(2000);
}