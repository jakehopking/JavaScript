// Requires ul.autoComplete and some styling for the li.highlight. Simples.


var autoCompleteHighlight = function() {
    var $autoComplete = $('ul.autoComplete'),
    $acFirstLi = $autoComplete.find('li').first();

    $acFirstLi.addClass('highlight');

    $(document).on('keyup', $autoComplete, function(e) {
        var $highlight = $autoComplete.find('.highlight'), $li = $('li');
        if (e.keyCode == 40) {
            $highlight.removeClass('highlight').next().addClass('highlight');
            if ($highlight.next().length == 0) {
                $li.eq(0).addClass('highlight')
            }
        } else if (e.keyCode === 38) {
            $highlight.removeClass('highlight').prev().addClass('highlight');
            if ($highlight.prev().length == 0) {
                $li.eq(-1).addClass('highlight')
            }
        }
    }) 
};
autoCompleteHighlight(); 
