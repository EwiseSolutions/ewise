var commonBuildUtil = new function () {

    // Functionility to activate nav button for a navigation ul#id
    this.activateMainNav = function (selector,  navName) {
        jQuery(selector).children().each(function (index, node) {
            if(jQuery(node).attr("name") == navName)
                jQuery(node).addClass("active");
        });
    }

}