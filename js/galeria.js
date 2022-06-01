var dir = "/static";
var fileextension = ".webp";

jQuery.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        jQuery(data)
            .find("a:contains(" + fileextension + ")")
            .each(function () {
                var filename = this.href
                    .replace(window.location.host, "")
                    .replace("http://", "");
                jQuery("#galeria1").append("<img src='"  + filename + "'>");
            })
    },
});
