/*
 * jQuery.jqlog 1.0
 *
 * A console log target for jqlog.
 *
 * Copyright � 2009 Paul Bevis.
 *
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://code.google.com/p/jqlog/
 */ 
(function($) {

    jQuery.jqlog.targets["console"] = jQuery.extend({}, jQuery.jqlog.targetDefaults, {
    
        /*
        Target name.
        */
        name: "console",        
        
        /* 
        Target version.
        */
        version: "1.0",
        
        /*
        Logs a entry to the console if available.
        
        Parameters:
           entry -   The entry to log.
        */        
        log: function (entry) {            
            if (window.console) {
                switch(entry.level) {
                    case "info":
                        console.info(entry.message);
                        break;
                    case "warn":
                        console.warn(entry.message);
                        break;
                    case "error":
                        console.error(entry.message);
                        break;
                    default:
                        console.log(entry.message);
                }
            }
        }
    });

})(jQuery);