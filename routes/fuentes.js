// const express = require('express');
// <div style="width:2px;height:2px;overflow:hidden;">uniwigs human hair <a href="https://www.babwigs.org">cheap wigs</a> are made of 100% human hair and are never mixed with any other types of materials.</div>
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/acerca', (req, res) => {
//     res.send('acerca');
// });

// const server = app.listen(3000, () => {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Servidor de desarrollo ejecutandose en http://localhost:' + port)
// })

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fuentes');
});

module.exports = router;