/*
 * jQuery.jqlog X.X
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

    // Create the jqlog namespace and the JqLogger singleton class.
    jQuery.extend({ jqlog: new function JqLogger() {
        
        // Private enabled flag.
        var _enabled = false;
        
        this.version = "X.X";
        
        /*
        Indicates whether or not logging is enabled.  Default is false.
        */
        this.enabled = function enabled(enable) {
            if (enable != undefined) {
                this._enabled = enable;
            }
            return this._enabled;
        };
        
        /*
        Stores the currently registered log targets.  All log target objects must implement a 
        log target function that accepts a log entry object.
        */
        this.targets = [];
        
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
        this.log = function log(object, options) {
        
            if (this.enabled()) {
            
                var t, target, entry = jQuery.extend({}, this.entryDefaults, {
                    timestamp: new Date(),
                    message: object
                }, options);
                
                // Log the entry with each of the registered targets.
                for(t in this.targets) {
                    target = this.targets[t];
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
        };
        
        /*
        Default log entry structure.
        */
        this.entryDefaults = new function JqLogEntry() {
            this.timestamp = new Date();
            this.message = "";
            this.toString = function toString() {
                return this.message.toString();
            }
        };
        
        /*
        Default target structure.
        */
        this.targetDefaults = new function JqLogTarget() {
            this.name = "";
            this.log = function log() {};
        };
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
