var express = require('express')
var path = require('path');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })
app.use(function(req,res){
	res.sendFile(path.join(__dirname,'test.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
