$(document).ready(function() {
    $('#navbar-categories').click(function(e) {
        $('#categories-dropdown').toggleClass('active');
    });
    $('#navbar-categories').blur(function() {
        $('#categories-dropdown').removeClass('active');
    })
    $('.previous').first().click(function(e) {
        $('.slider-item').last().addClass('animate__slideOutRight hide');
        setTimeout(function() {
            $('.slider-item').first().addClass('show animate__slideInLeft');
            $('.slider-item').first().removeClass('hide animate__slideOutLeft');
            $('.slider-item').last().removeClass('show animate__slideInRight');
        }, 200);
    });
    $('.next').first().click(function(e) {
        $('.slider-item').first().addClass('animate__slideOutLeft hide');
        setTimeout(function() {
            $('.slider-item').first().removeClass('show animate__slideInLeft');
            $('.slider-item').last().addClass('show animate__slideInRight');
            $('.slider-item').last().removeClass('hide animate__slideOutRight');        
        },200)
    });
});
