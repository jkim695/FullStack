// Console is mapped to terminal
// typescript is a superset of javascript

function calcWakeUpTimes() {
    const fallAsleepTime = new Date();
    fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
    const config = {
        timeStyle:"short"
    };
    console.log("You will fall asleep at ", fallAsleepTime.toLocaleTimeString("en-US", config));
    
    const wakeUpTime = new Date(fallAsleepTime);
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 19);
    const wakeUpTimes = []
    
    console.log("Wake up at: ", wakeUpTime.toLocaleTimeString("en-US", config));
    
    for (let i = 1; i <= 6; i++) {
        wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
        const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", config);
        wakeUpTimes.push(wakeUpTimeString);
    }
    console.log(`Wake up times are`, wakeUpTimes);    
}

const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;
