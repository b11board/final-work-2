let bold = document.querySelector('.form-check-input1')
let italic = document.querySelector('.form-check-input2')
let underline = document.querySelector('.form-check-input3')
let strike = document.querySelector('.form-check-input4')
let leftside = document.querySelector('.form-check-input5')
let center = document.querySelector('.form-check-input6')
let rightside = document.querySelector('.form-check-input7')
let text = document.querySelector('.text')
let nav = document.getElementsByTagName('nav')
let check = true;
let arial = document.querySelector('.f1')
let georgia = document.querySelector('.f2')
let impact = document.querySelector('.f3')
let times = document.querySelector('.f4')
let verdana = document.querySelector('.f5')
let s12 = document.querySelector('.s1')
let s14 = document.querySelector('.s2')
let s16 = document.querySelector('.s3')
let s18 = document.querySelector('.s4')
let s20 = document.querySelector('.s5')
let s22 = document.querySelector('.s6')
let s25 = document.querySelector('.s7')
let s30 = document.querySelector('.s8')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let aquamarine = document.querySelector('.aquamarine')
let purple = document.querySelector('.purple')
let khaki = document.querySelector('.khaki')
let crimson = document.querySelector('.crimson')
let coral = document.querySelector('.coral')
let deepskyblue = document.querySelector('.deepskyblue')
bold.addEventListener('click',function(){
    if(check){ 
        text.style.fontWeight = 'bold';
        check = false

    }
    else{
        text.style.fontWeight = 'normal';
        check = true
    }
})
let check2 = true;
italic.addEventListener('click',function(){
    if(check2){ 
        text.style.fontStyle = 'italic';
        check2 = false

    }
    else{
        text.style.fontStyle = 'normal';
        check2 = true
    }
})
let check3 = true;
underline.addEventListener('click',function(){
    if(check3){ 
        text.style.textDecoration = 'underline';
        check3 = false

    }
    else{
        text.style.textDecoration = 'none';
        check3 = true
    }
})
let check4 = true;
strike.addEventListener('click',function(){
    if(check4){ 
        text.style.textDecoration = 'line-through';
        check4 = false

    }
    else{
        text.style.textDecoration = 'none';
        check4 = true
    }
})
let check5 = true;
leftside.addEventListener('click',function(){
    if(check5){ 
        text.style.textAlign = 'left';
        check5 = false

    }
    else{
        text.style.textAlign = 'none';
        check5 = true
    }
})
let check6 = true;
center.addEventListener('click',function(){
    if(check6){ 
        text.style.textAlign = 'center';
        check6 = false

    }
    else{
        text.style.textAlign = 'none';
        check6 = true
    }
})
let check7 = true;
rightside.addEventListener('click',function(){
    if(check7){ 
        text.style.textAlign = 'right';
        check7 = false

    }
    else{
        text.style.textAlign = 'none';
        check7 = true
    }
})
arial.addEventListener('click', function () {
    text.classList.add('f1')
})
georgia.addEventListener('click', function () {
    text.classList.add('f2')
})
impact.addEventListener('click', function () {
    text.classList.add('f3')
})
times.addEventListener('click', function () {
    text.classList.add('f4')
})
verdana.addEventListener('click', function () {
    text.classList.add('f5')
})

s12.addEventListener('click', function () {
    text.classList.add('s1')
})
s14.addEventListener('click', function () {
    text.classList.add('s2')
})
s16.addEventListener('click', function () {
    text.classList.add('s3')
})
s18.addEventListener('click', function () {
    text.classList.add('s4')
})
s20.addEventListener('click', function () {
    text.classList.add('s5')
})
s22.addEventListener('click', function () {
    text.classList.add('s6')
})
s25.addEventListener('click', function () {
    text.classList.add('s7')
})
s30.addEventListener('click', function () {
    text.classList.add('s8')
})

red.addEventListener('click', function () {
    text.style.color = 'red';
})
green.addEventListener('click', function () {
    text.style.color = 'green';
})
blue.addEventListener('click', function () {
    text.style.color = 'blue';
})
aquamarine.addEventListener('click', function () {
    text.style.color = 'aquamarine';
})
crimson.addEventListener('click', function () {
    text.style.color = 'crimson';
})
purple.addEventListener('click', function () {
    text.style.color = 'purple';
})
khaki.addEventListener('click', function () {
    text.style.color = 'khaki';
})
coral.addEventListener('click', function () {
    text.style.color = 'coral';
})
deepskyblue.addEventListener('click', function () {
    text.style.color = 'deepskyblue';
})

let login = document.querySelector('.log')
let password = document.querySelector('.pass')
let send = document.querySelector('.button1')
let modal = document.querySelector('.fade1')
let span = document.querySelector('.span')
let par1 = document.querySelector('.par1')
let par2 = document.querySelector('.par2')
send.addEventListener('click', function () {
    if (login.value == 'bi11board', password.value == 'bi11board') {
        send.disabled = false;
        modal.style.display = 'none'
        send.setAttribute('data-dismiss', 'modal')
    }
    else {
       par1.style.display = 'inline-block',
       par2.style.display = 'inline-block'
    }

})