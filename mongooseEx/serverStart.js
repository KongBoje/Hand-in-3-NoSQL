const port = 8080;
let app = require("./app");
app.initMongoose("mongodb://localhost/test");
app.listen(port,() => console.log(`Started Server Listening on ${port}`));