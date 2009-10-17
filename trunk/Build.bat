REM Define variables.
SET version=1.1
SET build=Build
SET plugins=Plugins
SET targets=Targets

REM Create the build directory.
IF EXIST %build% RMDIR %build% /S /Q
MKDIR %build%

REM Version all the necessary files.
CALL BatchSubstitute "X.X" "%version%" core.js > %build%\jquery.jqlog-%version%.js
CALL BatchSubstitute "X.X" "%version%" %plugins%\levels.js > %build%\jqlog.levels-%version%.js
CALL BatchSubstitute "X.X" "%version%" %targets%\alert.js > %build%\jqlog.target.alert-%version%.js
CALL BatchSubstitute "X.X" "%version%" %targets%\console.js > %build%\jqlog.target.console-%version%.js

REM Merge core, levels and console files to make a custom jqlog package. 
COPY %build%\jquery.jqlog-%version%.js /B + %build%\jqlog.levels-%version%.js /B + %build%\jqlog.target.console-%version%.js /B %build%\jquery.jqlog-%version%.custom.js

REM Minify the files.
java -jar yuicompressor-2.4.2.jar %build%\jquery.jqlog-%version%.js -o %build%\jquery.jqlog-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.levels-%version%.js -o %build%\jqlog.levels-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.target.alert-%version%.js -o %build%\jqlog.target.alert-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.target.console-%version%.js -o %build%\jqlog.target.console-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jquery.jqlog-%version%.custom.js -o %build%\jquery.jqlog-%version%.custom.min.js -v