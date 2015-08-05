## Properties ##

### $.jqlog.targets ###

  * Gets an array of the currently registered log targets indexed by log target name.  All log target objects must implement a `log` function that accepts a log entry object.

### $.jqlog.entryDefaults ###

  * Gets of sets the default log entry structure.

```
entryDefaults: {
    timestamp: Date,
    level: String,
    message: String
}
```

### $.jqlog.targetDefaults ###

  * Gets of sets the default log target structure.

```
targetDefaults: {
    name: String,
    log: function(entry)
}
```

## Functions ##

### $.jqlog.enabled(enable) ###

  * Gets or sets a Boolean value indicating whether or not logging is enabled.  The default value is `false`.

**Arguments**
  * `enable`  - Optional argument to enable or disable logging.

_Including the cookie plugin persists the enabled flag to a cookie.  This means that logging can be left disabled on document ready to minimise the performance impact for users, and then turned on when required._

### $.jqlog.log(object, options) ###

  * Logs an object with all registered log targets.

**Arguments**
  * `object`  - The object to log.
  * `options` - An object that is merged with the `entryDefaults` object to form the log entry object that gets passed to each log target.  There are no options that that control the way the log function operates, instead this argument is intended to provide a way of overriding properties on the `entryDefaults` object.

**Usage**

```
$.jqlog.log("Log entry", options);
```

### $.jqlog.info(object, options) ###

  * Logs an infomation object with all registered log targets.

**Arguments**
  * `object`  - The information object to log.
  * `options` - An object that is merged with the `entryDefaults` object to form the log entry object that gets passed to each log target.  There are no options that that control the way the info function operates, instead this argument is intended to provide a way of overriding properties on the `entryDefaults` object.

**Usage**

```
$.jqlog.info("Information entry", options);
```

### $.jqlog.warn(object, options) ###

  * Logs a warning object with all registered log targets.

**Arguments**
  * `object`  - The warning object to log.
  * `options` - An object that is merged with the `entryDefaults` object to form the log entry object that gets passed to each log target.  There are no options that that control the way the warn function operates, instead this argument is intended to provide a way of overriding properties on the `entryDefaults` object.

**Usage**

```
$.jqlog.warn("Warning entry", options);
```

### $.jqlog.error(object, options) ###

  * Logs an error object with all registered log targets.

**Arguments**
  * `object`  - The error object to log.
  * `options` - An object that is merged with the `entryDefaults` object to form the log entry object that gets passed to each log target.  There are no options that that control the way the error function operates, instead this argument is intended to provide a way of overriding properties on the `entryDefaults` object.

**Usage**

```
$.jqlog.error("Error entry", options);
```