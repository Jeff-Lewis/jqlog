REM Define variables.
SET version=1.3
SET output=Release
SET plugins=..\Plugins
SET targets=..\Targets

REM Create the output directory.
IF EXIST %output% RMDIR %output% /S /Q
MKDIR %output%

REM Version all the necessary files.
CALL BatchSubstitute "X.X" "%version%" "..\core.js" > "%output%\jqlog.core-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%plugins%\levels.js" > "%output%\jqlog.levels-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%plugins%\cookie.js" > "%output%\jqlog.cookie-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%targets%\alert.js" > "%output%\jqlog.target.alert-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "%targets%\console.js" > "%output%\jqlog.target.console-%version%.js"
CALL BatchSubstitute "X.X" "%version%" "ReadMe.txt" > "%output%\ReadMe.txt"

REM Merge core, levels and console files to make a custom jqlog package. 
COPY "%output%\jqlog.core-%version%.js" /B + "%output%\jqlog.levels-%version%.js" /B + "%output%\jqlog.target.console-%version%.js" /B "%output%\jquery.jqlog-%version%.js"

REM Minify the files.
ajaxmin "%output%\jquery.jqlog-%version%.js" /o "%output%\jquery.jqlog-%version%.min.js" /h
ajaxmin "%output%\jqlog.core-%version%.js" -o "%output%\jqlog.core-%version%.min.js" /h
ajaxmin "%output%\jqlog.levels-%version%.js" -o "%output%\jqlog.levels-%version%.min.js" /h
ajaxmin "%output%\jqlog.cookie-%version%.js" -o "%output%\jqlog.cookie-%version%.min.js" /h
ajaxmin "%output%\jqlog.target.alert-%version%.js" -o "%output%\jqlog.target.alert-%version%.min.js" /h
ajaxmin "%output%\jqlog.target.console-%version%.js" -o "%output%\jqlog.target.console-%version%.min.js" /h
ajaxmin "%output%\jquery.jqlog-%version%.js" -o "%output%\jquery.jqlog-%version%.min.js" /h
