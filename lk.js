window.onload=function(){
    const menu=document.querySelector('.bar');
    const mob=document.querySelector('.mnav');
    menu.addEventListener('click',function(){
    menu.classList.toggle('active');
    mob.classList.toggle('active');

    })
}