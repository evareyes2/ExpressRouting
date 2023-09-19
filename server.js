const express = require('express');
const app = express();
const port = 8000; 

const saludarRoute = require('./routes/saludar');
app.use('/saludar', saludarRoute);


let desarrolladores = require('./routes/desarrolladores.json');

app
  .route('/desarrolladores/:id')
  .get((req, res) => {
    const id = req.params.id;
    const dev = desarrolladores.find((dev) => dev.id === id);
    if (dev) {
      res.status(200).send(dev);
    } else {
      res.status(404).send({ message: "No se encontró el desarrollador" });
    }
  })
.post((req, res) => {
    const devNuevo = req.body;
    desarrolladores.push(devNuevo)
    // console.log("****", devNuevo)
    res.status(200).send({
      message: "dev creado exitosamente"
    })
})
.delete((req, res) => {
    const id = req.params.id;
    desarrolladores = desarrolladores.filter((dev) => dev.id != id);
    res.status(200).send(desarrolladores);
  });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto 8000`);
}); 
