$('.section_5').ready(function (){
    var owl = $("#slide",this);
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin: 0,
        responsiveClass:false,
        items:1,
        dots: false
    });
    $(".btn-prev").click(function (){
        owl.trigger('prev.owl.carousel');
    });
    $(".btn-next").click(function (){
        owl.trigger('next.owl.carousel');
    });



    //overload
    $(".header_mobile").click(function (){
        $(".overload").show();
        $(".header_mobile-menu").addClass("show-menu");
        $(".header_mobile-menu").removeClass("hide");
        $(".header_mobile-menu").removeClass("hide-menu");
    });
    $(".overload").click(function (){
        $(".overload").hide();
        $(".header_mobile-menu").addClass("hide-menu");
        $(".header_mobile-menu").addClass("hide");
        $(".header_mobile-menu").removeClass("show-menu");
    });
    $(".close").click(function (){
        $(".overload").hide();
        $(".header_mobile-menu").addClass("hide-menu");
        $(".header_mobile-menu").addClass("hide");
        $(".header_mobile-menu").removeClass("show-menu");
    });

});