$(document).ready(function() {
    $("#version-select").change(function(ev) {
        var newVersion = $(ev.target).val();
        var pathBits = document.location.href.split("/");
        var filename = pathBits.pop();
        var path = pathBits.join("/");
        var details = /([^-]*)-(.*)\.html/.exec(filename);
        if (details && details.length == 3) {
            var newFilename = details[1] + "-" + newVersion + ".html";
            window.location = path + "/" + newFilename;
        }
    });
});
