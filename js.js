//setting up variables
var day = document.getElementById("currentDay");
var nine = document.getElementById("9entry");
var ten = document.getElementById("10entry");
var eleven = document.getElementById("11entry");
var twelve = document.getElementById("12entry");
var one = document.getElementById("1entry");
var two = document.getElementById("2entry");
var three = document.getElementById("3entry");
var four = document.getElementById("4entry");
var five = document.getElementById("5entry");
var six = document.getElementById("6entry");
var seven = document.getElementById("7entry");

// The current date to be displayed under page title
var currentDay = moment().format("MMM Do, YYYY");
day.innerText = currentDay;

// finding the current hour of the day
var whattimeisit = moment().format("H");
console.log(whattimeisit);
var hourNow = parseInt(whattimeisit);
console.log(hourNow);

// loading in previously stored list items when page is loaded or refreshed
function entries(){
    //9
    var entrynine = localStorage.getItem("9entry");
    nine.innerText = entrynine;
    //10
    var entryten = localStorage.getItem("10entry");
    ten.innerText = entryten;
    //11
    var entryeleven = localStorage.getItem("11entry");
    eleven.innerText = entryeleven;
    //12
    var entrytwelve = localStorage.getItem("12entry");
    twelve.innerText = entrytwelve;
    //1
    var entryone = localStorage.getItem("1entry");
    one.innerText = entryone;
    //2
    var entrytwo = localStorage.getItem("2entry");
    two.innerText = entrytwo;
    //3
    var entrythree = localStorage.getItem("3entry");
    three.innerText = entrythree;
    //4
    var entryfour = localStorage.getItem("4entry");
    four.innerText = entryfour;
    //5
    var entryfive = localStorage.getItem("5entry");
    five.innerText = entryfive;
    //6
    var entrysix = localStorage.getItem("6entry");
    six.innerText = entrysix;
    //7
    var entryseven = localStorage.getItem("7entry");
    seven.innerText = entryseven;
}

// saving an entry to local storage on button click
function    save9(){
    var entrynine = nine.value;
    localStorage.setItem("9entry", entrynine);
}
function    save10(){
    var entryten = ten.value;
    localStorage.setItem("10entry", entryten);
}
function    save11(){
    var entryeleven = eleven.value;
    localStorage.setItem("11entry", entryeleven);
}
function    save12(){
    var entrytwelve = twelve.value;
    localStorage.setItem("12entry", entrytwelve);
}
function    save1(){
    var entryone = one.value;
    localStorage.setItem("1entry", entryone);
}
function    save2(){
    var entrytwo = two.value;
    localStorage.setItem("2entry", entrytwo);
}
function    save3(){
    var entrythree = three.value;
    localStorage.setItem("3entry", entrythree);
}
function    save4(){
    var entryfour = four.value;
    localStorage.setItem("4entry", entryfour);
}
function    save5(){
    var entryfive = five.value;
    localStorage.setItem("5entry", entryfive);
}
function    save6(){
    var entrysix = six.value;
    localStorage.setItem("6entry", entrysix);
}
function    save7(){
    var entryseven = seven.value;
    localStorage.setItem("7entry", entryseven);
}


// setting the background colors for the text boxes based on time of day
textbackground();
function textbackground(){
    //9
    if (hourNow > 9){
        nine.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 9){
        nine.setAttribute("class", "col-10 present");
    } 
    else {
        nine.setAttribute("class","col-10 future");
    }
    //10
    if (hourNow > 10){
        ten.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 10){
        ten.setAttribute("class", "col-10 present");
    } 
    else {
        ten.setAttribute("class","col-10 future");
    }
    //11
    if (hourNow > 11){
        eleven.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 11){
        eleven.setAttribute("class", "col-10 present");
    } 
    else {
        eleven.setAttribute("class","col-10 future");
    }
    //12
    if (hourNow > 12){
        twelve.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 12){
        twelve.setAttribute("class", "col-10 present");
    } 
    else {
        twelve.setAttribute("class","col-10 future");
    }
    //1
    if (hourNow > 13){
        one.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 13){
        one.setAttribute("class", "col-10 present");
    } 
    else {
        one.setAttribute("class","col-10 future");
    }
    //2
    if (hourNow > 14){
        two.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 14){
        two.setAttribute("class", "col-10 present");
    } 
    else {
        two.setAttribute("class","col-10 future");
    }
    //3
    if (hourNow > 15){
        three.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 15){
        three.setAttribute("class", "col-10 present");
    } 
    else {
        three.setAttribute("class","col-10 future");
    }
    //4
    if (hourNow > 16){
        four.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 16){
        four.setAttribute("class", "col-10 present");
    } 
    else {
        four.setAttribute("class","col-10 future");
    }
    //5
    if (hourNow > 17){
        five.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 17){
        five.setAttribute("class", "col-10 present");
    } 
    else {
        five.setAttribute("class","col-10 future");
    }
    //6
    if (hourNow > 18){
        six.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 18){
        six.setAttribute("class", "col-10 present");
    } 
    else {
        six.setAttribute("class","col-10 future");
    }
    //7
    if (hourNow > 19){
        seven.setAttribute("class", "col-10 past")
    } 
    else if (hourNow == 19){
        seven.setAttribute("class", "col-10 present");
    } 
    else {
        seven.setAttribute("class","col-10 future");
    }
}

