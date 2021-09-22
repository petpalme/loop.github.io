
function countdown() {
    var currTime = 10;
    // sets up the code to start at 10. 
    for (var i = 1; i < 12; i++) {

        // the function code that sets up a loop count down from 10 to 0 
        setTimeout(function () {
            document.getElementById("countdown").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
            if (currTime == -1)
            {document.getElementById("countdown").innerHTML = "blastoff";}
        }, 1000 * i);
            
    }
    
}
