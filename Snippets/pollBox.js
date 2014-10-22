// My rudimentary pollBox which displays in the whitepages homepage.

var pollBox = function () {

    var el = $(".poll");

    if (!el || el.length < 1) return;
    if ($(window).width() <= 1000) el.remove();

    var open            = false,
        form            = $("#pollform", el),
        toggle          = $(".pollToggle a", el),
        content         = $(".contentBlockContainer", el);

    setTimeout(function () { // initial wiggle
        content.animate({ width: '50px' }, 300, function () {
            content.animate({ width: '0px' }, 300);
        });    
    }, 500);

    toggle.on("click", function (evt) {
        evt.preventDefault();
        if (open) {
            content.animate({ width: '0px' }, 300);
            open = false;
        } else {
            content.animate({ width: '350px' }, 300);
            open = true;
        }
    }).on('mouseover', function () {
        if (!open) content.animate({ width: '15px' }, 300);
    }).on('mouseout', function () {
        if (!open) content.animate({ width: '0px' }, 300);
    });

    form.on("submit", function (evt) {
        evt.preventDefault();

        var post_data = {},
            selected, 
            verified;

        $("#radioDiv input[type='radio']:checked").each(function (i, input) {
            input = $(input);
            post_data[input.attr('name')] = input.val();
            selected = true;
        });    

        $("#poll_verification", el).each(function (i, input) {
            input = $(input);
            post_data[input.attr('name')] = input.val();
            verified = true;
        });    

        if (selected && verified) {
            $.ajax({
                url:        form.attr('action'),
                data:       post_data,
                type:       "POST",
                dataType:   "xml",
                statusCode: { 0: function () { }, 200: function () { } }
            });
        }

        el.fadeOut(1000);
    });
};

pollBox();


// <div class="poll" data-poll="pollBox" id="ab_var" style=""> </div>