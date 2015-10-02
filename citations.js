(function ($) {
    $.fn.citations = function () {
        var i = 1,
            links = $(this).find("a");
        
        links.each(function () {
            $(this).clone().addClass("citations-js").text("").append("<p>" + i + ". " + this.title + ", " + this.href + "</p>").appendTo('#Citations');
            i++;
        });
    };
}(jQuery));
