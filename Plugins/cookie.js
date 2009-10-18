/*
 * jqlog.cookie X.X
 *
 * A plugin that overrides the default jqlog.enabled behaviour and persists the 
 * enabled flag to a cookie.  This means that logging can be left disabled on 
 * document ready to minimise the performance impact for users, and then turned 
 * on when required.  Using a cookie means that the flag can be set before 
 * viewing a page so that page load events can be logged.
 *
 * Copyright © 2009 Paul Bevis.
 *
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://code.google.com/p/jqlog/
 *
 * Depends on jquery.cookie.js.
 */ 
jQuery.jqlog.enabled = function enabled(enable) {
    if (enable != undefined) {
        jQuery.cookie("jqlogEnabled", enable, { expires: 50 });
    }
    return Boolean(jQuery.cookie("jqlogEnabled"));
};
