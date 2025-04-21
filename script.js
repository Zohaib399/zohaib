const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');


const targetDate =new Date(" September 08 2026 00:00:00").getTime();


function timer(){
    const currentTime = new Date().getTime();
    const distance=targetDate-currentTime; 

    const daiys = Math.floor(distance /1000/60/60/24);
    const hours = Math.floor(distance /1000/60/60)%24;
    const minutes = Math.floor(distance /1000/60)%60;
    const seconds = Math.floor(distance /1000)%60;


    Days.innerHTML=daiys;
    Hours.innerHTML=hours;
   Minutes.innerHTML=minutes;
   Seconds.innerHTML=seconds;
}
setInterval(timer, 1000);