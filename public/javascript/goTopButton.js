window.onscroll = function (){
    if (document.documentElement.scrollTop > 100){
        document.querySelector('.go__top--container').classList.add('.show__button');
    } else {
        document.querySelector('.go__top--container').classList.remove('.show__button');
    }
}