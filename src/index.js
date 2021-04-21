
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';



$(document).ready(function() {
    
    $('#socialIcons > .icon').click(function(){
        $('.layer').show();
        $('.social').toggle();
    });

    $('.layer').click(function(){
        $('.social').hide();
        $('.layer').hide();
    });

    $('#setting-icon > i').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#setting-list').toggle();
    });
    
    $('#colors-link').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#colors').toggle();
    });

});  

