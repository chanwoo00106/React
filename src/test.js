var fs = require('fs');
 
const a = fs.readdir('./public/images/10', (err, file_list) => {
    return file_list;   
});

console.log(a);