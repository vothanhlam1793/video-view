var express = require('express');
var app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');
app.set('views','./views');
app.get('/', function(req, res){
   res.render("index");
});

app.get("/video", function(req, res){
    console.log(req.query)
    if(req.query.id != null){
        res.render("video", req.query);
    } else {
        res.send("Cannot support");
    }

})

app.listen(3000);