$(document).ready(function () {
    $(".window-body").slideUp(0);
    $(".window-btn").click(function (e) { 
        e.preventDefault();
        let btn = this;
        $($(btn).next()).show(0);
        $("body").toggleClass("scroll_off");
    });
    $(".back").click(function (e) {
        e.preventDefault();
        let btn = this;
        $($(btn).parent()).hide(0);
        $("body").toggleClass("scroll_off");
    });
});