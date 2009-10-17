/*
 * jqlog.target.alert X.X
 *
 * A log target for the jqlog framework that uses the brower alert window.
 *
 * Copyright © 2009 Paul Bevis.
 *
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://code.google.com/p/jqlog/
 */ 
(function($) {

    jQuery.jqlog.targets["alert"] = jQuery.extend({}, jQuery.jqlog.targetDefaults, {
    
        /*
        Target name.
        */
        name: "alert",        
        
        /* 
        Target version.
        */
        version: "X.X",
        
        /*
        Logs a entry using the alert window.
        
        Parameters:
           entry -   The entry to log.
        */        
        log: function (entry) {
            alert(entry.message);
        }
    });

})(jQuery);
