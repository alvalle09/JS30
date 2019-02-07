
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(() => {
        const secondsLeft = (then - Date.now()) /1000; // run date.now again to get current time, divide by 1k to get seconds
        console.log(secondsLeft);
    }, 1000);
}

