$(document).ready(function () {
    // countdown
    $(function () {
        var austday = new Date();
        austday = new Date(austday.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({until: austday, format: 'odhms'});
    });
    var wow = new WOW({
        mobile: false
    });
    wow.init();
    // form validation
    $('.form-control').blur(function () {
        var x = document.forms['myForm']['email'].value;
        var atpos = x.indexOf('@');
        var dotpos = x.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find('.alert-danger').fadeIn(200);
        } else {
            $(this).parent().find('.alert-success').fadeIn(200);
        }
    });
    $('.form-control').blur(function () {
        var x = document.forms['myForm2']['email2'].value;
        var atpos = x.indexOf('@');
        var dotpos = x.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find('.alert-danger').fadeIn(200);
        } else {
            $(this).parent().find('.alert-success').fadeIn(200);
        }
    });
});