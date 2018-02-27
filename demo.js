var fs = require('fs')

 var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

 fs.mkdirSync("./" + dirName) // mkdir $1
 process.chdir("./" + dirName) // cd $1
 fs.mkdirSync('css') // mkdir css
 fs.mkdirSync('js') // mkdir js

 fs.writeFileSync("./index.html", "")
 fs.writeFileSync("css/style.css", "")
 fs.writeFileSync("./js/main.js", "")
 fs.appendFile('index.html', 'data to append', function (err) {
console.log('The "data to append" was appended to file!');
});
 
 process.exit(0)