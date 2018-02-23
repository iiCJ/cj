if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  cat >index.html << "eof1"
<!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>
eof1
  cat >css/style.css<< "eof2"
h1{color: red;}
eof2
  cat >js/main.js<< "eof3"
var string = "Hello World"
 alert(string)
eof3
  echo 'success'
  exit
fi