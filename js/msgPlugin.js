(function($) {
    $.extend({
        /* message: function(type, options) {
            if (arguments.length === 0) {
                type = null;
                options = {}
            } else if (arguments.length === 1) {
                if (typeof arguments[0] === 'string') {
                    options = {};
                    options.title = arguments[0];
                    type = null;
                } else if (typeof arguments[0] === 'object') {
                    options = arguments[0];
                    type = null;
                } else {
                    return;
                }
            }
            createMessage(type, options)
        } */
        message: function(options) {
            if (arguments.length === 0) {
                options = {}
            }
            createMessage(options)
        }
    })

    function createMessage(options) {
        // var iconName = 'fa-exclamation-circle';
        if ('type' in options) {
            if (options.type === 'success') {
                options.iconName = 'fa-check-circle';
                options.backgroundColor = '#f0f9eb';
                options.borderColor = '#e1f3d8';
                options.color = '#67c23a';
            } else if (options.type === 'warning') {
                options.iconName = 'fa-exclamation-triangle';
                options.backgroundColor = '#fdf6ec';
                options.borderColor = '#faecd8';
                options.color = '#e6a23c';
            } else if (options.type === 'error') {
                options.iconName = 'fa-times-circle';
                options.backgroundColor = '#fef0f0';
                options.borderColor = '#fde2e2';
                options.color = '#f56c6c';
            }
        }
        var defaults = {
            title: '这是一条消息',
            type: 'default',
            duration: 3000,
            iconName: 'fa-exclamation-circle',
            borderColor: '#ebeef5',
            backgroundColor: '#edf2fc',
            color: '#909399'
        }
        var settings = $.extend(defaults, options);
        var body = $('body');
        var msg = $('<div class="message"></div>');
        var i = $('<i class="fa '+ settings.iconName +'"></i>');
        var p = $('<p></p>').text(settings.title);
        
        msg.css({
            borderColor: settings.borderColor,
            backgroundColor: settings.backgroundColor,
            color: settings.color
        });

        body.append(msg.append(i).append(p));
        msg.animate({
            top: '20px',
            opacity: 1
        }, 'normal', 'swing')
        setTimeout(function () {
            msg.animate({
                opacity: 0
            }, 'normal', 'swing', function() {
                msg.remove();
            })
        }, settings.duration)
    }
})(jQuery)