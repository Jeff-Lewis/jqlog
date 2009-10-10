REM Define variables.
SET version=1.0

REM Create the build directory.
IF EXIST Build RMDIR Build /S /Q
MKDIR Build

REM Version all the necessary files.
COPY jquery.jqlog.js Build\jquery.jqlog-%version%.js
COPY jqlog.levels.js Build\jqlog.levels-%version%.js
COPY jqlog.alert.js Build\jqlog.alert-%version%.js
COPY jqlog.console.js Build\jqlog.console-%version%.js

REM Merge core, levels and console files to make a custom jqlog package. 
COPY jquery.jqlog.js /B + jqlog.levels.js /B + jqlog.console.js /B Build\jquery.jqlog-%version%.custom.js

REM Minify the files.
java -jar yuicompressor-2.4.2.jar Build\jquery.jqlog-%version%.js -o Build\jquery.jqlog-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar Build\jqlog.levels-%version%.js -o Build\jqlog.levels-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar Build\jqlog.alert-%version%.js -o Build\jqlog.alert-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar Build\jqlog.console-%version%.js -o Build\jqlog.console-%version%.min.js -v
java -jar yuicompressor-2.4.2.jar Build\jquery.jqlog-%version%.custom.js -o Build\jquery.jqlog-%version%.custom.min.js -v