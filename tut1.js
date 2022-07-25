const test1=document.querySelector('.circle1');
const test2=document.querySelector('.circle2');
const test3=document.querySelector('.circle3');
const test4=document.querySelector('.circle4');
const card=document.querySelector('.card');
const container=document.querySelector('.container');


container.addEventListener('mouseover',(screen)=>{
    let x=(window.innerWidth/2-screen.pageX)/20;
    let y=(window.innerHeight/2-screen.pageY)/20;
    card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;

    console.log(x,y);

});

container.addEventListener('mouseleave',(screen)=>{
      card.style.transform=`rotateX(0deg) rotateY(0deg)`;


});



test4.addEventListener('click',()=>{
    test4.style.transform=`translateY(350px)`;
    test1.style.transform="rotateY(170deg) translateX(-350px)";
    test2.style.transform="rotateY(183deg) translateX(350px)";
    test3.style.transform="translateY(100px) rotateZ(90deg) translateX(-350px)";
    test4.style.cursor="pointer";
 
});



test4.addEventListener('dblclick',()=>{
    test4.style.transform="";
    test1.style.transform="";
    test2.style.transform="";
    test3.style.transform="";
    test4.style.cursor="";
 
});
