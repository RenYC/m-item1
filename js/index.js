$(function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';


    $(".head .btn-back").click(function() {
        history.go(-1);
        console.log('111');

    });
})