let slider = document.querySelector('.slider .imageList');
let buttons = document.querySelectorAll('.slider .icon');
let scrollbarListline = document.querySelector('.scrollbar-listline')


buttons.forEach((item) =>{
    item.addEventListener('click',()=>{
        let direction = item.id === "left" ? -1 : 1;
        let scrollAcount = slider.clientWidth * direction;
        slider.scrollBy({left : scrollAcount,behavior :'smooth'})
    })
    
})

function updateScrollbar(){

}