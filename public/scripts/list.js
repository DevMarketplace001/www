$(document).ready(function () {
    $(".list-body").slideUp(0);
    $(".list-header").click(function (e) { 
        e.preventDefault();
        let btn = this;
        $($(btn).next()).toggle(200);
    });
});