(function ($) {
    $.fn.citations = function () {
        var i = 1,
            links = $(this).find("a");
        
        links.each(function () {
            $(this).clone().addClass("citations-js").text("").append(i + ". " + this.title + ", " + this.href).appendTo('#Citations');
            i++;
        });
    };
}(jQuery));
