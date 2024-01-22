const hours = document.getElementById('hours');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

setInterval(()=>{

    const currentTime = new Date();
    
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)


