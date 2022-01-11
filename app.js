const sec_pro = document.querySelector('.second_proggress');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const min_pro = document.querySelector('.munite circle');
const hour = document.querySelector('.hour');

setInterval(()=>{
    let today = new Date();
    let secpro = (today.getSeconds() * 3.1);
    sec_pro.style.strokeDashoffset = (186-secpro);
    sec.innerHTML = (today.getSeconds() < 10) ? '0'+today.getSeconds() : today.getSeconds() ;
    min.innerHTML = (today.getMinutes() < 10) ? '0'+today.getMinutes() : today.getMinutes() ;
    hour.innerHTML = (today.getHours < 10) ? '0'+today.getHours() : today.getHours() ;

    if( ((today.getSeconds()) != 0) ){
        min_pro.style.cssText = `
            animation: secanim 61s linear infinite;
            `;
    }else{
        min_pro.style.animation = '';
    }

},1000);


