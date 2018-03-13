var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
	res.render('login');
})

app.get('/authorization', function(req, res){
	const response = {
		login: req.query.login, 
		password: req.query.password
	};
	res.end(JSON.stringify(response));
})

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});