const app = require("./init.js");

const info = require('./routes/info')
// TODO: const module = require('./module/path);
//       app.use('api/path', module);

app.use('/', info)