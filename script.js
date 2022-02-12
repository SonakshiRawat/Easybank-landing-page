'use strict';
const ham=document.querySelector('.ham');
const navy=document.querySelector('.navy');
const main=document.querySelector('main');
const one=document.querySelector('.section1');
const body=document.querySelector('body');
const close=document.querySelector('.close');

ham.addEventListener('click',function(e){
    e.preventDefault();
    navy.classList.remove('hidden');
    main.classList.add('overlay');
    body.style.overflow='hidden'
    ham.classList.add('hidden')
    close.style.display="block";
    // if(!navy.classList.contains('hidden'))
    one.style.backgroundImage = 'linear-gradient(180deg , black, white)';
    console.log(navy.classList);
    console.log(main.classList);
    console.log("oooo");
})

close.addEventListener('click',function(e){
    e.preventDefault();
    navy.classList.add('hidden');
    main.classList.remove('overlay');
    body.style.overflow='scroll'
    ham.classList.remove('hidden')
    close.style.display="none";
    // if(!navy.classList.contains('hidden'))
    one.style.backgroundImage = 'none';
    console.log(navy.classList);
    console.log(main.classList);
    console.log("oooo");
})

