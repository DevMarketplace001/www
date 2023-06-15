$(document).ready(function () {
    $(".user .body").slideUp(0);
    $(".user .head").click(function (e) { 
        e.preventDefault();
        $(".user .body").toggle(200);
    });
    $("#category").submit(function (e) { 
        e.preventDefault();
        let form = this;
        let category = window.location
        $.ajax({
            type: "post",
            url: "/category",
            data: {title:form.title.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    category.reload()
                }else{
                    $(".callback").html(response.text);
                    setTimeout(() => {
                        $(".callback").html("&#8205;");
                    }, 3000);
                }
            }
        });
    });
    $("#tag").submit(function (e) { 
        e.preventDefault();
        let form = this;
        let category = window.location
        $.ajax({
            type: "post",
            url: "/tag",
            data: {title:form.title.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    category.reload()
                }else{
                    $(".callback").html(response.text);
                    setTimeout(() => {
                        $(".callback").html("&#8205;");
                    }, 3000);
                }
            }
        });
    });
    $(".delete_cat").submit(function (e) { 
        e.preventDefault();
        let form = this;
        $.ajax({
            type: "delete",
            url: "/category",
            data: {id:form.title.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $($(form).parent()).remove();
                }
            }
        });
    });
    $(".delete_tag").submit(function (e) { 
        e.preventDefault();
        let form = this;
        $.ajax({
            type: "delete",
            url: "/tag",
            data: {id:form.title.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $($(form).parent()).remove();
                }
            }
        });
    });
    $("#avatar").change(function (e) { 
        e.preventDefault();
        const fileInput = e.target;
        const file = fileInput.files[0];
        let profile = window.location
        const formData = new FormData();
        formData.append('avatar', file);
        $.ajax({
            url: '/avatar',
            type: 'put',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(response) {
              if(response.status == 1){
                profile.reload();
              }
            },
            error: function() {
              // Произошла ошибка при загрузке файла
              console.error('Ошибка загрузки файла');
            }
        });
    });
    $("#profileUpdate").submit(function (e) { 
        e.preventDefault();
        let form = this
        let profile = window.location
        $.ajax({
            type: "put",
            url: "/profile",
            data: {username: form.username.value, email: form.email.value, password: form.password.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    profile.reload()
                }else{
                    $(".callback").html(response.text);
                    setTimeout(() => {
                        $(".callback").html("&#8205;");
                    }, 3000);
                }
            }
        });
    });
    $('#result').change(function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
          $('.show').css('background-image', 'url(' + e.target.result + ')');
        }
        reader.readAsDataURL(file);
    });
    $(".addProduct").submit(function (e) { 
        e.preventDefault();
        let form = this;
        let product = window.location
        $.ajax({
            type: "post",
            url: "/product",
            data: {title: form.title.value, description: form.description.value, price: form.price.value, category: form.category.value, tag: form.tag.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    const formData = new FormData();
                    formData.append('code', form.code.files[0]);
                    $.ajax({
                        url: '/product_code',
                        type: 'put',
                        data: formData,
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        success: function(response) {
                            if(response.status == 1){
                                const formData = new FormData();
                                formData.append('result', form.result.files[0]);
                                $.ajax({
                                    url: '/product_result',
                                    type: 'put',
                                    data: formData,
                                    processData: false,
                                    contentType: false,
                                    dataType: 'json',
                                    success: function(response) {
                                        if(response.status == 1){
                                            product.reload()
                                        }
                                    },
                                    error: function() {
                                    // Произошла ошибка при загрузке файла
                                        console.error('Ошибка загрузки файла');
                                    }
                                });
                            }
                        },
                        error: function() {
                        // Произошла ошибка при загрузке файла
                            console.error('Ошибка загрузки файла');
                        }
                    });
                }
            }
        });
    });
    $(".updateProduct").submit(function (e) { 
        e.preventDefault();
        let form = this;
        let product = window.location
        $.ajax({
            type: "put",
            url: "/product",
            data: {title: form.title.value, description: form.description.value, price: form.price.value, category: form.category.value, tag: form.tag.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    const formData = new FormData();
                    formData.append('code', form.code.files[0]);
                    $.ajax({
                        url: '/product_code',
                        type: 'put',
                        data: formData,
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        success: function(response) {
                            if(response.status == 1){
                                console.log(form)
                                const formData = new FormData();
                                formData.append('result', form.result.files[0]);
                                $.ajax({
                                    url: '/product_result',
                                    type: 'put',
                                    data: formData,
                                    processData: false,
                                    contentType: false,
                                    dataType: 'json',
                                    success: function(response) {
                                        if(response.status == 1){
                                            product.reload()
                                        }
                                    },
                                    error: function() {
                                    // Произошла ошибка при загрузке файла
                                        console.error('Ошибка загрузки файла');
                                    }
                                });
                            }
                        },
                        error: function() {
                        // Произошла ошибка при загрузке файла
                            console.error('Ошибка загрузки файла');
                        }
                    });
                }
            }
        });
    });
    $(".card .del").submit(function (e) { 
        e.preventDefault();
        let form = this
        $.ajax({
            type: "delete",
            url: "/product",
            data: {id:form.id.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $($(form).parent()).remove();
                }
            }
        });
    });
    $(".card .delCart").submit(function (e) { 
        e.preventDefault();
        let form = this
        $.ajax({
            type: "delete",
            url: "/cart",
            data: {id:form.id.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    $($(form).parent()).remove();
                }
            }
        });
    });
    $(".buyAll").submit(function (e) { 
        e.preventDefault();
        let form = this
        let ids = [];
        for( let i of $(form).children()){
            ids.push(i.value);
        }
        $.ajax({
            type: "post",
            url: "/history",
            data: {id:ids},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    window.location.reload();
                }
            }
        });
    });
    $("#toCart").submit(function (e) { 
        e.preventDefault();
        let form = this;
        $.ajax({
            type: "post",
            url: "/cart",
            data: {productId: form.cart.value},
            dataType: "json",
            success: function (response) {
                if(response.status == 1){
                    window.location.reload()
                }
            }
        });
    });
});