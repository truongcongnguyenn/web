

// nav-item
$(document).ready(() => {
    $('.nav-item').mouseover(function() {
        $(this).find('.nav-link').css("text-decoration", "underline");
    });

    $('.nav-item').mouseout(function() {
        $(this).find('.nav-link').css("text-decoration", "none");
    });
});


//popular-item
$(document).ready(function(){
    $('.btn-buy-now').hover(function(){
        var $buynow = $(this);  //lấy text ban đầu của nút đc hover
        $buynow.data('origin-text', $buynow.text())
        $(this).text("BUY NOW");
        $(this).css({
            'background-color':'black',
            'color':'#fff'
        })
    }, function(){
        $(this).text($(this).data("origin-text"))
        $(this).css({
            'background-color':'lightgray',
            'color':'black'
        })
    })
})

//hover buy now button
$(document).ready(function(){
    // Sử dụng hover() để bắt sự kiện mouseenter và mouseleave cho .popular-item
    $('.popular-item-img').hover(
        function() {
            // Mouseenter: thay đổi thuộc tính transform của ảnh con
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            // Mouseleave: đặt lại thuộc tính transform của ảnh con về kích thước ban đầu
            $(this).css('transform', 'scale(1)');
        }
    );
});

//di chuot best seller item se hien nut add to cart
$(document).ready(function(){
    $('.img-item-uudai-container').mouseenter(
        function(){
            $(this).find('.them-vao-gio-btn').slideDown("fast");
            $(this).find('.img-item-uudai').css({
                'filter': 'brightness(0.75)',
                'transition': 'filter 0.25s ease'
            })
        }
    )
    $('.img-item-uudai-container').mouseleave(
        function(){
            $(this).find('.them-vao-gio-btn').slideUp("fast");
            $(this).find('.img-item-uudai').css({
                'filter': 'brightness(1)',
                'transition': 'filter 0.25s ease'
            })
        }
    )
})


