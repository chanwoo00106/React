var fs = require('fs');
 
fs.readdir('./any', (err, file_list) => { console.log(file_list.length); });