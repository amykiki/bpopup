/**
 * Created by zoush on 2017/5/7.
 */
;(function ($) {
    $(function () {
        $('#my-button').on('click', function (e) {
            e.preventDefault();
            $('#element_to_pop_up').bPopup();
        });

        $('<div/>',{
            id: 'divTest',
            text: 'this is a div'
        }).css({border: '1px solid red', padding: '8px'}).appendTo("body");
    });

})(jQuery);