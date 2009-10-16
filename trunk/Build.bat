REM Define variables.
SET version=1.1
SET build=Build

REM Create the build directory.
IF EXIST %build% RMDIR %build% /S /Q
MKDIR %build%

REM Version all the necessary files.
CALL BatchSubstitute "X.X" "%version%" jquery.jqlog.js > %build%\jquery.jqlog-%version%.js
CALL BatchSubstitute "X.X" "%version%" jqlog.levels.js > %build%\jqlog.levels-%version%.js
CALL BatchSubstitute "X.X" "%version%" jqlog.alert.js > %build%\jqlog.alert-%version%.js
CALL BatchSubstitute "X.X" "%version%" jqlog.console.js > %build%\jqlog.console-%version%.js

REM Merge core, levels and console files to make a custom jqlog package. 
COPY %build%\jquery.jqlog-%version%.js /B + %build%\jqlog.levels-%version%.js /B + %build%\jqlog.console-%version%.js /B %build%\jquery.jqlog-%version%.custom.js

REM Minify the files.
java -jar yuicompressor-2.4.2.jar %build%\jquery.jqlog-%version%.js -o %build%\jquery.jqlog-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.levels-%version%.js -o %build%\jqlog.levels-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.alert-%version%.js -o %build%\jqlog.alert-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jqlog.console-%version%.js -o %build%\jqlog.console-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar %build%\jquery.jqlog-%version%.custom.js -o %build%\jquery.jqlog-%version%.custom.min.js -v