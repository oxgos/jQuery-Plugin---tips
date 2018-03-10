(function($) {
    $.extend({
        message: function(type, options) {
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
        }
    })

    function createMessage(type, options) {
        var iconName = 'fa-exclamation-circle';
        var defaults = {
            title: '这是一条消息',
            borderColor: '#ebeef5',
            backgroundColor: '#edf2fc',
            color: '#909399'
        }
        if (type === 'success') {
            iconName = 'fa-check-circle';
            defaults.backgroundColor = '#f0f9eb';
            defaults.borderColor = '#e1f3d8';
            defaults.color = '#67c23a';
        } else if (type === 'warning') {
            iconName = 'fa-exclamation-triangle';
            defaults.backgroundColor = '#fdf6ec';
            defaults.borderColor = '#faecd8';
            defaults.color = '#e6a23c';
        } else if (type === 'error') {
            iconName = 'fa-times-circle';
            defaults.backgroundColor = '#fef0f0';
            defaults.borderColor = '#fde2e2';
            defaults.color = '#f56c6c';
        }
        var settings = $.extend(defaults, options);
        var body = $('body');
        var msg = $('<div class="message"></div>');
        var i = $('<i class="fa '+ iconName +'"></i>');
        var p = $('<p></p>').text(settings.title);
        
        msg.css({
            minWidth: '380px',
            paddingTop: '15px',
            paddingRight: '15px',
            paddingBottom: '15px',
            paddingLeft: '20px',
            position: 'fixed',
            left: '50%',
            top: '-10px',
            opacity: 0.3,
            transform: 'translateX(-50%)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '4px',
            fontSize: '14px',
            borderColor: settings.borderColor,
            backgroundColor: settings.backgroundColor,
            color: settings.color
        });
        i.css({
            marginRight: '10px'
        });
        p.css({
            display: 'inline-block',
            margin: 0,
            padding: 0
        });
        msg.append(i).append(p);
        body.append(msg);
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
        }, 3000)
    }
})(jQuery)