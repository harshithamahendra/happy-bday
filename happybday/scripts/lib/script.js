// Code goes here

$('document').ready(function() {
    // make all tab contents hidden
    $('.tab-content').addClass('hide-content');
    // display first tab content on the home page
    $('#home').addClass('active-content');
    $('a').click(function() {
        $('a').removeClass('active');
        $(this).addClass('active');
        $('.active-content').removeClass('active-content');
        var id = "#" + this.href.split("#")[1];
        $(id).addClass('active-content');
        switch(id){
            //#CC5757
            case "#pics": $('body').css('background-color','rgb(155, 26, 26)');
            break;
            case "#home": $('body').css('background-color', 'rgb(44, 23, 26)');
            break;
            case "#letter": $('body').css('background-color', 'rgb(15, 59, 83)');
            break;
        }
    })
});
