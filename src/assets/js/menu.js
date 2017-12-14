$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        //$('#sidebar').toggleClass('active');
        if ($('#sidebar1').hasClass('active')) {
            $('#sidebar1').removeClass('active');
            $('.fixed-top').css('margin-left', '90px');
            $('.rowActive').css('padding-left', '90px');
            $('#submenu').css('margin-left', '90px');
            
        } else {
            $('#sidebar1').addClass('active');
            $('.fixed-top').css('margin-left', '0px');
            $('.rowActive').css('padding-left', '0px');
            $('#submenu').css('margin-left', '0px');
        }
    });

 
});

$(document).ready(function () {
    
            $('.collapse').on('shown.bs.collapse', function (e) {
                $('.collapse').not(this).removeClass('in');
            });
    
            $('[data-toggle=collapse]').click(function (e) {
                $('[data-toggle=collapse]').parent('li').removeClass('active');
                $(this).parent('li').toggleClass('active');
            });
    
        });



