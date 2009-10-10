/*
 * jqlog.console 1.0
 *
 * A log target for the jqlog framework that uses the console object.
 *
 * Copyright © 2009 Paul Bevis.
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
            // Check for the browser console object...
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
            // Check for firebug lite...
            else if (window.firebug) {
                switch(entry.level) {
                    case "info":
                        firebug.d.console.info(entry.message);
                        break;
                    case "warn":
                        firebug.d.console.warn(entry.message);
                        break;
                    case "error":
                        firebug.d.console.error(entry.message);
                        break;
                    default:
                        firebug.d.console.log(entry.message);
                }
            }
        }
    });

})(jQuery);
