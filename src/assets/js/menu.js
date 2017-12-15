$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        //$('#sidebar').toggleClass('active');
        if ($('#sidebar1').hasClass('active')) {
            $('#sidebar1').removeClass('active');
            $('#sidebar1').css('margin-left', '0px');
            $('.fixed-top').css('margin-left', '90px');
            $('.rowActive').css('padding-left', '90px');
            $('#submenu').css('margin-left', '90px');
            
        } else {
            $('#sidebar1').addClass('active');
            $('#sidebar1').css('margin-left', '-90px');
            $('.fixed-top').css('margin-left', '0px');
            $('.rowActive').css('padding-left', '0px');
            $('#submenu').css('margin-left', '0px');
        }
    });
    // $('#submenu').on('click', function () {
    //     // $('.submenu1').toggleClass('active');
    //     $('.nav.nav-justified.collapse.in.li').toggleClass('active');
    //     alert('active');
    // });
 
});


$(document).ready(function () {
    
            $('.collapse').on('shown.bs.collapse', function (e) {
                $('.collapse').not(this).removeClass('in');
                // alert($('[data-toggle=collapse]').parent('li.a').find(id));
                //  if($('[data-toggle=collapse]').parent('li.a').find('aria-expanded','false')){
                    //  alert('a');
                    //  $('.collapse').not(this).addClass('active');
                    //  $('[data-toggle=collapse]').parent('li.a').find('aria-expanded','false').addClass('active');
                //  }
            });
    
            $('[data-toggle=collapse]').click(function (e) {
                $('[data-toggle=collapse]').parent('li').removeClass('active');
                $(this).parent('li').toggleClass('active');
                // if($('[data-toggle=collapse]').parent('li').hasClass('active')) {
                //     $('[data-toggle=collapse]').parent('li').removeClass('active');
                // }
               
            });
    
            $('[data-toggle=collapsesub]').click(function (e) {
                $('[data-toggle=collapsesub]').parent('li').removeClass('active');
                $(this).parent('li').toggleClass('active');
            });
        });



