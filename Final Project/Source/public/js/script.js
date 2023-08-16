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
    $('.menu-bar-item#0').click(); // show all dish in the first time.
})

function postComment(dishId)
{
   
    var name=$('#commentname').val();
    var email = $('#commentemail').val();
    var comment = $('#comment').val();

    if (name == '' || email == '' || comment == '')
    {
        $('.required-label').show();
        return false;
    }
    else
    {
        $('.required-label').hide();

        $.ajax({
            type: "POST",
            url: '/menu/comment',
            data: JSON.stringify({ name: name, email:email, comment:comment, dishId:dishId}),
            datatype: "html",
            contentType: 'application/json',
            success: function (result) {

                if (result != null) {                    
                    $('#commentList').html(result);
                    $('#commentname').val('');
                    $('#commentemail').val('');
                    $('#comment').val('');
                }

            },
        });
    }
}