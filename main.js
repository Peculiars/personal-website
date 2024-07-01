document.addEventListener("DOMContentLoaded", ()=>{
    const time = document.querySelector("[data-testid='currentTimeUTC']");

    const currentTime =()=>{
        const now = new Date();
        time.textContent = now.toUTCString();
    }
    currentTime()
    setInterval(currentTime, 1000);



    const currentDay = document.querySelector("[data-testid='currentDay']");

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        currentDay.textContent= days[new Date().getDay()]
})