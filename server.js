var express = require("express");
var app = express();
// const http = require('http');

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/stylesheet/style.css"));

app.get('/', function (request, response) {
    response.render('index');
});
app.get("/view", function(request, response){
    response.render("main", {
        name: "Avengers: Infinity War",
        image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.comicbook.com%2F2018%2F03%2Favengers-infinity-war-poster-1093756.jpeg&f=1"
    })
})
app.get("/view2", function(request, response){
    response.render("main", {
        name: "Deadpool 2",
        image: "http://cdn.collider.com/wp-content/uploads/2018/02/deadpool-2-poster.jpg"
    })
})
app.get("/view3", function(request, response){
    response.render("main", {
        name: "Ready, Player One",
        image: "https://metrouk2.files.wordpress.com/2018/02/rpo_poster.jpg"
    })
})

// app.get('/car', function (request, response) {
//     response.render('cars');
// });

// app.get('/cat', function (request, response) {
//     response.render('cats');
// });

// app.get('/car/new', function (request, response) {
//     response.render('form');
// });

app.listen(8000, function () {
    console.log("Listening to 8000");
    // console.log(__dirname);
})