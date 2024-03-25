let dtdiv = document.querySelector('#dt');
let dtnow = dtdiv.children[0];
let timenow = dtdiv.children[1];

function myClock(){
    let date = new Date();
    let myday = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let day = date.getDay();
    let hour = date.getHours();
    let minuts = date.getMinutes();
    let second = date.getSeconds();
    let n;

    myday = formatDate(myday);
    month = formatDate(month);
    day = dayofweek(day);

    if(hour == 12){
        n = 'PM';
    }
    else if(hour > 12){
        hour = hour - 12;
        n = 'PM';
    }
    else {
        n = 'AM';
    }

    hour = formatDate(hour);
    // minuts = formatDate(month);
    second = formatDate(second);

    let todayDate = myday+' / '+month+' / '+year+'   -  '+day;
    let nowtime = hour+ " : "+ minuts+ " : "+second+" - "+n;

    dtnow.textContent = todayDate;
    timenow.textContent = nowtime;
}

function dayofweek(day){
    switch(day){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        default:
            day = 'Saturday'
    } 
    return day;
}

function formatDate(value){
    if(value < 10){
        value = '0'+value;
    }
    return value;
}

setInterval(() => {
    myClock();
}, 1000);