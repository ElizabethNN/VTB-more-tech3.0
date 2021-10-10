const app = require("./init.js");

// TODO: const module = require('./module/path);
//       app.use('api/path', module);

const info = require('./routes/info');
const datasets= require("./routes/datasets");

app.use("/datasets/", datasets);
//app.use('/', info)

