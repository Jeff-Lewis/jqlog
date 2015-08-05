## Overview ##

A logging framework plugin for jQuery that can be configured and extended allowing you to "roll your own" logging framework.

### Usage ###

The core framework allows you to log messages using the public functions or via the jQuery selector syntax allowing you to log each selected element (useful for debugging selectors!).

```
(function($) {
    $(document).ready(function() {
        $.jqlog.enabled(true);
        $.jqlog.log("Log entry");
        $.jqlog.info("Information entry");
        $.jqlog.warn("Warning entry");
        $.jqlog.error("Error entry");
    });
})(jQuery);
```


For more information see the jqlog [API](API.md).

### Targets ###

By default jqlog logs to the browser console, however it is possible to customise this behavious using custom log targets.  For a list of the log targets provided with jqlog and information about how to create your own see [Targets](Targets.md).