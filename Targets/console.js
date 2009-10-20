/*
 * jqlog.console X.X
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
jQuery.jqlog.targets.console = jQuery.extend({}, jQuery.jqlog.targetDefaults, {

    /*
    Target name.
    */
    name: "console",        
    
    /* 
    Target version.
    */
    version: "X.X",
    
    /*
    Logs a entry to the console if available.
    
    Parameters:
       entry -   The entry to log.
    */        
    log: function log(entry) {
        
        var msg = entry.message;
        
        // Check for the browser console object...                
        if (window.console) {
            switch(entry.level) {
                case "info":
                    console.info(msg);
                    break;
                case "warn":
                    console.warn(msg);
                    break;
                case "error":
                    console.error(msg);
                    break;
                default:
                    console.log(msg);
            }
        }
        // Check for firebug lite...
        else if (window.firebug) {
            switch(entry.level) {
                case "info":
                    firebug.d.console.info(msg);
                    break;
                case "warn":
                    firebug.d.console.warn(msg);
                    break;
                case "error":
                    firebug.d.console.error(msg);
                    break;
                default:
                    firebug.d.console.log(msg);
            }
        }
    }
});