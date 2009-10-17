/*
 * jqlog.levels X.X
 *
 * A logging level plugin for jqlog.
 *
 * Copyright © 2009 Paul Bevis.
 *
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://code.google.com/p/jqlog/
 */ 
(function($) {

    // Extend jqlog to provide logging level facade functions that call through to the core log function.
    jQuery.extend(jQuery.jqlog, {

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
        info: function info(object, options) { 
            var settings = jQuery.extend({
                level: "info"
            }, options);
            this.log(object, settings);
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
        warn: function warn(object, options) {    
            var settings = jQuery.extend({
                level: "warn"
            }, options);
            this.log(object, settings);
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
        error: function error(object, options) {    
            var settings = jQuery.extend({
                level: "error"
            }, options);
            this.log(object, settings);
        }
        
    });

    // Extend the log entry defaults object to include a default log level.
    jQuery.extend(jQuery.jqlog.entryDefaults, { level: "debug" });

})(jQuery);
