
// fix navbar to top on scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            console.log('tetso');
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
    })

    //toggle navbar on small screens
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        console.log('harley');
    });
});