const express        =         require("express");
const bodyParser     =         require("body-parser");
const app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//A la ruta principal, cargamos el fichero index.html
app.get('/',function(req,res){
    res.sendFile(__dirname + '/log_sesion.hbs');
});

//Cuando accedamos a la URL /sesion, que se redirige desde el index.html
app.post('/sesion',function(req,res){
    //Usuario introducido, como user
    var user_name=req.body.user;
    //Contraseña introducida
    var password=req.body.password;
    
    //Visualizamos por consola los datos
    console.log("El usuario es: "+user_name+", y su contraseña es: "+password);
    //Finalizamos la petición
    res.end("Finalizado");
});

//Configurar que el servidor escuche el puerto 3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Ejemplo de aplicación en el puerto', port);
});