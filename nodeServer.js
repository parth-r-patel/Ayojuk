var express = require('express');
var app = express();

var server = app.listen(8614, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});

app.use('/', express.static('public'));

app.get('/api/calendar/ms/:today', function(req, res) {
    var today = new Date(req.params.today);
    var monthStart = new Date(today.getFullYear(), today.getMonth(), 1).getDay().toString();
    res.send(monthStart);
});