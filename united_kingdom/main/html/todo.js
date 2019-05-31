const sect = document.getElementById('sect');
const sect_2 = document.getElementById('sect_2');
const sect_3 = document.getElementById('sect_3');

sect.style.display = "block";
sect_2.style.display = "block";
sect_3.style.display = "none";

var p_1 = "Take you and your partner on a high end adventure while you connect with your mind and body. While indulging in a magnificant veiw of the city of London. Besides who wouldn't wanna tell their friends that they did yoga on top of the Shard.";

var p_2 = "The London Eye is the perfect romantic part of your London adventure with you and your partner. Perfect view of the Eiffel Tower. Tourists also say that the view is also even better during the night and watching the stars and lights.";

var p_3 = "There's no since in coming to london if you haven't come here. These stone structures has rich historical value. Here you can also get to learn the history of the ancient people who created this and see there skeletons";

var theText = [p_1, p_2, p_3];

var text_it = document.getElementById('text_it');

var p_1 = document.getElementById('p_1');

p_1.addEventListener("click", para);

function para(){
    var textIt = document.getElementById('textIt');
    textIt.innerHTML = theText[0];
    document.getElementById('pic_1').className = "hid";
    document.getElementById('pic_2').className = "hide";
    document.getElementById('pic_3').className = "hide";
}

var p_2 = document.getElementById('p_2');

p_2.addEventListener("click", para2);

function para2(){
    var textIt = document.getElementById('textIt');
    textIt.innerHTML = theText[1];
    document.getElementById('pic_1').className = "hide";
    document.getElementById('pic_2').className = "hid";
    document.getElementById('pic_3').className = "hide";
}

var p_3 = document.getElementById('p_3');

p_3.addEventListener("click", para3);

function para3(){
    var textIt = document.getElementById('textIt');
    textIt.innerHTML = theText[2];
    document.getElementById('pic_1').className = "hide";
    document.getElementById('pic_2').className = "hide";
    document.getElementById('pic_3').className = "hid";
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

