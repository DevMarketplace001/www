$(document).ready(function () {
    $("#log").submit(function (e) { 
        e.preventDefault();
        let form = this
        let location = window.location
        $.ajax({
            type: "post",
            url: "/login",
            data: {user:form.user.value, password:form.password.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    location.reload()
                }else{
                    $(".callback").html(response.text)
                    setTimeout(function(){
                        $(".callback").html("&#8205;");
                    }, 2000)
                }
            }
        });
    });
    $("#reg").submit(function (e) { 
        e.preventDefault();
        let form = this
        let location = window.location
        $.ajax({
            type: "post",
            url: "/registration",
            data: {user:form.username.value, email:form.email.value, password:form.password.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    location.reload()
                }else{
                    $(".callback").html(response.text)
                    setTimeout(function(){
                        $(".callback").html("&#8205;");
                    }, 4000)
                }
            }
        });
    });
});