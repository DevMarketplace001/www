$(document).ready(function () {
    
    $("#username").keyup(function (e) { 
        e.preventDefault();
        console.log(e.target.value)
        $.ajax({
            type: "post",
            url: "/username",
            data: {username: e.target.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $(".userCallback").html("&#8205;");
                }else{
                    $(".userCallback").html("Username already");
                }
            }
        });
    });
    $("#email").keyup(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/email",
            data: {email: e.target.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $(".emailCallback").html("&#8205;");
                }else{
                    $(".emailCallback").html("Email already");
                }
            }
        });
    });
});