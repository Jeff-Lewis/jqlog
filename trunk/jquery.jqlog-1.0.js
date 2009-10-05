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
    jQuery.extend({ jqlog: {} });

    // Define the jqlog namespace.
    jQuery.extend(jQuery.jqlog, {
        
        version: "1.0",
        
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
        
            var entry = jQuery.extend({}, jQuery.jqlog.entryDefaults, {
                timestamp: new Date(),
                level: "debug",
                message: object
            }, options);
            
            // Log the entry with each of the registered targets.
            for(var target in jQuery.jqlog.targets) {
                try {
                    jQuery.jqlog.targets[target].log(entry);
                } catch(err) {
                    // Ignore any errors and carry on logging!
                }
            }
        },        

        /*
        Logs an infomation object with all registered log targets.
        
        Parameters:
           object  -   The information object to be logged.
           options -   Logging options passed to log targets
        
        Options:
           level   -   Logging level.  Default value is "info".
        
        Usage: 
           $.jqlog.info("Information");
        */        
        info: function(object, options) { 
            var settings = jQuery.extend({
                level: "info"
            }, options);
            jQuery.jqlog.log(object, settings);
        },
        
        /*
        Logs a warning object with all registered log targets.
        
        Parameters:
           object  -   The wanring object to be logged.
           options -   Logging options passed to log targets
        
        Options:
           level   -   Logging level.  Default value is "warn".
        
        Usage: 
           $.jqlog.warn("Warning");
        */         
        warn: function(object, options) {    
            var settings = jQuery.extend({
                level: "warn"
            }, options);
            jQuery.jqlog.log(object, settings);
        },

        /*
        Logs an error object with all registered log targets.
        
        Parameters:
           object  -   The error object to be logged.
           options -   Logging options passed to log targets
        
        Options:
           level   -   Logging level.  Default value is "error".
        
        Usage: 
           $.jqlog.error("Error");
        */         
        error: function(object, options) {    
            var settings = jQuery.extend({
                level: "error"
            }, options);
            jQuery.jqlog.log(object, settings);
        },
        
        /*
        Default log entry structure.
        */
        entryDefaults: {
            timestamp: null,
            level: "",
            message: "blah"
        },
        
        /*
        Default target structure.
        */
        targetDefaults: {
            name: "",
            log: function() {}
        }
    });
    
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