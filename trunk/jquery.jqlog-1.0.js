/*
 * jQuery.jqlog 1.0
 *
 * A logging framework plugin for jQuery.
 *
 * Copyright © 2009 Paul Bevis.
 *
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://code.google.com/p/jqlog/
 */ 
(function($) {

    // Create the jqlog namespace.
    jQuery.extend({ jqlog: {
        
        version: "1.0",
        
        /*
        Indicates whether or not logging is enabled.  Default is false.
        */
        enabled: false,
        
        /*
        Stores the currently registered log targets.  All log target objects must implement a 
        log target function that accepts a log entry object.        
        */
        targets: [],
        
        /*
        Logs an object with all registered log targets.
        
        Parameters:
           object  -   The object to be logged.
           options -   Logging options passed to log targets
        
        Options:
           level   -   Logging level.  Default value is "debug".
        
        Usage: 
           $.jqlog.log("Message");
        */
        log: function(object, options) {
        
            if (jQuery.jqlog.enabled) {
            
                var entry = jQuery.extend({}, jQuery.jqlog.entryDefaults, {
                    timestamp: new Date(),
                    message: object
                }, options);
                
                // Log the entry with each of the registered targets.
                for(var t in jQuery.jqlog.targets) {
                    var target = jQuery.jqlog.targets[t];
                    if (target.log) {
                        try {
                            target.log(entry);
                        } 
                        catch(err) {
                            // Ignore any errors and carry on logging!
                        }
                    }
                }
            }
        },        
        
        /*
        Default log entry structure.
        */
        entryDefaults: {
            timestamp: null,
            message: ""
        },
        
        /*
        Default target structure.
        */
        targetDefaults: {
            name: "",
            log: function() {}
        }
    }});
    
    jQuery.fn.extend({
    
        /*
        Logs a DOM object with all registered log targets.
        
        Parameters:
           options -   Logging options passed to log targets
        
        Options:
           level   -   Logging level.  Default value is "debug".
        
        Usage: 
           $("div").log();
        */    
        log: function(options) {
            return this.each(function() { jQuery.jqlog.log(this, options); });
        }
    });

})(jQuery);