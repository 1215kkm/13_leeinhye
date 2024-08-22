$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height();
    let docH = $(document).height();
    let garoW = $('.garo').width();
    let per = garoW / (docH - winH);
    let dab = scrT * per;

    $('.garo span').css({width:dab})
})