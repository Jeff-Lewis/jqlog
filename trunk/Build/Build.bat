REM Define variables.
SET version=1.1
SET output=..\Release
SET plugins=..\Plugins
SET targets=..\Targets

REM Create the output directory.
IF EXIST %output% RMDIR %output% /S /Q
MKDIR %output%

REM Version all the necessary files.
CALL BatchSubstitute "X.X" "%version%" "..\core.js" > "%output%\jquery.jqlog-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%plugins%\levels.js" > "%output%\jqlog.levels-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%plugins%\cookie.js" > "%output%\jqlog.cookie-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%targets%\alert.js" > "%output%\jqlog.target.alert-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%targets%\console.js" > "%output%\jqlog.target.console-%version%.js"

REM Merge core, levels and console files to make a custom jqlog package. 
COPY "%output%\jquery.jqlog-%version%.js" /B + "%output%\jqlog.levels-%version%.js" /B + "%output%\jqlog.cookie-%version%.js" /B + "%output%\jqlog.target.console-%version%.js" /B "%output%\jquery.jqlog-%version%.custom.js"

REM Minify the files.
java -jar yuicompressor-2.4.2.jar "%output%\jquery.jqlog-%version%.js" -o "%output%\jquery.jqlog-%version%.min.js" -v
java -jar yuicompressor-2.4.2.jar "%output%\jqlog.levels-%version%.js" -o "%output%\jqlog.levels-%version%.min.js" -v
java -jar yuicompressor-2.4.2.jar "%output%\jqlog.cookie-%version%.js" -o "%output%\jqlog.cookie-%version%.min.js" -v
java -jar yuicompressor-2.4.2.jar "%output%\jqlog.target.alert-%version%.js" -o "%output%\jqlog.target.alert-%version%.min.js" -v
java -jar yuicompressor-2.4.2.jar "%output%\jqlog.target.console-%version%.js" -o "%output%\jqlog.target.console-%version%.min.js" -v
java -jar yuicompressor-2.4.2.jar "%output%\jquery.jqlog-%version%.custom.js" -o "%output%\jquery.jqlog-%version%.custom.min.js" -v