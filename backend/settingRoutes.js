const app = require("./init.js");

// TODO: const module = require('./module/path);
//       app.use('api/path', module);

const info = require('./routes/info')


app.use('/', info)