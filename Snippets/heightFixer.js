// My height fixer. Comes with addition metods: divide/multiply/add/subtract an offset.
// Needs all parameters passed in to function (even if 0).
// Best result is to call your function for load/ready/resize. Load and resize are a must.

var heightFixer = (function($) {
    return {
        getAdjustHeight: function(from, to, adjuster, height) {
            return function(){
                var maxHeight = 0;

                $(from).each(function(){
                    if ($(this).height() > maxHeight) { 
                        maxHeight = $(this).height(); 
                    }
                });

                $(to).css("height", adjuster(maxHeight, height));
            }
        },
        divideHeight: function(current, divider) {
            return current / divider;
        },
        multiplyHeight: function(current, multiple) {
            return current * multiple;
        },
        addHeight: function (current, padding) {
            return current + padding;
        },
        subtractHeight: function (current, subtract) {
            return current - subtract;
        }
    }
})(jQuery);

// Example of how to use:

var adjustCaption = heightFixer.getAdjustHeight(".thumbnail .img-responsive", ".thumbnail .caption", heightFixer.addHeight, 0) 


// Call your var thrice :)

$(document).ready(function() {
    adjustCaption();
});
$(window).load(function() {
    adjustCaption();
});
$(window).resize(function() {
    adjustCaption();
});