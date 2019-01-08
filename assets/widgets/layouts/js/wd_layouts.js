( function ($) {

	$.fn.generateWdLayout = function (layoutSection, layoutJson) {
        var elmTag, availableLayouts, util, init
        elmTag = esLayouts.generateTag // Get Layout generator function to a variable

        // Initialization function to trigger the widget
        init = function (popId, layoutSection) {
            if(layoutJson) $(popId).append(elmTag(layoutJson))
            else return  $(popId).append("")
        }

        // Binding functions from the widget 
        init( $(this).get(), layoutSection ); // Run widget
        return this;
	}

}( jQuery ))