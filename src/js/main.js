//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js


$(document).ready(function(){
    (function($){
        $(window).on("load",function(){
            $(".wrapper_scroll").mCustomScrollbar({
            	scrollEasing:"easeOut"
            });
        });
    })(jQuery);
});