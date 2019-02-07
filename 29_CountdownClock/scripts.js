
let countdown;


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) /1000); // run date.now again to get current time, divide by 1k to get seconds
        // check if we need to stop running
        /*
        if (secondsLeft <= 0) {
            return;
        } */   /// this doesn't stop even from running, it just returns nothing      

        // can't be <= 0, otherwise will still give -1 seconds
        if (secondsLeft < 0) {        
            clearInterval(countdown);
            return;
        }
        console.log(secondsLeft);
    }, 1000);
}

