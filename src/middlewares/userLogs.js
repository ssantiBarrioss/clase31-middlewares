const fs = require('fs');
const path = require('path')
function usersLogs(req, res,next){
    fs.appendFileSync(path.join(__dirname, '../logs/userslogs.txt'), ' Se ingreso en la página: ' + req.url);

    next();
};

module.exports = usersLogs;