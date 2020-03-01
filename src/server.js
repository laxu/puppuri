var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');

var port = process.env.PORT || 8080;
var serveFromPath = path.join(process.env.SERVE_FROM || path.join(__dirname, '../dist'));

connect().use(serveStatic(serveFromPath)).listen(port, function(){
    console.log(`Server running on port ${port} from folder ${serveFromPath}...`);
});