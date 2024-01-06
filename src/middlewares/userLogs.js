const fs = require('fs');
const path = require('path')
function usersLogs(req, res,next){
    fs.appendFileSync(path.join(__dirname, '../logs/userslogs.txt'), ` Se ingresó en la página: ${req.url } \n`);

    next();
};

module.exports = usersLogs;