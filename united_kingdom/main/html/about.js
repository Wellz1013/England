const nothing_1 = document.getElementById('nothing_1');
const nothing_2 = document.getElementById('nothing_2');
const nothing_3 = document.getElementById('nothing_3');


nothing_1.addEventListener("click", someOne);

function someOne(){
    nothing_1.className = "something";
    nothing_2.className = "write";
    nothing_3.className = "write";
}

nothing_2.addEventListener("click", someTwo);

function someTwo(){
    nothing_1.className = "write";
    nothing_2.className = "something";
    nothing_3.className = "write";
}

nothing_3.addEventListener("click", someThree);

function someThree(){
    nothing_1.className = "write";
    nothing_2.className = "write";
    nothing_3.className = "something";
}

function notAnything(){
    nothing_1.className = "write";
    nothing_2.className = "write";
    nothing_3.className = "write";
}

function clock(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = hourIt(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    let hour5 = hours+5;
    hour5 = hourIt(hour5);
    let amPm = ["AM", "PM"];
    let timed = document.getElementById('timeIt');
    let timedE = document.getElementById('timeItE');
    timed.innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm[amOrPm()];
    timedE.innerHTML = "In England: " + hour5 + " : " + minutes + " : " + seconds + " " + amPm[amOrPm2()];
    setTimeout(clock, 500);
}

function hourIt(a){
    if (a > 12){
        a -= 12;
        return a;
    }
    else if(a == 0){
        a = 12;
        return a;
    }
    
    else {
        return a;
    }
}

function addZero(b){
    if (b < 10){
        b = "0" + b;
        return b;
    }
    else {
        b = b;
        return b;
    }
}

function addMillZ(c){
    c = "00" + c;
    return c;
}

function amOrPm(){
    const tod = new Date();
    const hou = tod.getHours();
    if (hou > 12){
        return 1;
    }
    else {
        return 0;
    }
}

function amOrPm2(){
    const tod = new Date();
    const hou = tod.getHours() + 5 ;
    if (hou >= 12){
        return 1;
    }
    else {
        return 0;
    }
}

