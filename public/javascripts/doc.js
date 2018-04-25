"use strict";

var docs = {
    $resizer: $('#resizer'),
    $navBar: $('#navBar'),
    $main: $('#main'),
    showExample: function() {
        $('#example-tab').addClass('selected').siblings().removeClass('selected');
        $('.nav-example').removeClass('hidden');
        $('.nav-api').addClass('hidden');
    },
    showAPI: function() {
        $('#api-tab').addClass('selected').siblings().removeClass('selected');
        $('.nav-api').removeClass('hidden');
        $('.nav-example').addClass('hidden');
    },
    resize: function(event) {
        var clientX = event.clientX;
        clientX = Math.max(200, clientX);
        clientX = Math.min(500, clientX);
        docs.$navBar.css('width', clientX);
        docs.$resizer.css('left', clientX);
        docs.$main.css('left', clientX + docs.$resizer.width());
    },
    detachResize: function(event) {
        $(window).off({
            mousemove: docs.resize,
            mouseup: docs.detachResize
        });
    },
    loadPage: function(index) {
        // var $navExample = $('#navExample li a');
        var $section = $('#section');
        switch (index) {
            case 2001:
                $('#section').load('/vue');
                break;
            case 3001:
                $('#section').load('/js');
                break;
            case 3002:
                $('#section').load('/js/hobbies');
                break;
            case 3003:
                $('#section').load('/js/jslibrary');
                break;
            case 4001:
                $('#section').load('/openlayers');
                break;
            case 6001:
                $('#section').load('/css');
                break;
            case 7001:
                $('#section').load('/bootstrap/layout_1');
                break;
            case 8001:
                $('#section').load('/chart/layout_1');
            case 'A01':
                $('#section').load('/git');
                break;

        }
    }
};

/***************  MENU ICON CLIC ***************/
$('.nav-api li button').on('click', function() {
    if ($(this).next().attr('class') === 'hidden') {
        $(this).next().removeClass('hidden');
        $(this).find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    } else {
        $(this).next().addClass('hidden');
        $(this).find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    }
});

/***************  TAB-CHNAGE ***************/
$('#example-tab').click(docs.showExample);
$('#api-tab').click(docs.showAPI);

/***************  RESIZER ***************/
docs.$resizer.on('mousedown', function() {
    $(window).on({
        mousemove: docs.resize,
        mouseup: docs.detachResize
    });
});

/***************  URL LOCATION ***************/