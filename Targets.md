## Alert ##

The alert log target plugin is the simplest log target available and just displays each log entry using the browser's alert box.

To use the alert log target just include the script file on your page after jqlog.

```
<script type="text/javascript" src="jqlog.alert-1.0.js"></script>
```

The alert log target has been tested on IE8, Firefox 3.5 and Safari 4.

## Console ##

The console log target logs entries using the `window.console` object.  If the `window.console` object is not available it tries to log to the `window.firebug.d.console` object (provided by Firebug Lite).  If neither object is available it does nothing.

The console log target is the default log target used by jqlog and is included as part of the main script file.

The console log target has been tested on IE8, Firefox 3.5 and Safari 4.

## Creating your own log target ##

A log target should extend the `jqlog.targetDefaults` object.  This will mean that your target will pick up all the jqlog default settings and any additional ones set by other plugins.

```
var target = jQuery.extend({}, jQuery.jqlog.targetDefaults, { name: "target", ... });
```

At a minimum, a target must implement a log function that accepts as its first parameter a log entry object.

```
function log(entry) {
...
}
```

To register your log target with jqlog you just need to add it to the targets array.  The array is indexed by log target name.

```
jQuery.jqlog.targets["target"] = target;
```

_Note that the order in which the targets are executed by jqlog is not guaranteed_.