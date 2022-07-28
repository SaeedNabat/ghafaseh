$(document).ready(function() {
    $('#navbar-categories').click(function(e) {
        $('#categories-dropdown').toggleClass('active');
    });
    $('#navbar-categories').blur(function() {
        $('#categories-dropdown').removeClass('active');
    })
});