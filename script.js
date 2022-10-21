$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $(".navbar").removeClass("sticky");
        }

    });
    //toggle menu/navbar script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass(active);
        $('.menu-btn i').toggleClass(active);
    });
    // typing animation
    var typed = new typed(".typing",{
        String: ["Software  Engineer","Developer","Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });

});