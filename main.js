$(document).ready(function(){
    $('#btnControl').click(function(){
        $('#hamburger-icon').click(function(){
            $(this).toggleClass('open');
            $('#mobile-nav-ul').toggleClass('open-nav');
        });
    });
    console.log("what is?")
});
