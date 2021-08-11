
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

    //toggle navbar dropdown on small screens
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Animation
    var typed = new Typed(".typing", {
        strings: [
        "an <span class='typed-color'> Electronic Engineer</span>",
        "a <span class='typed-color'> Programmer</span>", 
        "a <span class='typed-color'> Web Developer</span>", 
        "a <span class='typed-color'> Gamer</span>", 
        "an <span class='typed-color'> Absolute Legend!</span>^1000"],
        typeSpeed: 40, 
        backSpeed: 60, 
        loop: true,
    })
});