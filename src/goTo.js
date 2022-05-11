function go_to(obj, delta) {
    delta = typeof delta !== 'undefined' ? delta : 0;
    $('html,body').animate({scrollTop: $(obj).offset().top - delta}, 'slow');
}