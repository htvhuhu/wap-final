$(document).ready(function(){
    $('.menu-bar-item').on("click", function(){
        $(this).addClass('menu-bar-item-active').siblings().removeClass('menu-bar-item-active');

        var catId = $(this).attr("id");

        $.ajax({
            url: '/menu/' + catId, 
            method: 'GET',
            success: function (data) {
                $('#foodContainer').html(data);
            }
        });

    })
})