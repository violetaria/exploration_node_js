// how to require packages
var express = require ("express");

var app = express();

var data = [
    {foo: "bar"},
    {biz: "baz"}
];

// set view engine in express
// what type engine
// (mustache, handlebars are other types, may take more setup)
app.set("view engine", "jade");

// set a middleware
// used to respond to routes so you don't have to write them all yourself
// one we are using is included in express
// safe way to specify the path is to use the process.cwd (current working directory) of where the process is running
app.use(express.static(process.cwd() + "/public"));

// this is exactly like the resources in rails
// specify an endpoint that can be accessed by HTTP GET
// route (root route), callback (request param, response param)
app.get('/', function(req, res){

    // render is using the jade middleware view engine
    res.render("index");

    // send HTML
        // res.send("<h1>Big Text</h1>");
    // send straight json
        // res.json(data);
    // send text
        // res.send("Hello World");
});

// start server and listen on a port
app.listen(8025);
console.log("App is running");



