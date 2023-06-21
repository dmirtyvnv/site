jQuery('.item_slide').slick({
    speed: 200,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    infinite: false,
    responsive: true,
    mobileFirst: true,
    centerPadding: '50px',
    edgeFriction: 0,
    variableWidth: true
});
jQuery('.item1').slick({
    speed: 200,
    swipeToSlide: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    infinite: false,
    responsive: true,
    mobileFirst: true,
    centerPadding: '50px',
    edgeFriction: 0,
    variableWidth: true
});
jQuery('.item2').slick({
    speed: 200,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows:false,
    dots: true,
    responsive: true,
    mobileFirst: true,
    centerPadding: '50px',
    edgeFriction: 0,
    variableWidth: true
});
jQuery('#butt_call').on( "click",function() {
    var name = jQuery('#input_fio').val();
    var phone = jQuery('#input_phone').val();

    jQuery.ajax({
        type: 'POST',
        url: 'http://2.kntxt.ru/php/mail.php',
        data: {
            name: name,
            phone: phone
        },
        success: function(data) {
            // alert('Спасибо ' + name + '! Наш менеджер свяжется с Вами!');
            // jQuery('#modal').css("display","none");
            // jQuery('#main_frame').css("display","block");
        }
    });
    return false;
});
jQuery('#butt_call').on( "click",function() {
    var name = jQuery('#input_fio').val();
    var phone = jQuery('#input_phone').val();

    jQuery.ajax({
        type: 'POST',
        url: 'http://2.kntxt.ru/php/telega.php',
        data: { // что отправляем
            name: name,
            phone: phone,
        },
        success: function(data) {
            alert('Спасибо ' + name + '! Наш менеджер свяжется с Вами!');
            jQuery('.modal').css("display","none");
            jQuery('#main_frame').css("display","block");
        }
    });
    return false;
});
jQuery('#_row2_s2_r3').on( "click",function() {
    jQuery('#m10').css("display","block");
    jQuery('#m10').css("top","267px");
    jQuery('#main_frame').css("display","none");
});
jQuery('.close_butt1').on( "click",function() {
    jQuery('.modal').css("display","none");
    jQuery('#main_frame').css("display","block");
});
jQuery('.close_butt').on( "click",function() {
    jQuery('.modal').css("display","none");
    jQuery('#main_frame').css("display","block");
    document.getElementById("_row4").scrollIntoView();
});
jQuery('#_prodgect1').on( "click",function() {
    jQuery('#m1').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});

jQuery('#_prodgect2').on( "click",function() {
    jQuery('#m2').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});

jQuery('#_prodgect3').on( "click",function() {
    jQuery('#m3').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});
jQuery('#_prodgect4').on( "click",function() {
    jQuery('#m4').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});

jQuery('#_prodgect5').on( "click",function() {
    jQuery('#m5').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});
jQuery('#_prodgect6').on( "click",function() {
    jQuery('#m6').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});
jQuery('#_prodgect7').on( "click",function() {
    jQuery('#m7').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});
jQuery('#_prodgect8').on( "click",function() {
    jQuery('#m8').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});
jQuery('#_prodgect9').on( "click",function() {
    jQuery('#m9').css("display","block");
    jQuery('#main_frame').css("display","none");
    jQuery("body,html").animate({ "scrollTop": 0 }, 100);
});

window.onload=function(){

    State=0;

    $(".modal").on("show.bs.modal",function(){
        path=window.location.pathname+window.location.search;
        history.pushState("hide",null,path);
        history.pushState("show",null,path);
        State="show";
    })
        .on("hidden.bs.modal",function(){
            if(!!State)
                history.go(State=="hide"?-1:-2);
        });

    setTimeout(function(){// fix old webkit bug
        window.onpopstate=function(e){
            State=e.state;
            if(e.state=="hide"){
                $(".modal").modal("hide");
            }
        };
    },999);

    $("#main_frame").modal("show");
};
