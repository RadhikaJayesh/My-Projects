$(function() {
    $("#sidebar-toggle").click(function(e) {
        e.preventDefault();
        $("#content").toggleClass("side-active");
    });
});