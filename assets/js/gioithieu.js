// nav-item
$(document).ready(() => {
    $('.nav-item').mouseover(function() {
        $(this).find('.nav-link').css("text-decoration", "underline");
    });

    $('.nav-item').mouseout(function() {
        $(this).find('.nav-link').css("text-decoration", "none");
    });
});